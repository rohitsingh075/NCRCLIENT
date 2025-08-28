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
    <div
      className="w-full relative bg-black"
      style={{ height: "calc(100vh - 116px)" }} // 👈 Adjust 80px to your navbar height
    >
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
        className="w-full h-full"
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
            <div className="absolute top-[20%] left-[8%] flex flex-col lg:flex-row items-start lg:items-center w-[90%] gap-14 z-10 fade-in-up">
              {/* Left Text Section */}
              <div className="text-white max-w-2xl space-y-6">
                <p className="text-red-500 tracking-widest uppercase text-lg font-semibold">
                  Building Brighter Futures
                </p>
                <h1 className="text-6xl font-extrabold leading-snug">
                  Excellence in <br /> Education
                </h1>
                <p className="text-2xl text-gray-300 font-medium">
                  Where Knowledge Meets Innovation
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our comprehensive curriculum and state-of-the-art facilities
                  ensure holistic development of every student through
                  research-based learning approaches.
                </p>
                <div className="flex gap-6 mt-8">
                  <a
                    href="/learn-more"
                    className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-md text-lg text-white font-semibold shadow-md transition"
                  >
                    Learn More →
                  </a>
                  <a
                    href="/admissions"
                    className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-md text-lg font-semibold transition"
                  >
                    Admissions Open
                  </a>
                </div>
              </div>

              {/* Right Stats Card */}
              <div className="bg-black/20 border-2 border-white backdrop-blur-md rounded-2xl shadow-lg px-14 py-10 flex gap-16 items-center min-w-[500px]">
                <div>
                  <p className="text-red-500 text-4xl font-bold">100+</p>
                  <p className="text-gray-200 text-base">Achievements</p>
                </div>
                <div>
                  <p className="text-red-500 text-4xl font-bold">50+</p>
                  <p className="text-gray-200 text-base">Programs</p>
                </div>
                <div>
                  <p className="text-red-500 text-4xl font-bold">98%</p>
                  <p className="text-gray-200 text-base">Results</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination absolute bottom-8 flex justify-center w-full z-10"></div>
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-white bg-black/40 hover:bg-black p-2 rounded-full">
        <FaChevronLeft />
      </div>
      <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-white bg-black/40 hover:bg-black p-2 rounded-full">
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
