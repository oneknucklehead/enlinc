import React from "react";
import Container from "./Container";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-12 text-white bg-gradient-to-l from-[#2A6A9E] to-[#142462]">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 pb-4 gap-8">
          <div>
            <h3 className="text-2xl">Get in touch</h3>
            <p>
               72 Fergusson Street,
              <br /> Fairy Hill
            </p>
            <div className="flex flex-col">
              <p>+91 9846632178</p>
              <p>email@enlinc.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl">Services</h3>
            <div className="flex flex-col">
              <Link to={"/phone-systems"}>Phone Systems</Link>
              <a href="https://enlinc.speedtestcustom.com/">
                Enlinc Speed Test
              </a>
              <a href="#">Lorem Ipsum dolor</a>
              <a href="#">Lorem Ipsum dolor</a>
              <a href="#">Lorem Ipsum dolor</a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl">Navigation</h3>
            <div className="flex flex-col">
              <Link to={"/phone-systems"}>Phone Systems</Link>
              <Link to={"/phone-systems/small-business"}>Small Business</Link>
              <Link to={"/contact"}>Contact Us</Link>
            </div>
          </div>
          <div>
            <h3 className="text-2xl">Policies</h3>
            <div className="flex flex-col">
              <a href="#">Lorem Ipsum dolor</a>
              <a href="#">Lorem Ipsum dolor</a>
              <a href="#">Lorem Ipsum dolor</a>
              <a href="#">Lorem Ipsum dolor</a>
            </div>
          </div>
        </div>
        <div className="h-[2px] w-full bg-white/50 my-4"></div>
        <div className="flex justify-between items-center ">
          <img src={logo} alt="brand logo" className="hidden sm:block" />
          <p>&copy; {new Date().getFullYear()} En-linc.</p>
          <div className="flex flex-wrap gap-4 items-center">
            <span>
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 0H0V25.6986H25V0ZM8.33333 19.9878H4.82917V9.9939H8.33333V19.9878ZM6.51944 8.16216C5.44861 8.16216 4.73333 7.42832 4.73333 6.44892C4.73333 5.46952 5.44722 4.73568 6.6375 4.73568C7.70833 4.73568 8.42361 5.46952 8.42361 6.44892C8.42361 7.42832 7.70972 8.16216 6.51944 8.16216ZM20.8333 19.9878H17.4417V14.5254C17.4417 13.0149 16.5375 12.6666 16.1986 12.6666C15.8597 12.6666 14.7292 12.8993 14.7292 14.5254C14.7292 14.7581 14.7292 19.9878 14.7292 19.9878H11.225V9.9939H14.7292V11.3888C15.1806 10.575 16.0847 9.9939 17.7806 9.9939C19.4764 9.9939 20.8333 11.3888 20.8333 14.5254V19.9878Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>
              <svg
                width="12"
                height="23"
                viewBox="0 0 12 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 7.98107H7.981V5.70078C7.981 4.52416 8.07677 3.78306 9.76304 3.78306H11.8928V0.157411C10.8564 0.0502375 9.81435 -0.00220903 8.77112 7.12589e-05C5.67791 7.12589e-05 3.42043 1.88929 3.42043 5.3576V7.98107H0V12.5416L3.42043 12.5405V22.8029H7.981V12.5382L11.4767 12.5371L12 7.98107Z"
                  fill="white"
                />
              </svg>
            </span>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.142528 0L7.51415 10.5366L0 19.3167H2.84008L8.78432 12.3517L13.6575 19.3167H20L12.2763 8.26032L19.3272 0H16.5311L11.0124 6.44938L6.50807 0H0.142528Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
