import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function FAQSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-lime-50 rounded-3xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-marbley text-purple-400 mb-8">
          Frequently
          <br />
          Asked
          <br />
          Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-schibsted">
              What is Project Glow?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              The idea for Project Glow Skin originated from a personal
              challenge one of our founders faced while traveling. Confronted
              with unfamiliar climates and indecipherable product labels, he
              envisioned a solution that could transcend language barriers and
              uncertainty by deeply understanding an individual's unique skin
              attributes. This vision led to the creation of a platform that
              combines cutting-edge technology with a holistic approach to
              skincare.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-schibsted">
              How do you protect and improve my skin?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              We use advanced AI technology to analyze your skin condition and
              recommend personalized skincare routines.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-schibsted">
              How are you science-backed?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Our platform is built on peer-reviewed research and developed in
              collaboration with dermatologists.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-schibsted">
              Is my personal data kept confidential and secure?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Yes, we use industry-standard encryption and security measures to
              protect your personal information.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
