import React from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import Button from "../../components/Button";
import FeatureCard2 from "../../components/FeatureCard2";
import Banner from "../../components/Banner";
import FormBanner from "../../sections/FormBanner";

const Office = () => {
  const cardData = [
    {
      title: "Cloud-Based Phone Systems",
      description:
        "Our cloud-based solutions provide flexibility, scalability, and ease of management, with features such as automatic updates, disaster recovery, and remote access.",
    },
    {
      title: "On-Premises PBX Systems",
      description:
        "For businesses that require complete control over their telecommunication infrastructure, our on-premises PBX systems offer robust performance and advanced features.",
    },
    {
      title: "Hybrid Phone Systems",
      description:
        "Combining the reliability of on-premises systems with the flexibility of cloud solutions, our hybrid systems offer the best of both worlds.",
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
                Office Phone Systems
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  At Nexgen Australia, we offer advanced office phone systems
                  that cater to the diverse needs of modern businesses.
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
          <ContentSection reverse={true}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Understanding Office Phone Systems
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Office phone systems are essential telecommunication tools
                  that facilitate internal and external communication within an
                  organisation. They come in various forms, including
                  traditional PBX systems, VoIP systems, and hybrid systems that
                  combine the best features of both. The right office phone
                  system can significantly impact your business operations by
                  ensuring efficient call handling, reducing costs, and
                  improving overall communication.
                </p>
              </div>

              <div className="flex justify-center items-center lg:justify-start lg:items-start">
                <Button classname={"px-8 py-2"}>Start your free demo</Button>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="w-full bg-[#fafafa] py-24">
        <Container>
          <h1 className="text-center text-black text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
            Enlinc Office Phone System Solutions
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-[#142462]/80">
            At enlinc Australia, we offer a range of office phone system
            solutions tailored to meet the specific needs of modern businesses.
            Our solutions include:
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
                Advantages of Hybrid Phone Systems
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Hybrid office phone systems combine the best features of
                  cloud-based and on-premises systems, offering a flexible and
                  reliable solution for businesses:
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
                        <b>Flexibility and Control: </b> With years of Hybrid
                        systems provide the flexibility of cloud-based systems
                        with the control and customization options of
                        on-premises systems.
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
                        <b> Redundancy: </b>
                        By combining cloud and on-premises solutions, hybrid
                        systems offer redundancy, ensuring reliable performance
                        even in the event of system failures.
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
                        <b>Scalability: </b>
                        Hybrid systems can be easily scaled to accommodate
                        business growth, providing a future-proof solution that
                        evolves with your needs.
                      </span>
                    </li>
                  </ul>
                </p>
              </div>

              <div className="flex justify-center items-center lg:justify-start lg:items-start">
                <Button classname={"px-8 py-2"}>Start your free demo</Button>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
    </div>
  );
};

export default Office;
