import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Button from "./Button";

import { motion } from "motion/react";
import { CircleCheck } from "lucide-react";
import { useTranslation } from "../context/useTranslation";

export const pricingCards = [
    {
    title: "Logo and Flyer***Logo et flyer",
    price: "80€",
    deliveredIn: "DELIVERED IN 1 WEEK***LIVRÉ EN 1 SEMAINE",
    description:
      "Professional logo combined with eye-catching flyer designs to promote your brand.***Logo professionnel combiné à des flyers accrocheurs pour promouvoir votre marque.",
    features: [
      "Custom logo design***Création de logo personnalisé",
      "Logo variations***Variations du logo",
      "Single-page flyer design***Conception de flyer d'une page",
      "Print-ready files***Fichiers prêts à imprimer",
      "Social media adaptation***Adaptation pour les réseaux sociaux",
    ],
  },
  {
    title: "Customization***Personnalisé",
    price: "200€",
    deliveredIn: "DELIVERED IN 1 WEEK***LIVRÉ EN 1 SEMAINE",
    description:
      "Customize your website to reflect your style with our site creation calculator.***Personnalise ton site web à ton image grâce à notre calculatrice de création de site. ",
    features: [
      "Logo & variations***Logo et variations",
      "Graphic charter***Charte graphique",
      "Visiting card***Carte de visite",
      "Support images***Images de support",
    ],
  },
  {
    title: "Showcase Website***Site vitrine",
    price: "400€",
    deliveredIn: "DELIVERED IN 3 WEEKS***LIVRÉ EN 3 SEMAINES",
            best : true,
    description:
      "Perfect for businesses looking to establish an online presence.***Parfait pour les entreprises souhaitant établir une présence en ligne.",
    features: [
      "Custom visual identity integration***Intégration d'identité visuelle personnalisée",
      "Modern responsive design***Design moderne et responsive",
      "SEO optimized pages***Pages optimisées pour le SEO",
      "Interactive elements***Éléments interactifs",
      "Fast loading & performance***Chargement rapide et performance",
    ],
  },
    {
    title: "E-commerce Website***Site e-commerce",
    price: "600€",
    deliveredIn: "DELIVERED IN 4 WEEKS***LIVRÉ EN 4 SEMAINES",
    description:
      "Complete online store with product management, cart, and secure payments.***Boutique en ligne complète avec gestion des produits, panier et paiements sécurisés.",
    features: [
      "E-commerce or showcase***E-commerce ou vitrine",
      "Dynamic site***Site dynamique",
      "Responsive design***Design responsive",
      "SEO ready***SEO prêt",
      "Training included***Formation incluse",
    ],
  },

];

const PriceSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        grabCursor={true}
        mousewheel={true}
        spaceBetween={30}
        loop={true}
        onSlideChange={(slides) => setActiveIndex(slides.realIndex)}
        modules={[Pagination, Autoplay, Navigation]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={500}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="overflow-visible"
        style={{ height: "fit-content", padding: "20px" }}
      >
        {pricingCards.map((priceCard, idx) => (
          <SwiperSlide key={idx} className="overflow-visible">
            <PriceCard card={priceCard} />
          </SwiperSlide>
        ))}
      </Swiper>


        <Button onClick={handlePrev} className="p-2 bg-dark rounded-full border-gray-200/40 absolute top-1/2 -translate-y-1/2 left-0 z-10">
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button onClick={handleNext} className="p-2 bg-dark rounded-full border-gray-200/40 absolute top-1/2 -translate-y-1/2 right-0 z-10">
          <ChevronRight className="w-6 h-6" />
        </Button>

    </div>
  );
};

export default PriceSlider;

const PriceCard = ({ card }) => {

  const {t} = useTranslation();

  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`min-h-[500px] holographic-card w-full md:w-full  bg-dark border rounded-lg flex flex-col gap-4 ${
        card.best ? "text-[#facb80] border-[#facb80]" : "border-gray-200/40 "
      }`}
    >
      <div className="p-6 pb-3">
        <span
          className={`px-6 block py-2 border text-xs w-fit rounded-full bg-white/5 ${
            card.best
              ? "text-[#facb80] border-[#facb80]"
              : "border-gray-200/40 "
          }`}
        >
          {t(card.title)}
        </span>

        <h1 className="text-4xl mt-12 mb-2 font-semibold text-white">
          {card.price}
        </h1>
        <p className="text-sm text-white/50">{t(card.description)}</p>
      </div>

      <hr className="border-gray-200/10" />
      <div className="p-6">
        <ul className="flex flex-col gap-3">
          {card.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 group text-sm">
              <CircleCheck />
              <span className="text-white/70">{t(feature)}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
