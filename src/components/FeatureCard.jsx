import { Phone } from "lucide-react";
import React from "react";

const FeatureCard = () => {
  return (
    <div className="bg-white flex gap-4 items-center max-w-sm mx-auto rounded-md py-4 px-4 lg:px-6">
      {/* Background layer */}

      {/* Foreground card */}
      {/* Icon Circle */}
      <div className="bg-[#0EA4DE] p-3 rounded-full text-white">
        <Phone className="w-5 h-5" />
      </div>

      {/* Text */}
      <div>
        <h3 className="lg:text-lg font-gabarito-semibold-600 ">Lorem Ipsum</h3>
        <p className="text-sm">
          Lorem Ipsum is simply dummy text of the printing
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
