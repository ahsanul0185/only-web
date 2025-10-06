import React from 'react'
import SplitText from './SplitText'
import { useTranslation } from '../context/useTranslation'
import SplitText2 from './SplitText2';

const SectionTitle = ({children}) => {
  const {t} = useTranslation();
  return (
    <div className='flex justify-center'>
         <SplitText2
          text={t(children)}
          className="uppercase text-3xl px-6 sm:text-4xl lg:text-5xl text-center md:py-8 font-bold"
          delay={20}
          duration={0.3}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          tag='h1'
        />
    </div>
  )
}

export default SectionTitle