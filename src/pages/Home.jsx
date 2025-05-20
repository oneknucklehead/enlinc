import bgImg from "../assets/images/bg.png";
import Button from "../components/Button";
import googleLogo from "../assets/images/google.png";
import headphoneLogo from "../assets/images/headphone.png";
import homeMainImg from "../assets/images/home-mainImg.png";
import Container from "../components/Container";
import logo from "../assets/images/brands/Logo.png";
import logo1 from "../assets/images/brands/Logo-1.png";
import logo2 from "../assets/images/brands/Logo-2.png";
import logo3 from "../assets/images/brands/Logo-3.png";
import logo4 from "../assets/images/brands/Logo-4.png";
import logo5 from "../assets/images/brands/Logo-5.png";
import logo6 from "../assets/images/brands/Logo-6.png";
import logo7 from "../assets/images/brands/Logo-7.png";

import dummy from "../assets/images/dummy.jpg";

import savings from "../assets/images/Savings.png";
import MultiStepForm from "../components/MultiStepForm";
import FeatureCard from "../components/FeatureCard";
import tabs from "../data/ContentSwitcherData";
import { useEffect, useState } from "react";
import ReviewSlider from "../components/ReviewSlider";
import Accordion from "../components/Accordion";
import { Star, Webhook } from "lucide-react";
import FAQSection from "../sections/FAQSection";
import Modal from "../components/Modal";
import ModalButton from "../components/ModalButton";

const brandArr = [logo, logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const Home = () => {
  const featureData = [
    {
      text: "Your Work, Unplugged",
      description:
        "Stay connected from anywhere—take business calls from home, the office, or on the go with EN-LINC’s mobile-ready phone systems.",
    },
    {
      text: "Talk Made Easy",
      description:
        "Simplify calling with cloud phone systems—use your mobile or PC to stay connected.",
    },
    {
      text: "Fast, Hassle-Free Setup",
      description: "Click, manage, done—no tech drama.",
    },
    {
      text: "Same Number, New System",
      description:
        "Seamlessly port your existing business numbers to the cloud—no downtime, no hassle.",
    },
    {
      text: "Secure and Protected at Every Step",
      description:
        "Secure your business calls and confidential data with end-to-end encryption.",
    },
    {
      text: "Save More on Every Call",
      description:
        "Save on office tech and phone bills—smart solutions built for growing Australian businesses.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0); // To force re-render with animation
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false);
  const [isModalOpen3, setModalOpen3] = useState(false);
  const handleTabClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      setFadeKey((prev) => prev + 1); // trigger transition
    }
  };
  return (
    <div>
      {/* HERO SECTION */}
      <div className="px-4 pb-4 mt-[92px] overflow-hidden">
        <div className="relative p-4 mt-[92px] rounded-lg bg-[radial-gradient(100%_100%_at_top,_white_57%,_#2A6A9E_83%,_#142462_100%)] pb-12">
          <img src={bgImg} className="absolute -bottom-44 -right-28 " />
          <div className="relative flex flex-col justify-center items-center gap-4 h-full w-full">
            <div className="text-center max-w-5xl">
              <div
                data-aos="fade-down"
                data-aos-delay="150"
                data-aos-duration="1000"
              >
                <h1 className="text-5xl xl:text-6xl">
                  Stay Ahead with Scalable,
                </h1>
              </div>
              <div
                data-aos="fade-down"
                data-aos-delay="250"
                data-aos-duration="1000"
              >
                <h1 className=" font-gabarito-bold-700 text-5xl xl:text-6xl">
                  {" "}
                  Intelligent Tech Designed for Tomorrow
                </h1>
              </div>
              {/* <h1 className="font-bold text-5xl xl:text-6xl">
                Zero Headaches.
              </h1> */}
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="350"
              data-aos-duration="1000"
            >
              <p className="text-sm xl:text-base text-center">
                We empower Australian small businesses with reliable,
                cost-effective business phone systems that are built to scale.
                <br /> Our future-ready VoIP and hosted PBX solutions come
                backed by 24/7 local support, ensuring secure, uninterrupted
                communication every step of the way.
              </p>
            </div>
            <div className="flex gap-2">
              <ModalButton
                text={"Book a Demo"}
                isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}
              />
              <Button
                onClick={() => setModalOpen2(true)}
                classname={"py-[6px] px-4 text-[#142462] text-sm xl:text-base"}
                outline={true}
              >
                <div className="flex gap-2">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5047 10.6457L8.73161 13.9788L8.73161 7.31257L14.5047 10.6457Z"
                      fill="#142462"
                    />
                    <circle
                      cx="10.6559"
                      cy="10.6456"
                      r="8.98401"
                      stroke="#142462"
                      stroke-width="2"
                    />
                  </svg>

                  <p>How we help</p>
                </div>
              </Button>
              <Modal isOpen={isModalOpen2} onClose={() => setModalOpen2(false)}>
                <iframe
                  width="100%"
                  height="500px"
                  src="https://www.youtube.com/embed/3rMIoH0Ye_M"
                  title="Nothing Phone (3a) &amp; (3a) Pro Unboxing &amp; First Look⚡Don&#39;t Make The Mistake!"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </Modal>
            </div>
            <div className="flex w-full justify-center py-12">
              <div className="hidden xl:block  animate-float -rotate-12 p-[2px] h-fit rounded-lg bg-gradient-to-r from-[#0EA4DE] to-[#142462]">
                <div className="rounded-md  bg-white flex justify-center items-center gap-2  py-2 pl-2">
                  <img loading="lazy" src={googleLogo} alt="google" />
                  <div className="pr-3">
                    <div className="flex gap-2">
                      <Star className="fill-yellow-400 text-yellow-400" />
                      <Star className="fill-yellow-400 text-yellow-400" />
                      <Star className="fill-yellow-400 text-yellow-400" />
                      <Star className="fill-yellow-400 text-yellow-400" />
                      <Star className="fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-base xl:text-lg">
                      Highest Rated Service!
                    </p>
                    <p className="text-xs">Over 100+ 5 Star Reviews</p>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="350"
                className="sm:mr-16 md:mr-32"
              >
                <img
                  loading="lazy"
                  src={homeMainImg}
                  className="aspect-square"
                />
              </div>
              <div className="hidden xl:block  animate-float  rotate-12 p-[2px] h-fit rounded-lg bg-gradient-to-r from-[#0EA4DE] to-[#142462]">
                <div className="rounded-md bg-white flex justify-center items-center gap-2  py-2 pl-2">
                  <img loading="lazy" src={headphoneLogo} alt="headphone" />
                  <div className="pr-3">
                    <div className="text-lg text-[#F3C200] font-gabarito-semibold-600">
                      24/7 Australia
                    </div>
                    <p className="text-base xl:text-lg">Based Dedicated</p>
                    <p className="text-base xl:text-lg">
                      Personalised Service!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TRUST SECTION */}
      <div classname="w-full">
        <Container>
          <div className="py-12 px-4">
            <p
              className="text-3xl text-center pb-12"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Trusted by over 2k+ companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {brandArr.map((brand, index) => (
                <div key={index} className="">
                  <img loading="lazy" src={brand} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      {/* FORM SECTION */}
      <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] py-12 px-4">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12 md:gap-4">
            <div className="text-white space-y-2">
              <span>
                <img loading="lazy" src={savings} alt="savings" />
              </span>
              <h3
                className="text-3xl"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                Smarter Phone Systems, Bigger Savings –{" "}
                <b>Slash Call Costs by Up to 75%</b>
              </h3>
              <p
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="1000"
              >
                Over 500 companies have already switched to En-Linc
              </p>
            </div>
            <div className="flex sm:justify-center sm:items-center">
              <div className="flex flex-col bg-white w-full sm:max-w-lg rounded-md p-8 gap-2">
                <div className="flex gap-2 items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 20V0H10L16 6V10H14V7H9V2H2V18H8V20H0ZM14.275 12.55L15.35 13.6L11.5 17.45V18.5H12.55L16.4 14.65L17.475 15.7L13.175 20H10V16.825L14.275 12.55ZM17.475 15.7L14.275 12.55L16.425 10.4L19.6 13.575L17.475 15.7Z"
                      fill="black"
                    />
                  </svg>

                  <h4 className="font-gabarito-bold-700 text-2xl">
                    Book a free demo in just 2 mins!
                  </h4>
                </div>
                <div>
                  <MultiStepForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* ABOUT SECTION */}
      <div className="w-full h-fit px-4">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 py-24">
            <div className="relative  px-4">
              <div
                data-aos="fade-right"
                data-aos-delay="150"
                data-aos-duration="1000"
                className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto"
              >
                {/* Background layer */}
                <div className="absolute top-4 -left-4 w-full h-full bg-gradient-to-t from-[#142462] to-[#2A6A9E] rounded-xl z-0" />

                {/* Foreground image card */}
                <div className="relative z-10 w-full aspect-square overflow-hidden rounded-xl border-2 border-[#0EA4DE] shadow-lg">
                  <img
                    src={dummy}
                    alt="Person on call"
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              </div>
              <div className="absolute hidden md:block top-[50%] -left-36 lg:-left-28 xl:-left-44 z-10 w-full">
                <div className="relative animate-float max-w-xs mx-auto">
                  {/* Background layer */}
                  <div className="absolute top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#0EA4DE] z-0" />

                  {/* Foreground card */}
                  <div className="relative z-10 bg-white border-2 rounded-2xl p-4 shadow-md border-[#142462]">
                    <h3 className="font-semibold text-gray-800 mb-3">
                      Cost Effectiveness
                    </h3>

                    {/* This Month */}
                    <div className="mb-2">
                      <p className="text-sm mb-1">This Month</p>
                      <div className="w-full h-3 bg-gray-200 rounded-full">
                        <div className="h-3 bg-[#FF0000] rounded-full w-1/2" />
                      </div>
                    </div>

                    {/* Last Month */}
                    <div>
                      <p className="text-sm mb-1">Last Month</p>
                      <div className="w-full h-3 bg-gray-200 rounded-full">
                        <div className="h-3 bg-[#0EA4DE] rounded-full w-3/4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex flex-col gap-6">
                <h3
                  className="text-3xl xl:text-4xl font-gabarito-semibold-600"
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  Drive Productivity with Smart, Affordable Business Technology
                </h3>
                <p
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  Empower your team with future-proof communication tools
                  designed to enhance efficiency and support long-term business
                  growth.
                </p>
                <div>
                  <p
                    className="xl:text-lg font-gabarito-semibold-600"
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    Transparent, Cost-Effective VoIP Solutions
                  </p>
                  <p
                    className="text-sm xl:text-base"
                    data-aos="fade-left"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                  >
                    At EN-LINC, we provide flexible, cloud-based phone systems
                    with clear pricing and zero hidden costs—helping Australian
                    businesses plan confidently while reducing communication
                    expenses.
                  </p>
                </div>
                <div>
                  <p
                    className="xl:text-lg font-gabarito-semibold-600"
                    data-aos="fade-left"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    Future-Proof Phone Systems for Small & Growing Businesses
                  </p>
                  <p
                    className="text-sm xl:text-base"
                    data-aos="fade-left"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                  >
                    Our cloud-hosted solutions evolve with your business
                    needs—whether you're adding new team members, opening new
                    locations, or shifting to hybrid work. Scale with ease, stay
                    connected anywhere, and upgrade without costly
                    infrastructure.
                  </p>
                </div>

                <ModalButton
                  text={"Get Started"}
                  isModalOpen={isModalOpen3}
                  setModalOpen={setModalOpen3}
                />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 py-24">
            <div className="relative order-2  px-4">
              <div
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto"
              >
                {/* Background layer */}
                <div className="absolute top-4 -left-4 w-full h-full bg-gradient-to-t from-[#142462] to-[#2A6A9E] rounded-xl z-0" />

                {/* Foreground image card */}
                <div className="relative z-10 w-full aspect-square overflow-hidden rounded-xl border-2 border-[#0EA4DE] shadow-lg">
                  <img
                    src={dummy}
                    alt="Person on call"
                    className="w-full h-full object-cover aspect-square"
                  />
                </div>
              </div>
              <div>
                <div className="absolute animate-float hidden md:block top-[50%] translate-x-16 left-[55%] lg:left-[45%] xl:left-72 2xl:left-96 z-10 w-full max-w-xs">
                  <div className="relative w-fit max-w-xs mx-auto">
                    {/* Background layer */}
                    <div className="absolute top-4 left-4 w-full h-full rounded-2xl border-2 border-[#0EA4DE] z-0" />

                    {/* Foreground card */}
                    <div className="relative flex gap-4 items-center z-10 bg-white border-2 rounded-2xl p-4 shadow-md border-[#142462]">
                      <Webhook className="h-8 w-8" />
                      <h3 className="font-gabarito-semibold-600 text-lg text-gray-800">
                        24/7 Australian
                        <br /> Based Support
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex flex-col gap-6">
                <h3
                  className="text-3xl xl:text-4xl font-gabarito-semibold-600"
                  data-aos="fade-right"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                >
                  Secure Business Communication Backed by Local Australian
                  Support
                </h3>
                <p
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  Stay confidently connected with EN-LINC’s secure,
                  enterprise-grade phone and internet solutions—designed to
                  deliver reliable performance for every customer and client
                  interaction.
                </p>
                <div>
                  <p
                    className="xl:text-lg font-gabarito-semibold-600"
                    data-aos="fade-right"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  >
                    Reliable & Secure Connectivity for Small to Medium
                    Businesses
                  </p>
                  <p
                    className="text-sm xl:text-base"
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                  >
                    Ensure every call, message, and connection is protected and
                    crystal-clear. Our network infrastructure is built for
                    business continuity, safeguarding your communications with
                    end-to-end encryption and minimal downtime.
                  </p>
                </div>
                <div>
                  <p
                    className="xl:text-lg font-gabarito-semibold-600"
                    data-aos="fade-right"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    24/7 Australian-Based Support You Can Count On
                  </p>
                  <p
                    className="text-sm xl:text-base"
                    data-aos="fade-right"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                  >
                    Enjoy personalised service from EN-LINC’s locally-based
                    support team. We’re here around the clock to resolve issues
                    quickly, offer expert advice, and ensure your systems are
                    always performing at their best.
                  </p>
                </div>

                <ModalButton
                  fade="right"
                  text={"Get Started"}
                  isModalOpen={isModalOpen3}
                  setModalOpen={setModalOpen3}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* FEATURES SECTION */}
      <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] h-fit py-12 px-4">
        <Container>
          <div className="">
            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="text-center text-white m-8 text-3xl xl:text-4xl font-gabarito-bold-700"
            >
              What Your Business Needs
            </h3>
            {/* <div className="flex"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl">
              {/* <div className="flex gap-8"> */}
              {featureData.map((data, index) => (
                // <div className="">

                <FeatureCard
                  key={index}
                  index={index}
                  text={data.text}
                  description={data.description}
                />
                // </div>
              ))}
              {/* <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard />
              <FeatureCard /> */}
            </div>
            {/* </div> */}
          </div>
        </Container>
      </div>
      {/* CONTENT SWITCHER SECTION */}
      <div className="py-12 px-4">
        <Container>
          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="text-center font-gabarito-semibold-600 text-3xl lg:text-4xl mb-4"
          >
            Seamless Onboarding Included with Every Plan!
          </h3>
          {/* <p className="text-center text-base lg:text-lg mb-4">
            Guided Setup, Done Your Way
          </p> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-center max-w-6xl mx-auto p-4">
            {/* Tabs */}
            <div className="flex flex-col justify-center h-full gap-4">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={`rounded-full border px-4 py-2 text-lg font-gabarito-semibold-600 transition-all duration-300
              ${
                index === activeIndex
                  ? "bg-gradient-to-r from-[#142462] to-[#2A6A9E] text-white border-2 border-[#142462]"
                  : "border-2 border-black text-black hover:bg-gray-200"
              }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="relative max-w-md flex justify-center items-center w-full mx-auto h-full">
              {/* Background layer */}
              <div className="absolute top-4 left-4 w-full h-full rounded-xl bg-gradient-to-t from-[#142462] to-[#2A6A9E] z-0" />

              {/* Card */}
              <div className="relative z-10 bg-white border-2 border-[#142462] rounded-xl p-6 shadow-md">
                <div
                  key={fadeKey} // Ensures fresh re-render
                  className="transition-opacity duration-500 ease-in-out opacity-100 animate-fade"
                >
                  <img
                    src={tabs[activeIndex].image}
                    alt={tabs[activeIndex].title}
                    className="w-full h-52 object-cover rounded-md mb-4 transition-all duration-500"
                  />
                  <h2 className="text-2xl text-center font-bold text-gray-900 mb-2 transition-all duration-500">
                    {tabs[activeIndex].title}
                  </h2>
                  <p className="text-sm text-center text-gray-700 transition-all duration-500">
                    {tabs[activeIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* REVIEWS SECTIONS */}
      <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] h-fit py-12 px-4">
        <Container>
          <div>
            <h3
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="text-3xl xl:text-4xl text-white text-center"
            >
              Why Business Owners Trust En linc
            </h3>
          </div>
          <div>
            <ReviewSlider />
          </div>
        </Container>
      </div>
      {/* FAQ SECTION */}
      <FAQSection />
    </div>
  );
};

export default Home;
