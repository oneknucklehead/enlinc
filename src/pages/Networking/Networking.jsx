import React from "react";
import img from "../../assets/images/Networking/1.png";
import imgDummy from "../../assets/images/person.jpg";

import dummy from "../../assets/images/Networking/dummy.png";
import { ArrowUpRight } from "lucide-react";
import Cards2 from "../../components/Cards2";

import imgDesign from "../../assets/images/Networking/design.png";

const Networking = () => {
  const cardData = [
    {
      image: dummy,
      title: "Professional Phone Support",
      description:
        "Get priority site support from world-class UniFi Network Engineers.",
    },
    {
      image: dummy,
      title: "Professional Phone Support",
      description:
        "Get priority site support from world-class UniFi Network Engineers.",
    },
  ];
  const cardData2 = [
    {
      subtitle: "The Original",
      title: "Flagship",
      description: "WiFi Perfected",
      image: imgDummy,
    },
    {
      subtitle: "The Original",
      title: "Flagship",
      description: "WiFi Perfected",
      image: imgDummy,
    },
    {
      subtitle: "The Original",
      title: "Flagship",
      description: "WiFi Perfected",
      image: imgDummy,
    },
  ];
  return (
    <div>
      {/* BANNER SECTION */}
      <div className="pt-[92px] w-full min-h-screen bg-gradient-to-r from-[#142462] to-[#2A6A9E] py-12 px-4 flex justify-center items-center">
        <div className="relative flex flex-col gap-8 justify-center items-center h-full w-full">
          <div className="text-center max-w-5xl">
            <h1
              className="text-4xl text-white md:text-6xl"
              data-aos="fade-down"
              data-aos-delay="150"
              data-aos-duration="1000"
            >
              Lorem Ipsum is simply dummy text
            </h1>
            <p
              className="text-xl md:text-2xl text-white text-center"
              data-aos="fade-down"
              data-aos-delay="350"
              data-aos-duration="1000"
            >
              Design Interference-Free WiFi with UniFi
            </p>
          </div>
          <div className="grid md:grid-cols-2 h-fit justify-center items-center max-w-6xl">
            <img
              src={img}
              className="w-full object-cover max-w-lg md:max-w-xl"
              alt="networking banner"
            />
            <div className="w-max text-wrap flex flex-col items-center justify-center gap-4">
              <div className="bg-white/10 text-white p-4 flex gap-2 rounded-lg">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_143_381)">
                    <path
                      d="M20.8001 26C17.9332 26 15.6001 28.3331 15.6001 31.2C15.6001 34.0669 17.9332 36.4 20.8001 36.4C23.667 36.4 26.0001 34.0669 26.0001 31.2C26.0001 28.3331 23.667 26 20.8001 26ZM20.8001 33.8C19.364 33.8 18.2001 32.6361 18.2001 31.2C18.2001 29.7639 19.364 28.6 20.8001 28.6C22.2362 28.6 23.4001 29.7639 23.4001 31.2C23.4001 32.6361 22.2362 33.8 20.8001 33.8Z"
                      fill="white"
                    />
                    <path
                      d="M20.7998 20.8V23.4C25.108 23.4 28.5998 26.8918 28.5998 31.2H31.1998C31.1998 25.4653 26.5345 20.8 20.7998 20.8Z"
                      fill="white"
                    />
                    <path
                      d="M20.7998 15.6V18.2C27.9793 18.2 33.7998 24.0205 33.7998 31.2H36.3998C36.3998 22.5983 29.4014 15.6 20.7998 15.6Z"
                      fill="white"
                    />
                    <path
                      d="M20.7998 10.4V13C30.8514 13 38.9998 21.1484 38.9998 31.2H41.5998C41.5998 19.7306 32.2693 10.4 20.7998 10.4Z"
                      fill="white"
                    />
                    <path
                      d="M26 0C11.6411 0 0 11.6411 0 26C0 40.3589 11.6411 52 26 52C40.3589 52 52 40.3589 52 26C52 11.6411 40.3589 0 26 0ZM26 49.4C13.0971 49.4 2.6 38.9029 2.6 26C2.6 13.0971 13.0971 2.6 26 2.6C38.9029 2.6 49.4 13.0971 49.4 26C49.4 38.9029 38.9029 49.4 26 49.4Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_143_381">
                      <rect width="52" height="52" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h3 className="font-semibold md:text-lg">
                    Industry-Leading WiFi
                  </h3>
                  <p className="text-xs md:text-sm text-wrap">
                    Cutting-Edge WiFi Engineered for Performance
                  </p>
                </div>
              </div>
              <div className="bg-white/10 text-white p-4 flex gap-2 rounded-lg">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 0C10.7456 0 0 10.7456 0 24C0 37.2544 10.7456 48 24 48C37.2544 48 48 37.2544 48 24C48 10.7456 37.2544 0 24 0ZM16.1448 3.90084C13.8072 6.44325 11.956 10.1001 10.824 14.4001H4.66397C7.04803 9.63197 11.144 5.86163 16.1448 3.90084ZM2.4 24C2.4 21.4688 2.87597 19.0568 3.68081 16.8H10.2896C9.85763 19.0776 9.6 21.484 9.6 24C9.6 26.516 9.85763 28.9224 10.2888 31.2H3.68081C2.87597 28.9432 2.4 26.5312 2.4 24ZM4.66397 33.6H10.824C11.9568 37.9 13.8072 41.5567 16.1448 44.0992C11.144 42.1384 7.04803 38.368 4.66397 33.6ZM22.8 45.4864C18.6928 44.7127 15.124 40.0264 13.2976 33.6H22.8V45.4864ZM22.8 31.2H12.7256C12.264 28.9344 12 26.5128 12 24C12 21.4872 12.264 19.0656 12.7256 16.8H22.8V31.2ZM22.8 14.4H13.2976C15.124 7.97363 18.6928 3.28716 22.8 2.51363V14.4ZM43.336 14.4H37.176C36.0432 10.1 34.1928 6.44316 31.8552 3.90075C36.856 5.86163 40.952 9.63197 43.336 14.4ZM25.2 2.51363C29.3072 3.28725 32.876 7.97363 34.7024 14.4H25.2V2.51363ZM25.2 16.8H35.2744C35.736 19.0656 36 21.4872 36 24C36 26.5128 35.736 28.9344 35.2744 31.2H25.2V16.8ZM25.2 45.4864V33.6H34.7024C32.876 40.0264 29.3072 44.7128 25.2 45.4864ZM31.8552 44.0992C34.1928 41.556 36.0432 37.8999 37.176 33.6H43.336C40.952 38.368 36.856 42.1384 31.8552 44.0992ZM37.7104 31.2C38.1424 28.9224 38.4 26.516 38.4 24C38.4 21.484 38.1424 19.0776 37.7112 16.8H44.32C45.124 19.0568 45.6 21.4688 45.6 24C45.6 26.5312 45.124 28.9432 44.3192 31.2H37.7104Z"
                    fill="white"
                  />
                </svg>

                <div>
                  <h3 className="font-semibold md:text-lg">
                    Seamless Connectivity
                  </h3>
                  <p className="text-xs md:text-sm">
                    Cutting-Edge WiFi Engineered for Performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HELP FROM EXPERTS SECTION */}
      <div className=" bg-gradient-to-r from-[#142462] to-[#2A6A9E] py-12">
        <div className="">
          <h1 className="text-2xl pb-12 md:text-5xl text-center text-white">
            Get Help from the Experts
          </h1>
          <div className="flex flex-wrap max-w-5xl justify-around mx-auto">
            {cardData.map((card, index) => (
              <div key={index}>
                <div className="max-w-sm p-4  bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative">
                    <img
                      src={card.image}
                      alt="Professional Phone Support"
                      className="w-full object-cover  rounded-xl"
                    />
                    <div className="absolute top-6 right-6 bg-white rounded-full p-1 shadow transition-transform duration-300 hover:rotate-45">
                      <ArrowUpRight className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-[#142462] pt-5">
                    <h3 className="md:text-xl font-semibold mb-2">
                      Professional Phone Support
                    </h3>
                    <p className="text-xs md:text-sm">
                      Get priority site support from world-class UniFi Network
                      Engineers.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* LEADING WIFI SECTION */}
      <div className="py-12">
        <h1 className="text-center pb-5 font-semibold text-[#142462] text-5xl">
          Industry-Leading WiFi
        </h1>
        <div className="grid sm:grid-cols-2 justify-center items-center lg:grid-cols-3 gap-4 w-full max-w-6xl mx-auto">
          {cardData2.map((data, index) => (
            <div className="flex" key={index}>
              <Cards2
                img={data.image}
                subtitle={data.subtitle}
                title={data.title}
                description={data.description}
              />
            </div>
          ))}
        </div>
      </div>
      {/* DESIGN CENTER SECTION */}
      <div className="py-12">
        <h1 className="text-center text-[#142462] text-3xl md:text-5xl font-semibold pb-12">
          Get started with Enlinc
        </h1>
        <div className="grid grid-cols-2 pt-12 bg-[#2A6A9E] rounded-xl max-w-6xl mx-auto">
          <div className="text-white flex flex-col gap-4 px-12 pb-12 justify-center">
            <h1 className="text-4xl">Design Center</h1>
            <p>
              Powerful visualization and planning tool that allows you to
              simulate a complete UniFi system.
            </p>
            <button className="flex w-fit border-white border-2 rounded-lg items-center gap-2 py-2 px-4">
              <span>Learn More</span>
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1C12 0.447714 11.5523 -7.61451e-07 11 -3.39982e-07L2 -2.13542e-07C1.44772 -5.50717e-07 1 0.447715 1 0.999999C1 1.55228 1.44772 2 2 2L10 2L10 10C10 10.5523 10.4477 11 11 11C11.5523 11 12 10.5523 12 10L12 1ZM1 11L1.70711 11.7071L11.7071 1.70711L11 0.999999L10.2929 0.292893L0.292893 10.2929L1 11Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div>
            <img
              src={imgDesign}
              className="object-cover w-full"
              alt="design center banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Networking;
