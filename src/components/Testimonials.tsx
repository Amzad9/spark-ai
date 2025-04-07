
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white dark:bg-aidark-800">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl font-bold font-heading mb-4">Loved by businesses like yours</h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say about how NeuraNest has transformed their operations and saved them valuable time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
            <div key={i} className="bg-gray-50 dark:bg-aidark-700 p-6 rounded-xl border border-border">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
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

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Trusted by 200+ businesses worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 bg-foreground/10 rounded w-24"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
