import React, { useState } from "react";
import { Menu, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-4 md:px-8 py-3 shadow-sm flex items-center justify-between bg-white sticky top-0 z-50">
      {/* Title instead of Logo */}
      <div className="flex flex-col leading-tight">
        <h1 className="text-xl font-bold text-indigo-900">Skillwise</h1>
        <span className="text-xs text-gray-500">Beyond Packaging</span>
      </div>

      {/* Navigation Links - Desktop */}
      <ul className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-800">
        <li className="font-bold text-black">Home</li>
        <li>About</li>
        <li>Innovations</li>
        <li>Portfolio</li>
        <li>Blogs</li>
        <li>Events</li>
      </ul>

      {/* Right Side - Desktop */}
      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Phone className="h-4 w-4 text-indigo-900" />
          <span>+91 9876543210</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Mail className="h-4 w-4 text-indigo-900" />
          <span>support@skillwise.pro</span>
        </div>
        <button className="bg-indigo-900 text-white px-4 py-2 rounded-full text-sm">
          Contact Us
        </button>
      </div>

      {/* Mobile - Right Side Icons */}
      <div className="flex md:hidden items-center gap-3">
        <Phone className="h-5 w-5 text-indigo-900" />
        <Mail className="h-5 w-5 text-indigo-900" />
        <button className="bg-indigo-900 text-white px-3 py-1 rounded-full text-sm">
          Contact
        </button>
        <Menu
          className="h-6 w-6 text-indigo-900"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t shadow-md md:hidden px-4 py-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-800">
            <li className="font-bold text-black">Home</li>
            <li>About</li>
            <li>Innovations</li>
            <li>Portfolio</li>
            <li>Blogs</li>
            <li>Events</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
