import { Button } from "@/components/ui/button";
import { Play, Monitor, Smartphone, Tablet } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Demo = () => {
  return (
    <section id="demo" className="py-24 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 mesh-bg opacity-50"></div>
      <div className="absolute inset-0 particle-grid opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-6">
            See FinSpeak.ai in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-primary">
              Action
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the power of AI-driven marketing automation through our 
            interactive dashboard and see how it transforms your business operations.
          </p>
          
          {/* Device Selector */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="glass-card p-1 rounded-lg">
              <div className="flex items-center gap-1">
                <button className="p-2 rounded text-accent bg-accent/10">
                  <Monitor className="h-4 w-4" />
                </button>
                <button className="p-2 rounded text-muted-foreground hover:text-accent transition-colors">
                  <Tablet className="h-4 w-4" />
                </button>
                <button className="p-2 rounded text-muted-foreground hover:text-accent transition-colors">
                  <Smartphone className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Demo Dashboard Frame */}
        <div className="max-w-6xl mx-auto">
          <div className="relative glass-card p-6 group">
            {/* Browser Frame */}
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-card-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="glass-card px-4 py-1 rounded-full text-sm text-muted-foreground">
                  https://app.finspeak.ai/dashboard
                </div>
              </div>
              <Button variant="glass" size="sm" className="opacity-75">
                <Play className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            </div>
            
            {/* Dashboard Content */}
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={heroDashboard}
                alt="FinSpeak.ai Live Dashboard Demo"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Interactive Overlay Elements */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Animated Metrics */}
                <div className="absolute top-6 left-6 glass-card p-3 rounded-lg animate-glow">
                  <div className="text-xs text-muted-foreground">Conversion Rate</div>
                  <div className="text-lg font-bold text-accent">+34.2%</div>
                </div>
                
                <div className="absolute top-6 right-6 glass-card p-3 rounded-lg animate-glow animate-delay-200">
                  <div className="text-xs text-muted-foreground">Active Campaigns</div>
                  <div className="text-lg font-bold text-accent">24</div>
                </div>
                
                <div className="absolute bottom-6 left-6 glass-card p-3 rounded-lg animate-glow animate-delay-400">
                  <div className="text-xs text-muted-foreground">AI Accuracy</div>
                  <div className="text-lg font-bold text-accent">97.8%</div>
                </div>
                
                {/* Pulsing Dots */}
                <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-accent animate-pulse"></div>
                <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-primary animate-pulse animate-delay-300"></div>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="gradient" size="xl" className="backdrop-blur-sm">
                  <Play className="h-6 w-6 mr-3" />
                  Watch Full Demo
                </Button>
              </div>
            </div>
            
            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-accent mb-2">50K+</div>
                <div className="text-sm text-muted-foreground">Messages Processed Daily</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Reliability</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-accent mb-2">&lt; 200ms</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="gradient" size="xl" className="group">
            Start Your Free Trial
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Demo;