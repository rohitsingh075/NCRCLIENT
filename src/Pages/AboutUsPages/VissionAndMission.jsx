import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import visionImage from "../../assets/vision.jpeg"; 
import missionImage from "../../assets/mission.jpeg"; 
import frontImage from  "../../assets/front-vm.jpg"


const VissionAndMission = () => {
  return (
    <>
      {/* Navbar */} 
      <Navbar />

      
      {/* <div><img src={frontImage} alt="" className="w-full max-h-85 object-contain select-none " /></div> */}
      {/* Main Content */}
      <div className="bg-gray-200">
        {/* Vision and Mission Section */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center text-red-700 mb-6">
            Our Vision & Mission
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed text-center mb-12">
            At North Central Railway College, our vision is to provide the best
            education and foster the overall development of students. We aim to
            create a nurturing environment where students can excel
            academically, socially, and morally, preparing them to face the
            challenges of the modern world with confidence and integrity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision Section */}
            <div className="bg-gray-800  shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <img
                src={visionImage}
                alt="Vision"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-4 flex items-center">
                <span className="mr-2">🌟</span> Our Vision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To be a leading institution that empowers students to achieve
                their full potential and contribute positively to society. We
                envision a future where every student is equipped with the
                knowledge, skills, and values needed to succeed in life.
              </p>
            </div>

            

            {/* Mission Section */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <img
                src={missionImage}
                alt="Mission"
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-4 flex items-center">
                <span className="mr-2">🎯</span> Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To provide quality education that fosters academic excellence,
                character development, and lifelong learning. We are committed
                to nurturing creativity, critical thinking, and a sense of
                responsibility among our students.
              </p>
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