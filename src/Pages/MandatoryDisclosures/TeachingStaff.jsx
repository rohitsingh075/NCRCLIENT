import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import staffImage from "../../assets/ncrimage5.jpg"; 

const teachingStaffData = [
  { title: "Principal", content: "MP SONKAR" },
  {
    title: "Total No. of Teachers",
    content: `Total No. of Teachers: 37 {PGT: 10, TGT: 17, PRT: 10}`,
  },
  { title: "Teachers Section Ratio", content: "1:40" },
  { title: "Details of Special Educator", content: "NA" },
  { title: "Details of Counsellor and Wellness Teacher", content: "NK Sharma" },
];

export default function TeachingStaff() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto">
      {/* Navbar */}
      <Navbar />


       {/* Banner Image */}
            <div>
              <img
                src={staffImage}
                alt="School Infrastructure Banner"
                className="w-full h-72 object-cover"
              />
            </div>


      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-5 p-4">
        <div className="rounded p-6 bg-gray-50 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-red-700 mb-6">
            TEACHING STAFF DETAILS
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Below are the details of the teaching staff at North Central Railway College. Click on each section to view more information.
          </p>

          <div className="space-y-6">
            {teachingStaffData.map((item, index) => (
              <div
                key={index}
                className=" rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center bg-gradient-to-r from-red-100 to-red-50 p-4 font-semibold text-gray-900 hover:bg-blue-200 transition"
                >
                  <span>{item.title}</span>
                  <span className="text-gray-900">
                    {activeIndex === index ? "▲" : "▼"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="p-4 bg-white border-t">
                    <p className="text-gray-900 font-medium">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
