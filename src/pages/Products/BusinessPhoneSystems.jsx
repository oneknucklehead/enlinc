import React from "react";
import FormBanner from "../../sections/FormBanner";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import Button from "../../components/Button";
import FeatureCard2 from "../../components/FeatureCard2";
import { PhoneForwarded } from "lucide-react";
import Banner from "../../components/Banner";

const BusinessPhoneSystems = () => {
  const cardData = [
    {
      logo: <PhoneForwarded className="h-5 w-5" />,
      title: "Voicemail to Email",
      description:
        "Receive voicemail messages directly in your email inbox, allowing you to access and respond to messages from anywhere.",
    },
    {
      title: "Call Recording",
      description:
        "Record inbound and outbound calls for quality assurance, training, and compliance purposes.",
    },
    {
      title: "Virtual Receptionist",
      description:
        "Automate call handling with a virtual receptionist that can direct calls to the appropriate department or individual.",
    },
    {
      title: "Intelligent Call Routing",
      description:
        "Ensure calls are answered promptly with advanced call routing features like simultaneous ringing and sequential ringing.",
    },
    {
      title: "Automated Call Forwarding",
      description:
        "Forward calls to your mobile device or another phone number, ensuring you never miss an important call.",
    },
    {
      title: "Custom Greetings and Messages",
      description:
        "Personalise your customer interactions with custom greetings and on-hold messages.",
    },
  ];
  return (
    <div className="">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Business Phone Systems
              </h1>

              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  We specialise in providing advanced business phone systems
                  that cater to the unique needs of businesses across various
                  industries.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <FormBanner />
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
                Types of Business Phone Systems
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
                        <b>Traditional PBX Systems: </b>
                        Private Branch Exchange (PBX) systems are traditional
                        on-premises phone systems that use physical hardware to
                        manage calls within an organisation. They offer robust
                        features but require significant upfront investment and
                        ongoing maintenance.
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
                        <b>VoIP Phone Systems: </b>
                        Voice over Internet Protocol (VoIP) systems use the
                        internet to make and receive calls, eliminating the need
                        for physical phone lines. These systems are scalable,
                        cost-effective, and offer advanced features like
                        voicemail to email, call recording, and virtual
                        receptionists.
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
                        <b>Hybrid Phone Systems: </b>
                        Hybrid systems combine the features of traditional PBX
                        and VoIP systems, providing the benefits of both. They
                        offer flexibility, reliability, and can be customised to
                        meet specific business needs.
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
            Key Features of Business Phone Systems
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-[#142462]/80">
            Business phone systems come with a variety of features designed to
            improve communication efficiency and enhance customer service. Some
            of the key features include:
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
      <Banner />
    </div>
  );
};

export default BusinessPhoneSystems;
