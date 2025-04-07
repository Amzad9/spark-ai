
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";
import { WavyText } from "./WavyText";
import { fadeIn, scaleIn, slideInLeft, slideInRight, floatAnimation, staggerElements } from "@/lib/animate";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const trustedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize animations when component mounts
    if (taglineRef.current) fadeIn('.hero-tagline', 300, 800);
    if (headlineRef.current) fadeIn('.hero-headline', 600, 1000);
    if (subheadingRef.current) fadeIn('.hero-subheading', 900, 800);
    if (ctaRef.current) fadeIn('.hero-cta', 1200, 1000);
    if (visualRef.current) {
      scaleIn('.hero-visual', 1500, 1000);
      floatAnimation('.hero-visual');
    }
    if (trustedRef.current) {
      fadeIn('.trusted-section', 2000, 1000);
      staggerElements('.trusted-logo', 100, 500);
    }
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-aidark-900 dark:to-aidark-800 pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Particle Background */}
      <ParticlesBackground />
      
      {/* Background elements with morphing gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: "1.5s"}}></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div ref={taglineRef} className="hero-tagline inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium mb-8">
            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
            AI-Powered Tools for Everyone
          </div>
          
          {/* Hero Headline with Wavy Text */}
          <h1 ref={headlineRef} className="hero-headline text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight">
            <span className="inline-block mb-2">
              <WavyText text="Grow Smarter" className="text-gradient" />
            </span> 
            <span className="block">with AI Automation</span>
          </h1>
          
          {/* Hero Subheading */}
          <p ref={subheadingRef} className="hero-subheading text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            NeuraNest delivers simple AI tools to save small businesses time and money, without the tech headaches.
          </p>
          
          {/* Hero Call-to-Action */}
          <div ref={ctaRef} className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="w-full sm:w-auto font-medium group">
              Start Free Trial 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto group">
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" /> See How It Works
            </Button>
          </div>
          
          {/* Hero Visual with floating animation */}
          <div ref={visualRef} className="hero-visual w-full max-w-3xl mx-auto relative rounded-2xl overflow-hidden shadow-xl dark:shadow-blue-500/5 border border-border">
            <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-aidark-700 dark:to-aidark-800 flex items-center justify-center">
              <div className="w-full h-full bg-white/20 dark:bg-black/20 backdrop-blur-sm p-6 flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="h-6 w-64 bg-gray-100 dark:bg-aidark-600 rounded-md mx-auto"></div>
                </div>
                
                <div className="flex-1 grid grid-cols-3 gap-4">
                  <div className="col-span-1 flex flex-col space-y-3">
                    <div className="h-8 bg-gray-100 dark:bg-aidark-600 rounded-md w-full"></div>
                    <div className="h-20 bg-blue-100 dark:bg-blue-900/30 rounded-md w-full"></div>
                    <div className="h-20 bg-gray-100 dark:bg-aidark-600 rounded-md w-full"></div>
                    <div className="h-8 bg-gray-100 dark:bg-aidark-600 rounded-md w-3/4"></div>
                  </div>
                  <div className="col-span-2 flex flex-col space-y-4">
                    <div className="h-8 bg-gray-100 dark:bg-aidark-600 rounded-md w-full"></div>
                    <div className="flex-1 bg-blue-50 dark:bg-aidark-500/50 rounded-md w-full p-4">
                      <div className="h-4 bg-blue-100 dark:bg-blue-900/30 rounded w-3/4 mb-3"></div>
                      <div className="h-4 bg-blue-100 dark:bg-blue-900/30 rounded w-full mb-3"></div>
                      <div className="h-4 bg-blue-100 dark:bg-blue-900/30 rounded w-5/6"></div>
                      <div className="mt-6 flex justify-end">
                        <div className="h-8 w-24 bg-blue-500 dark:bg-blue-600 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex items-center">
              <div className="animate-pulse h-2 w-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-xs text-aidark-500 dark:text-gray-300">AI Processing</span>
            </div>
          </div>
          
          {/* Trusted By */}
          <div ref={trustedRef} className="trusted-section mt-12 w-full">
            <p className="text-sm text-muted-foreground mb-4">Trusted by innovative teams</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="trusted-logo h-8 bg-foreground/10 rounded w-24"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
