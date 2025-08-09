"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ({}: Record<string, never> = {}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is my feedback anonymous?</AccordionTrigger>
        <AccordionContent>
          Yes. Feedback is anonymous by default. No personally identifiable information is required to share your input.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How are votes used?</AccordionTrigger>
        <AccordionContent>
          Votes help agencies understand which issues matter most to citizens and to prioritize improvements accordingly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What happens after I submit feedback?</AccordionTrigger>
        <AccordionContent>
          Your response is analyzed for themes and sentiment. Goverment officalls will receive summaries and take action, sharing progress updates publicly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Can I track progress over time?</AccordionTrigger>
        <AccordionContent>
          Yes. MygovInsights displays progress updates and metrics so you can see where improvements are happening.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Is the Feedback I give really transfered to the Government?</AccordionTrigger>
        <AccordionContent>
          Yes. MygovInsights Pro Is desinged to bridge the gap betweeen the government and the citizens, therefore your collected feedback and vote will be transmited to a government officals.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Can I vote Multiple times for a single service in a single day?</AccordionTrigger>
        <AccordionContent>
          No. as the project stands for publically avialable services and this services require strong and clear information for that matter we only accept one feedback for a service in a day.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
