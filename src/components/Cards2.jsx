import React from "react";

const Cards2 = ({
  img,
  subtitle,
  title,
  description,
  btnText = "Learn More",
}) => {
  return (
    <div className="border max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-4 rounded-lg justify-center items-center scale-95 hover:border-black hover:shadow-lg hover:scale-100 transition duration-300 flex flex-col">
      <img
        src={img}
        alt="card image"
        className="aspect-square rounded-lg object-cover"
      />
      <div className="py-4">
        <h5 className="text-center text-xl">{subtitle}</h5>
        <h4 className="text-center font-semibold pb-1 text-3xl">{title}</h4>
        <p className="text-center text-gray-500">{description}</p>
      </div>
      <button className="py-2 px-4 rounded-lg bg-gradient-to-r from-[#142462] to-[#2A6A9E]  text-center text-white md:text-lg">
        {btnText}
      </button>
    </div>
  );
};

export default Cards2;
