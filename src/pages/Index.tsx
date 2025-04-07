
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
import { createScrollAnimations } from "@/lib/animate";

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
    
    // Initialize scroll animations
    const observer = createScrollAnimations();
    
    return () => {
      // Cleanup intersection observer when component unmounts
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <div className="morph-background fixed inset-0 z-[-1]"></div>
      <Header />
      
      <main>
        <Hero />
        
        <section id="problem-solution-section" className="animate-on-scroll relative">
          <div className="bg-circle-effect absolute z-[-1] bg-blue-500/10 dark:bg-blue-600/10 w-[800px] h-[800px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <ProblemSolution />
        </section>
        
        <section id="product-sneak-section" className="animate-on-scroll relative">
          <div className="bg-circle-effect absolute z-[-1] bg-purple-500/10 dark:bg-purple-600/10 w-[800px] h-[800px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <ProductSneak />
        </section>
        
        <section id="how-it-works-section" className="animate-on-scroll relative">
          <div className="bg-circle-effect absolute z-[-1] bg-green-500/10 dark:bg-green-600/10 w-[800px] h-[800px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <HowItWorks />
        </section>
        
        <section id="testimonials-section" className="animate-on-scroll relative">
          <div className="bg-circle-effect absolute z-[-1] bg-amber-500/10 dark:bg-amber-600/10 w-[800px] h-[800px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <Testimonials />
        </section>
        
        <section id="value-proposition-section" className="animate-on-scroll relative">
          <div className="bg-circle-effect absolute z-[-1] bg-primary/10 dark:bg-primary/5 w-[800px] h-[800px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <ValueProposition />
        </section>
        
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
