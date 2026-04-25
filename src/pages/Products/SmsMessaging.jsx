import React from "react";
import ContentSection from "../../sections/ContentSection";
import Container from "../../components/Container";
import Button from "../../components/Button";
import FeatureCard2 from "../../components/FeatureCard2";
import { PhoneForwarded } from "lucide-react";
import img1 from "../../assets/images/SmsMessaging/sms-banner.webp";

const SmsMessaging = () => {
  return (
    <div className=" py-12">
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection img={img1} reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                SMS Sender ID Changes
              </h1>
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  New regulations introduced by the Australian Communications
                  and Media Authority (ACMA) under the Telecommunications (SMS
                  Sender ID Register) Industry Standard 2025 will require all
                  businesses sending SMS messages using a Sender ID (e.g. a
                  business name instead of a phone number) to register their
                  Sender IDs. These changes are being implemented to reduce SMS
                  scams and prevent sender ID spoofing, helping ensure customers
                  can trust the origin of messages they receive.
                </p>
                <br />
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  From 1 July 2026, unregistered Sender IDs may be replaced with
                  “Unverified” or blocked by carriers, which may impact message
                  delivery and customer trust. If your business uses SMS for
                  alerts, notifications, or marketing, it is important to ensure
                  your Sender ID is registered. For further information, please
                  refer to the official ACMA guidance:{" "}
                  <a
                    href="https://www.acma.gov.au/sms-sender-id-register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.acma.gov.au/sms-sender-id-register
                  </a>
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      {/* <div className="px-4 py-24">
        <Container>
         
          <ContentSection img={img2}>
            <div className="flex flex-col gap-6">
              <h3 className="text-center md:text-start text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600">
                Why Custom Websites & Apps Are Essential for Your Business
              </h3>
             
              <div>
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  <ul className="space-y-4 py-2">
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-7 h-7 text-[#2A6A9E]  flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 transition-colors duration-300 hover:text-black">
                        <b>Build Powerful Digital Experiences That Convert</b>
                        <br />
                        From custom websites to mobile apps, we design and
                        develop high-performance digital platforms that are
                        fast, scalable, and tailored to your business goals.
                        Whether you need an eCommerce site, a business app, or a
                        customer portal — we turn your ideas into responsive,
                        SEO-optimized solutions.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-7 h-7 text-[#2A6A9E]  flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 transition-colors duration-300 hover:text-black">
                        <b>Engage Users Across Every Device</b>
                        With seamless cross-platform compatibility, our web and
                        app development ensures a smooth experience on desktop,
                        tablet, and mobile. We prioritize UX/UI design, speed,
                        and accessibility to keep users engaged and conversions
                        high — no matter where your audience is.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg
                        className="w-7 h-7 text-[#2A6A9E]  flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 transition-colors duration-300 hover:text-black">
                        <b>Future-Proof Your Business with Scalable Tech</b>
                        Built with modern frameworks and clean code, your
                        website or app is ready to grow with you. Our expert
                        team ensures your digital presence is secure, easy to
                        maintain, and optimized for long-term performance — so
                        you stay ahead of the competition
                      </span>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div> */}
    </div>
  );
};

export default SmsMessaging;
