import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const documentData = [
  {
    title: "AFFILIATION LETTER",
    pdf: "../../public/schoolDocuments/Affiliationletter.pdf",
  },
  {
    title: "SCHOOL REGISTRATION CERTIFICATE",
    pdf: "../../public/schoolDocuments/School_registration.pdf",
  },
  {
    title: "NO OBJECTION CERTIFICATE (NOC) ",
    pdf: "../../public/schoolDocuments/NOC.pdf",
  },
  {
    title: "RECOGNITION CERTIFICATE ",
    pdf: "../../public/schoolDocuments/Recognition_certificate.pdf",
  },
  {
    title: "BUILDING SAFETY CERTIFICATE  ",
    pdf: "../../public/schoolDocuments/Building_Safety_Certificate.pdf",
  },
  {
    title: "FIRE SAFETY CERTIFICATE ",
    pdf: "../../public/schoolDocuments/Fire_Safety_certificate.pdf",
  },
  {
    title: "SELF CERTIFICATION ",
    pdf: "../../public/schoolDocuments/Self_certificate.pdf",
  },
  {
    title: " WATER, HEALTH AND SANITATION CERTIFICATE",
    pdf: "../../public/schoolDocuments/Waterhealth_certificate.pdf",
  },
];

export default function DocumentsAndInfomation() {
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
      <div className="mt-4 mb-4">
        <Navbar />
      </div>

      <div className="max-w-6xl mx-auto mt-25 p-4">
        <div className="border rounded p-4 bg-white shadow">
          <h2 className="text-lg font-bold text-blue-700 border-b pb-2 mb-4">
            MANDATORY DOCUMENTS
          </h2>

          {documentData.map((item, index) => (
            <div key={index} className="mb-2 border rounded overflow-hidden">
              <button
                onClick={() => toggleDocument(index)}
                className="w-full text-left bg-gradient-to-b from-gray-100 to-gray-200 p-3 font-semibold hover:bg-gray-100"
              >
                {item.title}
              </button>
              {openDocuments.includes(index) && (
                <div className="p-3 bg-white border-t">
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

      <div className="mt-12 p-0">
        <Footer />
      </div>
    </div>
  );
}
