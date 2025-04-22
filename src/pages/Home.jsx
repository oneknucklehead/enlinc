import bgImg from "../assets/images/bg.png";
import Button from "../components/Button";
import googleLogo from "../assets/images/google.png";
import headphoneLogo from "../assets/images/headphone.png";
import homeMainImg from "../assets/images/home-mainImg.png";
import Container from "../components/Container";
import logo from "../assets/images/brands/Logo.png";
import logo1 from "../assets/images/brands/Logo-1.png";
import logo2 from "../assets/images/brands/Logo-2.png";
import logo3 from "../assets/images/brands/Logo-3.png";
import logo4 from "../assets/images/brands/Logo-4.png";
import logo5 from "../assets/images/brands/Logo-5.png";
import logo6 from "../assets/images/brands/Logo-6.png";
import logo7 from "../assets/images/brands/Logo-7.png";

const brandArr = [logo, logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="px-4 pb-4 mt-[92px] overflow-hidden">
        <div className="relative mt-[92px] rounded-lg bg-[radial-gradient(100%_100%_at_top,_white_57%,_#2A6A9E_83%,_#142462_100%)]">
          <img src={bgImg} className="absolute -bottom-44 -right-28 " />
          <div className="relative flex flex-col justify-center items-center gap-4 h-full w-full">
            <div className="text-center">
              <h1 className="text-6xl">Seamless Business Connectivity.</h1>
              <h1 className="text-6xl">Smarter Phone Systems.</h1>
              <h1 className="font-bold text-6xl">Zero Headaches.</h1>
            </div>
            <p>
              We drive business growth with cost-effective, future-ready
              communication systems -<br /> ensuring secure operations backed by
              24/7 Australia-based support
            </p>
            <div className="flex gap-2">
              <Button classname={"py-2 px-4"}>
                <p>Book a Demo</p>
              </Button>
              <Button classname={"py-[6px] px-4 text-[#142462]"} outline={true}>
                <div className="flex gap-2">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5047 10.6457L8.73161 13.9788L8.73161 7.31257L14.5047 10.6457Z"
                      fill="#142462"
                    />
                    <circle
                      cx="10.6559"
                      cy="10.6456"
                      r="8.98401"
                      stroke="#142462"
                      stroke-width="2"
                    />
                  </svg>

                  <p>How we help</p>
                </div>
              </Button>
            </div>
            <div className="flex ">
              <div className=" -rotate-12 p-[2px] h-fit rounded-lg bg-gradient-to-r from-[#0EA4DE] to-[#142462]">
                <div className="rounded-md bg-white flex justify-center items-center gap-2  py-2 pl-2">
                  <img src={googleLogo} />
                  <div className="pr-3">
                    <div className="flex gap-2">
                      <svg
                        width="28"
                        height="27"
                        viewBox="0 0 28 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.3116 25.3046C23.1001 25.3253 22.6769 25.3666 22.4447 25.1757L15.2008 20.9719L8.9053 26.4978C8.52347 26.9623 7.88874 27.0243 7.42426 26.6425C6.95979 26.2606 6.70689 25.8581 6.85648 25.2027L8.61046 16.9162L1.36656 12.7125C0.902083 12.3307 0.649185 11.9282 0.798779 11.2728C0.948377 10.6174 1.35086 10.3645 1.98559 10.3025L10.447 9.47627L12.2009 1.18977C12.3505 0.534376 12.753 0.28148 13.3878 0.219497C14.0225 0.157514 14.487 0.539342 14.7399 0.941834L18.0638 8.73247L26.5252 7.90619C27.1599 7.84421 27.6244 8.22604 27.8773 8.62853C28.1302 9.03102 27.9806 9.68642 27.5988 10.1509L21.305 15.6766L24.6289 23.4672C24.9025 24.0813 24.7322 24.5251 24.3504 24.9896C23.7347 25.2633 23.5232 25.2839 23.3116 25.3046Z"
                          fill="#F3C200"
                        />
                      </svg>
                      <svg
                        width="28"
                        height="27"
                        viewBox="0 0 28 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.3116 25.3046C23.1001 25.3253 22.6769 25.3666 22.4447 25.1757L15.2008 20.9719L8.9053 26.4978C8.52347 26.9623 7.88874 27.0243 7.42426 26.6425C6.95979 26.2606 6.70689 25.8581 6.85648 25.2027L8.61046 16.9162L1.36656 12.7125C0.902083 12.3307 0.649185 11.9282 0.798779 11.2728C0.948377 10.6174 1.35086 10.3645 1.98559 10.3025L10.447 9.47627L12.2009 1.18977C12.3505 0.534376 12.753 0.28148 13.3878 0.219497C14.0225 0.157514 14.487 0.539342 14.7399 0.941834L18.0638 8.73247L26.5252 7.90619C27.1599 7.84421 27.6244 8.22604 27.8773 8.62853C28.1302 9.03102 27.9806 9.68642 27.5988 10.1509L21.305 15.6766L24.6289 23.4672C24.9025 24.0813 24.7322 24.5251 24.3504 24.9896C23.7347 25.2633 23.5232 25.2839 23.3116 25.3046Z"
                          fill="#F3C200"
                        />
                      </svg>
                      <svg
                        width="28"
                        height="27"
                        viewBox="0 0 28 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.3116 25.3046C23.1001 25.3253 22.6769 25.3666 22.4447 25.1757L15.2008 20.9719L8.9053 26.4978C8.52347 26.9623 7.88874 27.0243 7.42426 26.6425C6.95979 26.2606 6.70689 25.8581 6.85648 25.2027L8.61046 16.9162L1.36656 12.7125C0.902083 12.3307 0.649185 11.9282 0.798779 11.2728C0.948377 10.6174 1.35086 10.3645 1.98559 10.3025L10.447 9.47627L12.2009 1.18977C12.3505 0.534376 12.753 0.28148 13.3878 0.219497C14.0225 0.157514 14.487 0.539342 14.7399 0.941834L18.0638 8.73247L26.5252 7.90619C27.1599 7.84421 27.6244 8.22604 27.8773 8.62853C28.1302 9.03102 27.9806 9.68642 27.5988 10.1509L21.305 15.6766L24.6289 23.4672C24.9025 24.0813 24.7322 24.5251 24.3504 24.9896C23.7347 25.2633 23.5232 25.2839 23.3116 25.3046Z"
                          fill="#F3C200"
                        />
                      </svg>
                      <svg
                        width="28"
                        height="27"
                        viewBox="0 0 28 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.3116 25.3046C23.1001 25.3253 22.6769 25.3666 22.4447 25.1757L15.2008 20.9719L8.9053 26.4978C8.52347 26.9623 7.88874 27.0243 7.42426 26.6425C6.95979 26.2606 6.70689 25.8581 6.85648 25.2027L8.61046 16.9162L1.36656 12.7125C0.902083 12.3307 0.649185 11.9282 0.798779 11.2728C0.948377 10.6174 1.35086 10.3645 1.98559 10.3025L10.447 9.47627L12.2009 1.18977C12.3505 0.534376 12.753 0.28148 13.3878 0.219497C14.0225 0.157514 14.487 0.539342 14.7399 0.941834L18.0638 8.73247L26.5252 7.90619C27.1599 7.84421 27.6244 8.22604 27.8773 8.62853C28.1302 9.03102 27.9806 9.68642 27.5988 10.1509L21.305 15.6766L24.6289 23.4672C24.9025 24.0813 24.7322 24.5251 24.3504 24.9896C23.7347 25.2633 23.5232 25.2839 23.3116 25.3046Z"
                          fill="#F3C200"
                        />
                      </svg>
                      <svg
                        width="28"
                        height="27"
                        viewBox="0 0 28 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.3116 25.3046C23.1001 25.3253 22.6769 25.3666 22.4447 25.1757L15.2008 20.9719L8.9053 26.4978C8.52347 26.9623 7.88874 27.0243 7.42426 26.6425C6.95979 26.2606 6.70689 25.8581 6.85648 25.2027L8.61046 16.9162L1.36656 12.7125C0.902083 12.3307 0.649185 11.9282 0.798779 11.2728C0.948377 10.6174 1.35086 10.3645 1.98559 10.3025L10.447 9.47627L12.2009 1.18977C12.3505 0.534376 12.753 0.28148 13.3878 0.219497C14.0225 0.157514 14.487 0.539342 14.7399 0.941834L18.0638 8.73247L26.5252 7.90619C27.1599 7.84421 27.6244 8.22604 27.8773 8.62853C28.1302 9.03102 27.9806 9.68642 27.5988 10.1509L21.305 15.6766L24.6289 23.4672C24.9025 24.0813 24.7322 24.5251 24.3504 24.9896C23.7347 25.2633 23.5232 25.2839 23.3116 25.3046Z"
                          fill="#F3C200"
                        />
                      </svg>
                    </div>
                    <p className="text-lg">Highest Rated Service!</p>
                    <p className="text-xs">Over 100+ 5 Star Reviews</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={homeMainImg} />
              </div>
              <div className="rotate-12 p-[2px] h-fit rounded-lg bg-gradient-to-r from-[#0EA4DE] to-[#142462]">
                <div className="rounded-md bg-white flex justify-center items-center gap-2  py-2 pl-2">
                  <img src={headphoneLogo} />
                  <div className="pr-3">
                    <div className="text-lg text-[#F3C200] font-gabarito-semibold-600">
                      24/7 Australia
                    </div>
                    <p className="text-lg">Based Dedicated</p>
                    <p className="text-lg">Personalised Service!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div classname="w-full">
        <Container>
          <div>
            <p className="text-3xl text-center py-6">
              Trusted by over 2k+ companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {brandArr.map((brand, index) => (
                <div key={index} className="">
                  <img src={brand} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
