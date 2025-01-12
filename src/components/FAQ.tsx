import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";

import { faqs } from "../lib/data";

const Faq = () => {

    return (
        <section className="py-32">
            <div className="container mx-auto px-4">
                <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-5xl">
                    Frequently asked questions
                </h1>
                {faqs.map((faq, index) => (
                    <Accordion key={index} type="single" collapsible>
                        <AccordionItem value={`item-${index}`}>
                            <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </section>
    );
};

export default Faq;
