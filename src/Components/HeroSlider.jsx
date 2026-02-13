import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import image1 from "../assets/ncrimage1.jpg";
import image2 from "../assets/ncrimage2.jpg";
import image3 from "../assets/ncrimage3.jpg";
import image4 from "../assets/ncrimage4.jpg";
import image5 from "../assets/ncrimage5.jpg";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full overflow-hidden h-[620px] md:h-[720px]">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        effect="fade"
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full">
            {/* Background */}
            <img
              src={slide.image}
              alt="Campus"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                  {/* LEFT TEXT */}
                  <div className="text-white space-y-4">
                    <p className="text-red-500 uppercase tracking-widest text-sm font-semibold">
                      Building Brighter Futures
                    </p>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                      Excellence in <br /> Education
                    </h1>

                    <p className="text-gray-300 text-lg">
                      Where Knowledge Meets Innovation
                    </p>

                    <p className="text-gray-300 max-w-xl">
                      Our comprehensive curriculum and state-of-the-art facilities
                      ensure holistic development of every student through
                      research-based learning approaches.
                    </p>

                    <div className="flex gap-4 pt-4">
                      <a
                        href="/learn-more"
                        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold transition"
                      >
                        Learn More →
                      </a>
                      <a
                        href="/admissions"
                        className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-md font-semibold transition"
                      >
                        Admissions Open
                      </a>
                    </div>
                  </div>

                  {/* RIGHT STATS */}
                  <div className="hidden lg:flex justify-end">
                    <div className="bg-black/40 backdrop-blur-md border border-white/30 rounded-2xl px-12 py-8 flex gap-16 text-center">
                      <div>
                        <p className="text-red-500 text-4xl font-bold">100+</p>
                        <p className="text-gray-200">Achievements</p>
                      </div>
                      <div>
                        <p className="text-red-500 text-4xl font-bold">50+</p>
                        <p className="text-gray-200">Programs</p>
                      </div>
                      <div>
                        <p className="text-red-500 text-4xl font-bold">98%</p>
                        <p className="text-gray-200">Results</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <button className="hero-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white text-3xl bg-black/40 hover:bg-black/70 p-3 rounded-full transition">
        <FaChevronLeft />
      </button>

      <button className="hero-next absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white text-3xl bg-black/40 hover:bg-black/70 p-3 rounded-full transition">
        <FaChevronRight />
      </button>

      {/* Pagination */}
      <style jsx="true">{`
        .swiper-pagination {
          bottom: 18px !important;
        }
        .swiper-pagination-bullet {
          width: 26px;
          height: 4px;
          background: #ffffff;
          opacity: 0.4;
          border-radius: 6px;
        }
        .swiper-pagination-bullet-active {
          background: red;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
