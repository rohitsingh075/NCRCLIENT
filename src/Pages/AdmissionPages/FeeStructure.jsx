import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const FeeStructure = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col">
        <div className="max-w-6xl mx-auto px-6 py-16 flex-grow">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-red-700 drop-shadow-sm">
              Fee Structure
            </h1>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              View or download the latest fee structure of{" "}
              <span className="font-semibold">North Central Railway College</span>.  
              Please ensure you check the official notice for updates.
            </p>
          </div>

          {/* PDF Viewer */}
          <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-10 transition hover:shadow-red-300">
            <iframe
              src="/resultDocuments/Fees_Structure.pdf"
              width="100%"
              height="600px"
              className="rounded-lg border border-gray-300"
              title="Fee Structure"
            ></iframe>

            {/* Fallback Message */}
            <div className="mt-6 text-center">
              <p className="text-gray-700">
                If the PDF is not visible,{" "}
                <a
                  href="/resultDocuments/Fees_Structure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 font-semibold hover:underline"
                >
                  click here to download it.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FeeStructure;
