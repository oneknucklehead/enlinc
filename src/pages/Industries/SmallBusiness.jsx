import React, { useState } from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import FormBanner from "../../sections/FormBanner";
import img from "../../assets/images/person.webp";
import Cards from "../../components/Cards";
import Banner2 from "../../components/Banner2";
import bannerImg from "../../assets/images/bannerImg.webp";
import ModalButton from "../../components/ModalButton";

const SmallBusiness = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const cardData = [
    {
      title: "Seamless Collaboration to Connect Teams and Clients",
      description:
        "Share critical information with all stakeholders anytime, anywhere through EN-LINC’s intuitive platform. Whether it’s calls, messages, or meetings, engage effortlessly and keep your business moving forward with smooth, reliable communication.",
      image: img,
    },
    {
      title: "Real-Time Insights for Smarter Operational Efficiency",
      description:
        "Gain full visibility into your workflows and interactions with EN-LINC’s AI-powered tracking. Instantly identify gaps, correct issues early, and build smarter processes that prevent future mistakes — keeping your operations running at peak performance.",
      image: img,
    },
    {
      title: "Transform Client Experiences with Intelligent Automation",
      description:
        "Enhance satisfaction and streamline service delivery using EN-LINC’s AI-powered workflows. Effortlessly share session summaries, action plans, and automate next steps with interactive schedules, smart reminders, and real-time information requests.",
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
                Accelerate Business Success with Smarter Collaboration
              </h1>

              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Empower your teams with AI-enhanced tools that streamline
                  operations, boost productivity, and consistently deliver
                  superior customer experiences — driving real, scalable growth.
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
              Join Today. Transform Operations Overnight.
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
                Result-Driven Collaboration, Powered by Automation
              </p>
              <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Maximise The Success Of Your Sales Team
              </h1>
            </div>
            <ContentSection>
              <div className="text-center md:text-start flex flex-col gap-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Your Real-Time AI Assistant, Always On
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Stay organized and informed with EN-LINC’s automated
                    assistant. Every call and meeting is transcribed,
                    time-stamped, and summarized — with key action points
                    automatically sent to all relevant stakeholders, ensuring
                    nothing important is ever missed.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Seamless Work-Anywhere Flexibility
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Enable your team to collaborate effortlessly from anywhere
                    with EN-LINC’s easy-to-use platform. Integrated progress
                    tracking keeps everyone aligned and triggers smart
                    automations to keep projects moving forward without delays.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Next-Generation Virtual Meetings
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Host high-quality HD video meetings with customers and teams
                    from any location. Enjoy clear, uninterrupted sessions,
                    complete with automatic recording, transcription, and action
                    point summaries — seamlessly integrated into workflows and
                    stakeholder communications.
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
              Achieve Better Outcomes for Your Business and Clients
            </h1>
            <p className="text-center lg:text-start xl:text-lg font-gabarito-reg-400">
              At EN-LINC, we help you unlock higher performance across your
              workforce and contractor teams. By providing secure, AI-powered
              tools, your staff can work smarter, eliminate unnecessary delays,
              and complete tasks with speed and precision. Our intelligent
              solutions are designed to maximise operational efficiency, empower
              better decision-making, and ensure every project is delivered with
              excellence — driving stronger results for your business and
              outstanding service for your clients.
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

export { SmallBusiness };
