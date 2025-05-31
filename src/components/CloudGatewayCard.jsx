import { Gauge, Clock, Users } from "lucide-react";
import imgDummy from "../assets/images/Networking/CloudGateways/2.jpg";

export default function CloudGatewayCard({
  imageUrl = imgDummy,
  line1 = "Throughput",
  line1Value = "5000+",
  line1Bar = 80,

  line2 = "Deployment Time",
  line2Value = "100+",
  line2Bar = 70,

  line3 = "Client Devices",
  line3Value = "400",
  line3Bar = 95,
  title = "Compact Cloud Gateways",
  subtitle = "Ideal for Small-to-Medium Networks",
  description = "Desktop 10G Cloud Gateway with integrated PoE switch, selectable NVR storage, and full UniFi application support.",
  buttonText = "Buy Now",
}) {
  return (
    <div className="w-full mx-auto overflow-hidden bg-white">
      {/* Description Section */}
      <div className="p-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
        <p className="text-gray-600 font-medium mt-2">{subtitle}</p>
        <p className="text-gray-500 mt-2 text-sm">{description}</p>
        {/* <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded">
          {buttonText}
        </button> */}
      </div>
      {/* Image Section */}
      <div className="relative shadow-lg rounded-t-lg">
        <img
          src={imageUrl}
          alt="Cloud Gateway"
          className="w-full h-auto rounded-t-lg shadow-lg object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-sm p-4 space-y-3">
          {/* Throughput */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Gauge size={16} />
              <span className="font-semibold">{line1}</span>
            </div>
            <span>{line1Value}</span>
          </div>
          <div className="h-1 w-full bg-gray-700 rounded-full">
            <div
              className="h-full bg-blue-300 rounded-full"
              style={{ width: `${line1Bar}%` }}
            />
          </div>

          {/* Deployment Time */}
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="font-semibold">{line2}</span>
            </div>
            <span>{line2Value}</span>
          </div>
          <div className="h-1 w-full bg-gray-700 rounded-full">
            <div
              className="h-full bg-blue-300 rounded-full"
              style={{ width: `${line2Bar}%` }}
            />
          </div>

          {/* Client Devices */}
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span className="font-semibold">{line3}</span>
            </div>
            <span>{line3Value}</span>
          </div>
          <div className="h-1 w-full bg-gray-700 rounded-full">
            <div
              className="h-full bg-blue-300 rounded-full"
              style={{ width: `${line3Bar}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
