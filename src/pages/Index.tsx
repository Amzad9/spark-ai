
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

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
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
