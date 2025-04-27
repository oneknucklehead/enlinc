import React from "react";
import img from "../assets/images/home-mainImg.png";
const Banner2 = ({ imgSrc = img, children, reverse = false }) => {
  return (
    <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] py-24 px-4">
      <div
        className={`grid lg:grid-cols-2 gap-8 justify-center items-center max-w-6xl mx-auto px-4`}
      >
        {/* <img
          src={imgSrc}
          alt="banner image"
          className={`hidden lg:block rounded-lg 
            ${reverse ? "order-2" : "order-1"}
            `}
        /> */}
        <div
          className={`col-span-1 flex justify-center items-center px-4 ${
            reverse ? "order-2" : "order-1"
          }`}
        >
          <div className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl  mx-auto">
            {/* Background layer */}
            <div className="border-white border-2 absolute top-4 left-4 w-full h-full rounded-xl z-0" />

            {/* Foreground image card */}
            <div className="relative z-10 w-full aspect-square overflow-hidden rounded-xl border-2 border-[#0EA4DE] shadow-lg">
              <img
                src={imgSrc}
                alt="banner image"
                className="hidden lg:block rounded-lg w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
        {children ? (
          <div className={``}>{children}</div>
        ) : (
          <div className="text-white max-w-xl flex flex-col gap-4 justify-center h-full">
            <h1 className="text-center lg:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Upgrade to the latest small business phone system technology and
              save up to 70% Off on your calls
            </h1>
            <p className="text-center lg:text-start xl:text-lg font-gabarito-reg-400">
              Start your free demo below
            </p>
            <button className="border-2 border-white rounded-full px-8 py-2">
              Start your free demo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner2;
