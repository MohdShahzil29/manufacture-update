import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import OurProducts from "./components/OurProducts";
import OurTrustedBrands from "./components/OurTrustedBrands";
import OurBlogs from "./components/OurBlogs";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroBanner />
      <WhyChooseUs />
      <OurProducts />
      <OurTrustedBrands />
      <OurBlogs />
      <Footer />
    </>
  );
}

export default App;
