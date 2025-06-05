import { useRef, useEffect } from "react";

export default function VideoCardHoverPlay({ src, title }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleMouseEnter = () => {
      video.play();
    };

    const handleMouseLeave = () => {
      video.pause();
    };

    if (video) {
      video.addEventListener("mouseenter", handleMouseEnter);
      video.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (video) {
        video.removeEventListener("mouseenter", handleMouseEnter);
        video.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full max-w-6xl mx-auto rounded-xl overflow-hidden bg-black shadow-lg">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
      />

      {/* Overlay Title */}
      <h2 className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-2xl text-center font-semibold z-10">
        {title}
      </h2>
    </div>
  );
}
