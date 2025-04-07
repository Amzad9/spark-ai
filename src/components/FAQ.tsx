
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How long does it take to set up NeuraNest?",
      answer:
        "Most customers are up and running in less than 15 minutes. Our onboarding wizard guides you through connecting your tools and setting up your first automation. No coding or technical expertise required."
    },
    {
      question: "Do I need technical knowledge to use NeuraNest?",
      answer:
        "Not at all! NeuraNest is designed for non-technical users. Our intuitive interface makes it easy to create powerful automations with just a few clicks. If you ever need help, our support team is ready to assist."
    },
    {
      question: "What tools can NeuraNest integrate with?",
      answer:
        "NeuraNest integrates with popular business tools including Google Workspace, Microsoft 365, Slack, Zoom, Shopify, Stripe, QuickBooks, Salesforce, and many more. We're constantly adding new integrations based on customer requests."
    },
    {
      question: "Is my data secure with NeuraNest?",
      answer:
        "Absolutely. We take security seriously with SOC 2 compliance, end-to-end encryption, and regular security audits. Your data is never sold or shared with third parties, and you maintain full control over what information the AI can access."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time with no questions asked. There are no long-term contracts or cancellation fees. If you cancel, you'll continue to have access until the end of your billing period."
    },
    {
      question: "What kind of support does NeuraNest offer?",
      answer:
        "All plans include access to our knowledge base, community forum, and email support. Professional plans and above include priority support with faster response times. Enterprise plans include a dedicated account manager and phone support."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-aidark-900 dark:to-aidark-800">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-4xl font-bold font-heading mb-4">Frequently asked questions</h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about NeuraNest and how it can help your business.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-2">Still have questions?</p>
          <a href="#" className="text-primary hover:underline font-medium">Contact our support team</a>
        </div>
      </div>
    </section>
  );
}
