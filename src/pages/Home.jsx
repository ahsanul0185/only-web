import React from 'react'
import Hero from '../sections/Hero'
import InteractiveTicker from '../components/InterectiveLoop'
// import Marquee from "react-fast-marquee";
import Marquee from '../components/Marquee';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <InteractiveTicker />
      {/* <Marquee items={["Hello", "Hi"]}/> */}
    </div>
  )
}

export default Home