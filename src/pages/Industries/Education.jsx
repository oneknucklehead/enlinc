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

const Education = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const cardData = [
    {
      title: "Empower Students with Interactive Virtual Classrooms",
      description:
        "Boost engagement and collaboration through EN-LINC’s dynamic online learning environments — making education more accessible and connected.",
      image: img,
    },
    {
      title: "Empower Educators with Smarter Tools",
      description:
        "Boost flexibility and productivity with EN-LINC’s faculty workspace — giving instant access to all classes, communications, and resources, past and present.",
      image: img,
    },
    {
      title: "Smarter Communication Control for Administrators",
      description:
        "Manage messaging with precision and instantly connect with any group of stakeholders — anytime, anywhere — through EN-LINC’s intelligent platform.",
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
                Smarter Connections for Modern Education
              </h1>

              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Bring students and faculty together with EN-LINC’s AI-driven
                  tools — designed to boost collaboration, streamline
                  operations, and optimize outcomes.
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
              Where Smarter Academic Collaboration Begins
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
                Real-Time Control Over Departments and Groups
              </p>
              <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Maximise The Success Of Your Sales Team
              </h1>
            </div>
            <ContentSection>
              <div className="text-center md:text-start flex flex-col gap-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Use Any Device, Anywhere
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    EN-LINC runs seamlessly on existing devices — making
                    deployment fast, cost-effective, and easy to scale.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Scale Instantly, With Zero Hassle
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Quickly add or remove users, teams, or faculties
                    individually or in bulk — all with just a few clicks.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Seamless Collaboration From Anywhere
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Enable faculty and staff to connect and work together
                    effortlessly — whether remote, hybrid, or on campus.
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

export default Education;
