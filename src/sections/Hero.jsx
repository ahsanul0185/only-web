
// import Orb from "../components/Orb";
// import SplitText from "../components/SplitText";
// import { motion } from "motion/react";

// const Hero = () => {
//   return (
//     <div id="home" className="h-screen relative grid place-items-center">

//       <div style={{ width: '100%', height: '800px'}} className="absolute z-20">
//   <Orb
//     hoverIntensity={0.5}
//     rotateOnHover={true}
//     hue={0}
//     forceHoverState={false}
//   />
// </div>
//       <div className="w-fit mx-auto text-center">
//         <SplitText
//           text="Your Vision,"
//           className="text-7xl font-bold"
//           delay={70}
//           duration={0.5}
//           ease="power3.out"
//           splitType="chars"
//           from={{ opacity: 0, y: 40 }}
//           to={{ opacity: 1, y: 0 }}
//           threshold={0.1}
//           rootMargin="-100px"
//           textAlign="center"
//         />
//         <br />

//         <SplitText
//           text="Our Mission"
//           className="text-7xl font-bold"
//           delay={50}
//           duration={0.5}
//           ease="power3.out"
//           splitType="chars"
//           from={{ opacity: 0, y: 40 }}
//           to={{ opacity: 1, y: 0 }}
//           threshold={0.1}
//           rootMargin="-100px"
//           textAlign="center"
//           animationDelay={0.3}
//         />

        

//         <motion.p
//           initial={{ opacity: 0}}
//           animate={{ opacity: 1}}
//           transition={{
//             duration: 2,
//             ease: "ease",
//             delay : 0.6
//           }}
//           className="mt-7 text-lg max-w-md"
//         >
//           From concept to creation, we turn your brand into an online success story.
//         </motion.p>
//       </div>

//     </div>
//   );
// };

// export default Hero;



import Orb from "../components/Orb";
import SplitText from "../components/SplitText";
import { motion } from "motion/react";
import { useTranslation } from "../context/useTranslation";
import SplitText2 from "../components/SplitText2";

const Hero = () => {

  const {t} = useTranslation();

  return (
    <div id="home" className="h-screen relative grid place-items-center">

      {/* <div style={{ width: '100%', height: '800px', willChange: 'auto'}} className="absolute z-20">
  <Orb
    hoverIntensity={0.5}
    rotateOnHover={true}
    hue={0}
    forceHoverState={false}
    maxFPS={30}
  />
</div> */}
      <div className="w-fit mx-auto text-center">
        <SplitText2
          text={t("Your Vision,***Votre vision")}
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

        <SplitText2
          text={t("Our Mission***Notre mission")}
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
          className="mt-7 text-lg max-w-md text-center mx-auto"
        >
          {t("From concept to creation, we turn your brand into an online success story.***Du concept à la création, nous transformons votre marque en une success story en ligne.")}
  
        </motion.p>
      </div>

    </div>
  );
};

export default Hero;




