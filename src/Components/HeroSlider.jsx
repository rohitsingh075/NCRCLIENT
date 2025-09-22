import React from "react";
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
  return (
    <div className="w-full h-screen relative bg-black">
      <Swiper
        modules={[Navigation, EffectFade, Autoplay, Pagination]}
        effect="fade"
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        loop
        autoplay={{ delay: 4000 }}
        className="w-full h-screen"
      >
   
{slides.map((slide) => (
  <SwiperSlide key={slide.id} className="relative">
    <div className="zoom-animation w-full h-full">
      <img
        src={slide.image}
        className="w-full h-full object-cover select-none brightness-[0.35]"
        alt={`Slide ${slide.id}`}
      />
    </div>

    {/* Overlay Content */}
    <div className="absolute   lg:px-16  top-[12%] left-0 w-full px-2 flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-14 z-10 fade-in-up">
      {/* Left Text Section */}
      <div className="text-white w-full lg:max-w-2xl space-y-3 sm:space-y-6">
        <p className="text-red-500 tracking-widest uppercase text-base sm:text-lg font-semibold">
          Building Brighter Futures
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold leading-snug">
          Excellence in <br /> Education
        </h1>
        <p className="text-sm sm:text-2xl text-gray-300 font-medium">
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

      {/* Right Stats Card */}
      <div className="bg-black/20 border-2 border-white backdrop-blur-md rounded-2xl shadow-lg px-4 py-4 sm:px-10 sm:py-8 lg:px-14 lg:py-10 flex flex-col sm:flex-row gap-4 sm:gap-16 items-center min-w-0 w-full sm:w-auto mt-4 lg:mt-0">
        <div>
          <p className="text-red-500 text-base sm:text-4xl font-bold">100+</p>
          <p className="text-gray-200 text-xs sm:text-base">Achievements</p>
        </div>
        <div>
          <p className="text-red-500 text-base sm:text-4xl font-bold">50+</p>
          <p className="text-gray-200 text-xs sm:text-base">Programs</p>
        </div>
        <div>
          <p className="text-red-500 text-base sm:text-4xl font-bold">98%</p>
          <p className="text-gray-200 text-xs sm:text-base">Success</p>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}


        <div className="swiper-pagination absolute bottom-8 flex justify-center w-full z-10"></div>
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev lg:left-10  absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-white hover:bg-black p-2 rounded-full">
        <FaChevronLeft />
      </div>
      <div className="swiper-button-next lg:right-10 absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-white  hover:bg-black p-2 rounded-full">
        <FaChevronRight />
      </div>

      {/* CSS */}
      <style jsx="true">{`
        .zoom-animation {
          animation: zoomEffect 10s forwards;
          animation-timing-function: linear;
        }
        @keyframes zoomEffect {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        /* Fade in + Slide up */
        .fade-in-up {
          animation: fadeInUp 1.2s ease forwards;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .swiper-slide-active .fade-in-up {
          animation-play-state: running;
        }
        .swiper-slide-next .fade-in-up,
        .swiper-slide-prev .fade-in-up,
        .swiper-slide-duplicate-active .fade-in-up {
          animation-play-state: paused;
        }

        .swiper-pagination-bullet {
          width: 35px;
          height: 5px;
          background-color: white;
          margin: 0 5px;
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
