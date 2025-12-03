import React from "react";
import { Facebook, Instagram,  Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#6A38C2] text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">JobPortel</h2>
          <p className="text-gray-200 text-sm">
            Your No.1 platform to find and apply for your dream jobs. 
            Explore thousands of opportunities tailored just for you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Jobs</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <div className="flex items-center gap-2 text-gray-200">
            <Phone className="h-4 w-4" /> +91 98765 43210
          </div>
          <div className="flex items-center gap-2 text-gray-200 mt-2">
            <Mail className="h-4 w-4" /> support@jobportel.com
          </div>
          <div className="flex items-center gap-2 text-gray-200 mt-2">
            <MapPin className="h-4 w-4" /> New Delhi, India
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-pink-400"><Instagram className="h-6 w-6" /></a>
            <a href="#" className="hover:text-blue-400"><Facebook className="h-6 w-6" /></a>
            <a href="#" className="hover:text-green-400"><MessageCircle className="h-6 w-6" /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-200 text-sm mt-10 border-t border-gray-400 pt-4">
        © {new Date().getFullYear()} JobPortel — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
