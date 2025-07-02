import Container from "../../components/Container";
import ContentSection from "../../sections/ContentSection";
import MultiStepForm from "../../components/MultiStepForm";
import savings from "../../assets/images/Savings.png";
import FeatureCard2 from "../../components/FeatureCard2";
import { Phone, PhoneForwarded } from "lucide-react";
import Banner from "../../components/Banner";

import img1 from "../../assets/images/PhoneSystems/smallBusiness/1.webp";
import img2 from "../../assets/images/PhoneSystems/smallBusiness/2.webp";

const SmallBusiness = () => {
  const cardData = [
    {
      title: "Voicemail-to-Email Integration",
      description:
        "Get voicemail messages delivered directly to your email inbox—access and listen to them anytime, anywhere from your mobile phone or computer. Perfect for staying connected and responsive on the go.",
    },
    {
      title: "Smart Call Distribution (Hunt Group Feature)",
      description:
        "Automatically route incoming calls to the right department or team member based on the caller’s selection—streamlining communication and improving customer experience.",
    },
    {
      title: "Virtual Receptionist (Auto Attendant Feature)",
      description:
        "Automatically transfer incoming calls using a voice menu system—no receptionist or manual operator needed. Improve efficiency and ensure callers reach the right team or department with ease.",
    },
    {
      title: "Hold Music Feature",
      description:
        "Keep callers engaged with on-hold music or messages, reducing hang-ups while they wait to be connected to the right person.",
    },
    {
      title: "Call Anywhere, Anytime",
      description:
        "Access all the features of a full business phone system on your mobile device—stay connected and manage calls from anywhere, anytime.",
    },
    {
      title: "Built-In Audio Conferencing",
      description:
        "Host virtual meetings with multiple participants using high-quality business conference calling—ideal for seamless team collaboration and client communication.",
    },
    {
      title: "Recorded Calls Made Easy",
      description:
        "Improve customer service by recording business calls and saving them as digital audio files—ideal for quality control, staff training, and compliance.",
    },
    {
      title: "Call Reporting & Analytics",
      description:
        "Track all phone activity, call usage, and costs in real time with our advanced call accounting software—ideal for monitoring performance and managing telecom expenses.",
    },
  ];
  const cardData2 = [
    {
      logo: <PhoneForwarded className="h-5 w-5" />,
      title: "Voicemail to Email",
    },
    {
      logo: <Phone className="h-5 w-5" />,
      title: "Hunt Group",
    },
    {
      logo: <PhoneForwarded className="h-5 w-5" />,
      title: "Hunt Group",
    },
  ];

  return (
    <div className="pt-12">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection noImg={true} reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Small Business Phone Systems
              </h1>

              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Lower Your Phone Bills and Streamline Communication with
                  Australia’s Leading Business VoIP Experts.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12 md:gap-4">
            <div className="text-white space-y-2">
              <span>
                <img src={savings} alt="savings" />
              </span>
              <h3 className="text-3xl">
                Smarter Phone Systems, Bigger Savings –{" "}
                <b>Slash Call Costs by Up to 75%</b>
              </h3>
              <p>Over 500 companies have already switched to En-Linc</p>
            </div>
            <div className="flex sm:justify-center sm:items-center">
              <div className="flex flex-col bg-white w-full sm:max-w-lg rounded-md p-8 gap-2">
                <div className="flex gap-2 items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 20V0H10L16 6V10H14V7H9V2H2V18H8V20H0ZM14.275 12.55L15.35 13.6L11.5 17.45V18.5H12.55L16.4 14.65L17.475 15.7L13.175 20H10V16.825L14.275 12.55ZM17.475 15.7L14.275 12.55L16.425 10.4L19.6 13.575L17.475 15.7Z"
                      fill="black"
                    />
                  </svg>

                  <h4 className="font-gabarito-bold-700 text-2xl">
                    Book a free demo in just 2 mins!
                  </h4>
                </div>
                <div>
                  <MultiStepForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className=" py-24">
        <Container>
          <ContentSection img={img1}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Small Business Phone Systems
              </h1>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  If you run a small business, your reputation depends on every
                  customer interaction. Missed calls or poor call quality can
                  cost you more than just business—they can damage trust. That’s
                  why you need a reliable, high-performance phone system that
                  gives you complete control over your communications.
                  <br />
                  <br />
                  At EN-LINC, we go beyond basic phone hardware. Our small
                  business phone solutions combine crystal-clear VoIP calling,
                  smart call management features, and local Australian support
                  to help you stay connected, serve customers better, and boost
                  productivity. We're not just a provider—we’re your
                  communication partner, helping your business grow with
                  confidence.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] py-12">
        <Container>
          <h1 className="text-center text-white text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
            What to Look for in a Small Business VoIP Phone System
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-white">
            We offer all the essential tools your small business needs to manage
            calls efficiently and professionally. Our feature-rich business
            phone systems come equipped with everything you need to stay
            connected, boost productivity, and deliver a seamless customer
            experience. Here are some must-have phone system features every
            small business should look for:
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
      <div className="">
        <Container>
          <div className="py-24">
            <ContentSection img={img2} reverse={true}>
              <div className="text-center md:text-start flex flex-col gap-6">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                  See Why EN-LINC Is Australia’s Trusted Telecom Partner
                </h1>
                <div>
                  <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                    At EN-LINC, we collaborate with industry leaders like
                    Google, Samsung, Microsoft, AWS, and Ericsson-LG to deliver
                    cutting-edge business solutions. Our partnerships with nbn,
                    Lancom Systems, and Ubiquiti Networks ensure seamless
                    connectivity, while HKVision enhances your business security
                    with advanced surveillance technology. We provide
                    high-performance hardware from brands like Asus, Yealink,
                    Jabra GN, and Billion Electric, alongside Kyocera office
                    solutions, offering reliable, scalable, and customizable IT
                    solutions.
                    <br />
                    <br />
                    With years of experience, EN-LINC specializes in providing
                    small business telephone systems with personalized service
                    and expert support. We assess your current phone setup and
                    offer tailored solutions to ensure efficiency and
                    cost-effectiveness. If your existing system isn’t working,
                    we’ll fix it, and if you’re juggling multiple phone bills,
                    we’ll consolidate them for you.
                    <br />
                    <br />
                    Whether you run a home-based business, service-based
                    company, or startup, EN-LINC’s team of consultants will help
                    you choose the right phone system to meet your unique needs.
                    Stay connected and productive with our secure, scalable, and
                    affordable telecom solutions.
                  </p>
                </div>
              </div>
            </ContentSection>
          </div>
        </Container>
        <div className="w-full mx-auto">
          <Banner>
            <div className="text-white max-w-xl flex flex-col gap-4 justify-center h-full">
              <h1 className="text-center lg:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Upgrade to the latest small business phone system technology and
                save up to 70% Off on your calls
              </h1>
              <p className="text-center lg:text-start xl:text-lg font-gabarito-reg-400">
                Start your free demo below
              </p>
              <button className="border-2 border-white rounded-full px-8 py-2">
                Start your free demo
              </button>
            </div>
          </Banner>
        </div>
        {/* <Container>
          <div className="text-center pt-24 pb-12">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Most popular small business phone systems
            </h1>
            <p className="pt-3 pb-8 text-center xl:text-lg font-gabarito-reg-400 p-2">
              Our best picks include the DT930 by NEC, which is equipped with
              loads of functionality for smart communications, and is an
              affordable option built specifically for smal businesses
            </p>
            <div className="max-w-6xl mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-4">
              {cardData2.map((data, index) => (
                <div key={index} className="">
                  <FeatureCard3 title={data.title} logo={data.logo} />
                </div>
              ))}
            </div>
          </div>
        </Container> */}
      </div>
    </div>
  );
};

export default SmallBusiness;
