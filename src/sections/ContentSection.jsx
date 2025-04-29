import React, { useState } from "react";
import dummy from "../assets/images/dummy.jpg";
import ModalButton from "../components/ModalButton";

const ContentSection = ({
  btnEnabled = true,
  reverse = false,
  video = false,
  videoLink = (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/3rMIoH0Ye_M"
      title="Nothing Phone (3a) &amp; (3a) Pro Unboxing &amp; First Look⚡Don&#39;t Make The Mistake!"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  ),
  img = dummy,
  children,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto h-fit">
        <div className={`w-full grid lg:grid-cols-2 gap-8 px-4 `}>
          {video ? (
            <div className={`col-span-1 ${reverse ? "order-2" : "order-1"}`}>
              {videoLink}
            </div>
          ) : (
            <div
              className={`col-span-1 flex justify-center items-center px-4 ${
                reverse ? "order-2" : "order-1"
              }`}
            >
              <div className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl  mx-auto">
                {/* Background layer */}
                <div className="absolute top-4 -left-4 w-full h-full bg-gradient-to-t from-[#142462] to-[#2A6A9E] rounded-xl z-0" />

                {/* Foreground image card */}
                <div className="relative z-10 w-full aspect-square overflow-hidden rounded-xl border-2 border-[#0EA4DE] shadow-lg">
                  <img
                    src={img}
                    alt="Person on call"
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              </div>
            </div>
          )}
          <div
            className={`col-span-1 ${
              reverse ? "order-1" : "order-2"
            } flex flex-col justify-center gap-6`}
          >
            {/* <div className="flex flex-col gap-6">
                <h3 className="text-3xl xl:text-4xl font-gabarito-semibold-600">
                  Boost Productivity with Affordable, Future-Proof Tech
                </h3>
                <div>
                  <p className="xl:text-lg font-gabarito-semibold-600">
                    What is Lorem Ipsum?
                  </p>
                  <p className="text-sm xl:text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
                <div>
                  <p className="xl:text-lg font-gabarito-semibold-600">
                    What is Lorem Ipsum?
                  </p>
                  <p className="text-sm xl:text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
                <Button
                  classname={"rounded-full px-8 py-2 text-sm xl:text-base"}
                >
                  Get Started
                </Button>
              </div> */}
            {children}
            {btnEnabled && (
              <ModalButton
                text={"Start your free demo"}
                isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
