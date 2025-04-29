import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const disclosureData = [
  {
    title: "Name of School",
    content: "North Central Railway College, Tundla",
  },
  {
    title: "Affiliation Number",
    content: "2180033",
  },
  {
    title: "School Code",
    content: "62013",
  },
  {
    title: "Complete Address",
    content: "TUNDLA, DISTT FIROZABAD, UTTAR PRADESH - 283204",
  },
  {
    title: "Principal Name & Qualification",
    content: "Mr. M.P Sonkar",
  },
  {
    title: "Principal Qualification",
    content: "M.Sc, M.Ed",
  },
  {
    title: "School Email Id",
    content: "ncrcollegetundla@rediffmail.com",
  },
  {
    title: "School Contact Details",
    content: "05612229463",
  },
];

export default function GeneralInformation() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto p-8">
          <h1 className="text-3xl font-bold text-center text-red-700 mt-6 mb-6">
            General Information
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Below is the general information about North Central Railway
            College, Tundla. Click on each section to view more details.
          </p>

          <div className="bg-white shadow-lg rounded-lg p-6">
            {disclosureData.map((item, index) => (
              <div
                key={index}
                className="mb-4  rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center bg-gradient-to-r from-red-100 to-red-50 p-4 font-semibold text-gray-900 hover:bg-blue-200 transition"
                >
                  <span>{item.title}</span>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-gray-700" />
                  ) : (
                    <FaChevronDown className="text-gray-700" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="p-4 bg-gray-50 text-gray-700 font-medium">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
