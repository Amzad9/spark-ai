
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, LockIcon, ShieldCheck } from "lucide-react";
import anime from "animejs";

export function ValueProposition() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="value-content scroll-animate-item">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl font-bold font-heading mb-6 scroll-animate-item">
              Unlike others, NeuraNest offers AI that's simple, scalable, and built for small businesses
            </h2>
            <p className="text-lg text-muted-foreground mb-8 scroll-animate-item">
              Many AI solutions are built for enterprise with complex setups and high costs.
              We've built NeuraNest specifically for small teams who need powerful automation without the overhead.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { icon: <Award className="h-6 w-6" />, text: "Featured in TechCrunch" },
                { icon: <ShieldCheck className="h-6 w-6" />, text: "SOC 2 Certified" },
                { icon: <LockIcon className="h-6 w-6" />, text: "Enterprise-grade security" },
              ].map((item, i) => (
                <div key={i} className="trust-badge flex items-center gap-2 scroll-animate-item">
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="group scroll-animate-item">
              Try It Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "94", symbol: "%", text: "Time saved on routine tasks" },
              { number: "15", symbol: "k", prefix: "$", text: "Average yearly savings" },
              { number: "24/7", symbol: "", text: "Customer support coverage" },
              { number: "3.5", symbol: "x", text: "Faster response times" },
            ].map((stat, i) => (
              <div key={i} className="stat-card bg-white dark:bg-aidark-700 rounded-xl p-6 border border-border shadow-sm scroll-animate-item">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.symbol !== "" ? (
                    <>
                      {stat.prefix && <span>{stat.prefix}</span>}
                      <span className="stat-number" data-value={stat.number}>{stat.number}</span>
                      <span>{stat.symbol}</span>
                    </>
                  ) : (
                    <span>{stat.number}</span>
                  )}
                </div>
                <p className="text-muted-foreground">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
