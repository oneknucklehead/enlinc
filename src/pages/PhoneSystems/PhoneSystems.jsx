import React from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import Button from "../../components/Button";
import MultiStepForm from "../../components/MultiStepForm";
import savings from "../../assets/images/Savings.png";
import FeatureCard2 from "../../components/FeatureCard2";
import {
  CircleDot,
  Database,
  Mail,
  Music,
  Phone,
  PhoneForwarded,
  Settings,
  Share2,
  Users,
} from "lucide-react";
import FeatureCard3 from "../../components/FeatureCard3";
import Banner from "../../components/Banner";
import FormBanner from "../../sections/FormBanner";
import Carousel from "../../components/Carousel";
import CardWithHoverTab from "../../components/CardWithHoverTab";

import img1 from "../../assets/images/Filler/4.png";
import img2 from "../../assets/images/Filler/7.png";
import img3 from "../../assets/images/PhoneSystems/1.jpg";

const slides = [
  {
    title: "Small Business",
    description:
      "Reliable VoIP phone systems with advanced features and local support—crucial for maintaining professional communication, customer trust, operational efficiency, and sustainable growth.",
    link: "/phone-systems/small-business",
  },
  {
    title: "Medium Business",
    description:
      "Purpose-built phone systems with multi-site connectivity, VoIP clarity, and advanced tools—vital for medium businesses navigating growth, complexity, and evolving customer expectations.",
    link: "/phone-systems/medium-business",
  },
  {
    title: "Enterprise",
    description:
      "High-performance communication systems engineered for enterprises—scalable, feature-rich solutions that handle high call volumes and complex, multi-site operations.",
    link: "/phone-systems/enterprise",
  },
  {
    title: "Office",
    description:
      "Tailored office phone systems—PBX, VoIP, or hybrid—essential for streamlining operations, enabling remote work, and supporting scalable, future-focused office communication.",
    link: "/phone-systems/office",
  },
];
const PhoneSystems = () => {
  const cardData = [
    {
      title: "Voicemail-to-Email Integration",
      description:
        "Get voicemail messages delivered directly to your email inbox—access and listen to them anytime, anywhere from your mobile phone or computer. Perfect for staying connected and responsive on the go.",
      logo: <Mail className="h-5 w-5" />,
    },
    {
      title: "Smart Call Distribution (Hunt Group Feature)",
      description:
        "Automatically transfer incoming calls using a voice menu system—no receptionist or manual operator needed. Improve efficiency and ensure callers reach the right team or department with ease.",
      logo: <Share2 className="h-5 w-5" />,
    },
    {
      title: "Virtual Receptionist (Auto Attendant Feature)",
      description:
        "Keep callers engaged with on-hold music or messages, reducing hang-ups while they wait to be connected to the right person.",
      logo: <Settings className="h-5 w-5" />,
    },
    {
      title: "Hold Music Feature",
      description:
        "Keep callers engaged with on-hold music or messages, reducing hang-ups while they wait to be connected to the right person.",
      logo: <Database className="h-5 w-5" />,
    },
    {
      title: "Call Anywhere, Anytime",
      description:
        "Access all the features of a full business phone system on your mobile device—stay connected and manage calls from anywhere, anytime.",
      logo: <Music className="h-5 w-5" />,
    },
    {
      title: "Built-In Audio Conferencing",
      description:
        "Host virtual meetings with multiple participants using high-quality business conference calling—ideal for seamless team collaboration and client communication.",
      logo: <Phone className="h-5 w-5" />,
    },
    {
      title: "Recorded Calls Made Easy",
      description:
        "Improve customer service by recording business calls and saving them as digital audio files—ideal for quality control, staff training, and compliance.",
      logo: <Users className="h-5 w-5" />,
    },
    {
      title: "Call Reporting & Analytics",
      description:
        "Track all phone activity, call usage, and costs in real time with our advanced call accounting software—ideal for monitoring performance and managing telecom expenses.",
      logo: <CircleDot className="h-5 w-5" />,
    },
  ];

  const cardData2 = [
    {
      logo: <PhoneForwarded className="h-5 w-5" />,
      title: "Voicemail to Email",
    },
    {
      logo: <Phone className="h-5 w-5" />,
      title: "Hunt Group",
    },
    {
      logo: <PhoneForwarded className="h-5 w-5" />,
      title: "Hunt Group",
    },
  ];

  return (
    <div className="">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection
            videoLink={
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/UNUn51YWVrM?si=Jo_xuN9rvFwtI3xS"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            }
            video={true}
            reverse={true}
          >
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1
                className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                Phone Systems
              </h1>
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Affordable, Reliable Phone Systems for Businesses Across
                  Australia — Powered by EN-LINC
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <FormBanner />
      <div className="px-4 py-24">
        <Container>
          <ContentSection img={img3}>
            <div className="flex flex-col gap-6">
              <h3
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600"
              >
                Leaders in VoIP and Office Phone System Technology — EN-LINC
              </h3>
              <div>
                <p
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  className="text-center md:text-start xl:text-lg font-gabarito-reg-400"
                >
                  Today’s businesses depend on advanced office telephone systems
                  and VoIP technology to stay connected, efficient, and
                  competitive. Whether you need on-site IP phones, cloud-hosted
                  PBX solutions, hybrid VoIP systems, or powerful call
                  management and video conferencing tools, EN-LINC delivers
                  cutting-edge communication solutions tailored for Australian
                  businesses. In today's world, office phones and VoIP phone
                  systems are essential to maintaining seamless operations
                  across every industry.
                </p>
                <div className="py-4">
                  <p
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    className="text-center md:text-start xl:text-lg font-gabarito-semibold-600"
                  >
                    Choosing the Best Office Phone System for Your Business
                  </p>
                  <p
                    data-aos="fade-left"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    className="text-center md:text-start xl:text-lg font-gabarito-reg-400"
                  >
                    Finding the right office phone system isn’t
                    one-size-fits-all. Every business has unique needs, and the
                    ideal solution depends on your operations, team size, and
                    communication style. With so many VoIP phone systems and
                    office phone options available, EN-LINC helps simplify the
                    decision-making process by focusing on what matters most:
                    <ul className="space-y-4 py-4">
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
                          <b>Technology preference:</b> VoIP (internet-based) vs
                          traditional landline.
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
                          <b>Scalability:</b> How many phone lines and user
                          extensions you’ll need.
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
                          <b>Functionality:</b> Features like call forwarding,
                          conferencing, voicemail-to-email, and mobile
                          integration.
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
                          <b>User experience:</b> How easily your staff can
                          adopt and benefit from the system.
                        </span>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div>
        <Container>
          <div>
            <h1 className="pb-4 pt-24 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Our Phone Systems:
            </h1>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2">
              {slides.map((data, index) => (
                <div key={index}>
                  <CardWithHoverTab
                    title={data.title}
                    description={data.description}
                    link={data.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <div className="px-4 py-24">
        <Container>
          <ContentSection reverse={true} img={img1}>
            <div className="flex flex-col gap-6">
              <h3
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600"
              >
                The Cost of Setting Up an Office Phone System with EN-LINC
              </h3>
              <div>
                <p
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  className="text-center md:text-start xl:text-lg font-gabarito-reg-400"
                >
                  When starting a new business, it might be tempting to cut
                  costs by using a domestic phone system. However, investing in
                  a professional office phone system delivers far greater value
                  over time. While business phone systems may have a higher
                  upfront cost, the advanced features, reliability, and
                  scalability they offer make a significant difference to your
                  daily operations. At EN-LINC, we help businesses understand
                  the real value behind office phone system investments. With
                  options like VoIP, hosted PBX, and hybrid solutions, our
                  systems often include more affordable call packages—ideal for
                  businesses handling a high volume of calls. By choosing the
                  right communication solution, you can improve efficiency,
                  enhance customer experience, and reduce long-term phone line
                  expenses.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] py-12">
        <Container>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="text-center text-white text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600"
          >
            Must-Have Features for Modern Business Phone Systems
          </h1>
          {/* <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-white">
            We have everything your small business needs to manage your calls
            with ease! Some of the common phone features you shouldn't be
            without include:
          </p> */}
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
            {cardData.map((data, index) => (
              <div className="flex" key={index}>
                <FeatureCard2
                  index={index}
                  logo={data.logo}
                  title={data.title}
                  description={data.description}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className="">
        <Container>
          <div className="py-24">
            <ContentSection img={img2}>
              <div className="text-center md:text-start flex flex-col gap-6">
                <h1
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600"
                >
                  Unlock Endless Communication Possibilities with EN-LINC
                </h1>
                <div>
                  {/* <p className="text-center md:text-start xl:text-lg font-gabarito-semibold-600">
                    What is Lorem Ipsum?
                  </p> */}
                  <p
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    className="text-center md:text-start xl:text-lg font-gabarito-reg-400"
                  >
                    At EN-LINC, we believe your business deserves more than just
                    a basic phone system—you need a complete communication
                    platform built to evolve with you. Our cutting-edge VoIP and
                    business phone solutions are designed to keep your team
                    connected, productive, and ready for future growth. With
                    flexible packages, competitive pricing, and enterprise-grade
                    features, EN-LINC gives your business everything it needs to
                    stay ahead—voice, video, mobile, and cloud
                    communications—all from one trusted provider.
                  </p>
                </div>
                <div>
                  <p
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    className="text-center md:text-start xl:text-lg font-gabarito-semibold-600"
                  >
                    Take Your Business Communications to the Next Level
                  </p>
                  <p
                    data-aos="fade-left"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    className="text-center md:text-start xl:text-lg font-gabarito-reg-400"
                  >
                    Don’t let outdated phone systems hold your business back.
                    EN-LINC makes upgrading easy, affordable, and future-proof.
                    Experience the benefits of a modern, reliable business phone
                    system designed to support your success now and into the
                    future. Ready to switch? Connect with our team today and
                    discover how EN-LINC can transform the way your business
                    communicates.
                  </p>
                </div>
              </div>
            </ContentSection>
          </div>
        </Container>
        <div className="w-full mx-auto">
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default PhoneSystems;
