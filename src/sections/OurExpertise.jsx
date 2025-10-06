// import React, { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import SectionTitle from '../components/SectionTitle'
// import talentGif from "../assets/show-who-you-are.gif";
// import targetGif from "../assets/target.gif";
// import boostGif from "../assets/boost.gif";

// // Register GSAP plugin
// gsap.registerPlugin(ScrollTrigger);

// export const cards = [
//   {
//     title: "Show who you are***Montrez qui vous êtes",
//     desc: "Make a difference with a style that reflects you and that won't be forgotten.***Faites la différence avec un style qui vous reflète et qui ne sera pas oublié.",
//     image: talentGif,
//   },
//   {
//     title: "Make your target vibrate***Faites vibrer votre cible",
//     desc: "Attract attention, create connection with strong branding!***Attirez l'attention, créez du lien avec une identité forte !",
//     image: targetGif,
//   },
//   {
//     title: "Boost your success***Boostez votre réussite",
//     desc: "A clear, well-thought-out identity that transforms your ideas into results.***Une identité claire et réfléchie qui transforme vos idées en résultats.",
//     image: boostGif,
//   },
// ];


// const OurExpertise = () => {
//     const cardsRef = useRef([]);
//     const sectionRef = useRef(null);

//     useEffect(() => {
//         gsap.fromTo(
//             cardsRef.current,
//             {
//                 opacity: 0,
//                 y: 100,
//                 scale: 0.8
//             },
//             {
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//                 duration: 0.8,
//                 stagger: 0.2,
//                 ease: 'power3.out',
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: 'top 45%',
//                     end: 'bottom 20%',
//                     toggleActions: 'play none none reverse',
//                 }
//             }
//         );
//     }, []);

//     return (
//         <div ref={sectionRef} className=' section-y-padding'>
//             <SectionTitle>How We Empower You?***Comment vous donnons-nous du pouvoir ?</SectionTitle>
//             <div className='mt-12 default-padding flex justify-between gap-8 flex-wrap'>
//                 {cards.map((card, idx) => (
//                     <ExpertiseCard
//                         key={idx}
//                         card={card}
//                         ref={(el) => (cardsRef.current[idx] = el)}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default OurExpertise

// const ExpertiseCard = React.forwardRef(({card}, ref) => {
//     return (
//         <div
//             ref={ref}
//             className='h-[500px] w-full md:flex-[30%] bg-dark border border-gray-200/40 rounded-lg p-6 flex flex-col gap-4'
//         >
//             <img src={card.image} className='w-full h-[60%] border border-gray-200/40 rounded-lg object-cover' alt={card.title} />
//             <div className='flex flex-col gap-4'>
//                 <h2 className='text-2xl font-semibold'>{card.title}</h2>
//                 <p className='text-white/50'>{card.desc}</p>
//             </div>
//         </div>
//     )
// })

// ExpertiseCard.displayName = 'ExpertiseCard';



import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import talentGif from "../assets/show-who-you-are.gif";
import targetGif from "../assets/target.gif";
import boostGif from "../assets/boost.gif";
import { useTranslation } from '../context/useTranslation';

export const cards = [
  {
    title: "Show who you are***Montrez qui vous êtes",
    desc: "Make a difference with a style that reflects you and that won't be forgotten.***Faites la différence avec un style qui vous reflète et qui ne sera pas oublié.",
    image: talentGif,
  },
  {
    title: "Make your target vibrate***Faites vibrer votre cible",
    desc: "Attract attention, create connection with strong branding!***Attirez l'attention, créez du lien avec une identité forte !",
    image: targetGif,
  },
  {
    title: "Boost your success***Boostez votre réussite",
    desc: "A clear, well-thought-out identity that transforms your ideas into results.***Une identité claire et réfléchie qui transforme vos idées en résultats.",
    image: boostGif,
  },
];

const OurExpertise = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { 
        once: true, 
        amount: 0.2,
        margin: "-10% 0px -30% 0px"
    });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] // power3.out equivalent
            }
        }
    };

    return (
        <div ref={sectionRef} className='section-y-padding'>
            <SectionTitle>How We Empower You?***Comment vous donnons-nous du pouvoir ?</SectionTitle>
            <motion.div 
                className='mt-12 default-padding flex justify-between gap-8 flex-wrap'
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {cards.map((card, idx) => (
                    <ExpertiseCard
                        key={idx}
                        card={card}
                        variants={cardVariants}
                    />
                ))}
            </motion.div>
        </div>
    )
}

export default OurExpertise

const ExpertiseCard = React.forwardRef(({card, variants}, ref) => {
  const {t} = useTranslation();
    return (
        <motion.div
            ref={ref}
            variants={variants}
            className='h-[500px] w-full md:flex-[30%] bg-dark border border-gray-200/40 rounded-lg p-6 flex flex-col gap-4'
        >
            <img src={card.image} className='w-full h-[60%] border border-gray-200/40 rounded-lg object-cover' alt={card.title} />
            <div className='flex flex-col gap-4'>
                <h2 className='text-2xl font-semibold'>{t(card.title)}</h2>
                <p className='text-white/50'>{t(card.desc)}</p>
            </div>
        </motion.div>
    )
})

ExpertiseCard.displayName = 'ExpertiseCard';