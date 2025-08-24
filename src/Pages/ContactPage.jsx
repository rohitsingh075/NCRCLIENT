import React from "react";

import { motion } from "framer-motion";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Contact <span className="text-red-600">Us</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Side - Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 space-y-6"
            >
              <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">
                School Information
              </h2>

              <div className="flex items-start space-x-4">
                <MapPin className="text-red-600 w-6 h-6 mt-1" />
                <p className="text-gray-600">
                  665Q+Q6C, Company Bagh Road,<br />
                   Tundla, Tundla Rly. Colony,<br />
                   Uttar Pradesh 283204
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="text-red-600 w-6 h-6" />
                <p className="text-gray-600">
                 05612229463
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="text-red-600 w-6 h-6" />
                <p className="text-gray-600">ncrcollegetundla@rediffmail.com</p>
              </div>

              {/* Socials */}
              <div className="flex space-x-6 pt-4">
                <a href="#" className="text-blue-600 hover:scale-110 transition">
                  <Facebook className="w-7 h-7" />
                </a>
                <a href="#" className="text-pink-600 hover:scale-110 transition">
                  <Instagram className="w-7 h-7" />
                </a>
                <a href="#" className="text-red-600 hover:scale-110 transition">
                  <Youtube className="w-7 h-7" />
                </a>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">
                Connect With Us
              </h2>
              <form className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                  />
                </div>

                <textarea
                  rows="6"
                  placeholder="Your Message*"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                ></textarea>

                {/* reCAPTCHA Placeholder */}
                <div className="bg-gray-100 border p-4 rounded-lg text-center text-gray-500">
                  [ reCAPTCHA Widget Here ]
                </div>

                <button
                  type="submit"
                  className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-red-700 transition transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
