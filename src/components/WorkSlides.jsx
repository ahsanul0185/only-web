import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import project1 from "../assets/projects/work-3.png"
import project2 from "../assets/projects/work-4.png"
import project3 from "../assets/projects/work-5.png"


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
  }
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