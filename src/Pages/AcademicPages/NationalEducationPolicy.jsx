import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import nepImage from "../../assets/nep.png"

const NationalEducationPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-extrabold text-center text-red-700 mb-12">
            National Education Policy (NEP) 2020
          </h1>

          {/* Image Container */}
          <div className="bg-gray-800 shadow-lg rounded-lg mb-8 overflow-hidden">
            <img
              src={nepImage}
              alt="National Education Policy"
              className=" mx-auto h-82  w-full"
            />
          </div>

          {/* Introduction */}
          <div className="bg-gray-800 shadow-lg rounded-lg mb-8 p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Introduction
            </h2>
            <p className="text-gray-300 text-lg">
              The National Education Policy (NEP) 2020 is a transformative
              framework introduced by the Government of India to overhaul the
              education system. It aims to make education more holistic,
              flexible, multidisciplinary, and aligned with the needs of the
              21st century while ensuring equity and inclusion.
            </p>
          </div>

          {/* Key Ideas */}
          <div className="bg-gray-800 shadow-lg rounded-lg mb-8 p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Key Ideas</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-4 text-lg">
              <li>
                <strong> className="text-gray-100"Holistic and Multidisciplinary Education:</strong> Focus
                on developing critical thinking, creativity, and problem-solving
                skills.
              </li>
              <li>
                <strong className="text-gray-100">Early Childhood Care and Education (ECCE):</strong>{" "}
                Universal access to quality ECCE for children aged 3-6 years.
              </li>
              <li>
                <strong className="text-gray-100">Flexible Curriculum:</strong> Introduction of
                experiential learning, reduced syllabus, and vocational
                education from Grade 6.
              </li>
              <li>
                <strong className="text-gray-100">Mother Tongue as Medium of Instruction:</strong>{" "}
                Emphasis on teaching in regional languages up to Grade 5.
              </li>
              <li>
                <strong className="text-gray-100">Higher Education Reforms:</strong> Establishment of
                multidisciplinary institutions and a single regulator for higher
                education.
              </li>
              <li>
                <strong className="text-gray-100">Digital Learning:</strong> Integration of technology in
                education through digital platforms and tools.
              </li>
            </ul>
          </div>

          {/* Impacts */}
          <div className="bg-gray-800 shadow-lg rounded-lg mb-8 p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Impacts</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-4 text-lg">
              <li>
                <strong className="text-gray-100">Improved Learning Outcomes:</strong> Focus on
                conceptual understanding and skill development.
              </li>
              <li>
                <strong  className="text-gray-100">Equity and Inclusion:</strong> Bridging the gap between
                rural and urban education systems.
              </li>
              <li>
                <strong  className="text-gray-100">Global Competitiveness:</strong> Aligning the Indian
                education system with international standards.
              </li>
              <li>
                <strong  className="text-gray-100">Increased Employability:</strong> Vocational training
                and skill development to prepare students for the workforce.
              </li>
              <li>
                <strong>Technology Integration:</strong> Enhanced access to
                digital resources and online learning platforms.
              </li>
            </ul>
          </div>

          {/* Future Adoption Plans */}
          <div className="bg-gray-800 shadow-lg rounded-lg mb-8 p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Future Adoption Plans
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-4 text-lg">
              <li>
                <strong  className="text-gray-100">Phased Implementation:</strong> Gradual rollout of NEP
                reforms across schools and higher education institutions.
              </li>
              <li>
                <strong  className="text-gray-100">Teacher Training:</strong> Comprehensive training
                programs to equip teachers with the skills needed for NEP
                implementation.
              </li>
              <li>
                <strong  className="text-gray-100">Infrastructure Development:</strong> Investment in
                digital infrastructure and resources to support online and
                blended learning.
              </li>
              <li>
                <strong  className="text-gray-100">Monitoring and Evaluation:</strong> Regular assessment
                of NEP implementation to ensure its effectiveness.
              </li>
              <li>
                <strong  className="text-gray-100">Public Awareness:</strong> Campaigns to educate
                stakeholders about the benefits and objectives of NEP 2020.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NationalEducationPolicy;