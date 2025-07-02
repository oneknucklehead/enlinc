import React, { useState } from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import FormBanner from "../../sections/FormBanner";
import Cards from "../../components/Cards";
import Banner2 from "../../components/Banner2";
import ModalButton from "../../components/ModalButton";

import img1 from "../../assets/images/Legal/1.webp";
import img2 from "../../assets/images/Legal/2.webp";
import img3 from "../../assets/images/Legal/3.webp";
import img4 from "../../assets/images/Legal/4.webp";
import img5 from "../../assets/images/Legal/5.webp";
import img6 from "../../assets/images/Legal/6.webp";

const Legal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const cardData = [
    {
      title: "One Platform. Endless Ways to Connect.",
      description:
        "With EN-LINC’s unified communication app, you can easily call, fax, message, or meet — all from your exclusive business number — creating a seamless experience for clients and coworkers alike.",
      image: img1,
    },
    {
      title: "Fast, Seamless Call Redirection for Better Service",
      description:
        "With EN-LINC’s intuitive platform, easily transfer calls or interactions — whether manually or through a virtual receptionist — to connect clients to the right person quickly and improve service efficiency.",
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
          <ContentSection img={img4} reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Modern Communication, Built for Law Offices
              </h1>

              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Bring your firm together with EN-LINC’s integrated platform —
                  combining meetings, messaging, and calls into one secure,
                  intuitive space, so you can connect instantly and collaborate
                  effortlessly.
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
              Get Started Today. Collaborate Smarter by Tomorrow.
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
                Real-Time Client Interaction Tracking Made Simple
              </p>
              <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Maximise The Success Of Your Sales Team
              </h1>
            </div>
            <ContentSection img={img5}>
              <div className="text-center md:text-start flex flex-col gap-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Complete Interaction Tracking
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Automatically log every call, message, and meeting for easy
                    recovery of billable minutes and accurate reporting —
                    anytime, anywhere.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Real-Time AI Transcriptions
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Capture and transcribe calls and meetings instantly, with
                    time-stamped action items and speaker breakdowns for fast,
                    accessible records.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Unlimited Recordings
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Record every conversation without limits. Post-call
                    summaries and full transcripts are delivered directly to
                    your inbox — no storage caps.
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
              Stronger Protection, Smarter Communication
            </h1>
            <p className="text-center lg:text-start xl:text-lg font-gabarito-reg-400">
              Safeguard client outcomes and streamline firm operations with
              EN-LINC’s traceable, optimized communication workflows.
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

export default Legal;
