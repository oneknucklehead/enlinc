import React from "react";
import FormBanner from "../../sections/FormBanner";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import Button from "../../components/Button";
import FeatureCard2 from "../../components/FeatureCard2";
import { PhoneForwarded } from "lucide-react";
import Banner from "../../components/Banner";
import img1 from "../../assets/images/Product/BusinessPhoneSolutions/1.webp";
import img2 from "../../assets/images/Product/BusinessPhoneSolutions/2.webp";

const BusinessPhoneSystems = () => {
  const cardData = [
    {
      title: "Voicemail Delivered to Your Inbox",
      description:
        "Access voicemails instantly through your email, making it easy to stay connected and respond on the go.",
    },
    {
      title: "Smart Call Routing",
      description:
        "Manage incoming calls more effectively with intelligent features like simultaneous ringing, hunt groups, and priority call forwarding.",
    },
    {
      title: "Call Recording and Playback",
      description:
        "Monitor call quality, support training initiatives, and maintain compliance with easy-to-access call recordings.",
    },
    {
      title: "Automatic Call Forwarding",
      description:
        "Never miss a critical conversation—seamlessly redirect calls to your mobile or alternative lines when you’re out of the office.",
    },
    {
      title: "AI-Powered Virtual Receptionist",
      description:
        "Enhance your first point of contact with automated call answering that efficiently guides callers to the right department or team member.",
    },
    {
      title: "Personalised Greetings and Messaging",
      description:
        "Create a branded caller experience with custom greetings, professional voicemail prompts, and engaging on-hold messaging.",
    },
  ];
  return (
    <div className="">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection img={img1} reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Business Phone Solutions
              </h1>

              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  At EN-LINC, we deliver intelligent, scalable phone systems
                  built to match the demands of modern businesses. Our tailored
                  communication solutions are designed to keep your teams
                  connected, productive, and ready for growth—no matter your
                  industry or size.
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
          <ContentSection img={img2}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Future-Ready Business Phone Systems
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
                        <b>Enterprise-Grade PBX Systems</b>
                        For businesses seeking full control and high call
                        quality, traditional PBX solutions deliver reliability
                        and advanced features on-site. While they involve a
                        higher initial setup, they offer unmatched performance
                        for organisations that want total system ownership.
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
                        <b>Cloud-Driven VoIP Systems</b>
                        VoIP solutions connect your business to the world via
                        high-speed internet, offering unmatched flexibility,
                        lower running costs, and powerful features like mobile
                        access, smart call routing, voicemail-to-email, and
                        real-time analytics—perfect for remote workforces and
                        scaling businesses.
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
                        <b>Smart Hybrid Solutions</b>
                        Hybrid systems give you the best of both worlds—blending
                        PBX stability with the mobility and cost-efficiency of
                        VoIP. Whether you’re transitioning to the cloud or
                        managing multiple locations, hybrid communication
                        ensures your business stays flexible, future-proof, and
                        ready for growth.
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
            Advanced Capabilities of EN-LINC Business Phone Systems
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-[#142462]/80">
            Built for today’s digital-first businesses, EN-LINC’s communication
            platforms integrate intelligent technologies that enhance
            performance, security, and customer engagement. Key capabilities
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
      <Banner />
    </div>
  );
};

export default BusinessPhoneSystems;
