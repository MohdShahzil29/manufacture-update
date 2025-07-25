import React from "react";
import HeroBanner from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import OurProducts from "../components/OurProducts";
import OurTrustedBrands from "../components/OurTrustedBrands";
import OurBlogs from "../components/OurBlogs";

const Homepage = () => {
  return (
    <div>
      <HeroBanner />
      <WhyChooseUs />
      <OurProducts />
      <OurTrustedBrands />
      <OurBlogs />
    </div>
  );
};

export default Homepage;
