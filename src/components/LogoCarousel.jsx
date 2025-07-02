import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const LogoCarousel = ({ logos }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="relative w-full px-10 py-8">
      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-0 z-10 -translate-y-1/2 text-[#142462] rounded-full shadow-lg"
      >
        <CircleArrowLeft size={28} />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-0 z-10 -translate-y-1/2 text-[#142462] rounded-full shadow-lg"
      >
        <CircleArrowRight size={28} />
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={40}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          1024: { slidesPerView: 5 },
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="!pb-4"
      >
        {logos.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center h-32"
          >
            <img
              loading="lazy"
              src={logo}
              alt={`logo-${index}`}
              className="h-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoCarousel;
