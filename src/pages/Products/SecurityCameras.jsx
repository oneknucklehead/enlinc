import React from "react";
import ContentSection from "../../sections/ContentSection";
import Container from "../../components/Container";
import Button from "../../components/Button";
import FeatureCard2 from "../../components/FeatureCard2";
import { PhoneForwarded } from "lucide-react";

const SecurityCameras = () => {
  const cardData = [
    {
      logo: <PhoneForwarded className="h-5 w-5" />,

      title: "High-Definition Video",
      description:
        "Capture clear, detailed footage with our high-definition cameras, ensuring that no detail goes unnoticed.",
    },
    {
      title: "Night Vision",
      description:
        "Ensure round-the-clock security with cameras that provide clear images even in complete darkness.",
    },
    {
      title: "Remote Access",
      description:
        "Monitor your premises from anywhere using our secure remote access feature, available on smartphones, tablets, and computers.",
    },
    {
      title: "Motion Detection",
      description:
        "Receive instant alerts when motion is detected, allowing for quick response to potential security threats.",
    },
    {
      title: "Weatherproof Design",
      description:
        "Our cameras are built to withstand harsh weather conditions, ensuring reliable performance in any environment.",
    },
    {
      title: "Scalable Solutions",
      description:
        "Easily expand your surveillance network as your business grows, with systems designed to scale according to your needs.",
    },
  ];
  return (
    <div className=" py-12">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Business Security Cameras
              </h1>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Ensuring the safety and security of your business premises is
                  paramount. Business security cameras provide a robust solution
                  to monitor activities, deter criminal behaviour, and safeguard
                  your assets. At Nexgen Australia, we offer state-of-the-art
                  security camera systems tailored to meet the unique needs of
                  your business.
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
                Importance of Business Security Cameras
              </h3>
              <p>
                Incorporating security cameras into your business infrastructure
                offers several advantages:
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
                        <b>Crime Deterrence: </b>
                        Visible security cameras discourage potential thieves
                        and vandals from targeting your business, reducing the
                        likelihood of criminal activities.
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
                        <b>Continuous Monitoring: </b>
                        Security cameras provide real-time surveillance,
                        enabling you to keep track of activities within and
                        around your premises at all times.
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
                        <b>Evidence Collection: </b>
                        In the event of an incident, high-definition footage
                        from security cameras can be critical for investigations
                        and legal proceedings.
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
                        <b>Employee Safety: </b>
                        Cameras help ensure compliance with safety protocols and
                        monitor high-risk areas, contributing to a safer
                        workplace.
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
                        <b>Customer Confidence: </b>A well-monitored environment
                        reassures customers, enhancing their trust and
                        confidence in your business.
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
            Advanced Features of Enlinc's Business Security Cameras
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-[#142462]/80">
            At Enlinc Australia, our security camera systems are equipped with
            advanced features designed to provide comprehensive surveillance and
            peace of mind:
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
