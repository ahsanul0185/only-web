import React from 'react'
import Hero from '../sections/Hero'
import InteractiveTicker from '../components/InterectiveLoop'
// import Marquee from "react-fast-marquee";
import Marquee from '../components/Marquee';
import OurExpertise from '../sections/OurExpertise';
import OurWork from '../sections/OurWork';
import Pricing from '../sections/Pricing';
import FAQs from '../components/FAQ';
import Reviews from '../sections/Reviews';


const Home = () => {
  return (
    <div className=''>
      <Hero />
      <InteractiveTicker />
      <OurExpertise />
      <OurWork />
      <Pricing />
      <FAQs />
      <Reviews/>
    </div>
  )
}

export default Home