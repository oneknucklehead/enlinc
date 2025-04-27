import React from "react";

const Cards = ({ img, title, description }) => {
  return (
    <div className="border max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-4 rounded-lg justify-center items-center scale-95 hover:border-black hover:shadow-lg hover:scale-100 transition duration-300 flex flex-col gap-4">
      <img
        src={img}
        alt="card image"
        className="aspect-square rounded-lg object-cover"
      />
      <h4 className="text-center text-3xl">{title}</h4>
      <p className="text-center text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default Cards;
