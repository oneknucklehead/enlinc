import React, { useState } from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";
import ContentSection from "../../sections/ContentSection";
import FormBanner from "../../sections/FormBanner";
import img from "../../assets/images/person.jpg";
import Cards from "../../components/Cards";
import Banner2 from "../../components/Banner2";
import bannerImg from "../../assets/images/bannerImg.jpg";
import ModalButton from "../../components/ModalButton";

const Healthcare = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const cardData = [
    {
      title: "Streamline the Patient Journey with Smart Workflows",
      description:
        "Unlock EN-LINC’s patient-focused solutions to simplify interactions, improve care delivery, and elevate patient experiences.",
      image: img,
    },
    {
      title: "Smarter Tools for Better Patient Care",
      description:
        "Use EN-LINC’s AI-powered solutions to boost team performance, streamline workflows, and deliver consistently positive patient outcomes.",
      image: img,
    },
    {
      title: "Efficiency That Powers Personalized Care",
      description:
        "Leverage EN-LINC’s simple, AI-driven insights to deliver high-engagement, tailored care across every step of the patient journey.",
      image: img,
    },
  ];
  return (
    <div className="">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Transform Healthcare with Smart Automation and Collaboration
              </h1>

              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Harness EN-LINC’s AI-powered platform to optimize patient
                  outcomes, streamline care delivery, and empower your workforce
                  to deliver better results.
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
              Focused on Delivering Exceptional Patient Care
            </p>
            <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              On Time And On Budget Starts Here
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
          <div className="py-24">
            <div className="flex flex-col justify-center items-center">
              <p className="text-center md:text-start xl:text-lg font-gabarito-semibold-600">
                Step Into the Future of Patient Care
              </p>
              <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Maximise The Success Of Your Sales Team
              </h1>
            </div>
            <ContentSection>
              <div className="text-center md:text-start flex flex-col gap-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Boost Team Productivity and Engagement
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Equip your staff with EN-LINC’s adaptive platform —
                    featuring coaching, training, and automation tools that free
                    up time, drive professional growth, and keep teams focused
                    on delivering outstanding patient care.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Smarter Telecom Solutions for Care Delivery
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Access real-time insights across your organization to
                    improve operational efficiency, enhance patient
                    satisfaction, and ensure sustainable, high-quality care
                    delivery.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Secure, Confidential Patient Data Protection
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Patient privacy is at the core of EN-LINC’s technology. Our
                    security-first platform protects all healthcare data —
                    giving you and your patients total peace of mind.
                  </p>
                </div>
              </div>
            </ContentSection>
          </div>
        </Container>
      </div>
      <div className="">
        <Banner2 imgSrc={bannerImg}>
          <div className="px-4 text-white max-w-xl flex flex-col gap-4 justify-center h-full">
            <h1 className="text-center lg:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Lead the Future of Patient Care
            </h1>
            <p className="text-center lg:text-start xl:text-lg font-gabarito-reg-400">
              Equip your teams with EN-LINC’s intelligent solutions to deliver
              exceptional care, improve outcomes, and enhance operational
              performance every day.
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

export default Healthcare;
