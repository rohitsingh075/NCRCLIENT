import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const documentData = [
  {
    title: "AFFILIATION LETTER",
    pdf: "/schoolDocuments/Affiliationletter.pdf",
  },
  {
    title: "SCHOOL REGISTRATION CERTIFICATE",
    pdf: "/schoolDocuments/School_registration.pdf",
  },
  {
    title: "NO OBJECTION CERTIFICATE (NOC) ",
    pdf: "/schoolDocuments/NOC.pdf",
  },
  {
    title: "RECOGNITION CERTIFICATE ",
    pdf: "/schoolDocuments/Recognition_certificate.pdf",
  },
  {
    title: "BUILDING SAFETY CERTIFICATE  ",
    pdf: "/schoolDocuments/Building_Safety_Certificate.pdf",
  },
  {
    title: "FIRE SAFETY CERTIFICATE ",
    pdf: "/schoolDocuments/Fire_Safety_certificate.pdf",
  },
  {
    title: "SELF CERTIFICATION ",
    pdf: "/schoolDocuments/Self_certificate.pdf",
  },
  {
    title: " WATER, HEALTH AND SANITATION CERTIFICATE",
    pdf: "/schoolDocuments/Waterhealth_certificate.pdf",
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
      <div >
        <Navbar />
      </div>

      <div className="max-w-6xl mx-auto mt-2 p-4">
        <div className=" rounded p-4 bg-white shadow">
          <h2 className="text-lg font-bold text-red-700 border-b pb-2 mb-4">
            MANDATORY DOCUMENTS
          </h2>

          {documentData.map((item, index) => (
            <div key={index} className="mb-2  rounded overflow-hidden">
              <button
                onClick={() => toggleDocument(index)}
                className="w-full text-left bg-gradient-to-b from-red-50 to-red-100 p-2.5  text-gray-900 font-semibold hover:bg-gray-100"
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
