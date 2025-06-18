import React from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import videoSrc from "../../assets/images/Networking/CloudGateways/3.mp4";
import video1 from "../../assets/images/Networking/Wifi/7.mp4";
import video2 from "../../assets/images/Networking/Wifi/8.mp4";
import video3 from "../../assets/images/Networking/Wifi/9.mp4";
import FormBanner from "../../sections/FormBanner";
import VideoCard from "../../components/VideoCard";
import VideoCardSwitcher from "../../components/VideoCardSwitcher";
import { EthernetPort } from "lucide-react";
import img1 from "../../assets/images/Networking/Wifi/1.jpg";
import img2 from "../../assets/images/Networking/Wifi/2.jpg";
import img3 from "../../assets/images/Networking/Wifi/3.jpg";
import img4 from "../../assets/images/Networking/Wifi/4.jpg";
import img5 from "../../assets/images/Networking/Wifi/5.jpg";
import img6 from "../../assets/images/Networking/Wifi/6.jpg";
import img7 from "../../assets/images/Networking/Wifi/10.jpg";

const Wifi = () => {
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
                src="https://www.youtube.com/embed/ytQIqbkgA9c?si=rltKDLen6YwWh28V"
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
                Wifi Perfected
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
          <div className="text-center pb-5">
            <h1 className="text-5xl text-[#142462] font-semibold">
              Explore UniFi 7
            </h1>
            <p className="text-[#142462] opacity-60  pt-2 ">
              A massively scalable WiFi 7 platform capable of delivering
              wired-like user experiences.
            </p>
          </div>
          <div className="relative w-full max-w-6xl aspect-video mx-auto rounded-xl overflow-hidden">
            {/* Text Overlay */}
            {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
              <h2 className="text-white text-xl font-semibold">Door Access</h2>
            </div> */}

            {/* Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="py-12">
          <div className="text-center pb-5">
            <h1 className="text-5xl text-[#142462] font-semibold">
              Take Your WiFi to Massive Scale
            </h1>
            <p className="text-[#142462] opacity-60  pt-2 ">
              Start with one AP and effortlessly scale to hundreds.
            </p>
          </div>
          <div className="relative w-full max-w-6xl aspect-video mx-auto rounded-xl overflow-hidden">
            <VideoCard src={video2} title={"hello"} />
          </div>
        </div>
        <div className="py-12">
          <div className="text-center pb-5">
            <h1 className="text-5xl text-[#142462] font-semibold">
              Total WiFi Wizardry
            </h1>
            <p className="text-[#142462] opacity-60  pt-2 ">
              Precision radio system control.
            </p>
          </div>
          <div className="relative w-full max-w-6xl aspect-video mx-auto rounded-xl overflow-hidden">
            <VideoCard src={video3} title={"hello"} />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 bg-white">
          <button
            className={`px-3 py-1 border bg-white flex flex-col items-center gap-2 rounded-md text-sm font-medium ${" text-[#2A6A9E]"}`}
          >
            {/* <span className="w-fit">{vid.svg}</span> */}
            <p className="text-sm md:text-base">Coverage Visualisation</p>
          </button>
          <button
            className={`px-3 py-1 border bg-white flex flex-col items-center gap-2 rounded-md text-sm font-medium ${" text-[#2A6A9E]"}`}
          >
            {/* <span className="w-fit">{vid.svg}</span> */}
            <p className="text-sm md:text-base">Precise Radio Controls</p>
          </button>
          <button
            className={`px-3 py-1 border bg-white flex flex-col items-center gap-2 rounded-md text-sm font-medium ${" text-[#2A6A9E]"}`}
          >
            {/* <span className="w-fit">{vid.svg}</span> */}
            <p className="text-sm  md:text-base">
              Powerful VLAN Configurations
            </p>
          </button>
          <button
            className={`px-3 py-1 border bg-white flex flex-col items-center gap-2 rounded-md text-sm font-medium ${" text-[#2A6A9E]"}`}
          >
            {/* <span className="w-fit">{vid.svg}</span> */}
            <p className="text-sm md:text-base">
              Flexible Authentication Support
            </p>
          </button>
        </div>
        <div className="py-12 space-y-4">
          <div className="text-center pb-5">
            <h1 className="text-5xl text-[#142462] font-semibold">
              Thoughtful Access Point Designs
            </h1>
            <p className="text-[#142462] opacity-60  pt-2 ">
              Tailored for each specific environment.
            </p>
          </div>
          <div className="grid grid-cols-8 grid-rows-2 gap-4">
            <div className="relative col-span-8 md:col-span-5 md:row-span-2 rounded-lg">
              <img
                src={img1}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute text-center top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <p className=" text-xl sm:text-2xl font-semibold">In-Wall</p>
                {/* <p className="">Lorem Ipsum is simply dummy text</p> */}
              </div>
            </div>
            <div className="relative col-span-8 md:col-span-3 md:row-span-1 rounded-lg">
              <img
                src={img2}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute text-center top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <p className=" text-xl sm:text-2xl font-semibold">
                  Flexible & Outdoor
                </p>
                {/* <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p> */}
              </div>
            </div>
            <div className="relative col-span-8 md:col-span-3 md:row-span-1 rounded-lg">
              <img
                src={img3}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute text-center top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <p className=" text-xl sm:text-2xl font-semibold">
                  Enterprise 7
                </p>
                {/* <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p> */}
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative rounded-lg">
              <img
                src={img4}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute text-center top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <p className=" text-xl sm:text-2xl font-semibold">
                  Mega Capacity
                </p>
                {/* <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p> */}
              </div>
            </div>
            <div className="relative rounded-lg">
              <img
                src={img5}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute text-center top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <p className=" text-xl sm:text-2xl font-semibold">
                  Building Bridge
                </p>
                {/* <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p> */}
              </div>
            </div>
            <div className="relative rounded-lg">
              <img
                src={img6}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute text-center top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <p className=" text-xl sm:text-2xl font-semibold">
                  Device Bridge
                </p>
                {/* <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p> */}
              </div>
            </div>
            <div className="relative rounded-lg">
              <img
                src={img7}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute text-center top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <p className=" text-xl sm:text-2xl font-semibold">Flagship</p>
                {/* <p className="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Wifi;
