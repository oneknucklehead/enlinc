import { useState } from "react";
import { Sparkles } from "lucide-react"; // Or use any icon library
import { Link } from "react-router-dom";

const CardWithHoverTab = ({
  title = "Posts",
  description = "Posts are photos and videos you upload to share within a project.",
  link = "#",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-fit p-4">
      {/* Floating tab */}
      <div
        className={`absolute top-8 left-8 w-8 h-8 rounded-full flex items-center justify-center
        transition-colors duration-300  bg-white border cursor-pointer
        ${hovered ? "text-[#2A6A9E] border-[#2A6A9E]" : "text-gray-700"}
        `}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Sparkles size={16} />
      </div>

      {/* Card */}
      <div
        className={`
           cursor-pointer
          transition-colors
          ${hovered ? "bg-[#2A6A9E]" : "bg-gray-200"} rounded-xl pt-8`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`rounded-xl flex flex-col justify-center items-start gap-2 bg-white transition-colors ${
            hovered ? "border-[#2A6A9E]" : "border-gray-200"
          } shadow border  p-6`}
        >
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            {title}
          </h2>
          <p className="text-sm text-gray-600">{description}</p>
          <Link
            to={link}
            className="px-4 py-2 text-sm font-medium bg-gray-200 rounded-md hover:bg-[#2A6A9E] hover:text-white transition"
          >
            Know more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardWithHoverTab;
