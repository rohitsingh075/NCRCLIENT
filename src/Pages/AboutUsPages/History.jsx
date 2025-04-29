import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import historyImage from "../../assets/ncrimage6.jpg"; // Replace with actual image path

const History = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-8 bg-gray-50">
        {/* History Section */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* <h2 className="text-red-600 text-lg font-bold uppercase mb-2">History</h2> */}
          <h1 className="text-4xl  text-red-700 font-bold mb-6">The Legacy of North Central Railway College</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            North Central Railway College, Tundla, has a remarkable history that dates back to its establishment in 1882. 
            Over the decades, the school has evolved into a prestigious institution, shaping the lives of countless students 
            and contributing to the community's growth and development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {/* Left Section: Image */}
            <div>
              <img
                src={historyImage} // Replace with actual history-related image URL
                alt="Historical Image of School"
                className="rounded-lg shadow-lg h-84 object-cover mb-4 md:mb-0"
              />
            </div>

            {/* Right Section: Description */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                The school was initially established to cater to the educational needs of the children of railway employees. 
                Over time, it opened its doors to students from all walks of life, becoming a symbol of inclusivity and excellence.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                During its early years, the school operated with limited resources but a strong commitment to education. 
                With the support of the North Central Railway administration, it gradually expanded its infrastructure and 
                introduced modern teaching methodologies.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, North Central Railway College stands as a testament to the vision of its founders and the dedication 
                of its faculty. It continues to uphold its legacy of academic excellence and holistic development, preparing 
                students to excel in all aspects of life.
              </p>
            </div>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="bg-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center  mb-8">Key Milestones</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl  font-bold text-red-700 mb-4">1882</h3>
                <p className="text-gray-600">
                  The school was established to provide education to the children of railway employees.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold  text-red-700 mb-4">1950</h3>
                <p className="text-gray-600">
                  Expanded its facilities and opened admissions to students from all communities.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-red-700 mb-4">2000</h3>
                <p className="text-gray-600">
                  Introduced modern infrastructure, including smart classrooms and science labs.
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

export default History;