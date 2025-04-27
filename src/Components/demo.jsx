//FadeSwiper


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

import image1 from "../assets/ncrimage1.jpg";
import image2 from "../assets/ncrimage2.jpg";
import image3 from "../assets/ncrimage3.jpg";
import image4 from "../assets/ncrimage4.jpg";
import image5 from "../assets/ncrimage5.jpg";

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
        <div className="relative ">
            <div className="w-full max-w-8xl  ">
                <Swiper
                    modules={[Navigation, EffectFade, Autoplay]}
                    effect="fade"
                    navigation
                    loop
                    autoplay={{ delay: 4000 }}
                    className="shadow-lg "
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id} className="relative">
                            <img
                                src={slide.image}
                                className="w-full h-120 object-cover select-none brightness-50"
                                alt={`Slide ${slide.id}`}
                            />
                            {/* Overlay Content */}
                            <div className="absolute top-1/4 left-10 text-white space-y-4">
                                <h1 className="text-4xl font-bold">
                                    Welcome to North Central Railway College!


                                </h1>
                                <p className="text-lg max-w-md ">
                                    Established in 1882, we proudly uphold a tradition of excellence in education. With a rich legacy,
                                    we foster intellectual growth, moral values, and social responsibility. Equipped with state-of-the-art facilities,
                                    our college nurtures students to achieve their potential and contribute positively to society.
                                </p>
                                <button className="border-2  border-amber-50 text-white px-6 py-3 rounded-md hover:bg-red-700 hover:border-0 transition">
                                    Admissions Open for 2025
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default FadeSwiper;