import React, { useState } from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import FormBanner from "../../sections/FormBanner";
import Cards from "../../components/Cards";
import Banner2 from "../../components/Banner2";
import ModalButton from "../../components/ModalButton";

import img1 from "../../assets/images/Construction/1.webp";
import img2 from "../../assets/images/Construction/2.webp";
import img3 from "../../assets/images/Construction/3.webp";
import img4 from "../../assets/images/Construction/4.webp";
import img5 from "../../assets/images/Construction/5.webp";
import img6 from "../../assets/images/Construction/6.webp";

const Construction = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const cardData = [
    {
      title: "Keep Projects Moving with 24/7 Seamless Connectivity",
      description:
        "Stay connected anytime, anywhere with EN-LINC’s intuitive mobile platform. Whether it’s calls, messages, or meetings, effortlessly engage stakeholders and keep your projects on track — no matter where business takes you.",
      image: img1,
    },
    {
      title: "Unlock Operational Efficiency with AI-Powered Insights",
      description:
        "Leverage EN-LINC’s AI-driven tracking across all interactions and workflows to gain critical insights into your operational performance. Identify and resolve issues in real-time, ensuring smoother project execution and preventing future challenges.",
      image: img2,
    },
    {
      title: "Effortless Integrations with EN-LINC’s Plug-and-Play Solutions",
      description:
        "Enable your team to streamline workflows instantly with EN-LINC’s ready-to-use system integrations and flexible, secure API options — driving operational efficiency without the delays or complexity.",
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
                Streamline Teamwork and Boost Efficiency with EN-LINC’s Smart
                Platform
              </h1>

              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Bring your entire team together — from project managers to
                  suppliers and contractors — with a single, easy-to-use app
                  designed to simplify collaboration and drive operational
                  excellence.
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
              Achieve Greater Heights with a Strong Foundation
            </p>
            <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              With EN-LINC’s powerful communication and IT solutions, delivering
              projects on time and within budget becomes the standard — laying
              the groundwork for lasting success.
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
                AI-Powered Automations and Smart Workflows
              </p>
              <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Streamline every project interaction with EN-LINC’s intelligent
                automation — delivering real-time tracking, actionable insights,
                and enhanced operational efficiency.
              </h1>
            </div>
            <ContentSection img={img5}>
              <div className="text-center md:text-start flex flex-col gap-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Automate Escalations and Streamline Workflows with EN-LINC
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Stay in control with EN-LINC’s unified collaboration
                    platform, where every interaction is intelligently tracked.
                    Leverage AI-powered workflows to automate routine tasks,
                    enhance efficiency, and proactively address potential issues
                    before they escalate.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Your Real-Time AI Assistant for Smarter Meetings
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Never miss a detail with EN-LINC’s automated meeting
                    assistant. Every call and meeting is transcribed,
                    time-stamped, and summarized — with key action items
                    automatically sent to the inboxes of all relevant
                    stakeholders, keeping your projects on track and your team
                    fully informed.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Work Seamlessly, Anywhere and Anytime
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    EN-LINC empowers teams to collaborate effortlessly — whether
                    remote, on-site, or across borders. Our secure,
                    high-definition video conferencing solutions enable
                    real-time inspections, team meetings, and project reviews
                    with smooth, reliable connectivity from anywhere in the
                    world.
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
              Deliver Better Results for Your Business and Clients
            </h1>
            <p className="text-center lg:text-start xl:text-lg font-gabarito-reg-400">
              Empower your teams and contractors with EN-LINC’s secure,
              AI-driven tools — boosting productivity, minimizing delays, and
              ensuring projects are completed on time and within budget.
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

export default Construction;
