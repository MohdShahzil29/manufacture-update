import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Event from "./pages/Event";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/events" element={<Event />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
