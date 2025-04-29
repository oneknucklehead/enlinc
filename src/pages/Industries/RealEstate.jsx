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

const RealEstate = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const cardData = [
    {
      title: "Flexible Communication, Your Way",
      description:
        "Stay connected and productive with EN-LINC — whether through calls, messages, or meetings — anytime, anywhere, on your terms.",
      image: img,
    },
    {
      title: "Align Teams and Clients Instantly",
      description:
        "Share important updates quickly and clearly with EN-LINC — driving faster decisions, smoother collaboration, and accelerated deal-making.",
      image: img,
    },
    {
      title: "Instant Meetings for Faster Results",
      description:
        "With EN-LINC, set up scheduled or on-the-spot meetings effortlessly — keeping your team connected and accelerating business outcomes.",
      image: img,
    },
  ];
  return (
    <div className="">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection reverse={true} video={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                One App. Total Team Connectivity.
              </h1>

              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Streamline collaboration across all stakeholders with
                  EN-LINC’s easy-to-use platform — designed for property
                  professionals and beyond.
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
              The Platform Where Connections Drive Success
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
                AI-Enhanced Communication for Stronger Client Connections
              </p>
              <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Maximise The Success Of Your Sales Team
              </h1>
            </div>
            <ContentSection>
              <div className="text-center md:text-start flex flex-col gap-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Never Miss a Call Again
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    EN-LINC’s intelligent routing and smart scheduling ensure
                    seamless management of all inbound and outbound
                    communications.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Close Deals Faster — Buying, Renting, or Selling
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Automatic call logging and transcription provide instant
                    access to insights and action items — helping you move deals
                    forward without delays.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Streamline Appointment Follow-Ups
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Save time with EN-LINC’s automated reminders and voicemail
                    drops — keeping your schedule full and your clients engaged.
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
              Ready to Accelerate Learning?
            </h1>
            {/* <p className="text-center lg:text-start xl:text-lg font-gabarito-reg-400">
              Extract the very best from your sales team by enabling them with
              all the information, insights and tools to give them the edge.
            </p> */}
            <button className="border-2 border-white rounded-full px-8 py-2">
              Start your free demo
            </button>
          </div>
        </Banner2>
      </div>
    </div>
  );
};

export default RealEstate;
