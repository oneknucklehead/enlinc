import React from "react";
import ContentSection from "../../sections/ContentSection";
import Container from "../../components/Container";
import { Gauge } from "lucide-react";
import CloudGatewayCard from "../../components/CloudGatewayCard";
import videoSrc from "../../assets/images/Networking/CloudGateways/3.mp4";

const CloudGateways = () => {
  const featureCard = [
    {
      title: "Throughput",
      icons: [
        {
          icon: <Gauge height={50} width={50} />,
          description: " Up to 10 Gbps Throughput",
        },
        {
          icon: <Gauge height={50} width={50} />,
          description: " Up to 10 Gbps Throughput",
        },
        {
          icon: <Gauge height={50} width={50} />,
          description: " Up to 10 Gbps Throughput",
        },
        {
          icon: <Gauge height={50} width={50} />,
          description: " Up to 10 Gbps Throughput",
        },
      ],
    },
    {
      title: "Advanced Threat Protection",
      icons: [
        {
          icon: <Gauge height={50} width={50} />,
          description: " Up to 10 Gbps Throughput",
        },
        {
          icon: <Gauge height={50} width={50} />,
          description: " Up to 10 Gbps Throughput",
        },
        {
          icon: <Gauge height={50} width={50} />,
          description: " Up to 10 Gbps Throughput",
        },
        {
          icon: <Gauge height={50} width={50} />,
          description: " Up to 10 Gbps Throughput",
        },
      ],
    },
    {
      title: "Optimized Connectivity",
      icons: [
        {
          icon: <Gauge className="w-12 h-12" />,
          description: " Up to 10 Gbps Throughput",
        },
        {
          icon: <Gauge className="w-12 h-12" />,
          description: " Up to 10 Gbps Throughput",
        },
        {
          icon: <Gauge className="w-12 h-12" />,
          description: " Up to 10 Gbps Throughput",
        },
        {
          icon: <Gauge className="w-12 h-12" />,
          description: " Up to 10 Gbps Throughput",
        },
      ],
    },
  ];
  const productCards = [
    {
      line1: "Throughput",
      line1Value: "5000+",
      line1Bar: 80,

      line2: "Deployment Time",
      line2Value: "100+",
      line2Bar: 70,

      line3: "Client Devices",
      line3Value: "400",
      line3Bar: 95,
      title: "Compact Cloud Gateways",
      subtitle: "Ideal for Small-to-Medium Networks",
      description:
        "Desktop 10G Cloud Gateway with integrated PoE switch, selectable NVR storage, and full UniFi application support.",
    },
    {
      line1: "Throughput",
      line1Value: "5000+",
      line1Bar: 80,

      line2: "Deployment Time",
      line2Value: "100+",
      line2Bar: 70,

      line3: "Client Devices",
      line3Value: "400",
      line3Bar: 95,
      title: "Compact Cloud Gateways",
      subtitle: "Ideal for Small-to-Medium Networks",
      description:
        "Desktop 10G Cloud Gateway with integrated PoE switch, selectable NVR storage, and full UniFi application support.",
    },
    {
      line1: "Throughput",
      line1Value: "5000+",
      line1Bar: 80,

      line2: "Deployment Time",
      line2Value: "100+",
      line2Bar: 70,

      line3: "Client Devices",
      line3Value: "400",
      line3Bar: 95,
      title: "Compact Cloud Gateways",
      subtitle: "Ideal for Small-to-Medium Networks",
      description:
        "Desktop 10G Cloud Gateway with integrated PoE switch, selectable NVR storage, and full UniFi application support.",
    },
    {
      line1: "Throughput",
      line1Value: "5000+",
      line1Bar: 80,

      line2: "Deployment Time",
      line2Value: "100+",
      line2Bar: 70,

      line3: "Client Devices",
      line3Value: "400",
      line3Bar: 95,
      title: "Compact Cloud Gateways",
      subtitle: "Ideal for Small-to-Medium Networks",
      description:
        "Desktop 10G Cloud Gateway with integrated PoE switch, selectable NVR storage, and full UniFi application support.",
    },
  ];
  return (
    <div>
      <div className="px-4 mt-[92px] py-24">
        <Container>
          <ContentSection noImg={true} reverse={true}>
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1
                className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                Cloud Gateways
              </h1>
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </ContentSection>
        </Container>
      </div>
      <div className="w-full bg-gradient-to-r from-[#142462] to-[#2A6A9E] py-12">
        <Container>
          <div className="px-4 py-24 text-white">
            <h1 className="text-5xl text-center font-semibold">
              A Feature-Complete Gateway Platform
            </h1>
            <p className=" text-center pt-2">
              Deploy advanced routing and security features with just a few
              clicks.
            </p>
            {/* <Container> */}
            <div className="grid lg:grid-cols-3 divide-y-2 lg:divide-y-0 divide-x-0 lg:divide-x-2 divide-white/75 justify-center items-center py-12 gap-4">
              {featureCard.map((feature, index) => (
                <div className="flex flex-col items-center justify-center p-6 lg:p-4 gap-y-8">
                  <h4 className="text-2xl text-center">{feature.title}</h4>
                  <div className="grid grid-cols-2 gap-12 lg:gap-4">
                    {feature.icons.map((icon, index) => (
                      <div className="flex flex-col items-center opacity-75">
                        {icon.icon}
                        <p className="text-center text-sm md:text-lg">
                          {icon.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* </Container> */}
          </div>
        </Container>
      </div>
      <div className="py-12">
        <Container>
          <div className="flex flex-col items-center pb-4">
            <h1 className="text-4xl font-semibold">
              Identity Mobile App Ready
            </h1>
            <p>An IT Manager's dream.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
            <div className="lg:col-span-2 ">
              <div className="relative w-full mx-auto rounded-xl overflow-hidden">
                {/* Text Overlay */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <h2 className="text-white text-xl font-semibold">
                    Door Access
                  </h2>
                </div>

                {/* Video */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-4">
                {/* Top Image Card */}
                <div className="relative rounded-xl overflow-hidden">
                  <div className="relative w-full rounded-xl overflow-hidden">
                    {/* Text Overlay */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <h2 className="text-white text-xl font-semibold">
                        Door Access
                      </h2>
                    </div>

                    {/* Video */}
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto object-cover"
                    >
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Bottom Image Card with title */}
                <div className="relative rounded-xl overflow-hidden">
                  <div className="relative w-full rounded-xl overflow-hidden">
                    {/* Text Overlay */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <h2 className="text-white text-xl font-semibold">
                        Door Access
                      </h2>
                    </div>

                    {/* Video */}
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto object-cover"
                    >
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-12">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {productCards.map((product, index) => (
                <CloudGatewayCard
                  key={index}
                  line1={product.line1}
                  line1Value={product.line1Value}
                  line1Bar={product.line1Bar}
                  line2={product.line2}
                  line2Value={product.line2Value}
                  line2Bar={product.line2Bar}
                  line3={product.line3}
                  line3Value={product.line3Value}
                  line3Bar={product.line3Bar}
                  title={product.title}
                  subtitle={product.subtitle}
                  description={product.description}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CloudGateways;
