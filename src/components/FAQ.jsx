import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import ProfileCard from "./ProfileCard";

// Your FAQ data
export const faqs = {
  general: [
    {
      question: "How long does a project last?",
      answer:
        "The duration depends on the project’s complexity. Some can be completed in a few days, while others may take several weeks. I provide a clear timeline from the start.",
    },
    {
      question: "Do you work with all companies?",
      answer:
        "Yes! Whether you’re a freelancer, startup, SME, or large company, I adapt my services to your needs and budget.",
    },
    {
      question: "How to start a project with me?",
      answer:
        "It’s simple! Contact me via my website, email, or WhatsApp. We’ll discuss your project, and I’ll provide a tailored quote before starting the collaboration.",
    },
    {
      question: "What are my rates?",
      answer:
        "My rates vary depending on the nature and complexity of the project. Feel free to contact me for a personalized quote.",
    },
    {
      question: "What are the payment steps?",
      answer:
        "I usually request a deposit upon signing, a mid-project payment based on progress, and the remaining balance upon final delivery.",
    },
    {
      question: "Do you offer tracking after delivery?",
      answer:
        "Yes! I offer post-delivery support and updates through maintenance packages tailored to your needs.",
    },
  ]
};



const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState({
    general: null,
  });

  const toggleActiveIndex = (category, index) => {
    setActiveIndex((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  return (
    <div className="section-y-padding">
      <div className="default-padding flex gap-8 flex-col md:flex-row justify-between">

       
     
          <div className="md:w-[60%]">

            <FAQSection
            faqs={faqs.general}
            categoryKey="general"
            activeIndex={activeIndex.general}
            onToggle={toggleActiveIndex}
          />
          </div>

          <div className=" w-[35%] ">
            <ProfileCard />
          </div>
  
        
      </div>
    </div>
  );
};

export default FAQs;




const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-200/40 rounded-lg overflow-hidden transition-shadow">
      <button
        onClick={onToggle}
        className="w-full px-5 md:px-8 flex items-center justify-between gap-4 py-4 md:py-5 text-left group"
      >
        <span className="text-base md:text-lg font-medium  pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-8 pb-5 pt-2">
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = ({ faqs, categoryKey, activeIndex, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={activeIndex === index}
            onToggle={() => onToggle(categoryKey, index)}
          />
        ))}
      </div>
    </motion.div>
  );
};