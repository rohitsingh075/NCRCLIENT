import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper/modules";

import image1 from "../assets/ncrimage1.jpg";
import image2 from "../assets/ncrimage2.jpg";
import image3 from "../assets/ncrimage3.jpg";
import image4 from "../assets/ncrimage4.jpg";
import image5 from "../assets/ncrimage5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Image data
const slides = [
  { id: 1, image: image1 },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
  { id: 5, image: image5 },
];

const FadeSwiper = () => {
  const [viewportHeight, setViewportHeight] = useState(0);

  // Calculate available height (viewport height minus navbar height)
  useEffect(() => {
    const calculateHeight = () => {
      // Assuming navbar is 161px high
      const navbarHeight = 161;
      const availableHeight = window.innerHeight - navbarHeight;
      setViewportHeight(availableHeight);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  return (
    <div className="w-full h-full left-0 right-0 relative">
      <div className="w-full h-full">
        <Swiper
          modules={[Navigation, EffectFade, Autoplay, Pagination]}
          effect="fade"
          navigation
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          loop
          autoplay={{ delay: 4000 }}
          className="w-full h-full"
          style={{ height: `${viewportHeight}px` }} // ✅ Corrected here
        >

          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="overflow-hidden relative">
              <div className="zoom-animation w-full h-full">
                <img
                  src={slide.image}
                  className="w-full h-full object-cover select-none brightness-55"
                  alt={`Slide ${slide.id}`} // corrected alt tag
                />
              </div>
              {/* Overlay Content */}
              <div className="absolute top-1/8 left-20 text-white space-y-4 z-10">
                <h1 className="text-4xl font-bold">
                  Welcome to North Central Railway College!
                </h1>
                <p className="text-lg max-w-md">
                  Established in 1882, we proudly uphold a tradition of excellence in education. With a rich legacy,
                  we foster intellectual growth, moral values, and social responsibility. Equipped with state-of-the-art facilities,
                  our college nurtures students to achieve their potential and contribute positively to society.
                </p>
                <button className="border-2 border-amber-50 text-white px-6 py-3 rounded-md hover:bg-red-700 hover:border-0 transition">
                  Admissions Open for 2025
                </button>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination absolute bottom-8 flex justify-center w-full z-10"></div>
        </Swiper>
      </div>

      {/* CSS for zoom animation and enhanced pagination */}
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

        .swiper-slide-active .zoom-animation {
          animation-play-state: running;
        }

        .swiper-slide-next .zoom-animation,
        .swiper-slide-prev .zoom-animation,
        .swiper-slide-duplicate-active .zoom-animation {
          animation-play-state: paused;
        }

        .swiper-pagination-bullet {
          width: 13px;
          height: 13px;
          background-color: rgba(0, 0, 0, 0.1); /* corrected typo: was 0,1 */
          margin: 0 8px;
          border-radius: 50%;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background-color: #0047ab;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default FadeSwiper;
