import { useState } from "react";
import Navbar from "../../Components/Navbar";

const disclosureData = [
  {
    title: "Name of School",
    content: "North Central Railway College, Tundla",
  },
  {
    title: "Affiliation Number",
    content: "2130986",
  },
  {
    title: "School Code",
    content: "70812",
  },
  {
    title: "Complete Address",
    content: "North Central Railway College, Tundla, Firozabad, Uttar Pradesh - 283204",
  },
  {
    title: "Principal Name & Qualification",
    content: "Mr M.P Sonkar, M.Sc., Ph.D.",
  },
  {
    title: "School Email Id",
    content: "ncrcollege.tundla@gmail.com",
  },
  {
    title: "School Contact Details",
    content: "+91 9456783210",
  },
];

export default function MandatoryDisclosure() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (


    <div className="max-w-4xl mx-auto p-4">
    <div className="mt-4 mb-4">
        <Navbar />
    </div>
      <h1 className="text-3xl font-serif italic mb-2">Public Disclosure</h1>
      <p className="text-sm mb-6">Home &rarr; Mandatory Disclosure &rarr; Public Disclosure</p>

      <div className="border rounded p-4 bg-white shadow">
        <h2 className="text-lg font-bold text-blue-700 border-b pb-2 mb-4">GENERAL INFORMATION</h2>

        {disclosureData.map((item, index) => (
          <div key={index} className="mb-2 border rounded overflow-hidden">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left bg-gradient-to-b from-gray-100 to-gray-200 p-3 font-semibold hover:bg-gray-100"
            >
              {item.title}
            </button>
            {activeIndex === index && (
              <div className="p-3 text-gray-700 bg-white border-t">{item.content}</div>
            )}
          </div>
        ))}

        
      </div>
    </div>
  );
}
