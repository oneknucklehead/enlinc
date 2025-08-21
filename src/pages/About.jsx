import Container from "../components/Container";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

import ContentSection from "../sections/ContentSection";

import img1 from "../assets/images/about1.webp";
import img2 from "../assets/images/about2.webp";
import clientelle from "../data/Clientelle";

function About() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="px-4 mt-[92px]">
        <Container>
          <div className="py-24">
            <ContentSection img={img1} btnEnabled={false} reverse={true}>
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
          <div classname="w-full">
            <Container>
              <div className="py-12 px-4">
                <p
                  className="text-3xl text-center pb-12"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Our Partners
                </p>
                <div className="flex mx-auto flex-wrap justify-between items-center gap-12">
                  {clientelle.map((logo, index) => (
                    <div key={index} className="">
                      <img
                        loading="lazy"
                        src={logo}
                        className="w-40 object-cover h-fit"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </div>
          <div className="py-24">
            <ContentSection img={img2} btnEnabled={false}>
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
          {/* <div className="py-4">
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
          </div> */}
          {/* HISTORY SECTION */}
          <div className="pb-24">
            <h3 className="text-4xl pb-4 font-gabarito-semibold-600">
              Our Vision
            </h3>
            <p className="text-gray-500">
              We strive to be very different to all the other telecommunication
              providers in Australia. Our main focus at EN-LINC is our clients,
              we understand that you are the most important part of our business
              and that telecommunications is one of the most important assets to
              your business.
            </p>
            <br />
            <p className="text-gray-500">
              Whether its big things like your Business telephony systems or
              your Printers, to the small things like branded Stationary and
              your Toner cartridges. EN-LINC will have you covered in all
              aspects. Security without compromise is another important aspect
              of our business. Our Dedicated Servers along with our Network
              Enabled CCTV monitoring system will also give you the peace of
              mind at the swipe of your fingertips
            </p>
          </div>
          {/* <div className="py-8">
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

              <div className="nav-dots mt-4 flex justify-center"></div>
            </div>
          </div> */}
        </Container>
      </div>
    </div>
  );
}

export default About;
