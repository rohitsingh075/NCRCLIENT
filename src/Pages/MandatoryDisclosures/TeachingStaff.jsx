import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const teachingStaffData = [
  { title: "Principal", content: "MP Sonkar" },
  {
    title: "Total Number of Teachers",
    content: "Total: 37 (PGT: 10, TGT: 17, PRT: 10)",
  },
  { title: "Teacher to Student Ratio", content: "1:40" },
  { title: "Details of Special Educator", content: "N/A" },
  { title: "Counsellor and Wellness Teacher", content: "NK Sharma" },
];

export default function TeachingStaff() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Page Header */}
      <div className="max-w-5xl mx-auto py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          Teaching Staff Details
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Here are the details of the teaching staff at North Central Railway College. Click on each section to view more information.
        </p>
      </div>

      {/* Staff Accordion */}
      <div className="max-w-4xl mx-auto px-4 md:px-0 space-y-4">
        {teachingStaffData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-white font-medium text-gray-800 text-lg hover:bg-gray-100 transition"
            >
              <span>{item.title}</span>
              <span className="text-gray-500">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 font-medium text-base md:text-lg">
                  {item.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
<br /><br /><br /><br /><br />
      <Footer className="mt-12" />
    </div>
  );
}
