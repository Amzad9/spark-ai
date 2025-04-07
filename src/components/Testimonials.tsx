
import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { staggerElements } from "@/lib/animate";
import anime from "animejs";

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate header
          anime({
            targets: '.testimonial-header',
            translateY: [30, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 800
          });
          
          // Animate testimonial cards with staggered timing
          anime({
            targets: '.testimonial-card',
            translateY: [60, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 800,
            delay: anime.stagger(200)
          });
          
          // Animate stars
          anime({
            targets: '.star-icon',
            scale: [0, 1],
            opacity: [0, 1],
            easing: 'easeOutElastic(1, .6)',
            duration: 1000,
            delay: anime.stagger(100)
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
    <section ref={sectionRef} id="testimonials" className="section-padding bg-white dark:bg-aidark-800 overflow-hidden">
      <div className="container">
        <div className="testimonial-header text-center max-w-3xl mx-auto mb-16 opacity-0">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl font-bold font-heading mb-4">Loved by businesses like yours</h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say about how NeuraNest has transformed their operations and saved them valuable time.
          </p>
        </div>

        <div ref={testimonialsRef} className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Lisa Chen",
              role: "Café Owner",
              image: "https://randomuser.me/api/portraits/women/44.jpg",
              content: "Cut my workload by 50%! I used to spend hours managing staff schedules and inventory. Now NeuraFlow handles it all automatically.",
              rating: 5
            },
            {
              name: "Michael Rodriguez",
              role: "Marketing Consultant",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
              content: "The content generation alone is worth every penny. What used to take me days now takes minutes, and the quality is consistently excellent.",
              rating: 5
            },
            {
              name: "Sarah Johnson",
              role: "E-commerce Founder",
              image: "https://randomuser.me/api/portraits/women/68.jpg",
              content: "Customer support used to be our biggest headache. Now our AI assistant handles 80% of inquiries without any human intervention.",
              rating: 5
            }
          ].map((testimonial, i) => (
            <div key={i} className="testimonial-card bg-gray-50 dark:bg-aidark-700 p-6 rounded-xl border border-border opacity-0">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-icon h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mb-6">
                <p className="text-foreground italic">"{testimonial.content}"</p>
              </blockquote>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="trusted-brands mt-16 text-center opacity-0">
          <p className="text-muted-foreground mb-4">Trusted by 200+ businesses worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="trusted-brand h-8 bg-foreground/10 rounded w-24"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
