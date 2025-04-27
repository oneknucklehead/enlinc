import React from "react";
import Container from "../components/Container";
import ContentSection from "../sections/ContentSection";
import Button from "../components/Button";
import MultiStepForm from "../components/MultiStepForm";
import savings from "../assets/images/Savings.png";
import FeatureCard2 from "../components/FeatureCard2";
import { Phone, PhoneForwarded } from "lucide-react";
import FeatureCard3 from "../components/FeatureCard3";
import Banner from "../components/Banner";

const PSSmallBusiness = () => {
  const cardData = [
    {
      logo: <PhoneForwarded className="h-5 w-5" />,
      title: "Voicemail to Email",
      description:
        "Receive voicemail messages straight to your inbox, so you can listen to your messages anytime, anywhere on your computer or mobile device.",
    },
    {
      title: "Hunt Group",
      description:
        "Distribute your incoming calls to the relevant phone line after a caller makes a choice regarding the purpose of their call.",
    },
    {
      title: "Auto attendant",
      description:
        "Transfer calls via a voice menu system without the need of having a telephone operator or receptionist.",
    },
    {
      title: "Music on hold",
      description:
        "Prevent your callers from hanging up the phone by keeping them engaged while waiting to speak with the person on the other line.",
    },
    {
      title: "Call anywhere",
      description:
        "Receive all the capabilities of a full business phone desk on your mobile device, so you can take your work with you wherever you go.",
    },
    {
      title: "Conference Calls",
      description:
        "Conduct virtual meetings over the phone with numerous people using high quality conference call functionality.",
    },
    {
      title: "Call Recording",
      description:
        "Build a better customer experience by recording and saving your telephone conversations in a digital audio file format.",
    },
    {
      title: "Call Accounting",
      description:
        "Capture all of your phone records, usage and costs using our specialised software or hardware.",
    },
  ];
  const cardData2 = [
    {
      logo: <PhoneForwarded className="h-5 w-5" />,
      title: "Voicemail to Email",
    },
    {
      logo: <Phone className="h-5 w-5" />,
      title: "Hunt Group",
    },
    {
      logo: <PhoneForwarded className="h-5 w-5" />,
      title: "Hunt Group",
    },
  ];

  return (
    <div className=" py-12">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection video={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Boost Productivity with Affordable, Future-Proof Tech
              </h1>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-semibold-600">
                  What is Lorem Ipsum?
                </p>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-semibold-600">
                  What is Lorem Ipsum?
                </p>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="flex justify-center items-center lg:justify-start lg:items-start">
                <Button classname={"px-8 py-2"}>Start your free demo</Button>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12 md:gap-4">
            <div className="text-white space-y-2">
              <span>
                <img src={savings} alt="savings" />
              </span>
              <h3 className="text-3xl">
                Smarter Phone Systems, Bigger Savings –{" "}
                <b>Slash Call Costs by Up to 75%</b>
              </h3>
              <p>Over 500 companies have already switched to En-Linc</p>
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
      <div className=" py-24">
        <Container>
          <ContentSection>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Boost Productivity with Affordable, Future-Proof Tech
              </h1>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-semibold-600">
                  What is Lorem Ipsum?
                </p>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-semibold-600">
                  What is Lorem Ipsum?
                </p>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="flex justify-center items-center lg:justify-start lg:items-start">
                <Button classname={"px-8 py-2"}>Start your free demo</Button>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] py-12">
        <Container>
          <h1 className="text-center text-white text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
            Must-have small phone system features
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-white">
            We have everything your small business needs to manage your calls
            with ease! Some of the common phone features you shouldn't be
            without include:
          </p>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
            {cardData.map((data, index) => (
              <div className="flex" key={index}>
                <FeatureCard2
                  logo={data.logo}
                  title={data.title}
                  description={data.description}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className="">
        <Container>
          <div className="py-24">
            <ContentSection reverse={true}>
              <div className="text-center md:text-start flex flex-col gap-6">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                  Boost Productivity with Affordable, Future-Proof Tech
                </h1>
                <div>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-semibold-600">
                    What is Lorem Ipsum?
                  </p>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
                <div>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-semibold-600">
                    What is Lorem Ipsum?
                  </p>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
                <div className="flex justify-center items-center lg:justify-start lg:items-start">
                  <Button classname={"px-8 py-2"}>Start your free demo</Button>
                </div>
              </div>
            </ContentSection>
          </div>
        </Container>
        <div className="w-full mx-auto">
          <Banner>
            <div className="text-white max-w-xl flex flex-col gap-4 justify-center h-full">
              <h1 className="text-center lg:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Upgrade to the latest small business phone system technology and
                save up to 70% Off on your calls
              </h1>
              <p className="text-center lg:text-start xl:text-lg font-gabarito-reg-400">
                Start your free demo below
              </p>
              <button className="border-2 border-white rounded-full px-8 py-2">
                Start your free demo
              </button>
            </div>
          </Banner>
        </div>
        <Container>
          <div className="text-center pt-24 pb-12">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Most popular small business phone systems
            </h1>
            <p className="pt-3 pb-8 text-center xl:text-lg font-gabarito-reg-400 p-2">
              Our best picks include the DT930 by NEC, which is equipped with
              loads of functionality for smart communications, and is an
              affordable option built specifically for smal businesses
            </p>
            <div className="max-w-6xl mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-4">
              {cardData2.map((data, index) => (
                <div key={index} className="">
                  <FeatureCard3 title={data.title} logo={data.logo} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PSSmallBusiness;
