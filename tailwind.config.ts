import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        'background-secondary': "hsl(var(--background-secondary))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          dark: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          border: "hsl(var(--card-border))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        'gradient-primary': 'var(--primary-gradient)',
        'mesh': 'radial-gradient(circle at 25% 25%, hsla(197, 71%, 73%, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsla(220, 39%, 11%, 0.1) 0%, transparent 50%)',
        'particle-grid': 'linear-gradient(hsla(197, 71%, 73%, 0.1) 1px, transparent 1px), linear-gradient(90deg, hsla(197, 71%, 73%, 0.1) 1px, transparent 1px)',
      },
      boxShadow: {
        'glass': 'var(--glass-shadow)',
        'glow': 'var(--glow-teal)',
        'glow-intense': 'var(--glow-intense)',
      },
      backdropBlur: {
        'glass': '20px',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "mesh-float": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(30px, -30px)" },
          "66%": { transform: "translate(-20px, 20px)" },
        },
        "particle-drift": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-50px, -50px)" },
        },
        "fade-up": {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          from: {
            opacity: "0",
            transform: "scale(0.9)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "glow": {
          "0%, 100%": { boxShadow: "var(--glow-teal)" },
          "50%": { boxShadow: "var(--glow-intense)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "mesh-float": "mesh-float 20s ease-in-out infinite",
        "particle-drift": "particle-drift 30s linear infinite",
        "fade-up": "fade-up 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "glow": "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
