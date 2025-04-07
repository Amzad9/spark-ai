
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary/90 to-blue-600/90 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading mb-6">Ready to transform your business with AI?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Join hundreds of businesses already saving time and money with NeuraNest's AI automation platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-sm opacity-80 mt-6">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
}
