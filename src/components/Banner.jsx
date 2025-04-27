import React from "react";
import img from "../assets/images/home-mainImg.png";
const Banner = ({ imgSrc = img, children }) => {
  return (
    <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] py-24 px-4">
      <div className="flex flex-col-reverse lg:flex-row gap-8 justify-center items-center max-w-6xl mx-auto px-4">
        <img src={imgSrc} alt="banner image" />
        {children ? (
          <div>{children}</div>
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

export default Banner;
