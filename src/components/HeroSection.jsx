import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        {/* Slide 1 */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-[10rem] md:h-[30rem] w-full object-cover"
            alt="Manufacturing machinery"
          />
        </div>

        {/* Slide 2 */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-[10rem] md:h-[30rem] w-full object-cover"
            alt="Factory production line"
          />
        </div>

        {/* Slide 3 */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-[10rem] md:h-[30rem] w-full object-cover"
            alt="Industrial warehouse"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
