
import { ArrowRight, BrainCircuit, Clock, Coins, Gauge, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProblemSolution() {
  return (
    <section className="section-padding bg-white dark:bg-aidark-800">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* Problem Statement */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs font-medium mb-2">
              The Challenge
            </div>
            <h2 className="text-3xl font-bold font-heading">AI shouldn't be complicated</h2>
            <p className="text-muted-foreground text-lg">
              Small businesses waste hours on repetitive tasks. AI can help, but it's often too complex or costly—until now.
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: "Time-consuming manual processes",
                  description: "Teams spend 40% of their time on tasks that could be automated.",
                },
                {
                  title: "Expensive custom solutions",
                  description: "Traditional AI implementation costs upwards of $50,000.",
                },
                {
                  title: "Technical expertise required",
                  description: "Most AI tools need a developer or data scientist to implement.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0 mt-1">
                    <span className="h-2 w-2 rounded-full bg-red-500"></span>
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Overview */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium mb-2">
              Our Solution
            </div>
            <h2 className="text-3xl font-bold font-heading">AI simplified for everyone</h2>
            <p className="text-muted-foreground text-lg">
              NeuraNest simplifies AI with affordable tools that automate workflows and deliver insights, no tech expertise needed.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Clock className="h-5 w-5" />,
                  title: "Save 10+ hours weekly",
                  color: "blue"
                },
                {
                  icon: <Gauge className="h-5 w-5" />,
                  title: "Boost productivity with insights",
                  color: "purple"
                },
                {
                  icon: <Coins className="h-5 w-5" />,
                  title: "Affordable for any budget",
                  color: "amber"
                },
                {
                  icon: <Sparkles className="h-5 w-5" />,
                  title: "No coding required",
                  color: "emerald"
                },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-4 bg-gray-50 dark:bg-aidark-700 rounded-xl border border-border"
                >
                  <div className={`h-10 w-10 rounded-lg bg-${benefit.color}-100 dark:bg-${benefit.color}-900/30 text-${benefit.color}-600 dark:text-${benefit.color}-400 flex items-center justify-center mb-3`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-sm font-medium">{benefit.title}</h3>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Button variant="outline" className="w-full sm:w-auto">
                Explore All Features <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
