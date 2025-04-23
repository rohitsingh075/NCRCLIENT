import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const documentData = [
  {
    title: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY",
    pdf: "../../public/schoolDocuments/Affiliationletter.pdf",
  },
  {
    title: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE",
    pdf: "../../public/schoolDocuments/School_registration.pdf",
  },
  {
    title: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT",
    pdf: "../../public/schoolDocuments/NOC.pdf",
  },
  {
    title: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND ITS RENEWAL IF APPLICABLE",
    pdf: "../../public/schoolDocuments/Recognition_certificate.pdf",
  },
  {
    title: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
    pdf: "../../public/schoolDocuments/Building_Safety_Certificate.pdf",
  },
  {
    title: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
    pdf: "../../public/schoolDocuments/Fire_Safety_certificate.pdf",
  },
  {
    title: "COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION",
    pdf: "../../public/schoolDocuments/Self_certificate.pdf",
  },
  {
    title: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
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

      <div className="max-w-4xl mx-auto mt-25 p-4">
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
