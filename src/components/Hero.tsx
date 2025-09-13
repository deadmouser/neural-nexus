import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  const handleTrialClick = async () => {
    try {
      // This would connect to the FastAPI backend endpoint
      const response = await fetch('/api/trial');
      const data = await response.json();
      console.log(data.message);
      // Show success toast or redirect
    } catch (error) {
      console.error('Error starting trial:', error);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-block mb-8 animate-fade-up">
          <span className="glass-card px-4 py-2 text-sm font-medium text-accent border border-card-border">
            Modern Marketing Website
          </span>
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-white mb-6 animate-fade-up animate-delay-100">
          Automate Your Marketing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-primary">
            Conversions
          </span>{" "}
          with AI
        </h1>
        
        {/* Subtext */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-up animate-delay-200 leading-relaxed">
          AI-driven campaigns, smart audience segmentation, and automated engagement 
          time increase efficiency while delivering personalized experiences that convert.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up animate-delay-300">
          <Button 
            variant="gradient" 
            size="xl" 
            onClick={handleTrialClick}
            className="group"
          >
            Get Started Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="glass-outline" size="xl" className="group">
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
        
        {/* Hero Dashboard Image */}
        <div className="relative max-w-5xl mx-auto animate-scale-in animate-delay-400">
          <div className="glass-card p-4 hover:shadow-glow-intense transition-all duration-500">
            <img 
              src={heroDashboard}
              alt="FinSpeak.ai AI Marketing Dashboard"
              className="rounded-lg w-full h-auto shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg pointer-events-none"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-accent/20 hidden lg:block"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-primary/20 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;