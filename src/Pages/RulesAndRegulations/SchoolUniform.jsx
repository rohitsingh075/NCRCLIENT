import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import summerImage from "../../assets/summer.jpg";
import winterImage from "../../assets/winter.jpg";
import commonImage from "../../assets/common.jpg";

const SchoolUniform = () => {
  return (
    <>
      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100 font-sans">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-14"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            School Uniform
          </motion.h1>

          {/* Uniform Card Component */}
          {[
            {
              title: "☀️ Boys' Summer Uniform",
              items: ["Dark blue pant", "White shirt", "School belt", "School tie"],
              image: summerImage,
              reverse: false,
            },
            {
              title: "❄️ Boys' Winter Uniform",
              items: [
                "Dark blue pant",
                "White shirt",
                "Grey sweater",
                "Navy blue blazer",
                "Grey cap",
                "School belt",
                "School I-card",
              ],
              image: winterImage,
              reverse: true,
            },
            {
              title: "🎒 Common Items for All Seasons",
              items: ["School belt", "School I-card"],
              image: commonImage,
              reverse: false,
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              className={`bg-white/80 backdrop-blur-md shadow-lg hover:shadow-2xl rounded-2xl mb-12 p-8 flex flex-col ${
                section.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-x-10 border border-gray-200 transition`}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 flex items-center">
                  {section.title}
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg leading-relaxed">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <motion.div
                className="flex-1 mt-6 md:mt-0"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-64 object-cover rounded-xl border border-gray-300 shadow-md"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SchoolUniform;
