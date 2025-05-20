import React, { useState } from "react";
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
import Cards from "../../components/Cards";
import ModalButton from "../../components/ModalButton";
import Banner2 from "../../components/Banner2";
import img from "../../assets/images/person.jpg";
import bannerImg from "../../assets/images/bannerImg.jpg";

const slides = [
  {
    title: "Business Phone Systems",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/products/business-phone-systems",
  },
  {
    title: "Managed IT Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/products/managed-it-services",
  },
  {
    title: "Security Cameras",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/products/security-cameras",
  },
  {
    title: "Internet & Voice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/products/internet-and-voice",
  },
  {
    title: "Printers & Copiers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/products/printers-and-copiers",
  },
];
const Products = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const cardData = [
    {
      title: "Connect With Customers Exactly When and Where It Matters",
      description:
        "Leverage EN-LINC’s intelligent automations and smart workflows to deliver personalized experiences that engage customers at the perfect moment — wherever they are.",
      image: img,
    },
    {
      title:
        "Unlock Actionable Insights Across the Customer Journey to Boost Sales",
      description:
        "Gain complete visibility across every communication channel with EN-LINC’s advanced tracking tools. Identify the campaigns, keywords, and interactions that drive engagement and fuel higher conversion rates.",
      image: img,
    },
    {
      title: "24/7 Customer Support Without the Overhead",
      description:
        "Deliver round-the-clock service with EN-LINC’s intelligent conversational AI. Whether answering questions, booking appointments, or offering tailored recommendations, our adaptive solutions connect seamlessly to your approved knowledge base — ensuring customer satisfaction without additional staffing costs.",
      image: img,
    },
  ];

  return (
    <div className="">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection video={true} reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1
                className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                Products
              </h1>
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <FormBanner />

      <div>
        <Container>
          <div>
            <h1 className="pb-4 pt-24 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Our Products:
            </h1>
          </div>
          <div className="max-w-7xl mx-auto">
            <Carousel slideContent={slides} />
          </div>
        </Container>
      </div>
      <div className="">
        <Container>
          <div className="py-24">
            <div className="flex flex-col justify-center items-center">
              <p className="text-center md:text-start xl:text-lg font-gabarito-semibold-600">
                EN-LINC Sales Solutions: Powered by AI for Smarter Connections
              </p>
              <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Maximise The Success Of Your Sales Team
              </h1>
            </div>
            <ContentSection>
              <div className="text-center md:text-start flex flex-col gap-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Empower Your Sales Team to Drive More Engagement
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Boost your team's success with EN-LINC’s smart tools like
                    auto-diallers and instant voicemail drops — helping you
                    reach more customers, book more appointments, and maximize
                    every sales opportunity.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Never Miss a Customer Enquiry Again
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Our intelligent call-routing ensures every customer
                    interaction is captured and directed to the right team
                    member. With call transcriptions and actionable insights
                    sent straight to stakeholders, EN-LINC helps you streamline
                    follow-ups and improve response times.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Turn Conversations Into Conversions
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    With real-time AI sentiment tracking, your sales team
                    receives live coaching cues and resources to navigate
                    objections and close deals faster. Post-call analytics
                    provide valuable feedback to continuously sharpen skills and
                    drive higher conversion rates.
                  </p>
                </div>
              </div>
            </ContentSection>
          </div>
          <div className="py-24">
            <div className="flex flex-col justify-center items-center">
              <p className="text-center md:text-start xl:text-lg font-gabarito-semibold-600">
                Personalized Customer Engagement That Delivers Real-Time Impact
              </p>
              <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Create meaningful interactions with experiences tailored
                precisely to each customer's needs — exactly when they need it —
                powered by EN-LINC’s smart communication and AI-driven
                solutions.
              </h1>
            </div>
            <div className="grid sm:grid-cols-2 justify-center items-center lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto">
              {cardData.map((data, index) => (
                <div className="flex" key={index}>
                  <Cards
                    img={data.image}
                    title={data.title}
                    description={data.description}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center pt-8">
              <ModalButton
                text={"Start your free demo"}
                isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="">
        <Banner2 imgSrc={bannerImg}>
          <div className="px-4 text-white max-w-xl flex flex-col gap-4 justify-center h-full">
            <h1 className="text-center lg:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Equip Your Team for Success with EN-LINC
            </h1>
            <p className="text-center lg:text-start xl:text-lg font-gabarito-reg-400">
              Empower your sales team with the insights, tools, and real-time
              intelligence they need to stay ahead — delivering stronger
              results, smarter engagement, and higher conversions.
            </p>
            <button className="border-2 border-white rounded-full px-8 py-2">
              Start your free demo
            </button>
          </div>
        </Banner2>
      </div>
    </div>
  );
};

export default Products;
