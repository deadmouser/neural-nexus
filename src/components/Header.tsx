import { Button } from "@/components/ui/button";
import finspeakLogo from "@/assets/finspeak-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-card-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={finspeakLogo} 
              alt="FinSpeak.ai" 
              className="h-8 w-8 filter brightness-0 invert"
            />
            <span className="text-xl font-poppins font-bold text-white">
              FinSpeak.ai
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link text-foreground hover:text-accent">
              Home
            </a>
            <a href="#features" className="nav-link text-foreground hover:text-accent">
              Features
            </a>
            <a href="#pricing" className="nav-link text-foreground hover:text-accent">
              Pricing
            </a>
            <a href="#contact" className="nav-link text-foreground hover:text-accent">
              Contact
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="glass-outline" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button variant="gradient" size="sm">
              Sign Up
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;