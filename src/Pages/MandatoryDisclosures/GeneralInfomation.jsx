import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const disclosureData = [
  {
    title: "School Name",
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
    content: "Tundla, Firozabad, Uttar Pradesh - 283204",
  },
  {
    title: "Principal Name & Qualification",
    content: "Mr. M.P. Sonkar, M.Sc, M.Ed",
  },
  {
    title: "School Email",
    content: "ncrcollegetundla@rediffmail.com",
  },
  {
    title: "Contact Number",
    content: "0561-2229463",
  },
];

export default function GeneralInformation() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      {/* Main Content */}
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-red-600 mb-6">
            General Information
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Here is a detailed overview of North Central Railway College, Tundla. Click on each section to reveal additional information.
          </p>

          <div className="space-y-4">
            {disclosureData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center bg-white p-5 font-medium text-gray-800 hover:bg-gray-100 transition"
                >
                  <span className="text-lg md:text-xl">{item.title}</span>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </button>

                {activeIndex === index && (
                  <div className="p-5 bg-gray-50 text-gray-700 text-base md:text-lg border-t border-gray-200">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
