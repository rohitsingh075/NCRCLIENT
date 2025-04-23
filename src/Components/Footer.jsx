import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Top Quote Bar */}
      <div className="bg-red-800 text-white text-center py-3 text-sm md:text-base">
        Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family.
      </div>

      {/* Footer Main */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Mission & Vision</a></li>
            <li><a href="#" className="hover:underline">Principal's Message</a></li>
            <li><a href="#" className="hover:underline">Media Gallery</a></li>
            <li><a href="#" className="hover:underline">Book List</a></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Important Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Admission Procedure</a></li>
            <li><a href="#" className="hover:underline">Fee Structure</a></li>
            {/* <li><a href="#" className="hover:underline">Apply for Admission</a></li> */}
            <li><a href="#" className="hover:underline">Academic Curriculum</a></li>
            <li><a href="#" className="hover:underline">Vacancies</a></li>
            <li><a href="#" className="hover:underline">Notice</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Get in touch</h3>
          <ul className="space-y-3 text-sm font-bold">
            <li className="flex items-center gap-2"><FaWhatsapp /> +91 0000 000 000</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> +91 0000 000 000</li>
            <li className="flex items-center gap-2"><FaEnvelope /> abcr123@gmail.com</li>
            <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1" /> 
            665Q+Q6C, Company Bagh Road, Tundla, Tundla Rly. Colony, Uttar Pradesh 283204
            </li>
          </ul>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl text-gray-600 ">
            <a href="#"><FaFacebookF className="hover:text-blue-600" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
            <a href="#"><FaYoutube className="hover:text-red-500" /></a>
          </div>
        </div>

        {/* Map */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3889220702875!2d78.2354277!3d27.209453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397468f1a6a0ae03%3A0x163b3da1754e348a!2sNorth%20Central%20Railway%20College!5e0!3m2!1sen!2sin!4v1681739848571!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="NCR COLLEGE Map"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 text-sm text-center py-3">
        © 2025-2026 N.C.R. COLLEGE, TUNDLA. All Rights Reserved | Design By –  A.R.P Enterprises
      </div>
    </footer>
  );
}
