import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

import image1 from "../assets/ncrimage1.jpg"
import image2 from "../assets/ncrimage2.jpg"
import image3 from "../assets/ncrimage3.jpg"
import image4 from "../assets/ncrimage4.jpg"
import image5 from "../assets/ncrimage5.jpg"


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

// Image data
const slides = [
  { id: 1, image: image1 },
  { id: 2, image: image2 }, 
  { id: 3, image: image3 }, 
  { id: 4, image: image4 },
  { id: 5, image: image5 },

];

const FadeSwiper = () => {
  return (
  <div className="">
      <div className="w-full max-w-8xl mt-25  ">
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        effect="fade"
        navigation
        loop
        autoplay={{ delay: 4000 }}
        className="shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image} 
              className="w-full h-120 object-fit select-none"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
  );
};

export default FadeSwiper;
