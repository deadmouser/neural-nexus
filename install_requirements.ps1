# PowerShell installer for GitHub users (Windows)

Write-Host ">>> Creating virtual environment..." -ForegroundColor Cyan
python -m venv .venv

Write-Host ">>> Activating virtual environment..." -ForegroundColor Cyan
& .\.venv\Scripts\Activate.ps1

Write-Host ">>> Upgrading pip and tools..." -ForegroundColor Cyan
python -m pip install --upgrade pip setuptools wheel

Write-Host ">>> Installing requirements.txt..." -ForegroundColor Cyan
pip install -r requirements.txt

Write-Host ">>> Installing PyTorch (CPU-only)..." -ForegroundColor Cyan
pip install --index-url https://download.pytorch.org/whl/cpu torch torchvision torchaudio

Write-Host ">>> Verifying installation..." -ForegroundColor Cyan
python -c "import torch; print('Torch version:', torch.__version__, '| CUDA available:', torch.cuda.is_available())"

Write-Host ">>> ✅ Setup complete!" -ForegroundColor Green
