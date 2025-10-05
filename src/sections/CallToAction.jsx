import SplitText from "../components/SplitText";

const CallToAction = () => {
  return (
    <div className="section-y-padding h-[50vh]">
      <div className="default-padding flex justify-center flex-col items-center">
        <SplitText
          text="Got a project?"
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
          text="→ LET'S TALK"
          className="uppercase text-7xl font-bold text-primary cursor-pointer hover:translate-x-3 duration-300"
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
          onClick={() => alert("clicked")}
        />
      </div>
    </div>
  );
};

export default CallToAction;
