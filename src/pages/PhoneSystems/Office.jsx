import React from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import Button from "../../components/Button";
import FeatureCard2 from "../../components/FeatureCard2";
import Banner from "../../components/Banner";
import FormBanner from "../../sections/FormBanner";
import img1 from "../../assets/images/PhoneSystems/office/1.webp";
import img2 from "../../assets/images/PhoneSystems/office/2.webp";
import img3 from "../../assets/images/PhoneSystems/office/3.webp";

const Office = () => {
  const cardData = [
    {
      title: "Cloud Communication Solutions",
      description:
        "EN-LINC’s cloud-driven phone systems offer unmatched flexibility and effortless scalability, designed to keep your office connected from anywhere. Enjoy benefits like automatic system updates, built-in disaster recovery, and secure remote access—so your team stays productive no matter where they work.",
    },
    {
      title: "On-Site PBX Solutions for Total Communication Control",
      description:
        "EN-LINC’s on-premises PBX systems deliver powerful performance and full control over your office’s communication network. Built for businesses that demand reliability, advanced features, and secure in-house management, our solutions ensure your operations run smoothly and efficiently.",
    },
    {
      title: "Hybrid Communication Systems for Smarter Offices",
      description:
        "EN-LINC’s hybrid phone solutions seamlessly blend the stability of on-site systems with the agility of cloud technology, giving your office the perfect balance of control, flexibility, and future-readiness.",
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
                Office Phone Systems
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Stay ahead with EN-LINC’s flexible office phone systems,
                  designed for the demands of growing Australian businesses.
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
                Choosing the Right Office Phone System for Your Business
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Reliable communication is the backbone of every successful
                  business. Office phone systems—whether traditional PBX, VoIP,
                  or hybrid models—provide the foundation for efficient internal
                  collaboration and external customer service. EN-LINC offers
                  smart, future-ready phone solutions designed to streamline
                  operations, cut communication costs, and enhance productivity.
                  With the right system in place, your business can manage calls
                  more effectively, support remote teams, and stay connected
                  with customers, all while preparing for future growth.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="w-full bg-[#fafafa] py-24">
        <Container>
          <h1 className="text-center text-black text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
            Empowering Office Communications with EN-LINC
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-[#142462]/80">
            At EN-LINC, we craft intelligent office communication solutions that
            drive collaboration, streamline workflows, and future-proof your
            workplace. Our advanced office phone systems are built to adapt to
            your business, ensuring crystal-clear connections and effortless
            management for every team size.
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
                Why Choose EN-LINC’s Hybrid Phone Systems?
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Our hybrid communication solutions combine the strengths of
                  cloud technology and on-site systems, creating a flexible,
                  resilient, and future-ready platform for modern offices:
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
                        <b>Ultimate Flexibility and Customisation</b> Enjoy the
                        freedom of cloud connectivity while maintaining full
                        control over your internal infrastructure, with options
                        tailored precisely to your office needs.
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
                        <b>Built-In Redundancy for Uninterrupted Operations</b>
                        Hybrid setups provide a dual layer of reliability,
                        safeguarding your communications even during unexpected
                        system issues or outages.
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
                        <b>Effortless Scalability to Support Your Growth</b>
                        Expand your system easily as your business grows,
                        ensuring seamless communication without costly overhauls
                        or disruptions.
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

export default Office;
