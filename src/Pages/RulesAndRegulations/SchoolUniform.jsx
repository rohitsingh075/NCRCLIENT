import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const SchoolUniform = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
            School Uniform
          </h1>

          {/* Boys' Summer Uniform */}
          <div className="bg-white shadow-lg rounded-lg mb-8 p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Boys' Summer Uniform
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-4 text-lg">
              <li>Dark blue pant</li>
              <li>White shirt</li>
              <li>School belt</li>
              <li>School tie</li>
            </ul>
          </div>

          {/* Boys' Winter Uniform */}
          <div className="bg-white shadow-lg rounded-lg mb-8 p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Boys' Winter Uniform
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-4 text-lg">
              <li>Dark blue pant</li>
              <li>White shirt</li>
              <li>Grey sweater</li>
              <li>Navy blue blazer</li>
              <li>Grey cap</li>
              <li>School belt</li>
              <li>School I-card</li>
            </ul>
          </div>

          {/* Common Items */}
          <div className="bg-white shadow-lg rounded-lg mb-8 p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Common Items for All Seasons
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-4 text-lg">
              <li>School belt</li>
              <li>School I-card</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SchoolUniform;