import React from "react";
import Container from "../../components/Container";
import FeatureCard2 from "../../components/FeatureCard2";
import ContentSection from "../../sections/ContentSection";
import Button from "../../components/Button";
import { PhoneForwarded } from "lucide-react";

const ManagedITServices = () => {
  const cardData = [
    {
      logo: <PhoneForwarded className="h-5 w-5" />,
      title: " Proactive Monitoring and Maintenance",
      description:
        "Our team continuously monitors your IT systems to detect and resolve issues before they impact your operations. Regular maintenance ensures your systems remain up-to-date and perform optimally.",
    },
    {
      title: "Data Backup and Recovery",
      description:
        "We provide a comprehensive range of cybersecurity services, including threat detection, firewall management, and antivirus protection, to keep your business secure.",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Automate call handling with a virtual receptionist that can direct calls to the appropriate department or individual.",
    },
    {
      title: "24/7 IT Support",
      description:
        "Our IT support team is available around the clock to assist with any technical issues, ensuring minimal disruption to your business operations.",
    },
    {
      title: "Network Management",
      description:
        "We manage your network infrastructure to ensure reliable and high-performance connectivity, supporting your business’s communication and data needs.",
    },
    {
      title: "Cloud Services",
      description:
        "Our cloud services help you migrate to the cloud, manage your cloud infrastructure, and leverage cloud computing benefits for increased flexibility and efficiency.",
    },
    {
      title: "IT Consulting",
      description:
        "Our IT consulting services provide strategic guidance to help you plan and implement technology solutions that align with your business objectives.",
    },
  ];
  return (
    <div className="">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Manage IT Services
              </h1>

              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Managed IT Services provide businesses with comprehensive IT
                  support and management, allowing them to focus on their core
                  activities while ensuring their technology needs are met by
                  experts.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>

      <div className="w-full bg-[#fafafa] py-24">
        <Container>
          <h1 className="text-center text-black text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
            Enlinc Australia’s Managed IT Services
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-[#142462]/80">
            At enlinc Australia, we offer a comprehensive suite of Managed IT
            Services tailored to meet the specific needs of your business. Our
            solutions include:
          </p>
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 py-8">
            {cardData.map((data, index) => (
              <div className="max-w-[270px] flex" key={index}>
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

export default ManagedITServices;
