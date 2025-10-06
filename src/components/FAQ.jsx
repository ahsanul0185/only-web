import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import ProfileCard from "./ProfileCard";
import { useTranslation } from "../context/useTranslation";

// Your FAQ data
export const faqs = {
  general: [
    {
      question: "How long does a project last?***Combien de temps dure un projet ?",
      answer:
        "The duration depends on the project’s complexity. Some can be completed in a few days, while others may take several weeks. I provide a clear timeline from the start.***La durée dépend de la complexité du projet. Certains peuvent être réalisés en quelques jours, tandis que d'autres peuvent prendre plusieurs semaines. Je fournis un calendrier clair dès le départ.",
    },
    {
      question: "Do you work with all companies?***Travaillez-vous avec toutes les entreprises ?",
      answer:
        "Yes! Whether you’re a freelancer, startup, SME, or large company, I adapt my services to your needs and budget.***Oui ! Que vous soyez freelance, startup, PME ou grande entreprise, j’adapte mes services à vos besoins et à votre budget.",
    },
    {
      question: "How to start a project with me?***Comment démarrer un projet avec moi ?",
      answer:
        "It’s simple! Contact me via my website, email, or WhatsApp. We’ll discuss your project, and I’ll provide a tailored quote before starting the collaboration.***C’est simple ! Contactez-moi via mon site web, email ou WhatsApp. Nous discuterons de votre projet et je fournirai un devis personnalisé avant de commencer la collaboration.",
    },
    {
      question: "What are my rates?***Quels sont mes tarifs ?",
      answer:
        "My rates vary depending on the nature and complexity of the project. Feel free to contact me for a personalized quote.***Mes tarifs varient en fonction de la nature et de la complexité du projet. N’hésitez pas à me contacter pour un devis personnalisé.",
    },
    {
      question: "What are the payment steps?***Quelles sont les étapes de paiement ?",
      answer:
        "I usually request a deposit upon signing, a mid-project payment based on progress, and the remaining balance upon final delivery.***Je demande généralement un acompte lors de la signature, un paiement intermédiaire en fonction de l’avancement du projet, et le solde restant à la livraison finale.",
    }
  ],
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
    <div id="about" className="section-y-padding">
      <div className="default-padding flex gap-8 flex-col md:flex-row justify-between">
        <div className="md:w-[60%]">
          <FAQSection
            faqs={faqs.general}
            categoryKey="general"
            activeIndex={activeIndex.general}
            onToggle={toggleActiveIndex}
          />
        </div>

        <div className="md:w-[35%] ">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default FAQs;

const FAQItem = ({ faq, isOpen, onToggle }) => {

   const { t } = useTranslation();

  return (
    <div className="border border-gray-200/40 rounded-lg bg-dark/20 backdrop-blur-xl overflow-hidden transition-shadow">
      <button
        onClick={onToggle}
        className="w-full px-5 md:px-8 flex items-center justify-between gap-4 py-4 md:py-5 text-left group"
      >
        <span className="text-base md:text-lg font-medium  pr-4">
          {t(faq.question)}
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
                {t(faq.answer)}
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
      whileInView={{ opacity: 1 }}
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
