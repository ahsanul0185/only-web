
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import talentGif from "../assets/talent.jpg";
import targetGif from "../assets/target.jpg";
import boostGif from "../assets/boost.jpg";
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
            className='md:h-[500px] w-full md:flex-[30%] bg-black border border-gray-200/40 rounded-lg p-4 md:p-6 flex flex-col gap-4'
        >
            <img src={card.image} className='w-full h-[60%] bo rder border-gray-200/40 rounded-lg object-cover' alt={card.title} />
            <div className='flex flex-col gap-4'>
                <h2 className='text-lg md:text-2xl font-semibold'>{t(card.title)}</h2>
                <p className='text-white/50 text-sm md:text-base'>{t(card.desc)}</p>
            </div>
        </motion.div>
    )
})

ExpertiseCard.displayName = 'ExpertiseCard';