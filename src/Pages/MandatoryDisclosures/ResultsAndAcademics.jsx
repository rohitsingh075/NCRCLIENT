import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";


const documentData = [
  {
    title: "FEE STRUCTURE ",
    pdf: "/resultDocuments/Fees_Structure.pdf",
  },
  {
    title: "ANNUAL ACADEMIC CALENDER",
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
    title: "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION ",
    pdf: "/resultDocuments/Result.pdf",
  },
//   {
//     title: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
//     pdf: "../../public/resultDocuments/Fire_Safety_certificate.pdf",
//   },
//   {
//     title: "COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION",
//     pdf: "../../public/resultDocuments/Self_certificate.pdf",
//   },
//   {
//     title: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
//     pdf: "../../public/resultDocuments/Waterhealth_certificate.pdf",
//   },
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
    <div className="mx-auto ">
      <div className="mt-4 mb-4">
        <Navbar />
      </div>

      <div className="max-w-6xl mx-auto mt-30 p-4">
        <div className="border rounded p-4 bg-white shadow ">
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

      <div className="mt-60">
        <Footer />
      </div>
    </div>
  );
}
