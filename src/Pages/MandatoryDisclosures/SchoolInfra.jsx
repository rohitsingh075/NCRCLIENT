import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const infrastructureData = [
  {
    title: "Total Campus Area",
    content: "160,000 Square Meters",
  },
  {
    title: "Number and Size of Classrooms",
    content: `Total: 35\nEach approx: 500 Sq. ft.`,
  },
  {
    title: "Number and Size of Laboratories",
    content: `Composite Science Lab: 1 (600 Sq. ft)
Physics Lab: 1 (700 Sq. ft)
Chemistry Lab: 1 (700 Sq. ft)
Biology Lab: 1 (700 Sq. ft)`,
  },
  {
    title: "Internet Facility",
    content: "Available throughout campus",
  },
  {
    title: "Number of Girls Toilets",
    content: "20",
  },
  {
    title: "Number of Boys Toilets",
    content: "25",
  },
  {
    title: "Number of Activity Rooms",
    content: "2",
  },
  {
    title: "Library",
    content: `Number of Books: 6,500
Periodicals: 10
Dailies: 4
Reference Books: 250
Magazines: 12`,
  },
];

export default function SchoolInfra() {
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
          School Infrastructure Details
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Detailed information about the campus facilities, classrooms, laboratories, library, and other infrastructure available for students.
        </p>
      </div>

      {/* Infrastructure Accordion */}
      <div className="max-w-4xl mx-auto px-4 md:px-0 space-y-4">
        {infrastructureData.map((item, index) => (
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
              <pre className="p-4 bg-gray-50 border-t border-gray-200 text-gray-700 text-base md:text-lg whitespace-pre-wrap">
                {item.content}
              </pre>
            )}
          </div>
        ))}
      </div>
<br /><br /><br /> <br /><br />
      <Footer className="mt-12" />
    </div>
  );
}
