import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import PriceSlider from "../components/PriceSlider";


const Pricing = () => {
  return (
    <div id="price" className="section-y-padding">
      <SectionTitle>Pricing</SectionTitle>

      <div className="default-padding">
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 flex justify-between flex-wrap gap-8 auto-rows-auto "
        >
          {pricingCards.map((card, idx) => (
            <PriceCard key={idx} card={card} />
          ))}
        </motion.div> */}
        <PriceSlider />

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
