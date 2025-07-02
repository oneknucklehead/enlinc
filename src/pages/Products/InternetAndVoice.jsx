import { PhoneForwarded } from "lucide-react";
import React from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import Button from "../../components/Button";
import FeatureCard2 from "../../components/FeatureCard2";
import Banner from "../../components/Banner";
import img1 from "../../assets/images/Product/InternetAndVoice/1.webp";
import img2 from "../../assets/images/Product/InternetAndVoice/2.webp";
import img3 from "../../assets/images/Product/InternetAndVoice/3.webp";
import logo1 from "../../assets/icons/InternetAndVoice/PNG/Fiber.png";
import logo2 from "../../assets/icons/InternetAndVoice/PNG/Ethernet.png";
import logo3 from "../../assets/icons/InternetAndVoice/PNG/InternetPackages.png";

const InternetAndVoice = () => {
  const cardData = [
    {
      title: "Ultra-Fast Fibre Connectivity",
      description:
        "Harness the power of high-speed fibre networks, providing your business with the speed and reliability needed for intensive tasks like cloud operations, video meetings, and large-scale data transfers.",
      logo: (
        <div className="flex h-6 w-6">
          <img src={logo1} alt="logo" />
        </div>
      ),
    },
    {
      title: "Enterprise-Grade Ethernet Solutions",
      description:
        "For organisations requiring dedicated bandwidth and maximum uptime, ENLINC’s Enterprise Ethernet delivers a private, high-capacity connection with symmetrical upload and download speeds, backed by guaranteed service levels.",
      logo: (
        <div className="flex h-6 w-6">
          <img src={logo2} alt="logo" />
        </div>
      ),
    },
    {
      title: "Customisable Internet Packages",
      description:
        "Whether you’re launching a startup or expanding a national enterprise, ENLINC offers flexible Internet options that adapt as your business grows — ensuring you always stay connected without compromise.",

      logo: (
        <div className="flex h-6 w-6">
          <img src={logo3} alt="logo" />
        </div>
      ),
    },
  ];
  return (
    <div className="">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection img={img1} reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Business Internet and Voice Solutions
              </h1>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  ENLINC delivers powerful Business Internet and Voice services
                  designed to keep your operations seamless and connected —
                  empowering reliable communication with your clients, teams,
                  and partners at all times.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="px-4 py-24">
        <Container>
          {/* <div className="px-4 flex justify-center flex-col gap-4 pb-24">
            <h1 className="text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Cisco: Pioneering Connectivity and Collaboration
            </h1>
            <p className="text-center xl:text-lg font-gabarito-reg-400">
              Cisco is a global leader in networking and IT, known for its
              robust, scalable, and secure communication solutions. Cisco’s
              products and technologies are designed to enhance connectivity,
              collaboration, and security for businesses of all sizes.
            </p>
          </div> */}
          <ContentSection img={img2}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Why Reliable Business Internet and Voice Solutions Are Essential
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  <ul className="space-y-4 py-2">
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
                        <b>Uninterrupted Communication</b>
                        Seamless communication is the backbone of any successful
                        business. ENLINC’s dependable Internet and Voice
                        services support everything from high-quality video
                        conferencing and VoIP phone systems to cloud-based
                        collaboration tools — ensuring your team stays connected
                        without disruption.
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
                        <b>Drive Greater Productivity</b>
                        With ENLINC’s high-speed connectivity, your business
                        benefits from faster data transfers, smoother cloud
                        operations, and real-time collaboration, helping your
                        teams work smarter and more efficiently.
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
                        <b>Boost Customer Experience</b>
                        Quick, reliable communication is key to delivering
                        outstanding customer service. ENLINC’s solutions empower
                        your business to respond faster and more effectively,
                        building stronger relationships and enhancing client
                        loyalty.
                      </span>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="w-full bg-[#fafafa] py-24">
        <Container>
          <h1 className="text-center text-black text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
            Business Internet Services by ENLINC
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-[#142462]/80">
            ENLINC empowers Australian businesses with fast, secure, and
            future-proof Internet solutions designed to scale with your success.
          </p>
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
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
      <div className="px-4 py-24">
        <Container>
          <ContentSection img={img3} reverse={true}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                What Sets ENLINC’s Internet Solutions Apart
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  <ul className="space-y-4 py-2">
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
                        <b>Blazing-Fast Speeds</b>
                        Unlock connectivity speeds of up to 1000Mbps, enabling
                        seamless data exchange, faster cloud access, and
                        efficient digital operations.
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
                        <b>Unmatched Reliability</b>
                        Our business-grade Internet services are built for
                        stability, reducing downtime and maintaining continuous
                        performance to keep your operations moving without
                        interruption.
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
                        <b>Growth-Ready Scalability</b>
                        As your business evolves, ENLINC’s flexible Internet
                        options make it easy to scale up your bandwidth,
                        ensuring you’re always equipped for expanding demands.
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
                        <b>24/7 Expert Support</b>
                        Our dedicated technical team is on hand around the clock
                        to resolve any connectivity issues quickly, so you can
                        focus on running your business with confidence.
                      </span>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <Banner />
    </div>
  );
};

export default InternetAndVoice;
