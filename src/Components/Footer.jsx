import React from 'react';
import { Link } from 'react-router-dom';
import {
  // FaFacebookF,
  // FaInstagram,
  // FaTwitter,
  // FaYoutube,
  FaPhoneAlt,
  // FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Quote Bar */}
      <div className="bg-red-800 text-white text-center py-3 text-sm md:text-base">
        Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family.
      </div>

      {/* Footer Main */}
      <div className="max-w-7xl mx-auto px-6 py-8 gap-10  grid grid-cols-1 md:grid-cols-4 ">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-y-2 ">
            <Link to="/about" ><li className='hover:text-red-400' >About  Us</li></Link>
            <Link to="/vission-mission" ><li className='hover:text-red-400' >Our Mission & Vision</li></Link>
            <Link to="/principal-message" ><li className='hover:text-red-400' >Principal's Message</li></Link>
            <Link to="/" ><li className='hover:text-red-400' >Media Gallery</li ></Link>
            <Link to="/academic-curriculum" ><li className='hover:text-red-400' >Book List</li></Link>
          </ul>
        </div>

        {/* Important Links */}
        <div className=''>
          <h3 className="text-lg font-bold mb-4">Important Links</h3>
          <ul className="flex flex-col gap-y-2">
            {/* <li><a href="#" className="hover:underline">Apply for Admission</a></li> */}
            <Link to="/admission-procedure"><li className='hover:text-red-400'>Admission Procedure</li></Link>
            <Link to="/fee-structure"><li className='hover:text-red-400'>Fee Structure</li></Link>
            <Link to="/academic-curriculum"><li className='hover:text-red-400'>Academic Curriculum</li></Link>
            {/* <Link to="/"><li>Vacancies</li></Link>
            <Link to="/"><li>Notice</li></Link>
            <Link to="/"><li>Contact Us</li></Link> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">Get in touch</h3>
          <ul className="space-y-3 text-sm font-bold">
            {/* <li className="flex items-center gap-2"><FaWhatsapp /> +91 0000 000 000</li> */}
            <li className="flex items-center gap-2"><FaPhoneAlt /> 05612229463</li>
            <li className="flex items-center gap-2"><FaEnvelope /> ncrcollegetundla@rediffmail.com</li>
            <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1" /> 
            Infront of Railway Hospital , Rest Camp Road , Tundla , Uttar Pradesh 283204
            </li>
          </ul>
          {/* Social Icons */}
          {/* <div className="flex gap-4 mt-4 text-xl text-gray-600 ">
            <a href="#"><FaFacebookF className="hover:text-blue-600" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
            <a href="#"><FaYoutube className="hover:text-red-500" /></a>
          </div> */}
        </div>

        {/* Map */}
        <div>
        <iframe className='rounded-md shadow-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.3089507865952!2d78.2380026!3d27.209448299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397468f1a6a0ae03%3A0x163b3da1754e348a!2sNorth%20Central%20Railway%20College!5e0!3m2!1sen!2sin!4v1745673403324!5m2!1sen!2sin" width="250" height="250"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-700 text-sm text-center py-3">
        © 2025-2026 N.C.R. COLLEGE, TUNDLA. All Rights Reserved | Designed By –  Excellent Computers
      </div>
    </footer>
  );
}
