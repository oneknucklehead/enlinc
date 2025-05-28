import React from "react";
import FeatureCard2 from "../../components/FeatureCard2";
import Container from "../../components/Container";
import Button from "../../components/Button";
import ContentSection from "../../sections/ContentSection";
import { PhoneForwarded } from "lucide-react";
import img1 from "../../assets/images/Product/PrinterAndCopier/1.jpg";
import img2 from "../../assets/images/Product/PrinterAndCopier/2.jpg";

const PrintersAndCopiers = () => {
  const cardData = [
    {
      logo: <PhoneForwarded className="h-5 w-5" />,

      title: "Small Businesses",
      description:
        "Compact and efficient printers that provide high-quality output without taking up much space, perfect for small offices.",
    },
    {
      title: "Medium to Large Enterprises",
      description:
        "High-capacity printers and copiers that handle large volumes of work efficiently, equipped with advanced features to support busy office environments.",
    },
    {
      title: "Industry-Specific Solutions",
      description:
        "Specialised printers and copiers designed for industries such as healthcare, legal, and education, providing features that cater to their unique demands.",
    },
  ];
  return (
    <div className="">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection img={img1} reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Business Printers and Copiers
              </h1>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  In today’s fast-paced work environment, dependable and
                  high-performing office equipment is key to sustaining
                  efficiency. ENLINC’s range of business printers and copiers
                  are vital assets, supporting seamless document management and
                  everyday operational workflows.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="px-4 py-24">
        <Container>
          {/* <div className="px-4 flex justify-center flex-col gap-4 pb-24">
            <h1 className="text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Cisco: Pioneering Connectivity and Collaboration
            </h1>
            <p className="text-center xl:text-lg font-gabarito-reg-400">
              Cisco is a global leader in networking and IT, known for its
              robust, scalable, and secure communication solutions. Cisco’s
              products and technologies are designed to enhance connectivity,
              collaboration, and security for businesses of all sizes.
            </p>
          </div> */}
          <ContentSection img={img2}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Why Business Printers and Copiers Matter
              </h3>
              <p>
                In any professional setting, reliable printing and copying
                solutions play a critical role in supporting daily operations:
              </p>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  <ul className="space-y-4 py-2">
                    <li className="flex items-start gap-3">
                      {/* SVG Bullet */}
                      <svg
                        className="w-7 h-7 text-[#2A6A9E]  flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {/* Text */}
                      <span className="text-gray-700 transition-colors duration-300 hover:text-black">
                        <b>Professional-Grade Results</b>
                        ENLINC’s advanced printers and copiers deliver crisp,
                        high-quality documents and marketing materials that
                        showcase your brand’s professionalism and attention to
                        detail.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      {/* SVG Bullet */}
                      <svg
                        className="w-7 h-7 text-[#2A6A9E]  flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {/* Text */}
                      <span className="text-gray-700 transition-colors duration-300 hover:text-black">
                        <b>Streamlined Workflow Efficiency</b>
                        Our multifunction devices combine printing, scanning,
                        copying, and faxing into a single, powerful solution —
                        simplifying everyday tasks and boosting office
                        productivity.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      {/* SVG Bullet */}
                      <svg
                        className="w-7 h-7 text-[#2A6A9E]  flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {/* Text */}
                      <span className="text-gray-700 transition-colors duration-300 hover:text-black">
                        <b>Cost-Effective Operations</b>
                        By bringing printing and document management in-house,
                        businesses can significantly reduce outsourcing expenses
                        and improve operational efficiency.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      {/* SVG Bullet */}
                      <svg
                        className="w-7 h-7 text-[#2A6A9E]  flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {/* Text */}
                      <span className="text-gray-700 transition-colors duration-300 hover:text-black">
                        <b>Scalable to Your Needs</b>
                        As your organisation grows, ENLINC’s flexible printing
                        and copying solutions easily scale to meet increased
                        demand, ensuring your equipment keeps pace with your
                        business evolution.
                      </span>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="w-full bg-[#fafafa] py-24">
        <Container>
          <h1 className="text-center text-black text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
            Tailored Solutions for Every Business
          </h1>
          <p className="text-center xl:text-lg font-gabarito-reg-400 p-2 text-[#142462]/80">
            Enlinc understands that different businesses have different needs.
            That’s why we offer tailored solutions to ensure you get the right
            printer and copier for your specific requirements:
          </p>
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
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
    </div>
  );
};

export default PrintersAndCopiers;
