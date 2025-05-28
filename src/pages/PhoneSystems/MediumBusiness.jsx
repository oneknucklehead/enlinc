import React from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import Button from "../../components/Button";
import MultiStepForm from "../../components/MultiStepForm";
import FormBanner from "../../sections/FormBanner";
import FeatureCard2 from "../../components/FeatureCard2";
import { PhoneForwarded } from "lucide-react";
import Banner from "../../components/Banner";

import img1 from "../../assets/images/PhoneSystems/mediumBusiness/1.jpg";
import img2 from "../../assets/images/PhoneSystems/mediumBusiness/2.jpg";

const MediumBusiness = () => {
  const cardData = [
    {
      title: "Voicemail-to-Email Integration",
      description:
        "Get voicemail messages delivered directly to your email inbox—access and listen to them anytime, anywhere from your mobile phone or computer. Perfect for staying connected and responsive on the go.",
    },
    {
      title: "Smart Call Distribution (Hunt Group Feature)",
      description:
        "Automatically route incoming calls to the right department or team member based on the caller’s selection—streamlining communication and improving customer experience.",
    },
    {
      title: "Virtual Receptionist (Auto Attendant Feature)",
      description:
        "Automatically transfer incoming calls using a voice menu system—no receptionist or manual operator needed. Improve efficiency and ensure callers reach the right team or department with ease.",
    },
    {
      title: "Hold Music Feature",
      description:
        "Keep callers engaged with on-hold music or messages, reducing hang-ups while they wait to be connected to the right person.",
    },
    {
      title: "Call Anywhere, Anytime",
      description:
        "Access all the features of a full business phone system on your mobile device—stay connected and manage calls from anywhere, anytime.",
    },
    {
      title: "Built-In Audio Conferencing",
      description:
        "Host virtual meetings with multiple participants using high-quality business conference calling—ideal for seamless team collaboration and client communication.",
    },
    {
      title: "Recorded Calls Made Easy",
      description:
        "Improve customer service by recording business calls and saving them as digital audio files—ideal for quality control, staff training, and compliance.",
    },
    {
      title: "Call Reporting & Analytics",
      description:
        "Track all phone activity, call usage, and costs in real time with our advanced call accounting software—ideal for monitoring performance and managing telecom expenses.",
    },
  ];
  return (
    <div>
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection noImg={true} reverse={true}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Medium Business Phone Systems
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Lower Your Phone Bills and Streamline Communication with
                  Australia’s Leading Business VoIP Experts.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <FormBanner />
      <div className="px-4 py-24">
        <Container>
          <ContentSection img={img1}>
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Medium Business Phone Systems Built to Grow With You
              </h1>
              <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                As your business grows, so do your communication needs.
                Medium-sized businesses require more than just basic calling—you
                need a scalable phone system that supports every channel your
                team and customers use to stay connected, now and into the
                future.
                <br />
                <br />
                At EN-LINC, we specialise in delivering end-to-end business
                phone solutions designed for growing Australian companies. Our
                industry experts will tailor a system that seamlessly connects
                your teams across multiple locations, ensures crystal-clear VoIP
                calling, and enhances collaboration with advanced features like
                call routing, conferencing, CRM integration, and remote access
                tools.
                <br />
                <br />
                Whether you're scaling operations or integrating multiple
                offices, EN-LINC provides reliable, cost-effective business
                phone systems that keep you connected and competitive.
              </p>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="w-full bg-[#fafafa] py-24">
        <Container>
          <h1 className="text-center text-black text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
            Top Must-Have Phone System Features for Medium-Sized Businesses
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-[#142462]/80">
            If you’re looking for an enterprise-grade business phone system
            packed with powerful features—without the hefty price tag—you’re in
            the right place. Today’s growing businesses need advanced
            communication tools to stay competitive, connected, and efficient.
          </p>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
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
          <ContentSection reverse={true} img={img2}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                See Why EN-LINC Is Australia’s Trusted Telecom Partner
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  At EN-LINC, we deliver premium phone systems for medium-sized
                  businesses by partnering with some of the world’s most trusted
                  tech brands—including Google, Samsung, Microsoft, AWS, and
                  Ericsson-LG. Our collaboration with nbn™, Lancom Systems, and
                  Ubiquiti Networks ensures fast, seamless connectivity, while
                  advanced surveillance from HKVision keeps your business
                  secure. We also offer high-performance telecom hardware from
                  Yealink, Jabra GN, Asus, Billion Electric, and Kyocera—giving
                  you enterprise-grade communication tools tailored to your
                  growing needs.
                  <br />
                  <br />
                  With years of experience supporting Australian businesses, We
                  specialize in providing scalable and cost-effective business
                  phone systems. Whether you need to upgrade an outdated setup,
                  unify multiple locations, or eliminate confusing telecom
                  bills, our team will create a solution that streamlines
                  communication and reduces operational costs.
                  <br />
                  <br />
                  From professional service firms to tech startups and
                  multi-site companies, our expert consultants help you select
                  the right VoIP or hosted PBX system based on how your team
                  works. Enjoy crystal-clear calls, remote-ready features,
                  flexible plans, and 24/7 Australian-based support—all in one
                  easy-to-manage platform.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
    </div>
  );
};

export default MediumBusiness;
