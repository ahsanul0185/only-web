import { useNavigate } from "react-router-dom";
import SplitText2 from "../components/SplitText2";
import { useTranslation } from "../context/useTranslation";

const CallToAction = () => {

   const { t } = useTranslation();
   const navigate = useNavigate();

  return (
    <div className="section-y-padding h-[50vh]">
      <div className="default-padding flex justify-center flex-col items-center">
        <SplitText2
          text={t("Got a project?***Vous avez un projet?")}
          className="uppercase text-5xl md:text-6xl lg:text-7xl font-bold"
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
          text={t("→ LET'S TALK***PARLONS-EN")}
          className="uppercase text-5xl md:text-6xl lg:text-7xl font-bold cursor-pointer hover:translate-x-3 duration-300"
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
          onClick={() => navigate("/contact")}
        />
      </div>
    </div>
  );
};

export default CallToAction;

