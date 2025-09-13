import { Shield, MessageSquare, BarChart3, TrendingUp, Users, MessageCircle } from "lucide-react";
import featureMockup from "@/assets/feature-mockup.jpg";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Privacy-First Data Control",
      description: "Grant or revoke AI access to specific financial data categories with granular permissions. Your sensitive information stays under your complete control with enterprise-grade security.",
      image: featureMockup,
      stats: "Bank-Level Security"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Insights",
      description: "Ask questions in plain English like 'How much did I spend last month?' and get intelligent, context-aware responses about your complete financial picture.",
      image: featureMockup,
      stats: "Human-Like Conversations"
    },
    {
      icon: BarChart3,
      title: "Comprehensive Financial View",
      description: "Integrates all your financial data - assets, liabilities, investments, EPF, credit score - into one unified, AI-powered personal finance assistant.",
      image: featureMockup,
      stats: "360° Financial Analysis"
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary/50 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-6">
            Revolutionary AI Features for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Personal Finance
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of financial management with AI that understands your money 
            while respecting your privacy and giving you complete control.
          </p>
        </div>
        
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className={`glass-card p-8 group cursor-pointer animate-fade-up animate-delay-${(index + 1) * 100}`}
              >
                {/* Feature Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 p-3 glass-card rounded-lg">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="absolute bottom-4 right-4 glass-card px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-accent">{feature.stats}</span>
                  </div>
                </div>
                
                {/* Feature Content */}
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-white mb-4 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Effect Indicators */}
                <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <Users className="h-4 w-4 text-accent" />
                  <MessageCircle className="h-4 w-4 text-accent" />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to transform your relationship with money?
          </p>
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent"></div>
            <span className="text-accent font-medium">Start Your Financial Journey</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;