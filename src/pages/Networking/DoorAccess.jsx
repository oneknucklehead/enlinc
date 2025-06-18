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
import videoSrc7 from "../../assets/images/Networking/DoorAccess/11.mp4";
import videoSrc8 from "../../assets/images/Networking/DoorAccess/10.mp4";
import videoSrc9 from "../../assets/images/Networking/DoorAccess/13.mp4";
import videoSrc10 from "../../assets/images/Networking/DoorAccess/14.mp4";
import img1 from "../../assets/images/Networking/DoorAccess/7.jpg";
import img2 from "../../assets/images/Networking/DoorAccess/1.jpg";
import img3 from "../../assets/images/Networking/DoorAccess/12.jpg";
import img4 from "../../assets/images/Networking/DoorAccess/15.jpg";
import img5 from "../../assets/images/Networking/DoorAccess/16.jpg";
import img6 from "../../assets/images/Networking/DoorAccess/17.jpg";

const DoorAccess = () => {
  return (
    <div>
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection
            // noImg={true}
            video={true}
            videoLink={
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/pz2HtmQN6ok?si=c8YCA6-SZMLx8CI8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            }
            reverse={true}
          >
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1
                className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                Access Reimagined
              </h1>
              {/* <div
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div> */}
            </div>
          </ContentSection>
        </Container>
      </div>
      <FormBanner />
      <Container>
        <div className="py-12">
          <div className="text-center pb-12">
            <h1 className="text-5xl text-[#142462] font-semibold">
              Powerful Management Within UniFi
            </h1>
            <p className="text-[#142462] opacity-60  pt-2 ">
              Professional networking, security, and more. All powered by a
              single platform.
            </p>
          </div>
          <div className="relative w-full max-w-6xl aspect-video mx-auto rounded-xl overflow-hidden">
            <VideoCard src={videoSrc1} title={"hello"} />
          </div>
        </div>
        <div className="py-12 space-y-4">
          <div className="text-center pb-12">
            <h1 className="text-5xl text-[#142462] font-semibold">
              An Incredible User Experience
            </h1>
          </div>
          <div className="relative w-full max-w-6xl aspect-video mx-auto rounded-xl overflow-hidden">
            <VideoCardHoverPlay
              title={"Touch Pass for UniFi Access"}
              src={videoSrc7}
            />
          </div>

          <div className="grid grid-cols-7 gap-4 max-w-6xl mx-auto">
            <div className="col-span-3">
              <VideoCardHoverPlay
                title={"Unlock with Face Recognition"}
                src={videoSrc3}
              />
            </div>
            <div className="col-span-4">
              <VideoCardHoverPlay
                title={"One-Click Mobile Unlock"}
                src={videoSrc4}
              />
            </div>
          </div>
          <div className="grid grid-cols-8 grid-rows-2 gap-4 max-w-6xl mx-auto">
            <div className="col-span-5 row-span-2">
              <VideoCardHoverPlay title={"Pocket Keyfob"} src={videoSrc5} />
            </div>
            <div className="relative col-span-3 row-span-1 rounded-xl overflow-hidden">
              <img
                src={img1}
                className="absolute object-cover w-full h-full"
                alt="Background"
              />
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/50 z-10"></div> */}
              {/* Text */}
              <div className="absolute inset-0 z-20 p-4 flex justify-center text-white text-2xl font-semibold">
                PIN Code
              </div>
            </div>
            <div className="relative col-span-3 row-span-1 rounded-xl overflow-hidden">
              <img
                src={img2}
                className="absolute object-cover w-full h-full"
                alt="Background"
              />
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/50 z-10"></div> */}
              {/* Text */}
              <div className="absolute inset-0 z-20 p-4 flex justify-center text-white text-2xl font-semibold">
                Access Card
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-6xl aspect-video mx-auto rounded-xl overflow-hidden">
            <VideoCardHoverPlay title={"Intercom"} src={videoSrc6} />
          </div>
        </div>
        <div className="py-12">
          <div className="text-center pb-5">
            <h1 className="text-5xl text-[#142462] font-semibold">
              One-Click Visitor Access
            </h1>
          </div>
          <div className="relative w-full max-w-6xl aspect-video mx-auto rounded-xl overflow-hidden">
            <VideoCard src={videoSrc8} title={"hello"} />
          </div>

          <div className="pt-12 flex flex-wrap justify-center items-center gap-2 bg-white">
            <button
              className={`px-3 py-1 border bg-white flex flex-col items-center gap-2 rounded-md text-sm font-medium ${" text-[#2A6A9E]"}`}
            >
              {/* <span className="w-fit">{vid.svg}</span> */}
              <p className="text-sm md:text-base">Touch Pass Support</p>
            </button>
            <button
              className={`px-3 py-1 border bg-white flex flex-col items-center gap-2 rounded-md text-sm font-medium ${" text-[#2A6A9E]"}`}
            >
              {/* <span className="w-fit">{vid.svg}</span> */}
              <p className="text-sm md:text-base">
                Intercom Viewer Door Unlock
              </p>
            </button>
            <button
              className={`px-3 py-1 border bg-white flex flex-col items-center gap-2 rounded-md text-sm font-medium ${" text-[#2A6A9E]"}`}
            >
              {/* <span className="w-fit">{vid.svg}</span> */}
              <p className="text-sm  md:text-base">Talk Phone Integration</p>
            </button>
            <button
              className={`px-3 py-1 border bg-white flex flex-col items-center gap-2 rounded-md text-sm font-medium ${" text-[#2A6A9E]"}`}
            >
              {/* <span className="w-fit">{vid.svg}</span> */}
              <p className="text-sm md:text-base">Mobile Phone Door Unlock</p>
            </button>
            <button
              className={`px-3 py-1 border bg-white flex flex-col items-center gap-2 rounded-md text-sm font-medium ${" text-[#2A6A9E]"}`}
            >
              {/* <span className="w-fit">{vid.svg}</span> */}
              <p className="text-sm md:text-base">Web Interface Door Unlock</p>
            </button>
          </div>
        </div>
        <div className="py-12">
          <div className="text-center pb-12">
            <h1 className="text-5xl text-[#142462] font-semibold">
              Pair Readers and Cameras for Integrated Security
            </h1>
          </div>
          <div className="relative w-full max-w-6xl aspect-video mx-auto rounded-xl overflow-hidden">
            <img
              src={img3}
              className="object-cover w-full h-full"
              alt="Background"
            />
          </div>
        </div>
        <div className="py-12 max-w-6xl mx-auto space-y-4">
          <div className="text-center pb-5">
            <h1 className="text-5xl text-[#142462] font-semibold">
              Resilient by Design
            </h1>
            <p className="text-[#142462] opacity-60  pt-2 ">
              Build resilient access solutions with fail-safe and fail-secure
              locks, emergency mode, and battery backup.
            </p>
          </div>
          <div className="grid grid-cols-8 grid-rows-2 gap-4">
            <div className="relative col-span-8 md:col-span-5 md:row-span-2 rounded-xl">
              <img
                src={img4}
                className="absolute rounded-xl object-cover w-full h-full"
                alt="Background"
              />
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/50 z-10"></div> */}
              {/* Text */}
              <div className="absolute inset-0 z-20 p-4 flex justify-center text-2xl font-semibold">
                Emergency Mode
              </div>
            </div>
            <div className="relative col-span-8 md:col-span-3 md:row-span-1 rounded-lg">
              <VideoCardHoverPlay title={"Fail-Secure Locks"} src={videoSrc9} />
            </div>
            <div className="relative col-span-8 md:col-span-3 md:row-span-1 rounded-lg">
              <VideoCardHoverPlay title={"Fail-Safe Locks"} src={videoSrc10} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative rounded-xl">
              <img
                src={img5}
                className="object-cover rounded-xl w-full h-full"
                alt="Background"
              />
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/50 z-10"></div> */}
              {/* Text */}
              <div className="absolute text-white inset-0 z-20 p-4 flex justify-center text-2xl font-semibold">
                Emergency Mode
              </div>
            </div>
            <div className="relative rounded-lg">
              <img
                src={img6}
                className="object-cover rounded-xl w-full h-full"
                alt="Background"
              />
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/50 z-10"></div> */}
              {/* Text */}
              <div className="absolute text-white inset-0 z-20 p-4 flex justify-center text-2xl font-semibold">
                Emergency Mode
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DoorAccess;
