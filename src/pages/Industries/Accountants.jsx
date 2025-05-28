import React, { useState } from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import FormBanner from "../../sections/FormBanner";
import Cards from "../../components/Cards";
import Banner2 from "../../components/Banner2";
import ModalButton from "../../components/ModalButton";
import img1 from "../../assets/images/Accountant/1.jpg";
import img2 from "../../assets/images/Accountant/2.jpg";
import img3 from "../../assets/images/Accountant/3.jpg";
import img4 from "../../assets/images/Accountant/4.jpg";
import img5 from "../../assets/images/Accountant/5.jpg";
import img6 from "../../assets/images/Accountant/6.jpg";

const Accountants = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const cardData = [
    {
      title: "Unify Communication with One Powerful App",
      description:
        "Call, fax, message, and meet — all from your single dedicated business number, using EN-LINC’s seamless all-in-one platform.",
      image: img1,
    },
    {
      title: "Redirect Calls Instantly with Smart Transfers",
      description:
        "Quickly transfer calls or interactions directly or through EN-LINC’s built-in virtual receptionist — saving time and resolving client issues faster.",
      image: img2,
    },
    {
      title: "Instant Integration, Infinite Flexibility",
      description:
        "Our plug-and-play library offers ready-to-use connections with platforms like Microsoft Workspace — plus a secure, configurable API that lets you build custom solutions without the complexity.",
      image: img3,
    },
  ];
  return (
    <div className="">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection img={img5} reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Collaboration That Drives Efficiency and Profitability
              </h1>

              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Equip your team with AI-powered tools that streamline
                  operations, boost efficiency, and deliver exceptional client
                  results — driving real business growth.
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
              Start Today. Collaborate Smarter Tomorrow.
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
                Automated Client Interaction Tracking
              </p>
              <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Maximise The Success Of Your Sales Team
              </h1>
            </div>
            <ContentSection img={img6}>
              <div className="text-center md:text-start flex flex-col gap-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Effortless Billing with Full Interaction Records
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Every interaction is tracked in real time, making it easy to
                    recover billable hours and access detailed reports — no
                    matter where you work.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Real-Time AI Transcriptions
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Turn every conversation into a searchable record with
                    automatic transcriptions, time-stamped action items, and
                    speaker insights.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Unlimited Recordings and Post-Call Summaries
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Record every meeting and call without limits. Receive full
                    post-call summaries straight to your inbox for fast, easy
                    access.
                  </p>
                </div>
              </div>
            </ContentSection>
          </div>
        </Container>
      </div>
      <div className="">
        <Banner2 imgSrc={img4}>
          <div className="px-4 text-white max-w-xl flex flex-col gap-4 justify-center h-full">
            <h1 className="text-center lg:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Smarter Workflows. Stronger Client Protection.
            </h1>
            <p className="text-center lg:text-start xl:text-lg font-gabarito-reg-400">
              EN-LINC’s intelligent systems ensure full traceability, optimize
              communication, and safeguard the interests of your firm and your
              clients.
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

export default Accountants;
