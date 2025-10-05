import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { CircleCheck } from "lucide-react";
import Button from "../components/Button";

export const pricingCards = [
  {
    title: "Visual Identity",
    price: "200€",
    deliveredIn: "DELIVERED IN 1 WEEK",
    description: "Craft a unique look that defines your brand.",
    features: [
      "Logo & variations",
      "Graphic charter",
      "Visiting card",
      "Support images",
      "Mathys Webleague character",
    ],
  },
  {
    title: "Website",
    price: "400€",
    deliveredIn: "DELIVERED IN 3 WEEKS",
    description: "Launch a responsive, high-performing website.",
    best: true,
    features: [
      "E-commerce or showcase",
      "Dynamic site",
      "Responsive (mobile version)",
      "SEO reference",
      "First-time training",
    ],
  },
  {
    title: "Identity & Site",
    price: "550€",
    deliveredIn: "DELIVERED IN 4 WEEKS",
    description: "Get your full identity and website in one pack.",
    features: ["Visual identity offer", "Website offer", "Save money!"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94], // power3.out equivalent
    },
  },
};

const Pricing = () => {
  return (
    <div className="section-y-padding">
      <SectionTitle>Pricing</SectionTitle>

      <div className="default-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 flex justify-between gap-8 flex-wrap"
        >
          {pricingCards.map((card, idx) => (
            <PriceCard key={idx} card={card} />
          ))}
        </motion.div>

<motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
  className="mt-12 flex justify-center"
>
  <Button>Calculate Price</Button>
</motion.div>
      </div>
    </div>
  );
};

export default Pricing;

const PriceCard = ({ card }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.04,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`min-h-[550px] holographic-card w-full md:flex-[30%] bg-dark border rounded-lg flex flex-col gap-4 ${
        card.best ? "text-[#facb80] border-[#facb80]" : "border-gray-200/40 "
      }`}
    >
      <div className=" p-6">
        <span
          className={`px-6 block py-2 border text-sm w-fit rounded-full bg-white/5 ${
            card.best
              ? "text-[#facb80] border-[#facb80]"
              : "border-gray-200/40 "
          }`}
        >
          {card.title}
        </span>

        <h1 className="text-5xl mt-12 mb-2 font-semibold text-white">
          {card.price}
        </h1>
        <p className="text-sm text-white/50">{card.description}</p>
      </div>

      <hr className="border-gray-200/10" />
      <div className="p-6">
        <ul className="flex flex-col gap-3">
          {card.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 group">
              <CircleCheck />
              <span className="text-white/70">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
