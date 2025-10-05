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
//     title: "Show who you are",
//     desc: "Make a difference with a style that reflects you and that won't be forgotten.",
//     image: talentGif,
//   },
//   {
//     title: "Make your target vibrate",
//     desc: "Attract attention, create connection with strong branding!",
//     image: targetGif,
//   },
//   {
//     title: "Boost your success",
//     desc: "A clear, well-thought-out identity that transforms your ideas into results.",
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
//             <SectionTitle>How We Empower You?</SectionTitle>
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


import React from 'react'
import { motion } from 'motion/react'
import SectionTitle from '../components/SectionTitle'
import talentGif from "../assets/show-who-you-are.gif";
import targetGif from "../assets/target.gif";
import boostGif from "../assets/boost.gif";

export const cards = [
  {
    title: "Show who you are",
    desc: "Make a difference with a style that reflects you and that won't be forgotten.",
    image: talentGif,
  },
  {
    title: "Make your target vibrate",
    desc: "Attract attention, create connection with strong branding!",
    image: targetGif,
  },
  {
    title: "Boost your success",
    desc: "A clear, well-thought-out identity that transforms your ideas into results.",
    image: boostGif,
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
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // power3.out equivalent
    },
  },
};

const OurExpertise = () => {
    return (
        <div className='section-y-padding'>
            <SectionTitle>How We Empower You?</SectionTitle>
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className='mt-12 default-padding flex justify-between gap-8 flex-wrap'
            >
                {cards.map((card, idx) => (
                    <ExpertiseCard 
                        key={idx} 
                        card={card} 
                    />
                ))}
            </motion.div>
        </div>
    )
}

export default OurExpertise

const ExpertiseCard = ({card}) => {
    return (
        <motion.div 
            variants={cardVariants}
            className='h-[500px] w-full md:flex-[30%] bg-dark border border-gray-200/40 rounded-lg p-6 flex flex-col gap-4'
        >
            <img src={card.image} className='w-full h-[60%] border border-gray-200/40 rounded-lg object-cover' alt={card.title} />
            <div className='flex flex-col gap-4'>
                <h2 className='text-2xl font-semibold'>{card.title}</h2>
                <p className='text-white/50'>{card.desc}</p>
            </div>
        </motion.div>
    )
}