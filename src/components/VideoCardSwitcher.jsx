import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoCardSwitcher({ videos = [] }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

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

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.play();

    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [currentIndex]);

  return (
    <div>
      <div className="relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden bg-black shadow-lg">
        <div className="relative w-full aspect-video">
          <video
            ref={videoRef}
            src={currentVideo.src}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Overlay Title */}
          <h2 className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-lg font-semibold z-10">
            {currentVideo.title}
          </h2>

          {/* Play/Pause Button with Progress Ring */}
          <button
            onClick={togglePlay}
            className="absolute bottom-4 right-4 z-20 w-12 h-12 rounded-full bg-black/70 flex items-center justify-center group"
          >
            <svg className="absolute -z-10 w-12 h-12">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="#2A6A9E"
                strokeWidth="3"
                fill="transparent"
                strokeDasharray={2 * Math.PI * 20}
                strokeDashoffset={2 * Math.PI * 20 * (1 - progress / 100)}
                className="transition-all duration-300 ease-linear"
              />
            </svg>
            {isPlaying ? (
              <Pause className="text-white w-5 h-5" />
            ) : (
              <Play className="text-white w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      {/* Video Switch Buttons */}
      <div className="flex justify-center items-center gap-2 py-4 bg-white">
        {videos.map((vid, idx) => (
          <button
            key={idx}
            onClick={() => changeVideo(idx)}
            className={`px-3 py-1 bg-white flex flex-col items-center gap-2 rounded-md text-sm font-medium ${
              idx === currentIndex
                ? " text-[#2A6A9E]"
                : " text-gray-500 hover:bg-gray-50"
            }`}
          >
            <span className="w-fit">{vid.svg}</span>
            <p className="text-sm md:text-base">{vid.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
