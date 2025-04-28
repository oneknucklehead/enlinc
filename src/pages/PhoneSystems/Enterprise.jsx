import React from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import Button from "../../components/Button";
import FormBanner from "../../sections/FormBanner";
import FeatureCard2 from "../../components/FeatureCard2";
import Banner from "../../components/Banner";

const Enterprise = () => {
  const cardData = [
    {
      title: "Control",
      description:
        "On-premises systems provide businesses with complete control over their phone system, including customization and integration with existing IT infrastructure.",
    },
    {
      title: "Security",
      description:
        "With on-premises systems, businesses can implement their own security measures, ensuring that sensitive communications are protected.",
    },
    {
      title: "Reliability",
      description:
        "On-premises systems are not dependent on internet connectivity, ensuring reliable performance even in the event of internet outages.",
    },
  ];
  return (
    <div>
      {/* HERO SECTION */}
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection reverse={true}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Enterprise Phone Systems
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Nexgen Australia provides state-of-the-art enterprise phone
                  systems designed to meet the complex needs of modern
                  businesses, offering advanced features, scalability, and
                  robust performance.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <FormBanner />
      <div className="px-4 py-24">
        <Container>
          <ContentSection reverse={true}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Understanding Enterprise Phone Systems
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Enterprise phone systems are sophisticated telecommunication
                  solutions that handle high call volumes, support multiple
                  extensions, and offer a range of advanced features tailored to
                  large organisations. These systems can be deployed
                  on-premises, in the cloud, or as a hybrid solution, combining
                  the best of both worlds.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="w-full bg-[#fafafa] py-24">
        <Container>
          <h1 className="text-center text-black text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
            Advantages of On-Premises PBX Systems
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-[#142462]/80">
            On-premises PBX systems also offer distinct advantages, particularly
            for businesses that require more control over their
            telecommunication infrastructure:
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
          <ContentSection>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Why Choose Nexgen Australia?
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Choosing Nexgen Australia for your enterprise phone system
                  needs ensures you receive top-quality products and exceptional
                  service. Here’s why you should partner with us:
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
                        <b>Expertise and Experience:</b> With years of
                        experience in the telecommunications industry, our team
                        has the knowledge and expertise to provide the best
                        enterprise phone system solutions.
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
                        <b>Tailored Solutions:</b> We understand that every
                        business is unique. Our solutions are customised to meet
                        your specific needs and requirements, ensuring optimal
                        performance and efficiency.
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
                        <b>Reliable Support:</b> Our dedicated support team is
                        always available to assist you with installation,
                        maintenance, and any technical issues, ensuring your
                        system runs smoothly.
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
                        <b>Cutting-EdgeTechnology:</b> We stay at the forefront
                        of technological advancements to provide you with the
                        most effective and reliable communication solutions.
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
