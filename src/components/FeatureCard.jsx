import { Phone } from "lucide-react";
import React from "react";

const FeatureCard = ({
  text = "Lorem Ipsum",
  description = "Lorem Ipsum is simply dummy text of the printing",
}) => {
  return (
    <div className="bg-white flex h-full gap-4 items-center max-w-sm mx-auto rounded-md py-4 px-4 lg:px-6">
      {/* Background layer */}

      {/* Foreground card */}
      {/* Icon Circle */}
      <div className="bg-[#0EA4DE] p-3 rounded-full text-white">
        <Phone className="w-5 h-5" />
      </div>

      {/* Text */}
      <div>
        <h3 className="lg:text-lg font-gabarito-semibold-600 ">{text}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
