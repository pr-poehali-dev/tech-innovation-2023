import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What is economics?",
      answer:
        "Economics is the activity of producing, distributing, exchanging, and consuming goods, as well as the science that studies these processes to satisfy human needs.",
    },
    {
      question: "What is opportunity cost?",
      answer:
        "Opportunity cost is the value of the next best alternative you give up when making a choice. For example, buying a game instead of going to the movies — the movies become your opportunity cost.",
    },
    {
      question: "What is the difference between demand and supply?",
      answer:
        "Demand refers to how many people want to buy a product, while supply refers to how much the seller has available. The balance between the two determines the market price.",
    },
    {
      question: "What is VAT and why do we pay it?",
      answer:
        "VAT (Value Added Tax) is an indirect tax included in the price of goods. It goes to the state budget and comes back to citizens as public services: roads, parks, police, and healthcare.",
    },
    {
      question: "Why do some workers earn more than others?",
      answer:
        "Workers with rare and valuable skills earn higher wages because their knowledge is a scarce resource in the labor market. Education and training are investments in your human capital.",
    },
    {
      question: "What is inflation?",
      answer:
        "Inflation is a general rise in prices over time, which reduces the purchasing power of money. Banks and deposits help protect savings from inflation.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Key Questions</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Answers to the most important questions about economics and how it affects our daily lives.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}