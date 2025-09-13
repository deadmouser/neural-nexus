import torch.nn as nn
from torch.utils.data import Dataset, DataLoader
import torch
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
import numpy as np


class MyModel(nn.Module):
    def __init__(self, input_size, hidden_dim = 64, num_layers = 3, output_size = 3):
        super(MyModel, self).__init__()
        self.lstm = nn.LSTM(input_size, hidden_dim, num_layers, batch_first=True)
        self.fc_trend = nn.Linear(hidden_dim, 1)
        self.fc_savings = nn.Linear(hidden_dim, 1)
        self.fc_anomaly = nn.Linear(hidden_dim, 1)


    def forward(self, x):
        lstm_out, _ = self.lstm(x)
        last_lstm_out = lstm_out[:,-1,:]
        trend_pred = self.fc_trend(last_lstm_out)
        savings_pred = self.fc_savings(last_lstm_out)
        anomaly_score = torch.sigmoid(self.fc_anomaly(last_lstm_out))
        return trend_pred, savings_pred, anomaly_score


class FinanceDataset(Dataset):
    def __init__(self, X, y_trend, y_savings, y_anomaly):
        self.X = torch.tensor(X, dtype=torch.float32)
        self.y_trend = torch.tensor(y_trend, dtype=torch.float32)
        self.y_savings = torch.tensor(y_savings, dtype=torch.float32)
        self.y_anomaly = torch.tensor(y_anomaly, dtype=torch.float32)
    def __len__(self):
        return len(self.X)
    def __getitem__(self, idx):
        return self.X[idx].unsqueeze(0), self.y_trend[idx], self.y_savings[idx], self.y_anomaly[idx]


data_df = pd.read_csv("data.csv")
expense_features = ["Groceries", "Transport", "Eating_Out", "Entertainment", "Utilities", "Healthcare", "Education", "Miscellaneous", "Rent", "Loan_Repayment", "Insurance"]
X = data_df[expense_features].values
y_trend = data_df["Disposable_Income"].values
y_savings = data_df["Desired_Savings"].values
y_anomaly = (data_df["Disposable_Income"] < data_df["Desired_Savings"]).astype(int).values

# Scale input features
scaler = MinMaxScaler()
X_norm = scaler.fit_transform(X)

# Scale target variables
scaler_trend = MinMaxScaler()
scaler_savings = MinMaxScaler()
y_trend_scaled = scaler_trend.fit_transform(y_trend.reshape(-1, 1)).flatten()
y_savings_scaled = scaler_savings.fit_transform(y_savings.reshape(-1, 1)).flatten()

# Train test split with scaled targets
X_train, X_test, y_trend_train, y_trend_test, y_savings_train, y_savings_test, y_anomaly_train, y_anomaly_test = train_test_split(
    X_norm, y_trend_scaled, y_savings_scaled, y_anomaly, random_state=7, test_size=0.2
)

EPOCHS = 25
BATCH_SIZE = 64
LEARNING_RATE = 1e-3

train_ds = FinanceDataset(X_train, y_trend_train, y_savings_train, y_anomaly_train)
test_ds = FinanceDataset(X_test, y_trend_test, y_savings_test, y_anomaly_test)
train_dl = DataLoader(train_ds, batch_size=BATCH_SIZE, shuffle=True)
test_dl = DataLoader(test_ds, batch_size=BATCH_SIZE, shuffle=True)

model = MyModel(input_size=len(expense_features))
optimizer = torch.optim.Adam(model.parameters(), lr=LEARNING_RATE)
criterion_trend = nn.MSELoss()
criterion_savings = nn.MSELoss()
criterion_anomaly = nn.BCELoss()

# Training loop with validation
for epoch in range(EPOCHS):
    # Training phase
    model.train()
    train_loss = 0.0
    for X_batch, y_trend_batch, y_savings_batch, y_anomaly_batch in train_dl:
        optimizer.zero_grad()
        trend_pred, savings_pred, anomaly_score = model(X_batch)
        trend_pred = trend_pred.squeeze()
        savings_pred = savings_pred.squeeze()
        anomaly_score = anomaly_score.squeeze()

        loss_trend = criterion_trend(trend_pred, y_trend_batch)
        loss_savings = criterion_savings(savings_pred, y_savings_batch)
        loss_anomaly = criterion_anomaly(anomaly_score, y_anomaly_batch)

        # Weighted loss combination
        loss = loss_trend + loss_savings + loss_anomaly

        loss.backward()
        optimizer.step()
        train_loss += loss.item()

    # Validation phase
    model.eval()
    val_loss = 0.0
    with torch.no_grad():
        for X_batch, y_trend_batch, y_savings_batch, y_anomaly_batch in test_dl:
            trend_pred, savings_pred, anomaly_score = model(X_batch)
            trend_pred = trend_pred.squeeze()
            savings_pred = savings_pred.squeeze()
            anomaly_score = anomaly_score.squeeze()

            loss_trend = criterion_trend(trend_pred, y_trend_batch)
            loss_savings = criterion_savings(savings_pred, y_savings_batch)
            loss_anomaly = criterion_anomaly(anomaly_score, y_anomaly_batch)

            # Same weighted loss for validation
            loss = loss_trend + loss_savings + loss_anomaly
            val_loss += loss.item()

    # Print epoch results
    avg_train_loss = train_loss / len(train_dl)
    avg_val_loss = val_loss / len(test_dl)
    print(f"Epoch {epoch+1}: Train Loss = {avg_train_loss:.4f}, Val Loss = {avg_val_loss:.4f}")

# Save the model and scalers for inference
torch.save(model.state_dict(), 'saved_models/finance_model.pth')
torch.save(scaler, 'saved_models/in_feature_scaler.pth')
torch.save(scaler_trend, 'saved_models/trend_scaler.pth')
torch.save(scaler_savings, 'saved_models/savings_scaler.pth')

print("Model and scalers saved successfully!")
