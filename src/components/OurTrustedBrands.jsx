import React from "react";
import {
  Server,
  Monitor,
  Rocket,
  Globe,
  ShieldCheck,
  Wallet,
  Mail,
  BookOpen,
  Code,
  Cloud,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const brands = [
  { name: "Amazon", icon: <Server className="w-12 h-12 text-gray-800" /> },
  { name: "Netflix", icon: <Monitor className="w-12 h-12 text-gray-800" /> },
  { name: "Spotify", icon: <Rocket className="w-12 h-12 text-gray-800" /> },
  { name: "Microsoft", icon: <Globe className="w-12 h-12 text-gray-800" /> },
  { name: "Adobe", icon: <ShieldCheck className="w-12 h-12 text-gray-800" /> },
  { name: "PayPal", icon: <Wallet className="w-12 h-12 text-gray-800" /> },
  { name: "Zoom", icon: <Mail className="w-12 h-12 text-gray-800" /> },
  { name: "Udemy", icon: <BookOpen className="w-12 h-12 text-gray-800" /> },
  { name: "GitLab", icon: <Code className="w-12 h-12 text-gray-800" /> },
  { name: "Dropbox", icon: <Cloud className="w-12 h-12 text-gray-800" /> },
];

const OurTrustedBrands = () => {
  return (
    <section className="bg-white py-16 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-wide uppercase">
          Our Trusted Brands
        </h2>

        <Swiper
          spaceBetween={40}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3000}
          loop={true}
          modules={[Autoplay]}
          className="w-full"
        >
          {brands.map((brand, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                {brand.icon}
                <span className="text-sm font-medium">{brand.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurTrustedBrands;
