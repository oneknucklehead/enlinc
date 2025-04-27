import React from "react";
import person from "../assets/images/person-nobg.png";

const ProfileCard = ({
  img = person,
  name = "Zoheb Ahmed",
  position = "Managing Director",
}) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative w-64 h-64">
        {/* Circle background */}
        <div className="absolute inset-0 rounded-full bg-red-500"></div>
        {/* Image popping out */}
        <img
          src={img} // replace with actual image path
          alt="Elie Ayoub"
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-68 h-68 object-cover rounded-full"
        />
      </div>
      <div className="text-center">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-500 text-sm">{position}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
