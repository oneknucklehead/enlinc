import { PhoneForwarded } from "lucide-react";
import React from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import Button from "../../components/Button";
import FeatureCard2 from "../../components/FeatureCard2";
import Banner from "../../components/Banner";

const InternetAndVoice = () => {
  const cardData = [
    {
      logo: <PhoneForwarded className="h-5 w-5" />,

      title: "Business Fibre",
      description:
        "Our fibre optic internet solutions deliver ultra-fast speeds, ensuring your business has the bandwidth required for heavy data usage, video conferencing, and more.",
    },
    {
      title: "NBN Enterprise Ethernet:",
      description:
        "For businesses needing a dedicated and reliable connection, our NBN Enterprise Ethernet provides high-speed, symmetrical internet with guaranteed performance.",
    },
    {
      title: "Scalable Plans",
      description:
        "We offer scalable internet plans that grow with your business. Whether you are a small startup or a large enterprise, we have a plan to fit your needs.",
    },
  ];
  return (
    <div className="">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection reverse={true}>
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
          <ContentSection>
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
                        <b>Seamless Communication: </b>
                        Reliable internet and voice services are essential for
                        seamless communication. Whether it's a video conference
                        call, VoIP phone system, or cloud-based collaboration
                        tools, having a stable connection ensures uninterrupted
                        operations.
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
                        <b>Enhanced Productivity: </b>
                        High-speed internet allows for faster data transfer,
                        efficient cloud computing, and real-time collaboration,
                        significantly boosting productivity.
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
                        <b>Customer Satisfaction: </b>
                        Quick and efficient communication with clients enhances
                        customer service, leading to higher satisfaction and
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
            Enlinc's Business Internet Solutions
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-[#142462]/80">
            Enlinc Australia provides a range of high-speed internet services
            tailored to meet the needs of businesses of all sizes. Our offerings
            include:
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
          <ContentSection reverse={true}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Key Features of Our Business Internet Services
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
                        <b>High-Speed Connectivity</b>
                        Experience speeds up to 1000Mbps, allowing for rapid
                        data transfers and efficient operations.
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
                        <b>Reliability</b>
                        Our internet services are designed to provide consistent
                        and reliable connectivity, minimising downtime and
                        ensuring business continuity.
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
                        <b>Scalability</b>
                        Easily upgrade your plan as your business grows,
                        ensuring you always have the bandwidth you need.
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
                        <b>24/7 Support</b>
                        Our dedicated support team is available around the clock
                        to assist with any issues, ensuring your internet
                        connection remains stable and reliable.
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
