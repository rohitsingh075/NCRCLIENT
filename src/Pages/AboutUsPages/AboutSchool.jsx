import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import schoolImage from "../../assets/ncrimage1.jpg"; // Replace with actual image path
const AboutSchool = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-1 bg-gray-50">
        {/* About School Section */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* <h2 className="text-red-600 text-lg font-bold uppercase mb-2">About School</h2> */}
          <h1 className="text-4xl font-bold mb-6">North Central Railway College, Tundla</h1>
          {/* <p className="text-gray-700 text-lg leading-relaxed mb-6">
            There is only one way to face the world with confidence, and that’s education. At North Central Railway College, we prepare students to excel in every aspect of life.
          </p> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section: Image */}
            <div>
              <img
                src={schoolImage} // Replace with actual school image URL
                alt="School Building"
                className="rounded-lg shadow-lg h-100 object-cover mb-4 md:mb-0"
              />
            </div>

            {/* Right Section: Description */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                North Central Railway College, established in 1882, has a rich legacy of providing quality education. Over the years, the school has become a beacon of knowledge and growth, fostering intellectual, moral, and social development.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Our institution is equipped with state-of-the-art facilities, including smart classrooms, science labs, and a well-stocked library. We believe in nurturing creativity, critical thinking, and a sense of responsibility among our students.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                At North Central Railway College, we aim to provide a holistic learning environment that empowers students to achieve their full potential and contribute positively to society.
              </p>
            </div>
          </div>
        </div>

        {/* Key Highlights Section */}
        {/* <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Key Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Experienced Faculty</h3>
                <p className="text-gray-600">
                  Our teachers are highly qualified and dedicated to nurturing the potential of every student.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Modern Infrastructure</h3>
                <p className="text-gray-600">
                  Equipped with smart classrooms, science labs, and a well-stocked library for holistic learning.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Co-Curricular Activities</h3>
                <p className="text-gray-600">
                  A wide range of sports, arts, and cultural activities to foster creativity and teamwork.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Vision and Mission Section */}
        {/* <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a leading institution that empowers students to achieve their full potential and contribute positively to society.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide quality education that fosters academic excellence, character development, and lifelong learning.
              </p>
            </div>
          </div>
        </div> */}
        
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutSchool;
