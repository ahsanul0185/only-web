import React from 'react'
import Hero from '../sections/Hero'
import InteractiveTicker from '../components/InterectiveLoop'
// import Marquee from "react-fast-marquee";
import Marquee from '../components/Marquee';
import OurExpertise from '../sections/OurExpertise';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <InteractiveTicker />
      <OurExpertise />
    </div>
  )
}

export default Home