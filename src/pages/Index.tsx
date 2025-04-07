
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ProductSneak } from "@/components/ProductSneak";
import { Testimonials } from "@/components/Testimonials";
import { HowItWorks } from "@/components/HowItWorks";
import { ValueProposition } from "@/components/ValueProposition";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import anime from "animejs";

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Initial page load animation
    anime({
      targets: '.header-animate',
      translateY: [-20, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: anime.stagger(100)
    });
    
    // Initialize morphing background
    anime({
      targets: '.morph-background',
      background: [
        'linear-gradient(45deg, rgba(59,130,246,0.05) 0%, rgba(37,99,235,0.05) 100%)',
        'linear-gradient(45deg, rgba(37,99,235,0.05) 0%, rgba(59,130,246,0.05) 100%)'
      ],
      easing: 'easeInOutQuad',
      duration: 8000,
      direction: 'alternate',
      loop: true
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <div className="morph-background fixed inset-0 z-[-1]"></div>
      <Header />
      
      <main>
        <Hero />
        <ProblemSolution />
        <ProductSneak />
        <HowItWorks />
        <Testimonials />
        <ValueProposition />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
