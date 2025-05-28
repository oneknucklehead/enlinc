import React from "react";
import ContentSection from "../../sections/ContentSection";
import Container from "../../components/Container";
import Button from "../../components/Button";
import FeatureCard2 from "../../components/FeatureCard2";
import { PhoneForwarded } from "lucide-react";

const WebAndAppDev = () => {
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
                Website & App Development Solutions
              </h1>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Creating a strong digital presence starts with powerful,
                  custom-built platforms. We deliver website and mobile app
                  development solutions that are fast, responsive, and fully
                  tailored to your business goals. From engaging user
                  experiences to backend systems built for scale, our
                  development services help you connect with customers,
                  streamline operations, and drive measurable growth. Whether
                  you're launching a startup or upgrading enterprise
                  infrastructure, our tech-driven approach ensures your digital
                  assets are secure, scalable, and future-ready.
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
                Why Custom Websites & Apps Are Essential for Your Business
              </h3>
              {/* <p>
                Integrating professional-grade security cameras into your
                business operations provides a range of critical benefits:
              </p> */}
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
                        <b>Build Powerful Digital Experiences That Convert</b>
                        From custom websites to mobile apps, we design and
                        develop high-performance digital platforms that are
                        fast, scalable, and tailored to your business goals.
                        Whether you need an eCommerce site, a business app, or a
                        customer portal — we turn your ideas into responsive,
                        SEO-optimized solutions.
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
                        <b>Engage Users Across Every Device</b>
                        With seamless cross-platform compatibility, our web and
                        app development ensures a smooth experience on desktop,
                        tablet, and mobile. We prioritize UX/UI design, speed,
                        and accessibility to keep users engaged and conversions
                        high — no matter where your audience is.
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
                        <b>Future-Proof Your Business with Scalable Tech</b>
                        Built with modern frameworks and clean code, your
                        website or app is ready to grow with you. Our expert
                        team ensures your digital presence is secure, easy to
                        maintain, and optimized for long-term performance — so
                        you stay ahead of the competition
                      </span>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
    </div>
  );
};

export default WebAndAppDev;
