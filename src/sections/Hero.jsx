import React, { useState } from "react";
import SplitText from "../components/SplitText";
import { motion } from "motion/react";
import perso from "../assets/perso-only-web.png"

const Hero = () => {
  return (
    <div className="h-screen relative">
      <div className="w-fit mx-auto pt-44 text-center">
        <SplitText
          text="LAUNCH YOUR"
          className="uppercase text-7xl font-bold"
          delay={70}
          duration={0.5}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <br />

        <SplitText
          text="DIGITAL PROJECT"
          className="uppercase text-7xl font-bold"
          delay={50}
          duration={0.5}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          animationDelay={0.3}
        />

        <motion.p
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{
            duration: 2,
            ease: "ease",
            delay : 0.6
          }}
          className="mt-7"
        >
          I create websites, graphic designs, and manage your community
          management to help you build irresistible brands.
        </motion.p>
      </div>

      <img src={perso} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56" alt="" />
    </div>
  );
};

export default Hero;
