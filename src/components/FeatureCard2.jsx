import { Phone } from "lucide-react";
import React from "react";

const FeatureCard2 = ({
  image = false,
  logo = <Phone className="w-5 h-5" />,
  title,
  description,
  index = 1,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={`${index}00`}
      data-aos-duration="1000"
      className="bg-white border hover:border-black hover:shadow-md duration-300 rounded-md scale-95 hover:scale-100 cursor-pointer transition-all p-4 text-center flex flex-col justify-center items-center gap-4"
    >
      <div
        className={`${
          image
            ? "bg-transparent"
            : "bg-white border-2 rounded-full border-[#2A6A9E]"
        } p-2 rounded-full text-white`}
      >
        {logo}
      </div>
      <h4 className="text-base md:text-xl font-gabarito-semibold-600">
        {title}
      </h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default FeatureCard2;
