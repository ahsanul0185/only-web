import React from 'react'
import Hero from '../sections/Hero'
import InteractiveTicker from '../components/InterectiveLoop'
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div className=''>
      <Hero />
      {/* <InteractiveTicker /> */}
      <Marquee className='text-5xl' play autoFill>
 Hello * Hello * Hello * Hello * Hello * Hello * Hello * Hello * Hello * Hello * Hello * Hello * Hello * Hello *
  </Marquee>
    </div>
  )
}

export default Home