import React from "react";
import Container from "../components/Container";
import MultiStepForm from "../components/MultiStepForm";
import savings from "../assets/images/Savings.png";

const FormBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] py-24 px-4">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12 md:gap-4">
          <div className="text-white space-y-2">
            <span
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <img src={savings} alt="savings" />
            </span>
            <h3
              className="text-3xl"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Smarter Phone Systems, Bigger Savings –{" "}
              <b>Slash Call Costs by Up to 75%</b>
            </h3>
            <p
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              Over 500 companies have already switched to En-Linc
            </p>
          </div>
          <div
            className="flex sm:justify-center sm:items-center"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
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
  );
};

export default FormBanner;
