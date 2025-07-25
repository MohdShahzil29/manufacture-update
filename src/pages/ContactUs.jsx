import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Map Section */}
      <div className="w-full h-[60vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          className="w-full h-full border-none"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Info Section */}
      <div className="bg-gray-50 py-12 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Office Location */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Office Location</h2>
          <div className="flex justify-center items-center gap-2">
            <MapPin className="text-blue-600" />
            <p className="text-sm">
              BizzX Technologies Pvt Ltd. <br />
              503 5th Floor Marine Karsandas, Dadar, Mumbai, Maharashtra 400028
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2">
              <Phone className="text-blue-600" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-blue-600" />
              <span>info@bizzxtech.com</span>
            </div>
          </div>
        </div>

        {/* Office Time */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Office Time</h2>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2">
              <Clock className="text-blue-600" />
              <span>09:00 - 21:00</span>
            </div>
            <div className="text-sm text-gray-600">Closed on Sunday</div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">
          Get In Touch With Us
        </h2>
        <form className="max-w-3xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your name *"
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email address *"
              className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <input
            type="tel"
            placeholder="Phone number *"
            className="border p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your message"
            className="border p-3 rounded-md w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
