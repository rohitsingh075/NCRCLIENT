import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import bannerImage from "../../assets/ncrimage5.jpg"; // Replace with the actual path to ncrimage5.jpg

const infrastructureData = [
  {
    title: "Total Campus Area",
    content: "160000 Square Meter",
  },
  {
    title: "Number and Size of Class Rooms",
    content: `Total: 35\nEach approx: 500 Sq. ft.`,
  },
  {
    title: "Number and Size of Laboratories",
    content: `Composite Science Lab: 1 (600 Sq. ft)\nPhysics Lab: 1 (700 Sq. ft)\nChemistry Lab: 1 (700 Sq. ft)\nBiology Lab: 1 (700 Sq. ft)`,
  },
  {
    title: "Internet Facility",
    content: "Yes, Available",
  },
  {
    title: "No. of Girls Toilets",
    content: "20",
  },
  {
    title: "No. of Boys Toilets",
    content: "25",
  },
  {
    title: "No. of Activity Rooms",
    content: "2",
  },
  {
    title: "Library",
    content: `No. of Books: 6500\nPeriodicals: 10\nDailies: 4\nReference Books: 250\nMagazine: 12`,
  },
];

export default function SchoolInfra() {
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
          src={bannerImage}
          alt="School Infrastructure Banner"
          className="w-full h-72 object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4 mt-5 mb-7">
        <div className="rounded p-4 bg-white shadow">
          <h2 className="text-3xl font-bold text-red-700 border-b pb-2 mb-4">
            SCHOOL INFRASTRUCTURE DETAILS
          </h2>

          {infrastructureData.map((item, index) => (
            <div key={index} className="mb-2 rounded overflow-hidden">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left text-gray-900 bg-gradient-to-r from-red-100 to-red-50 p-2 font-semibold hover:text-gray-500 hover:bg-gray-100"
              >
                {item.title}
              </button>
              {activeIndex === index && (
                <pre className="p-3 text-gray-900 font-semibold bg-white border-t whitespace-pre-wrap">
                  {item.content}
                </pre>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

