import React from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";
import ContentSection from "../../sections/ContentSection";
import FormBanner from "../../sections/FormBanner";
import img from "../../assets/images/person.jpg";
import Cards from "../../components/Cards";
import Banner2 from "../../components/Banner2";
import bannerImg from "../../assets/images/bannerImg.jpg";

const Healthcare = () => {
  const cardData = [
    {
      title: "Engage With Customers At The Right Time And Place",
      description:
        "Context-aware automations and workflows can create personalised customer experiences to engage with them at the right time no matter where they are.",
      image: img,
    },
    {
      title: "Key Insights Into The Buyers Journey To Improve Sales",
      description:
        "Comprehensive tracking across all communication channels enables access to key insights. Discover which campaigns, keywords or interactions are driving conversions and engagement.",
      image: img,
    },
    {
      title: "Quality 24/7 Customer Support Without The Resource Cost",
      description:
        "Give customers 24/7 access to get answers to questions, schedule appointments or get vehicle recommendations. Conversational adaptive AI has it covered by connecting to your specified and approved knowledge base.",
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
                Unlock The Power Of Automation And Collaboration For Better
                Healthcare Solutions.
              </h1>

              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Leverage the power of AI to optimise patient outcomes. Our
                  platform and tools unleash the power of your workforce to
                  transform patient care.
                </p>
              </div>
              <div className="flex justify-center items-center lg:justify-start lg:items-start">
                <Button classname={"px-8 py-2"}>Start your free demo</Button>
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
              Sky Is The Limit From A Solid Foundation
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
            <Button classname={"px-8 py-2"}>Start your free demo</Button>
          </div>
          <div className="py-24">
            <div className="flex flex-col justify-center items-center">
              <p className="text-center md:text-start xl:text-lg font-gabarito-semibold-600">
                Enlinc Sales Powered By AI
              </p>
              <h1 className="pb-12 pt-2 text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Maximise The Success Of Your Sales Team
              </h1>
            </div>
            <ContentSection>
              <div className="text-center md:text-start flex flex-col gap-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Make More Connections With More Buyers
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Leverage tools like power dialler and Voicemail Drop to
                    reach more customers and book more appointments.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Make Missed Enquiries A Thing Of The Past
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    Smart-routing makes sure that important customer enquiries
                    are never dropped, but are guided through workflows to make
                    sure they get to the right agent. Calls are transcribed with
                    associated action items that are delivered to the inbox of
                    all relevant stakeholders.
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-gabarito-semibold-600">
                    Convert More Conversations
                  </h1>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    With AI sentiment tracking capability, sales are empowered
                    with real-time hints and resources to overcome objection and
                    improve conversion. Improve even more going forward with
                    coaching and post-call analytics.
                  </p>
                </div>

                <div className="flex justify-center items-center lg:justify-start lg:items-start">
                  <Button classname={"px-8 py-2"}>Start your free demo</Button>
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
              Get Your Team Started With Nexgen Today
            </h1>
            <p className="text-center lg:text-start xl:text-lg font-gabarito-reg-400">
              Extract the very best from your sales team by enabling them with
              all the information, insights and tools to give them the edge.
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
