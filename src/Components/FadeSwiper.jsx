import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import images5 from "../assets/images5.jpg"
import big_20_171 from "../assets/big_20_171.jpg"

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
  { id: 5, image: big_20_171 },
  { id: 6, image: images5 },
];

const FadeSwiper = () => {
  return (
    <div className="w-full max-w-8xl mt-25">
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
              className="w-full h-120 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FadeSwiper;
