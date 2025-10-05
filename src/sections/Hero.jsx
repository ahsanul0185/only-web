
import SplitText from "../components/SplitText";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div id="home" className="h-screen relative grid place-items-center">
      <div className="w-fit mx-auto text-center">
        <SplitText
          text="Your Vision,"
          className="text-7xl font-bold"
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
          text="Our Mission"
          className="text-7xl font-bold"
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
          className="mt-7 text-lg"
        >
          From concept to creation, we turn your brand into an online success story.
        </motion.p>
      </div>

    </div>
  );
};

export default Hero;
