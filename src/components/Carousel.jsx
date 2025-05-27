import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle"; // Optional: Comment out if you want zero CSS import
import CardWithHoverTab from "./CardWithHoverTab";

const Carousel = ({ slideContent }) => {
  return (
    <div className="flex w-full px-4 py-8">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        // navigation
        autoplay={{ delay: 1000 }}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        className="!pb-12"
      >
        {slideContent.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* <div className="bg-yellow-400 text-black rounded-2xl p-6 shadow-md text-center h-40 flex items-center justify-center text-xl font-semibold">
              {slide.content}
            </div> */}
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
