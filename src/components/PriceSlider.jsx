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

export const pricingCards = [
  {
    title: "Logo and Visual Identity",
    price: "200€",
    deliveredIn: "DELIVERED IN 1 WEEK",
    description:
      "Create a unique brand identity with a professional logo and cohesive visual design system.",
    features: [
      "Logo & variations",
      "Graphic charter",
      "Visiting card",
      "Support images",
      "Mathys Webleague character",
    ],
  },
  {
    title: "E-commerce Website",
    price: "600€",
    deliveredIn: "DELIVERED IN 4 WEEKS",
    description:
      "Complete online store with product management, cart, and secure payments.",
    features: [
      "E-commerce or showcase",
      "Dynamic site",
      "Responsive design",
      "SEO ready",
      "Training included",
    ],
  },
  {
    title: "Showcase Website",
    price: "400€",
    deliveredIn: "DELIVERED IN 3 WEEKS",
    best : true,
    description:
      "Perfect for businesses looking to establish an online presence.",
    features: [
  "Custom visual identity integration",
  "Modern responsive design",
  "SEO optimized pages",
  "Interactive elements",
  "Fast loading & performance",
],
  },
  {
    title: "Logo and Flyer",
    price: "80€",
    deliveredIn: "DELIVERED IN 1 WEEK",
    description:
      "Professional logo combined with eye-catching flyer designs to promote your brand.",
    features: [
      "Custom logo design",
      "Logo variations",
      "Single-page flyer design",
      "Print-ready files",
      "Social media adaptation",
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
          {card.title}
        </span>

        <h1 className="text-4xl mt-12 mb-2 font-semibold text-white">
          {card.price}
        </h1>
        <p className="text-sm text-white/50">{card.description}</p>
      </div>

      <hr className="border-gray-200/10" />
      <div className="p-6">
        <ul className="flex flex-col gap-3">
          {card.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 group text-sm">
              <CircleCheck />
              <span className="text-white/70">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
