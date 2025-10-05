import React from 'react'
import Hero from '../sections/Hero'
import InteractiveTicker from '../components/InterectiveLoop'
// import Marquee from "react-fast-marquee";
import Marquee from '../components/Marquee';
import OurExpertise from '../sections/OurExpertise';
import OurWork from '../sections/OurWork';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <InteractiveTicker />
      <OurExpertise />
      <OurWork />
    </div>
  )
}

export default Home