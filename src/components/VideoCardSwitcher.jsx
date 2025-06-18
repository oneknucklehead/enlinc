import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoCardSwitcher({ videos = [] }) {
  const videoRef = useRef(null);
  const buttonRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonSizes, setButtonSizes] = useState([]);

  const currentVideo = videos[currentIndex];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const changeVideo = (index) => {
    setCurrentIndex(index);
    setProgress(0);
    setIsPlaying(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const current = video.currentTime;
      const total = video.duration;
      if (total > 0) setProgress((current / total) * 100);
    };

    const handleEnded = () => {
      setProgress(0);
      setCurrentIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);
    video.play();

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [currentIndex, videos.length]);

  // Measure button sizes after mount or update
  useEffect(() => {
    const sizes = buttonRefs.current.map((ref) =>
      ref ? ref.getBoundingClientRect() : { width: 160, height: 40 }
    );
    setButtonSizes(sizes);
  }, [videos]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      {currentVideo.heading && (
        <h2 className=" text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-4">
          {currentVideo.heading}
        </h2>
      )}
      {/* Pills */}
      <div className="flex flex-wrap justify-center items-center gap-4 py-6">
        {videos.map((vid, idx) => {
          const isActive = idx === currentIndex;
          const size = buttonSizes[idx] || { width: 160, height: 40 };
          const width = size.width + 12;
          const height = size.height + 12;
          const radius = size.height / 2;
          const perimeter =
            2 * (size.width + size.height - 2 * radius) + 2 * Math.PI * radius;
          const dashOffset = perimeter * (1 - (isActive ? progress : 0) / 100);

          return (
            <button
              key={idx}
              onClick={() => changeVideo(idx)}
              className="relative group"
            >
              {/* Progress Ring */}
              <svg
                width={width}
                height={height}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <rect
                  x="6"
                  y="6"
                  rx={radius}
                  ry={radius}
                  width={size.width}
                  height={size.height}
                  fill="none"
                  stroke={isActive ? "#2A6A9E" : "#d1d5db"}
                  strokeWidth="3"
                  strokeDasharray={perimeter}
                  strokeDashoffset={dashOffset}
                  className="transition-all duration-300 ease-linear"
                />
              </svg>

              {/* Pill Button */}
              <span
                ref={(el) => (buttonRefs.current[idx] = el)}
                className={`relative z-10 inline-block shadow-md text-center px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out whitespace-nowrap
                  ${
                    isActive
                      ? "bg-white text-[#2A6A9E]"
                      : "bg-gray-50 text-gray-800 hover:bg-gray-200"
                  }
                `}
              >
                {vid.label || `Video ${idx + 1}`}
              </span>
            </button>
          );
        })}
      </div>

      {/* Video Player */}
      <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-xl">
        <video
          ref={videoRef}
          src={currentVideo.src}
          className="w-full h-full object-cover"
          autoPlay
          muted
          // loop
          playsInline
        />
        <h2 className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-sm md:text-lg font-semibold z-10">
          {currentVideo.title}
        </h2>

        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 z-20 w-12 h-12 rounded-full bg-black/70 flex items-center justify-center hover:scale-110 transition-transform"
        >
          {isPlaying ? (
            <Pause className="text-white w-5 h-5" />
          ) : (
            <Play className="text-white w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}
