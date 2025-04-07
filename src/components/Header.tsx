
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import anime from "animejs";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initial animation
    anime({
      targets: '.nav-item',
      translateY: [-20, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 800,
      delay: anime.stagger(100)
    });
    
    // Logo animation
    anime({
      targets: '.logo-icon',
      scale: [0, 1],
      opacity: [0, 1],
      easing: 'easeOutElastic(1, .6)',
      duration: 1200
    });
    
    anime({
      targets: '.logo-text',
      width: [0, 100],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 800,
      delay: 300
    });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Mobile menu animation
    if (mobileMenuOpen) {
      anime({
        targets: '.mobile-menu-item',
        translateX: [-20, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 300,
        delay: anime.stagger(50)
      });
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-aidark-900/80 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <div className="logo-icon w-8 h-8 bg-gradient-to-br from-aiblue-400 to-aiblue-600 rounded-lg mr-2 flex items-center justify-center overflow-hidden">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45 transform transition-transform hover:rotate-90 duration-300"></div>
            </div>
            <span className="logo-text font-heading text-xl font-bold text-foreground overflow-hidden">NeuraNest</span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="nav-item text-sm font-medium text-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Features
          </a>
          <a href="#how-it-works" className="nav-item text-sm font-medium text-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            How It Works
          </a>
          <a href="#testimonials" className="nav-item text-sm font-medium text-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
            Testimonials
          </a>
          <Button variant="ghost" size="sm" className="nav-item">
            Log In
          </Button>
          <Button className="nav-item">Get Started</Button>
          <div className="nav-item">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile navigation toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm border-t border-border">
          <div className="container py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="mobile-menu-item px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="mobile-menu-item px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="mobile-menu-item px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" className="mobile-menu-item w-full">
                Log In
              </Button>
              <Button className="mobile-menu-item w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
