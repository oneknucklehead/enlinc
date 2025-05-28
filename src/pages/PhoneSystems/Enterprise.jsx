import React from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import Button from "../../components/Button";
import FormBanner from "../../sections/FormBanner";
import FeatureCard2 from "../../components/FeatureCard2";
import Banner from "../../components/Banner";
import img1 from "../../assets/images/PhoneSystems/enterprise/1.jpg";
import img2 from "../../assets/images/PhoneSystems/enterprise/2.jpg";
import img3 from "../../assets/images/PhoneSystems/enterprise/3.jpg";

const Enterprise = () => {
  const cardData = [
    {
      title: "Complete Control",
      description:
        "Manage every aspect of your phone system, from advanced customizations to seamless integration with your existing IT environment — all on your terms.",
    },
    {
      title: "Enhanced Security",
      description:
        "With an on-premises setup, you control your security protocols, ensuring sensitive communications and data are protected according to your standards.",
    },
    {
      title: "Greater Reliability",
      description:
        "Stay connected even during internet outages. On-premises PBX systems operate independently of internet connections, delivering consistent, uninterrupted performance.",
    },
  ];
  return (
    <div>
      {/* HERO SECTION */}
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection img={img1} reverse={true}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Enterprise Phone Systems
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  EN-LINC delivers advanced enterprise phone systems built for
                  modern Australian businesses—offering scalable VoIP solutions,
                  powerful features, and reliable performance to support complex
                  communication needs.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <FormBanner />
      <div className="px-4 py-24">
        <Container>
          <ContentSection img={img2} reverse={true}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Everything You Need to Know About Enterprise Phone Systems
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Enterprise phone systems are advanced business communication
                  solutions designed to manage high call volumes, support
                  multiple users and departments, and deliver robust,
                  feature-rich functionality for large organisations. These
                  systems can be deployed as on-premise, cloud-based, or hybrid
                  solutions—offering maximum flexibility, scalability, and
                  control to meet the complex needs of enterprise-level
                  operations.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="w-full bg-[#fafafa] py-24">
        <Container>
          <h1 className="text-center text-black text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
            The Business Advantages of Hosting Your Own PBX System
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-[#142462]/80">
            On-premises PBX systems provide unique benefits for businesses that
            need greater control, security, and customisation over their
            telecommunication infrastructure. These in-house solutions are ideal
            for organisations that demand advanced call management, direct
            hardware oversight, and tailored system configurations.
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
      <div className="px-4 py-24">
        <Container>
          <ContentSection img={img3}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Why Choose EN-LINC for Your Enterprise Phone System?
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Partnering with EN-LINC means choosing a trusted Australian
                  provider committed to delivering high-quality enterprise phone
                  systems and exceptional customer service. Here's why
                  businesses across Australia rely on us:
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
                        <b>Industry Expertise and Proven Experience</b>With
                        years of experience in the telecommunications industry,
                        EN-LINC’s team brings the knowledge, insights, and
                        technical skills needed to deliver enterprise-grade
                        communication solutions that support your business
                        growth.
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
                        <b>Customised Solutions for Every Business</b> We
                        understand that no two businesses are alike. EN-LINC
                        designs tailored phone system solutions to meet your
                        specific needs, ensuring maximum performance,
                        scalability, and cost-efficiency.
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
                        <b>Dedicated Local Support, 24/7</b>Our Australian-based
                        support team is always available to assist you—from
                        installation and setup to ongoing maintenance and
                        troubleshooting—keeping your communication systems
                        running flawlessly.
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
                        <b>Cutting-Edge Technology for Modern Enterprises</b>
                        At EN-LINC, we stay ahead of the curve, providing the
                        latest innovations in VoIP, hosted PBX, and hybrid
                        communication systems to ensure your business stays
                        connected, competitive, and future-ready.
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

export default Enterprise;
