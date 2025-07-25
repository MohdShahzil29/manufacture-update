import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const team = [
  {
    name: "Rohit Sharma",
    role: "Founder & CEO",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    role: "COO",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Kumar",
    role: "CTO",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-10 p-8 md:p-20 items-center">
        <img
          src="https://images.unsplash.com/photo-1469289759076-d1484757abc3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Us"
          className="rounded-xl shadow-md"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Our story is rooted in passion, innovation, and execution. What
            started as a small venture by a third-generation entrepreneur, has
            now grown into a global logistics and packaging company delivering
            over 10 million boxes every year. From sourcing to delivery, we
            believe in excellence, speed, and customer obsession. Today, we
            serve hundreds of clients across sectors, delivering impact at
            scale.
          </p>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-16 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-10">Our Leadership</h2>

        {/* Desktop view */}
        <div className="hidden md:grid grid-cols-3 gap-10">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-blue-100"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
          >
            {team.map((member, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 w-4/5 mx-auto">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-blue-100"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
