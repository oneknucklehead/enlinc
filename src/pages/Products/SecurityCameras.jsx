import React from "react";
import ContentSection from "../../sections/ContentSection";
import Container from "../../components/Container";
import Button from "../../components/Button";
import FeatureCard2 from "../../components/FeatureCard2";
import { PhoneForwarded } from "lucide-react";

const SecurityCameras = () => {
  const cardData = [
    {
      title: "High-Resolution Imaging",
      description:
        "Capture every moment in crystal-clear detail with ENLINC’s high-resolution camera technology, ensuring critical visuals are never missed.",
    },
    {
      title: "Smart Motion Detection",
      description:
        "Stay ahead of potential threats with intelligent motion sensing. Receive real-time alerts whenever unusual activity is detected on your premises.",
    },
    {
      title: "Enhanced Night Vision",
      description:
        "Maintain full visibility even after dark. Our advanced infrared night vision technology ensures your property is monitored 24/7, regardless of lighting conditions.",
    },
    {
      title: "All-Weather Durability",
      description:
        "Designed to perform in Australia's toughest environments, ENLINC’s weatherproof cameras offer reliable surveillance in rain, heat, or storms.",
    },
    {
      title: "Secure Remote Monitoring",
      description:
        "Access live feeds and recorded footage securely from your smartphone, tablet, or computer — anytime, anywhere — giving you ultimate control and flexibility.",
    },
    {
      title: "Flexible, Scalable Systems",
      description:
        "Our modular security solutions grow with your business. Easily upgrade or expand your network without hassle, ensuring your protection evolves alongside your needs.",
    },
  ];
  return (
    <div className=" py-12">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Business Security Camera Solutions
              </h1>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Protecting your business starts with having the right
                  surveillance in place. EN-LINC offers advanced security camera
                  systems that deliver real-time monitoring, deter potential
                  threats, and help you safeguard your people, property, and
                  assets. Our tailored CCTV solutions are designed to meet the
                  specific needs of businesses across industries—ensuring peace
                  of mind and complete visibility, day and night.
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
                Why Security Cameras Are Essential for Your Business
              </h3>
              <p>
                Integrating professional-grade security cameras into your
                business operations provides a range of critical benefits:
              </p>
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
                        <b>Deter Criminal Activity</b>
                        The presence of ENLINC’s advanced surveillance systems
                        acts as a strong deterrent against theft, vandalism, and
                        unauthorized access, helping safeguard your assets.
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
                        <b>24/7 Surveillance</b>
                        Our cutting-edge security solutions offer
                        around-the-clock monitoring, ensuring you have real-time
                        visibility over your facilities, staff, and customer
                        interactions—no matter where you are.
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
                        <b>Reliable Incident Evidence</b>
                        High-definition video captured by ENLINC’s security
                        cameras serves as vital evidence in the event of
                        disputes, investigations, or insurance claims,
                        strengthening your legal position.
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
                        <b>Promote Workplace Safety</b>
                        Monitor compliance with workplace health and safety
                        standards and oversee high-risk areas to create a secure
                        environment for employees and visitors alike.
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
                        <b>Build Customer Trust</b> A well-secured premises
                        reassures customers that their safety is a priority,
                        fostering greater loyalty and enhancing your brand’s
                        reputation.
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
            Advanced Features of ENLINC’s Business Security Camera Solutions
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-[#142462]/80">
            ENLINC’s cutting-edge security camera systems are engineered with
            industry-leading features to deliver maximum protection and total
            peace of mind for your business:
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
    </div>
  );
};

export default SecurityCameras;
