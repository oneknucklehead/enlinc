import React from "react";
import ContentSection from "../../sections/ContentSection";
import Container from "../../components/Container";
import { Gauge } from "lucide-react";
import CloudGatewayCard from "../../components/CloudGatewayCard";
import videoSrc from "../../assets/images/Networking/CloudGateways/3.mp4";
import vid1 from "../../assets/images/Networking/CloudGateways/new1.mp4";
import vid2 from "../../assets/images/Networking/CloudGateways/new2.mp4";
import vid3 from "../../assets/images/Networking/CloudGateways/new3.mp4";
import vid4 from "../../assets/images/Networking/CloudGateways/new4.mp4";
import v1 from "../../assets/images/Networking/CloudGateways/sec2/1.mp4";
import v2 from "../../assets/images/Networking/CloudGateways/sec2/2.mp4";
import v3 from "../../assets/images/Networking/CloudGateways/sec2/3.mp4";
import v4 from "../../assets/images/Networking/CloudGateways/sec2/4.mp4";
import v5 from "../../assets/images/Networking/CloudGateways/sec2/5.mp4";
import v6 from "../../assets/images/Networking/CloudGateways/sec2/6.mp4";
import VideoCardSwitcher from "../../components/VideoCardSwitcher";
import FormBanner from "../../sections/FormBanner";

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
          <ContentSection
            // noImg={true}
            video={true}
            videoLink={
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FbotQHGdW3Y?si=LUrJaqmLHDNensef"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            }
            reverse={true}
          >
            <div className="text-center md:text-start flex flex-col gap-6">
              <h1
                className="text-4xl md:text-5xl xl:text-6xl font-gabarito-semibold-600"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                Cloud Gateways
              </h1>
              {/* <div
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <p className="text-center md:text-start xl:text-lg font-gabarito-reg-400">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div> */}
            </div>
          </ContentSection>
        </Container>
      </div>
      <FormBanner />
      <div className="py-12">
        <VideoCardSwitcher
          videos={[
            {
              src: vid1,
              label: "Industry Leading Hardware",
              heading: "Industry Leading Hardware",
            },
            {
              src: vid2,
              label: "Intuitive Setup and Install",
              heading: "Intuitive Setup and Install",
            },
            {
              src: vid3,
              label: "Scales Wide, Scales tall",
              heading: "Scales Wide, Scales tall",
            },
            {
              src: vid4,
              label: "Software Updates that Keep Giving",
              heading: "Software Updates that Keep Giving",
            },
          ]}
        />
      </div>
      <div className="py-12">
        <h1 className=" text-3xl sm:text-4xl font-semibold text-center mb-4">
          AI Enhanced Cybersecurity Platform
        </h1>
        <VideoCardSwitcher
          videos={[
            {
              src: v1,
              label: "Firewall Zone Matrix",
              // heading: "Industry Leading Hardware",
            },
            {
              src: v2,
              label: "Seamless VPN & SD-WAN",
              // heading: "Intuitive Setup and Install",
            },
            {
              src: v3,
              label: "Intelligent Failover",
              // heading: "Scales Wide, Scales tall",
            },
            {
              src: v4,
              label: "Detailed Traffic & Activity Logs",
              // heading: "Software Updates that Keep Giving",
            },
            {
              src: v5,
              label: "Advanced Intrusion Prevention & Anti Malware",
              // heading: "Software Updates that Keep Giving",
            },
            {
              src: v6,
              label: "Layer 7 Application & Web Filtering",
              // heading: "Software Updates that Keep Giving",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default CloudGateways;
