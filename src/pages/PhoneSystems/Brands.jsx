import React, { useState } from "react";
import Container from "../../components/Container";
import img1 from "../../assets/images/brands/Logo-1.png";
import img2 from "../../assets/images/brands/Logo-2.png";
import img3 from "../../assets/images/brands/Logo-3.png";
import productDummy from "../../assets/images/productdummy.webp";
import ContentSection from "../../sections/ContentSection";
import FeatureCard2 from "../../components/FeatureCard2";
import Banner from "../../components/Banner";
import ModalButton from "../../components/ModalButton";
import { yeaLink } from "../../data/BrandsProduct";

const Brands = () => {
  const [isModalOpen, setModalOpen] = useState(false);
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
              Driving Business Success with Leading Technology Partners
            </h1>
            <p className="text-center xl:text-lg font-gabarito-reg-400">
              Partnering with the world’s leading tech innovators, EN-LINC
              delivers next-generation connectivity, communication, and IT
              solutions built for Australian businesses. Our alliances with
              trusted names like Google, Samsung, Ericsson-LG, Microsoft, and
              AWS allow us to equip your business with smart, secure, and
              scalable technology—helping you stay ahead in a fast-moving
              digital world.
            </p>
            <div className="flex justify-center items-center lg:justify-start lg:items-start">
              <ModalButton
                text={"Start your free demo"}
                isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}
                classname={"px-8 py-2"}
              />
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
              Ericsson-LG: Smart Communication Built for Business Growth
            </h1>
            <p className="text-center xl:text-lg font-gabarito-reg-400">
              When it comes to powering business communications, Ericsson-LG
              leads with innovation, reliability, and intelligent design. Their
              solutions are crafted to deliver smooth voice, video, and
              collaboration experiences, all while keeping your business secure
              and agile.
            </p>
          </div>
          <ContentSection>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                What Makes Ericsson-LG Different?
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
                        <b>Intelligent Communication Systems: </b>
                        With Ericsson-LG’s iPECS technology, your business gains
                        access to dynamic call handling, mobile integration,
                        cloud connectivity, and smart analytics—making sure you
                        never miss an opportunity.
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
                        <b>Streamlined Collaboration Across Teams:</b>
                        From real-time messaging to effortless video
                        conferencing, Ericsson-LG’s platforms unify all your
                        communications, helping teams work faster, smarter, and
                        more connected—no matter where they are.
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
                        <b>Security and Flexibility at the Core:</b>
                        Designed with advanced safeguards and scalable
                        architecture, Ericsson-LG’s solutions grow with your
                        business while ensuring every connection is secure and
                        reliable.
                      </span>
                    </li>
                  </ul>
                </p>
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
              Featured Ericsson-LG Products
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
              Connect and Collaborate Instantly with Microsoft Teams
            </h1>
            <p className="text-center xl:text-lg font-gabarito-reg-400">
              Empower your business with Microsoft Teams, the all-in-one
              platform for calls, video meetings, messaging, and file sharing.
              EN-LINC brings you seamless virtual collaboration backed by
              Microsoft’s world-class technology—secure, scalable, and ready for
              wherever your team works.
            </p>
          </div>
          <ContentSection>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Why Microsoft Teams with EN-LINC?
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
                        <b>Crystal-clear voice and video calls:</b>
                        Experience high-definition voice and video quality for
                        seamless meetings and client communications, no matter
                        where you are.
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
                        <b>Instant messaging and real-time collaboration:</b>
                        Boost team productivity with instant chat, group
                        messaging, and real-time file editing across your
                        organisation.
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
                        <b>Secure file sharing across devices:</b>
                        Share documents safely and access important files
                        anytime on mobile, desktop, or web, with
                        enterprise-grade security.
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
                        <b>Effortless integration with your business apps:</b>
                        Connect Microsoft Teams with tools like Outlook,
                        SharePoint, and your CRM to streamline workflows and
                        improve efficiency.
                      </span>
                    </li>
                  </ul>
                </p>
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
              Featured Microsoft Teams Products
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
              Yealink: Premium Cordless Phone Solutions for Business Mobility
            </h1>
            <p className="text-center xl:text-lg font-gabarito-reg-400">
              As a trusted EN-LINC technology partner, Yealink leads the way in
              delivering innovative voice communication solutions for today’s
              mobile workplaces. Yealink’s cordless phones and DECT systems
              combine cutting-edge technology with ease of use, giving
              businesses the flexibility and high-quality audio they need to
              stay connected anywhere in the office.
            </p>
          </div>
          <ContentSection>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Why Choose Yealink with EN-LINC?
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
                        <b> Exceptional Audio Performance:</b>
                        Enjoy crystal-clear HD voice quality for every call,
                        improving collaboration and customer interactions.
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
                        <b>Mobility Without Limits: </b>
                        Yealink’s DECT cordless solutions empower your staff to
                        move freely around the office while staying fully
                        connected.
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
                        <b> Simple Setup, Smarter Use:</b>
                        User-friendly interfaces and easy deployment mean faster
                        adoption and greater productivity across your team.
                      </span>
                    </li>
                  </ul>
                </p>
                <p>
                  With Yealink and EN-LINC, your business gets the freedom,
                  reliability, and performance needed to communicate without
                  barriers.
                </p>
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
              Featured Yealink Products
            </h1>
          </div>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4 py-8">
            {yeaLink.map((data, index) => (
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
              Ericsson-LG: Reliable, Scalable Business Communication Solutions
            </h1>
            <p className="text-center xl:text-lg font-gabarito-reg-400">
              As a trusted EN-LINC partner, Ericsson-LG is a global leader in
              delivering advanced communication technologies for businesses of
              all sizes. Known for their reliability, flexibility, and
              cutting-edge innovation, Ericsson-LG solutions help businesses
              stay connected, productive, and ready for growth.
            </p>
          </div>
          <ContentSection>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Why Choose Ericsson-LG with EN-LINC?
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
                        <b>Versatile Communication Solutions: </b>
                        From IP telephony to unified communications and hybrid
                        PBX systems, Ericsson-LG offers flexible options
                        tailored to your unique business needs.
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
                        <b>Scalable Systems for Growing Businesses: </b>
                        Designed to evolve with you, Ericsson-LG solutions
                        easily expand as your communication requirements
                        increase.
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
                        <b>Proven Innovation and Reliability: </b>
                        With decades of expertise, Ericsson-LG delivers
                        high-performance systems built to ensure seamless,
                        secure communication across any business environment.
                      </span>
                    </li>
                  </ul>
                </p>
                <p>
                  Partner with EN-LINC and Ericsson-LG to future-proof your
                  business communication with technology you can trust.
                </p>
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
              Featured Ericsson-LG Products:
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
              Why Businesses Trust EN-LINC
            </h3>
            <div>
              <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                At EN-LINC, we combine leading-edge partnerships and deep
                industry insight to deliver tailored, future-ready communication
                and IT solutions designed around your business success. Here's
                what sets us apart:
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
                      <b>Real-World Expertise:</b> Backed by years of hands-on
                      experience across telecommunications, IT, and cloud
                      services, EN-LINC understands the demands of Australian
                      businesses—and knows how to meet them with precision.
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
                      <b>Solutions Built for You:</b>
                      We take a personalized approach to every project,
                      designing flexible systems that align with your unique
                      goals, workflows, and growth plans.
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
                      <b>Reliable, Local Support:</b>
                      Our Australian-based customer service team is committed to
                      fast responses, expert troubleshooting, and long-term
                      system care—so you’re never left waiting when it matters
                      most.
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
                      <b>Technology That Drives Results:</b>
                      Through partnerships with global leaders like Google,
                      Ericsson-LG, Samsung, Microsoft, and AWS, we bring the
                      most advanced communication, connectivity, and
                      cybersecurity technologies directly to your business.
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
                  Choosing a trusted technology partner is essential for keeping
                  your business connected, secure, and ready for growth. With
                  EN-LINC, you gain direct access to world-class solutions from
                  leaders like Google, Ericsson-LG, Samsung, Microsoft, and AWS.
                  Our tailored services are built to drive smarter
                  communication, stronger collaboration, and seamless digital
                  operations for businesses of all sizes.
                  <br />
                  <br />
                  To discover how EN-LINC can transform your communication and
                  IT infrastructure, explore our Solutions page or reach out to
                  our expert team for a personalised consultation. Let’s build a
                  future where your business stays ahead—connected, protected,
                  and thriving with EN-LINC by your side.
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
    </div>
  );
};

export default Brands;
