import React, { useState } from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import FormBanner from "../../sections/FormBanner";
import Cards from "../../components/Cards";
import Banner2 from "../../components/Banner2";
import ModalButton from "../../components/ModalButton";

import img1 from "../../assets/images/Wellness/1.webp";
import img2 from "../../assets/images/Wellness/2.webp";
import img3 from "../../assets/images/Wellness/3.webp";
import img4 from "../../assets/images/Wellness/4.webp";
import img5 from "../../assets/images/Wellness/5.webp";
import img6 from "../../assets/images/Wellness/6.webp";

const Wellness = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const cardData = [
    {
      title: "Create Powerful Connections with Clients and Teams",
      description:
        "Use EN-LINC’s intelligent automations, dynamic workflows, timely alerts, and smart resources to deliver consistent, high-impact programs — ensuring outstanding results, every time.",
      image: img1,
    },
    {
      title: "Empowering Personalized Care with Efficiency and Reliability",
      description:
        "Give your team instant access to AI-powered resources tailored to each client interaction — anytime, anywhere. Seamlessly collaborate with clients and colleagues through EN-LINC’s all-in-one platform, ensuring outstanding service no matter the location.",
      image: img2,
    },
    {
      title: "Enhance Client Journeys with Smart, Automated Care",
      description:
        "Boost client wellbeing and engagement using EN-LINC’s intelligent workflows throughout every step of their wellness journey. Effortlessly share session summaries, action plans, and automate schedules, reminders, and follow-ups — ensuring consistent, personalized care at every touchpoint.",
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
                Inspire Wellness and Achieve More with Smart Collaboration
              </h1>

              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Equip your teams with EN-LINC’s AI-powered solutions designed
                  to maximize client outcomes. Our intelligent platform boosts
                  the performance of wellness and lifestyle teams, helping
                  deliver exceptional service and measurable results.
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
              Wellness Powered by Smart Connections.
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
                Client-First Collaboration to Drive Team Efficiency and Better
                Outcomes
              </p>
              <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Maximise The Success Of Your Sales Team
              </h1>
            </div>
            <ContentSection img={img5}>
              <div className="text-center md:text-start flex flex-col gap-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    The Future of Wellness Delivery Starts with EN-LINC
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Empower clients to take control of their health and
                    wellbeing with easy access to personalized tools and
                    information. EN-LINC’s flexible platform allows clients to
                    review past and upcoming care programs anytime, anywhere —
                    supporting a more informed, engaged, and healthier journey.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Boost Team Productivity and Engagement
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Elevate staff performance with EN-LINC’s intelligent
                    platform, featuring adaptive coaching, training resources,
                    and workflow automation. By eliminating tedious tasks, we
                    help your team focus on what matters most — delivering
                    exceptional client care and maximizing operational
                    efficiency.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Simplify Follow-ups with Smart Automation
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Save valuable time and improve appointment outcomes with
                    EN-LINC’s automated appointment reminders and instant
                    voicemail drops — helping you stay connected without the
                    manual effort.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Deliver on the Promise of Wellness with EN-LINC
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Gain actionable insights at every level of your organization
                    with EN-LINC’s powerful analytics tools. Improve operational
                    efficiency, enhance patient satisfaction, and sustain
                    exceptional care delivery by identifying smarter strategies
                    through real-time performance tracking.
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
              Set a New Standard in Client Care with EN-LINC
            </h1>
            <p className="text-center lg:text-start xl:text-lg font-gabarito-reg-400">
              Equip your team with cutting-edge tools, actionable insights, and
              real-time information — empowering them to perform at their best,
              deliver exceptional service, and stay ahead of the competition.
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

export default Wellness;
