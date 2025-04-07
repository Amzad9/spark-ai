
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <div className="w-8 h-8 bg-gradient-to-br from-aiblue-400 to-aiblue-600 rounded-lg mr-2"></div>
            <span className="font-heading text-xl font-bold text-foreground">NeuraNest</span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Testimonials
          </a>
          <Button variant="ghost" size="sm">
            Log In
          </Button>
          <Button>Get Started</Button>
          <ThemeToggle />
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
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-border">
          <div className="container py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" className="w-full">
                Log In
              </Button>
              <Button className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
