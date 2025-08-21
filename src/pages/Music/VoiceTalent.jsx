import { useState, useEffect } from "react";
import Container from "../../components/Container";

export default function VoiceTalent() {
  const [activeTab, setActiveTab] = useState("telephone");
  const [loadIframe1, setLoadIframe1] = useState(false);
  const [isLoaded1, setIsLoaded1] = useState(false);
  const [loadIframe2, setLoadIframe2] = useState(false);
  const [isLoaded2, setIsLoaded2] = useState(false);

  // Lazy load iframes and reset loader on tab switch
  useEffect(() => {
    if (activeTab === "telephone") {
      setLoadIframe1(true);
      setIsLoaded1(false); // reset loader on tab switch
    }
    if (activeTab === "all") {
      setLoadIframe2(true);
      setIsLoaded2(false); // reset loader on tab switch
    }

    const onScroll = () => {
      const tel = document.getElementById("voice-samples-telephone");
      const all = document.getElementById("voice-samples-all");

      if (tel && tel.getBoundingClientRect().top < window.innerHeight) {
        setLoadIframe1(true);
      }
      if (all && all.getBoundingClientRect().top < window.innerHeight) {
        setLoadIframe2(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [activeTab]);

  return (
    <div className="px-4 py-8 mt-[92px]">
      <Container>
        {/* Tabs */}
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold ${
              activeTab === "telephone"
                ? "bg-gradient-to-l from-[#2A6A9E] to-[#142462] text-white"
                : "bg-gray-100 text-black"
            }`}
            onClick={() => setActiveTab("telephone")}
          >
            Telephone Samples
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold ${
              activeTab === "all"
                ? "bg-gradient-to-l from-[#2A6A9E] to-[#142462] text-white"
                : "bg-gray-100 text-black"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All Samples
          </button>
        </div>

        {/* Tab Panels */}
        <div className="relative w-full">
          {/* Telephone Samples */}
          {activeTab === "telephone" && (
            <div
              id="voice-samples-telephone"
              className="relative w-full min-h-[630px] sm:min-h-[530px] lg:min-h-[500px]"
            >
              {loadIframe1 && (
                <iframe
                  src="https://audio.phonesound.com.au/phone/ExternalIframe/voice-talent-samples.php"
                  frameBorder="0"
                  allowFullScreen
                  scrolling="yes"
                  className="absolute top-0 left-0 w-full h-full transition-opacity duration-700"
                  onLoad={() => setIsLoaded1(true)}
                ></iframe>
              )}

              {/* Skeleton loader */}
              {!isLoaded1 && (
                <div className="absolute top-0 left-0 w-full h-full animate-pulse flex items-center justify-center bg-gray-200">
                  <p className="text-gray-500 text-sm">
                    Loading telephone samples...
                  </p>
                </div>
              )}
            </div>
          )}

          {/* All Samples */}
          {activeTab === "all" && (
            <div
              id="voice-samples-all"
              className="relative w-full min-h-[800px] sm:min-h-[600px] lg:min-h-[500px]"
            >
              {loadIframe2 && (
                <iframe
                  src="https://audio.phonesound.com.au/phone/ExternalIframe/voice-talent-all-samples.php"
                  frameBorder="0"
                  allowFullScreen
                  scrolling="yes"
                  className="absolute top-0 left-0 w-full h-full transition-opacity duration-700"
                  onLoad={() => setIsLoaded2(true)}
                ></iframe>
              )}

              {/* Skeleton loader */}
              {!isLoaded2 && (
                <div className="absolute top-0 left-0 w-full h-full animate-pulse flex items-center justify-center bg-gray-200">
                  <p className="text-gray-500 text-sm">
                    Loading all samples...
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
