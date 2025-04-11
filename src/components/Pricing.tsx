
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "29",
      description: "Perfect for solopreneurs and small teams",
      features: [
        "Up to 100 AI automations/month",
        "Email and chat support",
        "5 integrations",
        "Basic analytics",
        "1 team member"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "79",
      description: "Ideal for growing businesses",
      features: [
        "Up to 1,000 AI automations/month",
        "Priority support",
        "Unlimited integrations",
        "Advanced analytics and insights",
        "5 team members",
        "Custom AI training"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "249",
      description: "For businesses with complex needs",
      features: [
        "Unlimited AI automations",
        "Dedicated account manager",
        "API access",
        "Custom integrations",
        "Unlimited team members",
        "Advanced security controls",
        "24/7 phone support"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white dark:bg-aidark-800">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium mb-4">
            Pricing
          </div>
          <h2 className="text-4xl font-bold font-heading mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that's right for your business. All plans come with a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl border ${
                plan.popular
                  ? "border-primary shadow-lg dark:shadow-primary/20"
                  : "border-border"
              } bg-background p-8 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-end mb-2">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
                <p className="text-xs text-muted-foreground">Billed annually or ${parseInt(plan.price) + 10}/mo billed monthly</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white/5 rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Need a custom plan?</h3>
          <p className="mb-6 text-muted-foreground">
            We offer custom solutions for larger teams with specific requirements.
          </p>
          <Button variant="outline">Contact Our Sales Team</Button>
        </div>
      </div>
    </section>
  );
}
