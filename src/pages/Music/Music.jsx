import { useEffect, useState } from "react";
import Container from "../../components/Container";

export default function Music() {
  const [loadIframe, setLoadIframe] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById("mg-iframe-container");
      if (element && element.getBoundingClientRect().top < window.innerHeight) {
        setLoadIframe(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // trigger check once

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="py-8 mt-[92px] h-fit">
      <div id="mg-iframe-container" className="relative w-full">
        <Container>
          <div className="relative w-full min-h-[560px] ">
            {loadIframe && (
              <iframe
                id="mg-iframe"
                src="https://audio.phonesound.com.au/phone/ExternalIframe/music-library.php"
                frameBorder="0"
                allowFullScreen
                scrolling="yes"
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                onLoad={() => setIsLoaded(true)}
              ></iframe>
            )}

            {/* Skeleton shimmer loader */}
            {!isLoaded && (
              <div className="absolute top-0 left-0 w-full h-full border-2 rounded-xl shadow-lg animate-pulse flex items-center justify-center bg-gray-200">
                <p className="text-gray-500 text-sm">
                  Loading music library...
                </p>
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}
