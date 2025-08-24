import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const documentData = [
  {
    title: "Affiliation Letter",
    pdf: "/schoolDocuments/Affiliationletter.pdf",
  },
  {
    title: "School Registration Certificate",
    pdf: "/schoolDocuments/School_registration.pdf",
  },
  {
    title: "No Objection Certificate (NOC)",
    pdf: "/schoolDocuments/NOC.pdf",
  },
  {
    title: "Recognition Certificate",
    pdf: "/schoolDocuments/Recognition_certificate.pdf",
  },
  {
    title: "Building Safety Certificate",
    pdf: "/schoolDocuments/Building_Safety_Certificate.pdf",
  },
  {
    title: "Fire Safety Certificate",
    pdf: "/schoolDocuments/Fire_Safety_certificate.pdf",
  },
  {
    title: "Self Certification",
    pdf: "/schoolDocuments/Self_certificate.pdf",
  },
  {
    title: "Water, Health and Sanitation Certificate",
    pdf: "/schoolDocuments/Waterhealth_certificate.pdf",
  },
];

export default function DocumentsAndInformation() {
  const [openDocuments, setOpenDocuments] = useState([]);

  const toggleDocument = (index) => {
    if (openDocuments.includes(index)) {
      setOpenDocuments(openDocuments.filter((docIndex) => docIndex !== index));
    } else {
      setOpenDocuments([...openDocuments, index]);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Page Header */}
      <div className="max-w-5xl mx-auto py-12 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4">
          Mandatory School Documents
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          Access and view important official documents of North Central Railway College. Click on each item to preview the PDF.
        </p>
      </div>

      {/* Documents Accordion */}
      <div className="max-w-4xl mx-auto px-4 md:px-0">
        <div className="space-y-4">
          {documentData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleDocument(index)}
                className="w-full flex justify-between items-center px-6 py-4 bg-white font-medium text-gray-800 text-lg hover:bg-gray-100 transition"
              >
                <span>{item.title}</span>
                <span className="text-gray-500">
                  {openDocuments.includes(index) ? "▲" : "▼"}
                </span>
              </button>
              {openDocuments.includes(index) && (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <iframe
                    src={item.pdf}
                    width="100%"
                    height="500px"
                    className="rounded shadow"
                    title={`PDF-${index}`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <br /><br /><br /> <br /><br /><br /> 
           <Footer className="mt-20" />
    </div>
  );
}
