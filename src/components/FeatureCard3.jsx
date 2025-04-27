import React from "react";

const FeatureCard3 = ({
  logo = <PhoneForwarded className="h-5 w-5" />,
  title,
}) => {
  return (
    <div className="rounded-md scale-95 hover:scale-100 transition-all cursor-pointer flex flex-col items-center justify-center border p-4 gap-4 ">
      <div className="bg-[#2A6A9E] w-fit p-2 rounded-full text-white">
        {logo}
      </div>
      <h3 className="text-lg font-gabarito-semibold-600">{title}</h3>
    </div>
  );
};

export default FeatureCard3;
