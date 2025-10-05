import React from 'react'
import SplitText from './SplitText'

const SectionTitle = ({children}) => {
  return (
    <div className='flex justify-center'>
         <SplitText
          text={children}
          className="uppercase text-5xl text-center py-8 font-bold"
          delay={70}
          duration={0.5}
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