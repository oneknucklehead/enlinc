import React from "react";
import Container from "../../components/Container";
import FeatureCard2 from "../../components/FeatureCard2";
import ContentSection from "../../sections/ContentSection";
import Button from "../../components/Button";
import { PhoneForwarded } from "lucide-react";
import img1 from "../../assets/images/Product/IT/1.webp";
import logo1 from "../../assets/icons/ManagedITService/PNG/SystemMonitoring.png";
import logo2 from "../../assets/icons/ManagedITService/PNG/DataBackup.png";
import logo3 from "../../assets/icons/ManagedITService/PNG/Cybersecurity.png";
import logo4 from "../../assets/icons/ManagedITService/PNG/ITSupport.png";
import logo5 from "../../assets/icons/ManagedITService/PNG/OptimizedNetwork.png";
import logo6 from "../../assets/icons/ManagedITService/PNG/TailoredCloud.png";
import logo7 from "../../assets/icons/ManagedITService/PNG/ITConsulting.png";
const ManagedITServices = () => {
  const cardData = [
    {
      title: "Proactive System Monitoring and Maintenance",
      description:
        "We keep your systems healthy with real-time monitoring, automated updates, and preventive maintenance—resolving issues before they can disrupt your operations.",
      logo: (
        <div className="flex h-6 w-6">
          <img src={logo1} alt="logo" />
        </div>
      ),
    },
    {
      title: "Secure Data Backup and Rapid Recovery",
      description:
        "Protect critical business data with our secure backup solutions. If unexpected data loss occurs, our fast recovery processes minimise downtime and restore your information quickly and safely.",
      logo: (
        <div className="flex h-6 w-6">
          <img src={logo2} alt="logo" />
        </div>
      ),
    },
    {
      title: "Advanced Cybersecurity Protection",
      description:
        "Safeguard your business with multi-layered security strategies, including threat detection, managed firewalls, endpoint protection, and ransomware defence.",
      logo: (
        <div className="flex h-6 w-6">
          <img src={logo3} alt="logo" />
        </div>
      ),
    },
    {
      title: "Round-the-Clock IT Support",
      description:
        "Our dedicated Australian-based support team is available 24/7 to troubleshoot technical issues, ensuring your systems stay operational and your teams stay productive.",
      logo: (
        <div className="flex h-6 w-6">
          <img src={logo4} alt="logo" />
        </div>
      ),
    },
    {
      title: "Optimised Network Management",
      description:
        "We oversee your entire network environment—from routers to Wi-Fi access points—to guarantee fast, stable, and secure connectivity across all your business locations.",
      logo: (
        <div className="flex h-6 w-6">
          <img src={logo5} alt="logo" />
        </div>
      ),
    },
    {
      title: "Tailored Cloud Solutions",
      description:
        "EN-LINC helps you transition to the cloud seamlessly, offering cloud infrastructure management, data migration services, and scalable hosting options to enhance business agility.",
      logo: (
        <div className="flex h-6 w-6">
          <img src={logo6} alt="logo" />
        </div>
      ),
    },
    {
      title: "Strategic IT Consulting Services",
      description:
        "Plan smarter and scale faster with expert guidance from EN-LINC’s IT consultants, ensuring every technology investment drives real business results.",
      logo: (
        <div className="flex h-6 w-6">
          <img src={logo7} alt="logo" />
        </div>
      ),
    },
  ];
  return (
    <div className="">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection img={img1} reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Managed IT Services
              </h1>

              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  At EN-LINC, our Managed IT Services take the complexity out of
                  technology management. We deliver proactive support,
                  continuous monitoring, and expert solutions, allowing your
                  business to stay focused on growth while we handle your IT
                  infrastructure with precision and care.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>

      <div className="w-full bg-[#fafafa] py-24">
        <Container>
          <h1 className="text-center text-black text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
            EN-LINC’s Managed IT Services
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-[#142462]/80">
            EN-LINC delivers complete Managed IT Services designed to keep your
            business technology secure, reliable, and ready for growth. Our
            flexible solutions are built to meet your unique operational needs,
            so you can focus on what matters most—running your business.
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
