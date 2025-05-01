import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
<<<<<<< HEAD

import summerImage from "../../assets/Summer.jpg"; // Replace with an actual image for Summer Uniform
import winterImage from "../../assets/Winter.jpg"; // Replace with an actual image for Winter Uniform
import commonImage from "../../assets/Common.jpg"; // Replace with an actual image for Common Items
=======
import kidsImage from "../../assets/ncrimage6.jpg";
import summerImage from "../../assets/summer.jpg"; // Replace with an actual image for Summer Uniform
import winterImage from "../../assets/winter.jpg"; // Replace with an actual image for Winter Uniform
import commonImage from "../../assets/common.jpg"; // Replace with an actual image for Common Items
>>>>>>> eed1815d5c74c45272dba5fea5e15c1597293462

const SchoolUniform = () => {
  return (
    <>
      <Navbar />


      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-extrabold text-center text-red-500 mb-12">
            School Uniform
          </h1>

          {/* Boys' Summer Uniform */}
          <div className="bg-gray-800 shadow-lg rounded-lg mb-8 p-8 hover:shadow-xl transition duration-300 flex flex-col md:flex-row items-center gap-x-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">☀️</span> Boys' Summer Uniform
              </h2>
              <ul className="list-disc list-inside text-gray-200 space-y-4 text-lg">
                <li>Dark blue pant</li>
                <li>White shirt</li>
                <li>School belt</li>
                <li>School tie</li>
              </ul>
            </div>
            <div className="flex-1">
              <img
                src={summerImage}
                alt="Boys' Summer Uniform"
                className="w-full min-h-56 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Boys' Winter Uniform */}
          <div className="bg-gray-800 shadow-lg rounded-lg mb-8 p-8 hover:shadow-xl transition duration-300 flex flex-col md:flex-row-reverse items-center gap-x-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">❄️</span> Boys' Winter Uniform
              </h2>
              <ul className="list-disc list-inside text-gray-200 space-y-4 text-lg">
                <li>Dark blue pant</li>
                <li>White shirt</li>
                <li>Grey sweater</li>
                <li>Navy blue blazer</li>
                <li>Grey cap</li>
                <li>School belt</li>
                <li>School I-card</li>
              </ul>
            </div>
            <div className="flex-1">
              <img
                src={winterImage}
                alt="Boys' Winter Uniform"
                className="w-full min-h-56 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Common Items */}
          <div className="bg-gray-800 shadow-lg rounded-lg mb-8 p-8 hover:shadow-xl transition duration-300 flex flex-col md:flex-row items-center gap-x-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🎒</span> Common Items for All Seasons
              </h2>
              <ul className="list-disc list-inside text-gray-200 space-y-4 text-lg">
                <li>School belt</li>
                <li>School I-card</li>
              </ul>
            </div>
            <div className="flex-1">
              <img
                src={commonImage}
                alt="Common Items"
                className="w-full min-h-56 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SchoolUniform;