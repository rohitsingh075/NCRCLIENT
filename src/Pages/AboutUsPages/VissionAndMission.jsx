import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import scoutLogo from "../../assets/scoutLogo.jpg"; // Replace with actual Scout Guides logo path
import nccLogo from "../../assets/nccLogo.jpg"; // Replace with actual NCC logo path

const VissionAndMission = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-20 bg-gray-50">
        {/* Vision and Mission Section */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-6">Our Vision & Mission</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At North Central Railway College, our vision is to provide the best education and foster the overall development of students. 
            We aim to create a nurturing environment where students can excel academically, socially, and morally, preparing them to face 
            the challenges of the modern world with confidence and integrity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To be a leading institution that empowers students to achieve their full potential and contribute positively to society. 
                We envision a future where every student is equipped with the knowledge, skills, and values needed to succeed in life.
              </p>
            </div>

            {/* Mission Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To provide quality education that fosters academic excellence, character development, and lifelong learning. 
                We are committed to nurturing creativity, critical thinking, and a sense of responsibility among our students.
              </p>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Facilities for Overall Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Scout Guides Section */}
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <img
                  src={scoutLogo} // Replace with actual Scout Guides logo path
                  alt="Scout Guides Logo"
                  className="mx-auto h-50 mb-4"
                />
                <h3 className="text-xl font-bold mb-4">Scout Guides</h3>
                <p className="text-gray-600">
                  Our Scout Guides program instills discipline, teamwork, and leadership skills in students, preparing them to be responsible citizens.
                </p>
              </div>

              {/* NCC Section */}
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <img
                  src={nccLogo} // Replace with actual NCC logo path
                  alt="NCC Logo"
                  className="mx-auto h-50 mb-4"
                />
                <h3 className="text-xl font-bold mb-4">National Cadet Corps (NCC)</h3>
                <p className="text-gray-600">
                  The NCC program provides students with opportunities to develop leadership, discipline, and a sense of patriotism through various activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default VissionAndMission;