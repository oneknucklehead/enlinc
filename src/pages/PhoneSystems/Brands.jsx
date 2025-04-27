import React from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";
import img1 from "../../assets/images/brands/Logo-1.png";
import img2 from "../../assets/images/brands/Logo-2.png";
import img3 from "../../assets/images/brands/Logo-3.png";
import productDummy from "../../assets/images/productdummy.png";
import ContentSection from "../../sections/ContentSection";
import FeatureCard2 from "../../components/FeatureCard2";
import Banner from "../../components/Banner";

const Brands = () => {
  const ciscoProducts = [
    {
      img: <img src={productDummy} alt="product" />,
      title: "Cisco Unified Communications Manager",
      description:
        "A comprehensive call control platform that supports a wide range of collaboration services, including voice, video, and messaging.",
    },
    {
      img: <img src={productDummy} alt="product" />,
      title: "Cisco Meraki",
      description:
        "Cloud-managed IT solutions that simplify the deployment and management of networks, providing high performance and security.",
    },
  ];
  return (
    <div>
      {/* HERO SECTION */}
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Partnering with Industry Leaders for Superior Communication
              Solutions
            </h1>
            <p className="text-center xl:text-lg font-gabarito-reg-400">
              At Nexgen Australia, we believe in providing our clients with the
              highest quality communication solutions by partnering with the
              best brands in the industry. We collaborate with leading
              technology companies to deliver innovative, reliable, and
              efficient systems that enhance your business operations. Our key
              partners include Cisco, Webex by Cisco, Yealink, and NEC. Each
              brand brings unique strengths and advanced technologies that
              contribute to our comprehensive offerings.
            </p>
            <div className="flex justify-center items-center lg:justify-start lg:items-start">
              <Button classname={"px-8 py-2"}>Start your free demo</Button>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[#fafafa] py-12 px-4">
        <div className="flex flex-wrap max-w-4xl mx-auto justify-evenly gap-8">
          <img src={img1} alt="brand 1" className="object-contain" />
          <img src={img2} alt="brand 2" className="object-contain" />
          <img src={img3} alt="brand 3" className="object-contain" />
        </div>
      </div>
      {/* PRODUCTS DETAILS SECTION */}
      <div className="px-4 py-24">
        <Container>
          <div className="px-4 flex justify-center flex-col gap-4 pb-24">
            <h1 className="text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Cisco: Pioneering Connectivity and Collaboration
            </h1>
            <p className="text-center xl:text-lg font-gabarito-reg-400">
              Cisco is a global leader in networking and IT, known for its
              robust, scalable, and secure communication solutions. Cisco’s
              products and technologies are designed to enhance connectivity,
              collaboration, and security for businesses of all sizes.
            </p>
          </div>
          <ContentSection>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Why Cisco?
              </h3>
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
                        <b>Innovative Networking Solutions: </b>
                        Cisco’s networking equipment, including routers and
                        switches, ensures high-speed, reliable connectivity,
                        essential for seamless business operations.
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
                        <b> Unified Communications:</b>
                        Cisco’s unified communications solutions integrate
                        voice, video, messaging, and conferencing into a single
                        platform, enhancing collaboration and productivity.
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
                        <b>Advanced Security:</b>
                        With a focus on cybersecurity, Cisco provides advanced
                        security solutions that protect your business
                        communications from threats and vulnerabilities.
                      </span>
                    </li>
                  </ul>
                </p>
              </div>

              <div className="flex justify-center items-center lg:justify-start lg:items-start">
                <Button classname={"px-8 py-2"}>Start your free demo</Button>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      {/* PRODUCTS SECTION */}
      <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] px-4 py-24">
        <Container>
          <div className="px-4 flex justify-center flex-col gap-4 pb-12">
            <h1 className="text-white text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Cisco: Pioneering Connectivity and Collaboration
            </h1>
          </div>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4 py-8">
            {ciscoProducts.map((data, index) => (
              <div className="flex" key={index}>
                <FeatureCard2
                  image={true}
                  logo={data.img}
                  title={data.title}
                  description={data.description}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
      {/* PRODUCTS DETAILS SECTION */}
      <div className="px-4 py-24">
        <Container>
          <div className="px-4 flex justify-center flex-col gap-4 pb-24">
            <h1 className="text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Webex by Cisco: Seamless Virtual Collaboration
            </h1>
            <p className="text-center xl:text-lg font-gabarito-reg-400">
              Cisco is a global leader in networking and IT, known for its
              robust, scalable, and secure communication solutions. Cisco’s
              products and technologies are designed to enhance connectivity,
              collaboration, and security for businesses of all sizes.
            </p>
          </div>
          <ContentSection>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Why Webex by Cisco?
              </h3>

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
                        <b>High-Quality Video Conferencing: </b>
                        Webex provides crystal-clear video and audio quality,
                        ensuring effective communication during virtual
                        meetings.
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
                        <b>Flexible Collaboration Tools: </b>
                        From screen sharing to interactive whiteboards, Webex
                        offers a range of tools that enhance virtual
                        collaboration and productivity.
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
                        <b>Scalability and Integration: </b>
                        Webex seamlessly integrates with other business
                        applications and scales to meet the needs of businesses
                        of all sizes.
                      </span>
                    </li>
                  </ul>
                </p>
              </div>

              <div className="flex justify-center items-center lg:justify-start lg:items-start">
                <Button classname={"px-8 py-2"}>Start your free demo</Button>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      {/* PRODUCTS SECTION */}
      <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] px-4 py-24">
        <Container>
          <div className="px-4 flex justify-center flex-col gap-4 pb-12">
            <h1 className="text-white text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Cisco: Pioneering Connectivity and Collaboration
            </h1>
          </div>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4 py-8">
            {ciscoProducts.map((data, index) => (
              <div className="flex" key={index}>
                <FeatureCard2
                  image={true}
                  logo={data.img}
                  title={data.title}
                  description={data.description}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
      {/* PRODUCTS DETAILS SECTION */}
      <div className="px-4 py-24">
        <Container>
          <div className="px-4 flex justify-center flex-col gap-4 pb-24">
            <h1 className="text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Webex by Cisco: Seamless Virtual Collaboration
            </h1>
            <p className="text-center xl:text-lg font-gabarito-reg-400">
              Cisco is a global leader in networking and IT, known for its
              robust, scalable, and secure communication solutions. Cisco’s
              products and technologies are designed to enhance connectivity,
              collaboration, and security for businesses of all sizes.
            </p>
          </div>
          <ContentSection>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Why Webex by Cisco?
              </h3>

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
                        <b>High-Quality Video Conferencing: </b>
                        Webex provides crystal-clear video and audio quality,
                        ensuring effective communication during virtual
                        meetings.
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
                        <b>Flexible Collaboration Tools: </b>
                        From screen sharing to interactive whiteboards, Webex
                        offers a range of tools that enhance virtual
                        collaboration and productivity.
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
                        <b>Scalability and Integration: </b>
                        Webex seamlessly integrates with other business
                        applications and scales to meet the needs of businesses
                        of all sizes.
                      </span>
                    </li>
                  </ul>
                </p>
              </div>

              <div className="flex justify-center items-center lg:justify-start lg:items-start">
                <Button classname={"px-8 py-2"}>Start your free demo</Button>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      {/* PRODUCTS SECTION */}
      <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] px-4 py-24">
        <Container>
          <div className="px-4 flex justify-center flex-col gap-4 pb-12">
            <h1 className="text-white text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Cisco: Pioneering Connectivity and Collaboration
            </h1>
          </div>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4 py-8">
            {ciscoProducts.map((data, index) => (
              <div className="flex" key={index}>
                <FeatureCard2
                  image={true}
                  logo={data.img}
                  title={data.title}
                  description={data.description}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
      {/* PRODUCTS DETAILS SECTION */}
      <div className="px-4 py-24">
        <Container>
          <div className="px-4 flex justify-center flex-col gap-4 pb-24">
            <h1 className="text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Webex by Cisco: Seamless Virtual Collaboration
            </h1>
            <p className="text-center xl:text-lg font-gabarito-reg-400">
              Cisco is a global leader in networking and IT, known for its
              robust, scalable, and secure communication solutions. Cisco’s
              products and technologies are designed to enhance connectivity,
              collaboration, and security for businesses of all sizes.
            </p>
          </div>
          <ContentSection>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Why Webex by Cisco?
              </h3>

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
                        <b>High-Quality Video Conferencing: </b>
                        Webex provides crystal-clear video and audio quality,
                        ensuring effective communication during virtual
                        meetings.
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
                        <b>Flexible Collaboration Tools: </b>
                        From screen sharing to interactive whiteboards, Webex
                        offers a range of tools that enhance virtual
                        collaboration and productivity.
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
                        <b>Scalability and Integration: </b>
                        Webex seamlessly integrates with other business
                        applications and scales to meet the needs of businesses
                        of all sizes.
                      </span>
                    </li>
                  </ul>
                </p>
              </div>

              <div className="flex justify-center items-center lg:justify-start lg:items-start">
                <Button classname={"px-8 py-2"}>Start your free demo</Button>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      {/* PRODUCTS SECTION */}
      <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] px-4 py-24">
        <Container>
          <div className="px-4 flex justify-center flex-col gap-4 pb-12">
            <h1 className="text-white text-center text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Cisco: Pioneering Connectivity and Collaboration
            </h1>
          </div>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4 py-8">
            {ciscoProducts.map((data, index) => (
              <div className="flex" key={index}>
                <FeatureCard2
                  image={true}
                  logo={data.img}
                  title={data.title}
                  description={data.description}
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className="py-24">
        <Container>
          <div className="flex flex-col gap-6">
            <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
              Why Partner with Nexgen Australia?
            </h3>
            <div>
              <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                At Nexgen Australia, we leverage our partnerships with these
                leading brands to provide you with comprehensive, high-quality
                communication solutions tailored to your business needs. Here’s
                why you should choose us:
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
                      <b>Expertise and Experience: </b> With years of experience
                      in the telecommunications industry, we have the knowledge
                      and expertise to deliver the best solutions for your
                      business.
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
                      <b>Tailored Solutions: </b>
                      We understand that every business is unique. Our solutions
                      are customised to meet your specific needs, ensuring
                      optimal performance and efficiency.
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
                      <b>Reliable Support: </b>
                      Our dedicated support team is always available to assist
                      you with installation, maintenance, and any technical
                      issues, ensuring your system runs smoothly.
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
                      <b>Cutting-Edge Technology: </b>
                      By partnering with industry leaders like Cisco, Webex by
                      Cisco, Yealink, and NEC, we provide you with access to the
                      latest technologies and innovations.
                    </span>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </Container>
      </div>
      <Banner />
      <div className="px-4 py-24">
        <Container>
          <ContentSection reverse={true}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Conclusion
              </h3>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Choosing the right communication solutions is crucial for the
                  success of your business. By partnering with Nexgen Australia,
                  you gain access to the best products and technologies from
                  leading brands like Cisco, Webex by Cisco, Yealink, and NEC.
                  Our comprehensive solutions are designed to enhance your
                  business operations, improve productivity, and ensure seamless
                  communication. For more information about our offerings and
                  how we can help your business, visit our Brands page or
                  contact us today for a consultation. Let Nexgen Australia
                  empower your business with superior communication solutions
                  from the world’s leading technology brands.
                </p>
              </div>

              <div className="flex justify-center items-center lg:justify-start lg:items-start">
                <Button classname={"px-8 py-2"}>Start your free demo</Button>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
    </div>
  );
};

export default Brands;
