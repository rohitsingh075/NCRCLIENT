import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

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

export default function SchoolInfraStructure() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto p-4">
      <div className="mt-4 mb-4">
        <Navbar />
      </div>

      <div className="max-w-4xl mx-auto p-4 mt-22 mb-12 ">
      {/* <h1 className="text-3xl font-serif italic mb-2 text-green-800">School Infrastructure</h1> */}
      {/* <p className="text-sm mb-6">Home &rarr; Mandatory Disclosure &rarr; School Infrastructure</p> */}

      <div className="border rounded p-4 bg-white shadow">
        <h2 className="text-lg font-bold text-blue-700 border-b pb-2 mb-4">SCHOOL INFRASTRUCTURE DETAILS</h2>

        {infrastructureData.map((item, index) => (
          <div key={index} className="mb-2 border rounded overflow-hidden">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left bg-gradient-to-b from-gray-100 to-gray-200 p-3 font-semibold hover:bg-gray-100"
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

      <div className="mt-4 min-w-h-screen">
        <Footer />
      </div>
    </div>
  );
}

