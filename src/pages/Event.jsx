import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const dummyEvents = [
  {
    id: 1,
    title: "Smart Automotive Robotics Summit",
    shortDesc: "Explore robotics transforming vehicle assembly lines.",
    date: "12 Aug, 2025",
    location: "Chennai, India",
  },
  {
    id: 2,
    title: "Industrial IoT & Sensors Expo",
    shortDesc: "Connect with experts on IoT-powered factory optimization.",
    date: "25 Sep, 2025",
    location: "Gurgaon, India",
  },
  {
    id: 3,
    title: "Precision CNC & Machining Conference",
    shortDesc: "Discover breakthroughs in high-speed CNC technology.",
    date: "8 Oct, 2025",
    location: "Rajkot, India",
  },
  {
    id: 4,
    title: "Supply Chain Automation Forum",
    shortDesc: "Learn how AI is transforming logistics and warehousing.",
    date: "16 Nov, 2025",
    location: "Mumbai, India",
  },
];

const Event = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">
        🚀 Upcoming Manufacturing Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyEvents.map((event) => (
          <Link
            to={`/events/${event.id}`}
            key={event.id}
            className="bg-white border rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 group"
          >
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition">
              {event.title}
            </h2>
            <p className="text-gray-600 my-3">{event.shortDesc}</p>
            <div className="flex items-center text-sm text-gray-500 gap-2 mt-2">
              <CalendarDays className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 gap-2 mt-1">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Event;
