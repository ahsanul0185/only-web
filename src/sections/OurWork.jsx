import React from "react";
import SectionTitle from "../components/SectionTitle";
import WorkSlides from "../components/WorkSlides";
import { motion } from "motion/react";

const OurWork = () => {
  return (
    <div className="section-y-padding">
      <SectionTitle>Our Works</SectionTitle>

      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ amount: 0.2, once: true }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="default-padding w-full md:w-[70%] mt-12"
      >
        <WorkSlides />
      </motion.div>
    </div>
  );
};

export default OurWork;
