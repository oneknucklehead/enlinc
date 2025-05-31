import React from "react";
import Container from "../../components/Container";
import FormBanner from "../../sections/FormBanner";
import ContentSection from "../../sections/ContentSection";
import VideoCard from "../../components/VideoCard";
import videoSrc from "../../assets/images/Networking/CloudGateways/3.mp4";
import VideoCardSwitcher from "../../components/VideoCardSwitcher";
import { EthernetPort } from "lucide-react";
import VideoCardHoverPlay from "../../components/VideoCardHoverPlay";
import videoSrc1 from "../../assets/images/Networking/DoorAccess/2.mp4";
import videoSrc3 from "../../assets/images/Networking/DoorAccess/4.mp4";
import videoSrc4 from "../../assets/images/Networking/DoorAccess/5.mp4";
import videoSrc5 from "../../assets/images/Networking/DoorAccess/6.mp4";
import videoSrc6 from "../../assets/images/Networking/DoorAccess/9.mp4";
import img1 from "../../assets/images/Networking/DoorAccess/7.jpg";
import img2 from "../../assets/images/Networking/DoorAccess/1.jpg";

const DoorAccess = () => {
  return (
    <div>
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection noImg={true} reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1
                className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                Access Reimagined
              </h1>
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <FormBanner />
      <Container>
        <div className="py-12">
          <div className="text-center pb-12">
            <h1 className="text-5xl text-[#142462] font-semibold">
              Welcome to UniFi Enterprise 7
            </h1>
            <p className="text-[#142462] opacity-60  pt-2 ">
              Incredible 1,000+ client capacity, long-range 6 GHz performance,
              and 10 GbE PoE connectivity with native high availability
              <br />
              architecture for critical enterprise environments.
            </p>
          </div>
          <div className="relative w-full max-w-6xl aspect-video mx-auto rounded-xl overflow-hidden">
            <VideoCard src={videoSrc1} title={"hello"} />
          </div>
        </div>
        <div className="py-12 space-y-4">
          <div className="text-center pb-12">
            <h1 className="text-5xl text-[#142462] font-semibold">
              Welcome to UniFi Enterprise 7
            </h1>
          </div>
          <div className="relative w-full max-w-6xl aspect-video mx-auto rounded-xl overflow-hidden">
            <VideoCardHoverPlay src={videoSrc} />
          </div>

          <div className="grid grid-cols-7 gap-4 max-w-6xl mx-auto">
            <div className="col-span-3">
              <VideoCardHoverPlay src={videoSrc3} />
            </div>
            <div className="col-span-4">
              <VideoCardHoverPlay src={videoSrc4} />
            </div>
          </div>
          <div className="grid grid-cols-8 grid-rows-2 gap-4 max-w-6xl mx-auto">
            <div className="col-span-5 row-span-2">
              <VideoCardHoverPlay src={videoSrc5} />
            </div>
            <div className="relative col-span-3 row-span-1">
              <img
                src={img1}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="col-span-3 row-span-1">
              <img
                src={img2}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
          <div className="relative w-full max-w-6xl aspect-video mx-auto rounded-xl overflow-hidden">
            <VideoCardHoverPlay src={videoSrc6} />
          </div>
        </div>
        <div className="py-12">
          <div className="text-center pb-12">
            <h1 className="text-5xl text-[#142462] font-semibold">
              Welcome to UniFi Enterprise 7
            </h1>
          </div>
          <VideoCardSwitcher
            videos={[
              { title: "Door Access", src: videoSrc, svg: <EthernetPort /> },
              { title: "EV Charger", src: videoSrc, svg: <EthernetPort /> },
              { title: "Surveillance", src: videoSrc, svg: <EthernetPort /> },
            ]}
          />
        </div>
      </Container>
    </div>
  );
};

export default DoorAccess;
