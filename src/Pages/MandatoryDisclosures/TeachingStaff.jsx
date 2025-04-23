import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const teachingStaffData = [
  { title: "Principal", content: "MP SONKAR" },
  {
    title: "Total No. of Teachers",
    content: `Total No. of Teachers : 37 {PGT:10 , TGT : 17 ,  PRT : 10}`
  },
//   { title: "PGT", content: "10" },
//   { title: "TGT", content: "17" },
//   { title: "PRT", content: "10" },
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
    <div className=" mx-auto p-4">
      <div className="mt-4 mb-4">
        <Navbar />
      </div>

      <div className="max-w-4xl mx-auto p-4 mt-22 mb-12 ">
      {/* <h1 className="text-3xl font-serif italic mb-2 text-orange-700">Staff (Teaching)</h1> */}
      {/* <p className="text-sm mb-6">Home &rarr; Mandatory Disclosure &rarr; Staff (Teaching)</p> */}
      <div className="border rounded p-4 bg-white shadow">
        <h2 className="text-lg font-bold text-blue-700 border-b pb-2 mb-4">TEACHING STAFF DETAILS</h2>

        {teachingStaffData.map((item, index) => (
          <div key={index} className="mb-2 border rounded overflow-hidden">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left bg-gradient-to-b from-gray-100 to-gray-200 p-3 font-semibold hover:bg-gray-100"
            >
              {item.title}
            </button>
            {activeIndex === index && (
              <div className="p-3 text-gray-900 font-semibold bg-white border-t">{item.content}</div>
            )}
          </div>
        ))}
      </div>
      </div>

      <div className="mt-56 mb-22">
        <Footer/>
      </div>
    </div>
  );
}
