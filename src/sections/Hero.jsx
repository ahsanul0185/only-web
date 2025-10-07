import { motion } from "motion/react";
import { useTranslation } from "../context/useTranslation";
import SplitText2 from "../components/SplitText2";
import imgCloud from "../assets/cloud.jpg"

const Hero = () => {

  const {t} = useTranslation();

  return (
    <div id="home" className="h-screen relative grid place-items-center overflow-clip">

    <img src={imgCloud} className="fixed w-full -z-10 select-none h-full object-cover" alt="" />

      <div className="w-fit mx-auto text-center">
        <SplitText2
          text={t("Your Vision,***Votre vision")}
          className="text-5xl md:text-6xl lg:text-7xl font-bold"
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

        <SplitText2
          text={t("Our Mission***Notre mission")}
          className="text-5xl md:text-6xl lg:text-7xl font-bold"
          delay={50}
          duration={0.5}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          animationDelay={0.4}
        /> 

        <motion.p
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{
            duration: 2,
            ease: "ease",
            delay : 1
          }}
          className="mt-7 text-base md:text-lg max-w-md px-6 text-center mx-auto"
        >
          {t("We bring your vision to life and turn your online presence into a true asset.***Nous donnons vie à votre vision et faisons de votre présence en ligne un véritable atout.")}
  
        </motion.p>
      </div>

    </div>
  );
};

export default Hero;




