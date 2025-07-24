import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo / About Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-500 mb-4">Skillwise</h2>
          <p className="text-sm text-gray-300">
            Empowering students with industry-ready skills through modern,
            practical, and engaging learning experiences.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Mail size={18} /> support@skillwise.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +91 9876543210
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Mumbai, India
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-300">
            <a href="#">
              <Facebook size={20} className="hover:text-white" />
            </a>
            <a href="#">
              <Twitter size={20} className="hover:text-white" />
            </a>
            <a href="#">
              <Linkedin size={20} className="hover:text-white" />
            </a>
            <a href="#">
              <Youtube size={20} className="hover:text-white" />
            </a>
            <a href="#">
              <Instagram size={20} className="hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-700 my-6" />

      <p className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Skillwise. All rights reserved.
      </p>
    </footer>
  );
}
