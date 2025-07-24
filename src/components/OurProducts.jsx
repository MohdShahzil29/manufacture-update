import React from "react";
import { CheckCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const features = [
  {
    text: "HIGH-END CUSTOMIZATION",
  },
  {
    text: "FULL INSPECTION",
  },
  {
    text: "ENVIRONMENT-FRIENDLY",
  },
];

const OurProducts = () => {
  return (
    <section className="relative bg-[#12204b] py-16 text-white">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-full">
        {/* <svg
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24"
        >
          <path
            fill="#fff"
            d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,101.3C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg> */}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-wide">
          OUR PRODUCTS
        </h2>

        {/* Features */}
        <div className="overflow-x-auto mb-12">
          <div className="flex gap-6 md:gap-12 w-max mx-auto px-1">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center min-w-[140px]"
              >
                <CheckCircle className="w-8 h-8 text-white mb-1" />
                <p className="text-sm md:text-base font-semibold uppercase">
                  ADHERE TO 100%
                </p>
                <p className="text-xs md:text-sm text-white">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Product Swiper */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="px-1"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className="object-cover w-full h-44 md:h-56"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurProducts;
