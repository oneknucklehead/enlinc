import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import faqData from "../data/AccordionData";

const AccordionItem = ({ faq, isOpen, onClick, index = 1 }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={`${index}00`}
    data-aos-duration="1000"
    className="border-b-2 border-[#2A6A9E]"
  >
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full py-4 text-left"
    >
      <span className="font-gabarito-semibold-600 text-lg text-[#2A6A9E]">
        Q: {faq.question}
      </span>
      {isOpen ? (
        <ChevronUp className="text-[#2A6A9E]" />
      ) : (
        <ChevronDown className="text-[#2A6A9E]" />
      )}
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="text-[#2A6A9E] pb-4 pr-6">{faq.answer}</p>
    </div>
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {faqData.map((faq, idx) => (
        <AccordionItem
          key={idx}
          faq={faq}
          index={idx}
          isOpen={openIndex === idx}
          onClick={() => toggle(idx)}
        />
      ))}
    </div>
  );
};

export default Accordion;
