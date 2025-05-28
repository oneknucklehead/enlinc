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

import img1 from "../../assets/images/Vet/1.jpg";
import img2 from "../../assets/images/Vet/2.jpg";
import img3 from "../../assets/images/Vet/3.jpg";
import img4 from "../../assets/images/Vet/4.jpg";
import img5 from "../../assets/images/Vet/5.jpg";
import img6 from "../../assets/images/Vet/6.jpg";

const Vet = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const cardData = [
    {
      title: "Explore Solutions Designed Around Exceptional Animal Care",
      description:
        "At EN-LINC, our intelligent platforms streamline every interaction across the care journey — for pets, livestock, and wildlife. Unlock AI-driven workflows that simplify operations, enhance collaboration, and optimize outcomes, ensuring every animal receives the best possible care, every step of the way.",
      image: img1,
    },
    {
      title: "Organizational Efficiency That Powers Customized Care",
      description:
        "Enhance every clinic visit with EN-LINC’s easy-to-use, AI-driven insights. Our context-aware solutions help your team deliver the most accurate, up-to-date treatments — ensuring personalized care for every patient and improving overall operational efficiency.",
      image: img2,
    },
    {
      title: "Transform Animal Care with Intelligent Technology",
      description:
        "Unlock new levels of efficiency and precision with EN-LINC’s AI-enhanced platforms. Equip your team to deliver faster treatments, make smarter decisions, and provide exceptional care for pets, livestock, and wildlife — building healthier outcomes across every interaction.",
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
                Revolutionize Animal Healthcare with Smart Automation and
                Collaboration
              </h1>

              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Transform patient outcomes with EN-LINC’s AI-driven solutions
                  designed for the veterinary and animal care sectors. Our
                  intelligent platform empowers your workforce to deliver
                  higher-quality care, streamline workflows, and enhance
                  collaboration across every touchpoint. By combining powerful
                  automation with real-time communication tools, we help your
                  teams work more efficiently, reduce operational friction, and
                  provide exceptional care when it matters most.
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
              Focused on Delivering Outstanding Animal Care
            </p>
            <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              On Time And On Budget Starts Here
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
                Fuel Smarter Teams, Deliver Better Care
              </p>
              <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Maximise The Success Of Your Sales Team
              </h1>
            </div>
            <ContentSection img={img5}>
              <div className="text-center md:text-start flex flex-col gap-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Empower Your Team for Maximum Impact
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Boost productivity and staff engagement with EN-LINC’s
                    intelligent platform. Adaptive coaching, skill development
                    pathways, and smart automation remove day-to-day
                    frustrations, freeing your team to focus on exceptional
                    patient care. Build a workplace where efficiency and
                    excellence go hand in hand.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Smarter Care Delivery, Powered by Insights
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Unlock real-time visibility into every layer of your
                    operations. EN-LINC’s performance analytics help you
                    identify opportunities to improve care quality, streamline
                    workflows, and enhance communication with owners — ensuring
                    your care delivery remains both exceptional and sustainable
                    at every stage.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Protect Patient Privacy with Confidence
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Security is non-negotiable. EN-LINC’s security-first
                    infrastructure safeguards your sensitive client and patient
                    data with industry-leading protections, so you can maintain
                    compliance, uphold trust, and focus fully on delivering
                    outstanding care.
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
              Lead the Evolution of Animal Care with EN-LINC
            </h1>
            <p className="text-center lg:text-start xl:text-lg font-gabarito-reg-400">
              Equip your staff with EN-LINC’s secure, AI-powered tools — giving
              them the confidence, insights, and efficiency needed to enhance
              healthcare outcomes for both patients and their owners. Support
              smarter, faster, and more personalized care that drives better
              results today and builds stronger client relationships for the
              future.
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

export default Vet;
