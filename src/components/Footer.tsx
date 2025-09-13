import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import finspeakLogo from "@/assets/finspeak-logo.png";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Privacy Controls", "AI Insights", "Documentation", "Security"],
    Company: ["About", "Blog", "Careers", "Press", "Contact"],
    Resources: ["Help Center", "Financial Guides", "Tutorials", "API Docs", "System Status"],
    Legal: ["Privacy Policy", "Terms of Service", "Data Protection", "GDPR", "Financial Security"]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="relative py-20 border-t border-card-border">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={finspeakLogo} 
                alt="FinSpeak.ai" 
                className="h-10 w-10 filter brightness-0 invert"
              />
              <span className="text-2xl font-poppins font-bold text-white">
                FinSpeak.ai
              </span>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              Your privacy-first AI financial assistant that provides personalized insights 
              while keeping your sensitive financial data under your complete control.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="glass-card p-3 rounded-lg hover:shadow-glow transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Links Grid */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-poppins font-semibold text-white mb-6">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#"
                      className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter Section */}
        <div className="glass-card p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-poppins font-semibold text-white mb-4">
              Stay Updated with FinSpeak.ai
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest insights on AI finance management, privacy updates, and new features 
              delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 glass-card border border-card-border rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-glow transition-all duration-300 btn-sheen">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-card-border">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 FinSpeak.ai. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Cookies
            </a>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>
        <div className="absolute top-0 right-1/4 w-24 h-px bg-gradient-to-l from-transparent via-primary to-transparent opacity-30"></div>
      </div>
    </footer>
  );
};

export default Footer;