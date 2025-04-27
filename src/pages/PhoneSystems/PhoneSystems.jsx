import React from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import Button from "../../components/Button";
import MultiStepForm from "../../components/MultiStepForm";
import savings from "../../assets/images/Savings.png";
import FeatureCard2 from "../../components/FeatureCard2";
import {
  CircleDot,
  Database,
  Mail,
  Music,
  Phone,
  PhoneForwarded,
  Settings,
  Share2,
  Users,
} from "lucide-react";
import FeatureCard3 from "../../components/FeatureCard3";
import Banner from "../../components/Banner";
import FormBanner from "../../sections/FormBanner";

const PhoneSystems = () => {
  const cardData = [
    {
      title: "Voicemail to Email",
      description:
        "Receive voicemail messages straight to your inbox, so you can listen to your messages anytime, anywhere on your computer or mobile device.",
      logo: <Mail className="h-5 w-5" />,
    },
    {
      title: "Hunt Group",
      description:
        "Distribute your incoming calls to the relevant phone line after a caller makes a choice regarding the purpose of their call.",
      logo: <Share2 className="h-5 w-5" />,
    },
    {
      title: "Auto attendant",
      description:
        "Transfer calls via a voice menu system without the need of having a telephone operator or receptionist.",
      logo: <Settings className="h-5 w-5" />,
    },
    {
      title: "Music on hold",
      description:
        "Prevent your callers from hanging up the phone by keeping them engaged while waiting to speak with the person on the other line.",
      logo: <Music className="h-5 w-5" />,
    },
    {
      title: "Call anywhere",
      description:
        "Receive all the capabilities of a full business phone desk on your mobile device, so you can take your work with you wherever you go.",
      logo: <Phone className="h-5 w-5" />,
    },
    {
      title: "Conference Calls",
      description:
        "Conduct virtual meetings over the phone with numerous people using high quality conference call functionality.",
      logo: <Users className="h-5 w-5" />,
    },
    {
      title: "Call Recording",
      description:
        "Build a better customer experience by recording and saving your telephone conversations in a digital audio file format.",
      logo: <CircleDot className="h-5 w-5" />,
    },
    {
      title: "Call Accounting",
      description:
        "Capture all of your phone records, usage and costs using our specialised software or hardware.",
      logo: <Database className="h-5 w-5" />,
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
    <div className="">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection video={true} reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Phone Systems
              </h1>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Save Money And Make Communication Easy With Australia’s
                  Leading Small Business Phone System Experts
                </p>
              </div>

              <div className="flex justify-center items-center lg:justify-start lg:items-start">
                <Button classname={"px-8 py-2"}>Start your free demo</Button>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <FormBanner />
      <div className="px-4 py-24">
        <Container>
          <ContentSection>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                The Leaders in VoIP and Office Phone System Technology
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Hence the emergence of a multitude of office telephone systems
                  and VoIP Phones in Australia. On-site IP Phones, cloud-hosted
                  or office phones, hybrid VoIP phone systems or IP, PABX, video
                  conferencing, call management functionality. We cannot imagine
                  a world without an office telephone and VoIP phone technology.
                </p>
                <div className="py-4">
                  <p className="text-center md:text-start xl:text-lg font-gabarito-semibold-600">
                    What Is The Best Kind of Office Phone System?
                  </p>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Deciding on the best phone system for your office can be
                    tough. Every business is different and what works for one
                    office might not work for another. With dozens of office
                    phone and VoIP Phones on the market, there are a few things
                    you need to consider.
                    <ul className="space-y-4 py-4">
                      <li className="flex items-start gap-3">
                        {/* SVG Bullet */}
                        <svg
                          className="w-7 h-7 text-[#2A6A9E]  flex-shrink-0 mt-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {/* Text */}
                        <span className="text-gray-700 transition-colors duration-300 hover:text-black">
                          What kind of office phone system do you want?
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        {/* SVG Bullet */}
                        <svg
                          className="w-7 h-7 text-[#2A6A9E]  flex-shrink-0 mt-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {/* Text */}
                        <span className="text-gray-700 transition-colors duration-300 hover:text-black">
                          Are you comfortable using a Voice over Internet
                          Protocol (VoIP) business phone systems, which runs
                          over the internet, or do you want to stick with a
                          reliable landline telephone service?
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        {/* SVG Bullet */}
                        <svg
                          className="w-7 h-7 text-[#2A6A9E]  flex-shrink-0 mt-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {/* Text */}
                        <span className="text-gray-700 transition-colors duration-300 hover:text-black">
                          How many phone lines and extensions do you need?
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        {/* SVG Bullet */}
                        <svg
                          className="w-7 h-7 text-[#2A6A9E] flex-shrink-0 mt-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {/* Text */}
                        <span className="text-gray-700 transition-colors duration-300 hover:text-black">
                          How do you want staff to use the system? This is where
                          having the right features counts.
                        </span>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center lg:justify-start lg:items-start">
                <Button classname={"px-8 py-2"}>Start your free demo</Button>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="px-4 py-24">
        <Container>
          <ContentSection reverse={true}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                The Cost of Setting up an Office Phone System
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  If you’re starting up your business, you may wish to save on
                  costs by using a domestic phone system. Office phone system’s
                  generally cost more; however, it’s what you’re getting for
                  your money that sets them apart. Research the various features
                  of office phone systems and consider whether they would be of
                  benefit to you. Office phone systems, however, generally offer
                  cheaper phone line packages. This may be more suitable if you
                  are making and receiving a higher volume of calls in the long
                  run.
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
            Features you must have for your Business
          </h1>
          {/* <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-white">
            We have everything your small business needs to manage your calls
            with ease! Some of the common phone features you shouldn't be
            without include:
          </p> */}
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
            <ContentSection>
              <div className="text-center md:text-start flex flex-col gap-6">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                  One System – Countless Possibilities
                </h1>
                <div>
                  {/* <p className="text-center md:text-start xl:text-lg font-gabarito-semibold-600">
                    What is Lorem Ipsum?
                  </p> */}
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    When it comes to your business, we understand that you’re
                    looking for the best of the best – whatever it takes. If
                    you’re looking for a phone system unparalleled by any other,
                    then the search ends here.Future proof your business and
                    grow with us by taking advantage of our premium business
                    phone system and competitive pricing. We offer you the tools
                    that you need to grow your business all in one convenient
                    place.
                  </p>
                </div>
                <div>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-semibold-600">
                    Upgrade Your Phone System Today
                  </p>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Make the switch today to explore the comprehensive range of
                    communication solutions we offer – all for an affordable
                    monthly rate. If you’re looking for a phone system that
                    gives your business its best chances at success, the search
                    ends here. Get started by contacting us via our website
                    today!
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
      </div>
    </div>
  );
};

export default PhoneSystems;
