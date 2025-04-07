
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProductSneak() {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-aidark-900 dark:to-aidark-800">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-medium mb-4">
            Our Product
          </div>
          <h2 className="text-4xl font-bold font-heading mb-4">Meet NeuraFlow</h2>
          <p className="text-lg text-muted-foreground">
            AI that automates scheduling, support, and content creation.
            Built for small businesses without the enterprise price tag.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Visual */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg dark:shadow-blue-500/5 bg-white dark:bg-aidark-700">
            <div className="p-1 bg-gray-100 dark:bg-aidark-800 border-b border-border flex items-center">
              <div className="flex space-x-1.5 ml-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto pr-8 text-xs text-muted-foreground">NeuraFlow Dashboard</div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col mb-6">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="col-span-1">
                    <div className="h-10 bg-gray-100 dark:bg-aidark-600 rounded-md"></div>
                  </div>
                  <div className="col-span-2">
                    <div className="h-10 bg-blue-50 dark:bg-blue-900/20 rounded-md"></div>
                  </div>
                </div>
                <div className="h-40 bg-gray-50 dark:bg-aidark-600/50 rounded-md mb-4 p-4 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-aidark-500 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-aidark-500 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 dark:bg-aidark-500 rounded w-1/2"></div>
                  </div>
                  <div className="flex justify-end">
                    <div className="h-8 w-24 bg-primary rounded-md"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-gray-100 dark:bg-aidark-600 rounded-md"></div>
                  <div className="h-24 bg-blue-50 dark:bg-blue-900/20 rounded-md"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-aidark-500"></div>
                  <div className="ml-2">
                    <div className="h-3 bg-gray-200 dark:bg-aidark-500 rounded w-16"></div>
                    <div className="h-2 bg-gray-100 dark:bg-aidark-600 rounded w-24 mt-1"></div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-aidark-600 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-primary"></div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-aidark-600"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Features */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold font-heading mb-6">
              Your AI Assistant That Works While You Sleep
            </h3>
            <p className="text-muted-foreground mb-8">
              NeuraFlow connects to your existing tools and automates repetitive tasks, saving you time and reducing errors.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Schedule meetings and follow-ups automatically",
                "Answer customer questions 24/7 with AI chat",
                "Generate content and marketing materials in seconds",
                "Process data and create custom reports instantly"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full sm:w-auto">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
