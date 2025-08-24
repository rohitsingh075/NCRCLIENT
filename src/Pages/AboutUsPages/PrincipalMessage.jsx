import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import PrincipalPhoto from "../../assets/principalImg.jpg"; // Replace with the actual photo path

const PrincipalMessage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[40vh] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white italic drop-shadow-lg"
        >
          Principal&apos;s Message
        </motion.h1>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Principal's Photo */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-red-700 hover:scale-105 transition-transform duration-300">
              <img
                src={PrincipalPhoto}
                alt="Principal"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </motion.div>

          {/* Principal's Message */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="italic"
          >
            <p className="text-gray-700 font-bold text-lg mb-4">
              Dear Students, Parents, and Well-Wishers,
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              It is with immense pride and joy that I welcome you to{" "}
              <span className="font-semibold text-red-700">
                North Central Railway College
              </span>
              , a beacon of excellence in education since 1882. Our institution
              has always been committed to nurturing young minds and shaping
              them into responsible, compassionate, and confident individuals
              who are ready to face the challenges of the modern world.
            </p>

            {/* Highlight Quote */}
            <blockquote className="border-l-4 border-red-600 pl-4 italic text-xl text-gray-900 font-medium mb-6">
              “At NCR College, we believe in holistic development — where
              academics, character, and creativity walk hand in hand.”
            </blockquote>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Along with academic excellence, we emphasize the importance of
              character building, creativity, and critical thinking. Thank you
              for being a part of this incredible journey. Let us work together
              to create a brighter future for our students and our community.
            </p>

            <p className="text-gray-700 text-lg font-bold">
              Warm regards,
              <br />
              <span className="text-red-600">M.P Sonkar</span>
              <br />
              Principal, North Central Railway College
            </p>
          </motion.div>
        </div>
      </div>
<br /><br /><br />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default PrincipalMessage;
