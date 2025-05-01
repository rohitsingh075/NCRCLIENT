import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import resultImage from "../../assets/result.jpg"; 

const documentData = [
  {
    title: "FEE STRUCTURE",
    pdf: "/resultDocuments/Fees_Structure.pdf",
  },
  {
    title: "ANNUAL ACADEMIC CALENDAR",
    pdf: "/resultDocuments/Academic_Calendar.pdf",
  },
  {
    title: "SCHOOL MANAGEMENT COMMITTEE (SMC)",
    pdf: "/resultDocuments/SMC.pdf",
  },
  {
    title: "PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
    pdf: "/resultDocuments/PTA.pdf",
  },
  {
    title: "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION",
    pdf: "/resultDocuments/Result.pdf",
  },
];

export default function ResultAndAcademics() {
  const [openDocuments, setOpenDocuments] = useState([]);

  const toggleDocument = (index) => {
    if (openDocuments.includes(index)) {
      setOpenDocuments(openDocuments.filter((docIndex) => docIndex !== index));
    } else {
      setOpenDocuments([...openDocuments, index]);
    }
  };

  return (
    <div className="mx-auto">
      {/* Navbar */}
      <Navbar />

        {/* Banner Image */}
            <div>
              <img
                src={resultImage}
                alt="School Infrastructure Banner"
                className="w-full h-72 object-cover"
              />
            </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-5 p-4">
        <div className="rounded  p-6 bg-gray-50 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-red-700 mb-6">
            RESULT AND ACADEMICS
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Below is the detailed information about results and academics. Click
            on any section to view the content.
          </p>

          <div className="space-y-6">
            {documentData.map((item, index) => (
              <div
                key={index}
                className=" rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleDocument(index)}
                  className="w-full flex justify-between items-center bg-gradient-to-r from-red-100 to-red-50 p-4 font-semibold text-gray-900 hover:bg-red-200 transition"
                >
                  <span>{item.title}</span>
                  <span className="text-gray-900">
                    {openDocuments.includes(index) ? "▲" : "▼"}
                  </span>
                </button>
                {openDocuments.includes(index) && (
                  <div className="p-4 bg-white border-t">
                    <iframe
                      src={item.pdf}
                      width="100%"
                      height="500px"
                      className="border rounded"
                      title={`PDF-${index}`}
                    />
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
