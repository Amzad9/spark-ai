
import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { slideInLeft, staggerElements } from "@/lib/animate";
import anime from "animejs";

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  
  const steps = [
    {
      number: "01",
      title: "Sign up in seconds",
      description: "Create your account with just an email. No credit card required to start."
    },
    {
      number: "02",
      title: "Connect your tools",
      description: "Easily integrate with the tools you already use like Gmail, Slack, or Shopify."
    },
    {
      number: "03",
      title: "Watch AI take over",
      description: "Our AI learns your processes and starts automating tasks immediately."
    },
    {
      number: "04", 
      title: "See results fast",
      description: "Track time saved, customer satisfaction scores, and more in your dashboard."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate title and description when scrolled into view
          slideInLeft('.how-works-title', 300, 800);
          slideInLeft('.how-works-description', 600, 800);
          
          // Animate steps with staggered timing
          if (stepsRef.current) {
            anime({
              targets: '.step-card',
              translateY: [60, 0],
              opacity: [0, 1],
              easing: 'easeOutExpo',
              duration: 1000,
              delay: anime.stagger(200)
            });
          }
          
          // Animate connection line
          anime({
            targets: '.connection-line',
            scaleX: [0, 1],
            easing: 'easeInOutQuad',
            duration: 1500,
            delay: 800
          });
          
          // Cleanup observer after animation triggers
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="how-it-works" 
      className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-aidark-900 dark:to-aidark-800"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium mb-4">
            How It Works
          </div>
          <h2 className="how-works-title text-4xl font-bold font-heading mb-4 opacity-0">Start automating in minutes, not months</h2>
          <p className="how-works-description text-lg text-muted-foreground opacity-0">
            Getting started with NeuraNest is simple. No complex setup, no long implementation times.
          </p>
        </div>

        <div className="relative">
          {/* Connection line with animation */}
          <div className="connection-line hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-muted to-transparent origin-left z-0"></div>
          
          <div ref={stepsRef} className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="step-card relative flex flex-col items-center text-center opacity-0">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-6 z-10">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {i !== steps.length - 1 && (
                  <CheckCircle2 className="hidden md:block absolute -right-4 top-3 text-gray-700 h-6 w-6 z-10 bg-gray-800 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
