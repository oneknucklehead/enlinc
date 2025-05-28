import { Phone } from "lucide-react";
import React from "react";

const FeatureCard = ({
  text = "Lorem Ipsum",
  description = "Lorem Ipsum is simply dummy text of the printing",
  index = 1,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={`${index}00`}
      data-aos-duration="1000"
      className="bg-white flex w-full h-full gap-4 items-center max-w-sm mx-auto rounded-md p-4"
    >
      {/* Background layer */}

      {/* Foreground card */}
      {/* Icon Circle */}
      {/* <div className="bg-[#0EA4DE] p-3 rounded-full text-white">
        <Phone className="w-5 h-5" />
      </div> */}

      {/* Text */}
      <div>
        <h3 className="lg:text-lg font-gabarito-semibold-600 ">{text}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
