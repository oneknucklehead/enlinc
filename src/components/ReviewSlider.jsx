import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import StarRating from "./StarRating";

const slides = [
  {
    // img: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp",
    stars: 5,
    title: "Dentistry IQ",
    text: "We're new customers with En-Linc and glad to say we're extremely satisfied with the services and support we're receiving. The team go above and beyond and are very professional at what they do. Highly recommend their services!",
  },
  {
    // img: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp",
    stars: 5,
    title: "Caterina Alafaci",
    text: "We recently switched our phone system over to En-Linc, and we couldn’t be happier with the experience. Everything went smoothly, and the service has been great. Ezekiel and Lincoln were an absolute pleasure to deal with, along with the rest of the team – professional, friendly, and extremely helpful throughout the entire process. We’re very satisfied with the results and highly recommend their services!",
  },
  {
    // img: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp",
    stars: 5,
    title: "The Gas Man TGM",
    text: "THANKS EN-LINC AND THE TEAM GREAT SERVICE AND VERY HAPPY WITH MY PHONE SYSTEM BEST DECISION I MADE MOVING TO THESES GUYS!!!!!",
  },
];

const ReviewSlider = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-10">
      <Swiper
        direction="vertical"
        modules={[Pagination, Mousewheel]}
        pagination={{ clickable: true }}
        mousewheel={true}
        spaceBetween={30}
        slidesPerView={1}
        className="h-[550px] md:h-[300px] lg:h-[300px]"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative flex flex-col md:flex-row items-center border-2 border-[#142462] bg-white shadow-xl rounded-2xl px-8 py-6 gap-6 md:h-[300px]">
              {/* <div className="w-full md:w-[250px] h-[250px] bg-gradient-to-br from-[#142462] to-[#2A6A9E] rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                <img
                  src={slide.img}
                  alt=""
                  className="w-full h-full object-cover border-2 border-[#142462] rounded-xl transition-opacity duration-500"
                />
              </div> */}
              <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
                {/* <span className="text-sm text-gray-500 font-medium block mb-2">
                  {slide.date}
                </span> */}
                <StarRating rating={slide.stars} />
                <h2 className="text-xl font-gabarito-semibold-600 text-black">
                  {slide.title}
                </h2>
                <p className="text-gray-500 font-gabarito-reg-400  mb-5">
                  {slide.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #555;
    border-radius: 9999px;
    opacity: 0.3;
    transition: all 0.4s ease-in-out, transform 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background-color: #142462;
    opacity: 1;
    height: 30px;
    transform: scale(1.05);
    border-radius: 9999px;
  }

  @media (max-width: 768px) {
    .swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {
      margin: 6px 0;
    }
  }
`}</style>
    </div>
  );
};

export default ReviewSlider;
