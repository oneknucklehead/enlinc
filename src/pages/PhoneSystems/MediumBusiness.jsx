import React from "react";
import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import Button from "../../components/Button";
import MultiStepForm from "../../components/MultiStepForm";
import FormBanner from "../../sections/FormBanner";
import FeatureCard2 from "../../components/FeatureCard2";
import { PhoneForwarded } from "lucide-react";
import Banner from "../../components/Banner";

const MediumBusiness = () => {
  const cardData = [
    {
      title: "Voicemail to Email",
      description:
        "Receive voicemail messages straight to your inbox, so you can listen to your messages anytime, anywhere on your computer or mobile device.",
    },
    {
      title: "Call Anywhere",
      description:
        "Receive all the capabilities of a full business phone desk on your mobile device, so you can take your work with you wherever you go.",
    },
    {
      title: "Hunt Group",
      description:
        "Distribute your incoming calls to the relevant phone line after a caller makes a choice regarding the purpose of their call.",
    },
    {
      title: "Conference Calls",
      description:
        "Conduct virtual meetings over the phone with numerous people using high quality conference call functionality.",
    },
    {
      title: "Auto Attendant",
      description:
        "Transfer calls via a voice menu system without the need of having a telephone operator or receptionist.",
    },
    {
      title: "Call Recording",
      description:
        "Build a better customer experience by recording and saving your telephone conversations in a digital audio file format.",
    },
    {
      title: "Music on Hold",
      description:
        "Prevent your callers from hanging up the phone by keeping them engaged while waiting to speak with the person on the other line.",
    },
    {
      title: "Call Accounting",
      description:
        "Capture all of your phone records, usage and costs using our specialised software or hardware.",
    },
  ];
  return (
    <div>
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection video={true} reverse={true}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Medium Business Phone Systems
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Save Money And Make Communication Easy With Australia’s
                  Leading Small Business Phone System Experts
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <FormBanner />
      <div className="px-4 py-24">
        <Container>
          <ContentSection>
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Medium Business Phone Systems
              </h1>
              <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                If you’re a thriving business, you need a phone system that
                offers more than just a simple way to make and receive calls.
                For a business your size, you need to support all of the ways
                you communicate with customers, clients and co-workers now and
                into the future. At Nexgen we have the solution. Our phone
                system specialists have the industry know-how to provide a
                comprehensive end to end solution that seamlessly connects your
                locations, people and customers together.
              </p>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="w-full bg-[#fafafa] py-24">
        <Container>
          <h1 className="text-center text-black text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
            Game Changing Medium Phone System Must Have Features
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-[#142462]/80">
            If you want the value of a business phone system with features
            designed for large enterprise – at a price you can afford, then
            you’ve come to the right place. Businesses today demand a host of
            phone features to keep them at the top of their game. These include:
          </p>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
            {cardData.map((data, index) => (
              <div className="flex" key={index}>
                <FeatureCard2
                  logo={data.logo}
                  title={data.title}
                  description={data.description}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Banner />

      <div className="px-4 py-24">
        <Container>
          <ContentSection reverse={true}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Discover the Enlinc difference
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  We’re the largest partner of CISCO, Avaya, Panasonic and NEC
                  phone systems in Australia, which means we know our stuff when
                  it comes to helping businesses choose the best phone system
                  for their needs. These super brands have been around for a
                  century and they continue to lead the way in phone system
                  technology.
                  <br />
                  We can solve your biggest communication challenges at a cost
                  you can afford. By partnering with industry-leading brands
                  like NEC, we can offer you the very best in business phone
                  system technology, to ensure you get the most out of your
                  investment.
                  <br />
                  You can depend on us for expert advice, ongoing support and
                  reliable performance. From determining your specific needs to
                  successfully rolling out your new system, we make it easy to
                  deploy, operate and manage your phone service. We can even
                  help you understand how various features will benefit your
                  business.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
    </div>
  );
};

export default MediumBusiness;
