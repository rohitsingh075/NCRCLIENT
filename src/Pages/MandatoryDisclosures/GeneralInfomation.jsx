import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

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
    content: " TUNDLA, DISTT FIROZABAD, UTTAR PRADESH - 283204",
  },
  {
    title: "Principal Name & Qualification",
    content: "Mr. M.P Sonkar ",
  },
  {
    title: "Principal Qualification",
    content: " M.Sc , M.Ed",
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
    <div className=" mx-auto ">
      <div className="mt-4 mb-4">
        <Navbar />
      </div>

    <div className="max-w-6xl mx-auto  mt-26 mb-12 p-6 ">
    {/* <h1 className="text-3xl font-serif italic mb-2">Public Disclosure</h1> */}
      {/* <p className="text-sm mb-6">Home &rarr; Mandatory Disclosure &rarr; Public Disclosure</p> */}

      <div className="border rounded p-4 bg-white shadow ">
        <h2 className="text-lg font-bold text-blue-700 border-b pb-2 mb-4">GENERAL INFORMATION</h2>

        {disclosureData.map((item, index) => (
          <div key={index} className="mb-2 border-1 rounded overflow-hidden">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left bg-gradient-to-b from-gray-100 to-gray-200 p-3 font-semibold hover:bg-gray-100"
            >
              <div>
              {item.title}
              </div>
            </button>
            {activeIndex === index && (
              <div className="p-3 text-gray-900 font-semibold bg-white border-t">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>

      {/* Footer added below */}
      <div className="  ">
        <Footer />
      </div>
    </div>
  );
}
