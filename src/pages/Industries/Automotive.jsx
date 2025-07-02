import React, { useState } from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import FormBanner from "../../sections/FormBanner";
import Cards from "../../components/Cards";
import Banner2 from "../../components/Banner2";
import ModalButton from "../../components/ModalButton";

import img1 from "../../assets/images/Automobile/1.webp";
import img2 from "../../assets/images/Automobile/2.webp";
import img3 from "../../assets/images/Automobile/3.webp";
import img4 from "../../assets/images/Automobile/4.webp";
import img5 from "../../assets/images/Automobile/5.webp";
import img6 from "../../assets/images/Automobile/6.webp";

const Automotive = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const cardData = [
    {
      title: "Connect With Customers Exactly When and Where It Matters",
      description:
        "Leverage EN-LINC’s intelligent automations and smart workflows to deliver personalized experiences that engage customers at the perfect moment — wherever they are.",
      image: img1,
    },
    {
      title:
        "Unlock Actionable Insights Across the Customer Journey to Boost Sales",
      description:
        "Gain complete visibility across every communication channel with EN-LINC’s advanced tracking tools. Identify the campaigns, keywords, and interactions that drive engagement and fuel higher conversion rates.",
      image: img2,
    },
    {
      title: "24/7 Customer Support Without the Overhead",
      description:
        "Deliver round-the-clock service with EN-LINC’s intelligent conversational AI. Whether answering questions, booking appointments, or offering tailored recommendations, our adaptive solutions connect seamlessly to your approved knowledge base — ensuring customer satisfaction without additional staffing costs.",
      image: img3,
    },
  ];
  return (
    <div className="">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection img={img4} reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Drive Customer Loyalty and Accelerate Business Growth
              </h1>

              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Equip your team across every touchpoint of the customer
                  journey with EN-LINC’s AI-driven insights, real-time support
                  tools, and intelligent workflow automation — all designed to
                  boost performance and deliver measurable results.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <FormBanner />
      <div className="py-24">
        <Container>
          <div className="flex flex-col justify-center items-center">
            <p className="text-center md:text-start xl:text-lg font-gabarito-semibold-600">
              Personalized Customer Engagement That Delivers Real-Time Impact
            </p>
            <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Create meaningful interactions with experiences tailored precisely
              to each customer's needs — exactly when they need it — powered by
              EN-LINC’s smart communication and AI-driven solutions.
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 justify-center items-center lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto">
            {cardData.map((data, index) => (
              <div className="flex h-full" key={index}>
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
          <div className="py-24">
            <div className="flex flex-col justify-center items-center">
              <p className="text-center md:text-start xl:text-lg font-gabarito-semibold-600">
                EN-LINC Sales Solutions: Powered by AI for Smarter Connections
              </p>
              <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Maximise The Success Of Your Sales Team
              </h1>
            </div>
            <ContentSection img={img5}>
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
        </Container>
      </div>
      <div className="">
        <Banner2 imgSrc={img6}>
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

export default Automotive;
