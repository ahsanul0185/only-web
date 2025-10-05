import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import project1 from "../assets/projects/project-1.webp"
import project2 from "../assets/projects/project-2.webp"
import project3 from "../assets/projects/project-3.webp"
import project4 from "../assets/projects/project-4.webp"
import project5 from "../assets/projects/project-5.webp"
import project6 from "../assets/projects/project-6.webp"
import project7 from "../assets/projects/project-7.webp"
import project8 from "../assets/projects/project-8.webp"
import project9 from "../assets/projects/project-9.webp"
import project11 from "../assets/projects/project-11.png"
import project12 from "../assets/projects/project-12.webp"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';


const works = [
  {
    image : project1
  },
  {
    image : project2
  },
  {
    image : project3
  },
  {
    image : project4
  },
  {
    image : project5
  },
  {
    image : project6
  },
  {
    image : project7
  },
  {
    image : project8
  },
  {
    image : project9
  },
  {
    image : project11
  },
  {
    image : project12
  },
]


const WorkSlides = () => {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
                autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {works.map((work, idx) => <SwiperSlide key={idx}> <img src={work.image} /></SwiperSlide>)}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
                     autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper cursor-grab"
      >
        {works.map((work, idx) => <SwiperSlide key={idx}> <img src={work.image} /></SwiperSlide>)}
      </Swiper>
    </>
  );
}

export default WorkSlides