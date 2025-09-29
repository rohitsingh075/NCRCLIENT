import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import image1 from "../assets/ncrimage1.jpg";
import image2 from "../assets/ncrimage2.jpg";
import image3 from "../assets/ncrimage3.jpg";
import image4 from "../assets/ncrimage4.jpg";
import image5 from "../assets/ncrimage5.jpg";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
];

const FadeSwiper = () => {
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setFirstLoad(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen bg-black overflow-hidden"
      /* overflow-hidden prevents right-side scroll */
    >
      <Swiper
        modules={[Navigation, EffectFade, Autoplay, Pagination]}
        effect="fade"
        loop
        autoplay={{ delay: 4000 }}
        navigation={{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        className="w-full min-h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative min-h-screen">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full min-h-screen object-cover select-none brightness-[0.35]"
            />

            {/* Overlay */}
            <div
              className="absolute top-[12%] left-0 w-full
                         px-4 sm:px-6 lg:px-16
                         flex flex-col lg:flex-row
                         items-start lg:items-center
                         gap-6 lg:gap-14
                         z-10 fade-in-up"
            >
              {/* Text */}
              <div className="text-white w-full lg:max-w-2xl space-y-3 sm:space-y-6">
                <p className="text-red-500 tracking-widest uppercase text-sm sm:text-lg font-semibold">
                  Building Brighter Futures
                </p>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-snug">
                  Excellence in <br /> Education
                </h1>
                <p className="text-xs sm:text-xl text-gray-300 font-medium">
                  Where Knowledge Meets Innovation
                </p>
                <p className="text-xs sm:text-lg text-gray-300 leading-relaxed">
                  Our comprehensive curriculum and state-of-the-art facilities
                  ensure holistic development of every student through
                  research-based learning approaches.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4 sm:mt-8">
                  <a
                    href="/learn-more"
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 sm:px-8 sm:py-4 rounded-md text-sm sm:text-lg text-white font-semibold shadow-md transition"
                  >
                    Learn More →
                  </a>
                  <a
                    href="/admissions"
                    className="border-2 border-white hover:bg-white hover:text-black px-4 py-2 sm:px-8 sm:py-4 rounded-md text-sm sm:text-lg font-semibold transition"
                  >
                    Admissions Open
                  </a>
                </div>
              </div>

              {/* Stats Card */}
              <div
                className="bg-black/20 border-2 border-white backdrop-blur-md
                           rounded-2xl shadow-lg
                           px-6 py-6 sm:px-10 sm:py-8 lg:px-14 lg:py-10
                           flex flex-col sm:flex-row
                           gap-6 sm:gap-16 items-center
                           w-full sm:w-auto mt-6 lg:mt-0"
              >
                <div>
                  <p className="text-red-500 text-xl sm:text-4xl font-bold">100+</p>
                  <p className="text-gray-200 text-sm sm:text-base">Achievements</p>
                </div>
                <div>
                  <p className="text-red-500 text-xl sm:text-4xl font-bold">50+</p>
                  <p className="text-gray-200 text-sm sm:text-base">Programs</p>
                </div>
                <div>
                  <p className="text-red-500 text-xl sm:text-4xl font-bold">98%</p>
                  <p className="text-gray-200 text-sm sm:text-base">Success</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination absolute bottom-6 flex justify-center w-full z-10"></div>
      </Swiper>

      {/* Navigation Arrows */}
      <div className="swiper-button-prev absolute left-3 lg:left-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-2xl sm:text-3xl text-white bg-black/40 hover:bg-black p-2 rounded-full">
        <FaChevronLeft />
      </div>
      <div className="swiper-button-next absolute right-3 lg:right-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-2xl sm:text-3xl text-white bg-black/40 hover:bg-black p-2 rounded-full">
        <FaChevronRight />
      </div>

      {/* CSS */}
      <style jsx="true">{`
        .zoom-animation { animation: zoomEffect 10s forwards linear; }
        @keyframes zoomEffect { 0% {transform:scale(1);} 100% {transform:scale(1.1);} }

        .fade-in-up { animation: fadeInUp 1.2s ease forwards; }
        @keyframes fadeInUp {
          0% { opacity:0; transform:translateY(40px); }
          100% { opacity:1; transform:translateY(0); }
        }

        .swiper-pagination-bullet {
          width: 25px;
          height: 5px;
          background-color: white;
          margin: 0 3px;
          border-radius: 10px;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: red;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default FadeSwiper;
