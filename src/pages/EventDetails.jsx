import React from "react";
import { useParams } from "react-router-dom";
import { CalendarDays, MapPin } from "lucide-react";

const eventDetailsData = {
  1: {
    title: "Smart Automotive Robotics Summit",
    desc: "Join global automotive leaders and robotics engineers to explore how automation is reshaping car manufacturing. Demos include robotic welding arms, AI-powered assembly inspection, and smart robot-human collaboration.",
    date: "12 Aug, 2025",
    location: "Chennai Trade Center, Chennai",
    faqs: [
      {
        q: "Who should attend this summit?",
        a: "Automotive engineers, robotics developers, and manufacturing managers.",
      },
      {
        q: "Will there be live demos?",
        a: "Yes, including robotic welding and AI-powered inspection tools.",
      },
    ],
  },
  2: {
    title: "Industrial IoT & Sensors Expo",
    desc: "Dive into cutting-edge IoT solutions and smart sensors revolutionizing real-time data in manufacturing. Learn from Bosch, Siemens, and Honeywell experts about predictive maintenance, data security, and energy-efficient systems.",
    date: "25 Sep, 2025",
    location: "DLF Convention Hall, Gurgaon",
    faqs: [
      {
        q: "Which companies are participating?",
        a: "Bosch, Siemens, Honeywell, and other IoT innovators.",
      },
      {
        q: "Is this suitable for beginners?",
        a: "Yes, sessions are designed for all experience levels.",
      },
    ],
  },
  3: {
    title: "Precision CNC & Machining Conference",
    desc: "This event focuses on next-gen CNC lathes, 5-axis machines, and automation in precision engineering. Hands-on experience with hybrid CNC+AI systems and CAD/CAM-driven production flows.",
    date: "8 Oct, 2025",
    location: "Rajkot Engineering Expo Center, Rajkot",
    faqs: [
      {
        q: "Can we operate machines during the event?",
        a: "Yes, hands-on trials will be available with guidance.",
      },
      {
        q: "What kind of machines will be shown?",
        a: "5-axis CNC, hybrid AI+CNC systems, and CAM setups.",
      },
    ],
  },
  4: {
    title: "Supply Chain Automation Forum",
    desc: "Meet logistics innovators automating every stage from warehouse to delivery. Explore AGVs, AI in route optimization, smart RFID tagging, and blockchain-led inventory control.",
    date: "16 Nov, 2025",
    location: "Mumbai Expo Grounds, Mumbai",
    faqs: [
      {
        q: "Will there be live AGV demos?",
        a: "Yes, AGV and RFID tech will be demonstrated on-site.",
      },
      {
        q: "Is this event suitable for logistics startups?",
        a: "Absolutely, perfect for startups in automation and logistics.",
      },
    ],
  },
};

const EventDetails = () => {
  const { id } = useParams();
  const event = eventDetailsData[id];

  if (!event) {
    return (
      <div className="text-center text-red-600 mt-10">Event not found.</div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>

      <div className="flex items-center text-sm text-gray-500 gap-2 mb-2">
        <CalendarDays className="w-4 h-4" />
        <span>{event.date}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500 gap-2 mb-4">
        <MapPin className="w-4 h-4" />
        <span>{event.location}</span>
      </div>

      <p className="text-gray-700 text-lg leading-relaxed mb-6">{event.desc}</p>

      <div>
        <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
        <div className="space-y-4">
          {event.faqs?.map((faq, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-xl shadow">
              <h3 className="font-semibold text-gray-800">{faq.q}</h3>
              <p className="text-gray-600 mt-1">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
