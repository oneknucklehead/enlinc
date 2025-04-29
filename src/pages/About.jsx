import Button from "../components/Button";
import Container from "../components/Container";
import ProfileCard from "../components/ProfileCard";

import logo from "../assets/images/brands/Logo-7.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import ContentSection from "../sections/ContentSection";
function About() {
  const data = [
    {
      year: 2010,
      details: [
        "18 employees.",
        "Launched & Commenced ES Oki.",
        "Launched range of Omniview",
        "Relocated Parramata",
      ],
      logo: logo,
    },
    {
      year: 2015,
      details: [
        "18 employees.",
        "Launched & Commenced ES Oki.",
        "Launched range of Omniview",
      ],
      logo: logo,
    },
    {
      year: 2011,
      details: [
        "18 employees.",
        "Launched & Commenced ES Oki.",
        "Launched range of Omniview",
        "Relocated Parramata",
        "Launched & Commenced ES Oki.",
        "Launched range of Omniview",
      ],
      logo: logo,
    },
    {
      year: 2010,
      details: [
        "18 employees.",
        "Launched & Commenced ES Oki.",
        "Launched range of Omniview",
        "Relocated Parramata",
      ],
      logo: logo,
    },
    {
      year: 2015,
      details: [
        "18 employees.",
        "Launched & Commenced ES Oki.",
        "Launched range of Omniview",
      ],
      logo: logo,
    },
    {
      year: 2011,
      details: [
        "18 employees.",
        "Launched & Commenced ES Oki.",
        "Launched range of Omniview",
        "Relocated Parramata",
        "Launched & Commenced ES Oki.",
        "Launched range of Omniview",
      ],
      logo: logo,
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <div className="px-4 mt-[92px]">
        <Container>
          <div className="py-24">
            <ContentSection btnEnabled={false} reverse={true}>
              <div className="flex flex-col gap-6">
                <h3 className="text-3xl xl:text-4xl font-gabarito-semibold-600">
                  Your Partner in Intelligent, Customizable Communication
                  Solutions
                </h3>
                <div>
                  {/* <p className="xl:text-lg font-gabarito-semibold-600">
                    What is Lorem Ipsum?
                  </p> */}
                  <p className="text-base xl:text-lg">
                    At EN-LINC, we deliver forward-thinking technology designed
                    to enhance productivity, boost efficiency, and support
                    sustainable growth for businesses across Australia.
                  </p>
                </div>
              </div>
            </ContentSection>
          </div>
          <div className="py-24">
            <ContentSection btnEnabled={false}>
              <div className="flex flex-col gap-6">
                <h3 className="text-3xl xl:text-4xl font-gabarito-semibold-600">
                  About Us
                </h3>
                <div>
                  {/* <p className="xl:text-lg font-gabarito-semibold-600">
                    What is Lorem Ipsum?
                  </p> */}
                  <p className="text-base xl:text-lg">
                    EN-LINC is a proudly Australian-owned telecommunications
                    company, committed to delivering tailored business solutions
                    designed specifically for small and medium-sized enterprises
                    (SMEs). We understand the common frustrations that
                    businesses experience with traditional telecom providers —
                    slow support, rigid packages, and solutions that don’t quite
                    fit. That’s why at EN-LINC, exceptional customer service and
                    custom-fit solutions are at the heart of everything we do.
                    <br />
                    <br />
                    Our comprehensive service portfolio covers everything modern
                    businesses need to stay connected and competitive —
                    including business phone systems, cloud communications,
                    high-speed internet services, secure network solutions, and
                    CCTV monitoring. We also provide office essentials such as
                    printers, branded stationery, and toner cartridges to
                    support your everyday operations. With EN-LINC, accessing
                    essential technology and services is simple, reliable, and
                    completely hassle-free.
                    <br />
                    <br />
                    Security and peace of mind are a key part of our offering.
                    Our secure network setups and advanced CCTV monitoring
                    systems allow you to manage and protect your business easily
                    — even with just a swipe from your device.
                    <br />
                    <br />
                    At EN-LINC, our focus is simple: Your business always comes
                    first. We deliver reliable telecommunications, IT, and
                    office solutions that take the pressure off, so you can
                    focus on what matters most — growing your business. With our
                    expert team behind you, achieving smarter, more efficient
                    communication has never been easier.
                  </p>
                </div>
              </div>
            </ContentSection>
          </div>
          {/* TEAM SECTION */}
          <div className="py-4">
            <h3 className="text-4xl text-center pb-4">Executive Team</h3>
            <p className="text-center text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
            <div className="flex flex-wrap gap-20 md:gap-4 justify-evenly my-12 py-8">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>
          </div>
          {/* HISTORY SECTION */}
          <div>
            <h3 className="text-4xl pb-4 font-gabarito-semibold-600">
              Our History
            </h3>
            <p className="text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
            <br />
            <p className="text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
          </div>
          <div className="py-8">
            <div className="relative">
              <Swiper
                spaceBetween={30}
                pagination={{ clickable: true, el: ".nav-dots" }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {data.map((card, index) => (
                  <SwiperSlide key={index} className="h-auto flex">
                    <div className="p-4 border rounded-lg flex flex-col justify-between w-full">
                      <div className="border-b pb-4">
                        <h3 className="text-3xl">{card.year}</h3>
                      </div>
                      <div className="p-4 flex-1">
                        <ul className="text-gray-500">
                          {card.details?.map((list, i) => (
                            <li className="list-inside list-disc" key={i}>
                              {list}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-4 flex justify-end">
                        <img src={card.logo} alt="logo" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination Dots */}
              <div className="nav-dots mt-4 flex justify-center"></div>
            </div>
          </div>
        </Container>
      </div>
      {/* <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] h-fit py-12 px-4">
        <Container>
          <div className="text-white flex flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl text-center">Careers at Enlinc</h1>
            <p className="text-center">
              Join our dynamic team and shape the future of business
              communication
            </p>
            <button className="text-white my-3">
              <Link
                to={"/careers"}
                className=" border-2  px-8 py-2 border-white rounded-lg"
              >
                View Opportunities
              </Link>
            </button>
          </div>
        </Container>
      </div> */}
    </div>
  );
}

export default About;
