import React from "react";
import Container from "../components/Container";
import Accordion from "../components/Accordion";

const FAQSection = () => {
  return (
    <div className="py-12 px-4">
      <Container>
        <h3
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="text-3xl lg:text-4xl text-center"
        >
          Frequently asked questions
        </h3>
        <Accordion />
      </Container>
    </div>
  );
};

export default FAQSection;
