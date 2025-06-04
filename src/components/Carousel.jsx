import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import CardWithHoverTab from "./CardWithHoverTab";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const Carousel = ({ slideContent }) => {
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
    <div className="relative flex w-full px-4 py-8">
      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute top-[45%] left-0 z-10 -translate-y-1/2 text-[#142462] rounded-full shadow-lg  transition"
      >
        <CircleArrowLeft />
      </button>
      <button
        ref={nextRef}
        className="absolute top-[45%] right-0 z-10 -translate-y-1/2 text-[#142462] rounded-full shadow-lg transition"
      >
        <CircleArrowRight />
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        // autoplay={{ delay: 2000 }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="!pb-12"
      >
        {slideContent.map((slide, index) => (
          <SwiperSlide key={index} className="">
            <CardWithHoverTab
              title={slide.title}
              description={slide.description}
              link={slide.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
