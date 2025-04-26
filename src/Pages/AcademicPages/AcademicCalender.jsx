import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const AcademicCalender = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-12 ">
            Academic Calendar
          </h1>

          {/* PDF Viewer */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
               Academic Calendar
            </h2>
            <iframe
              src="/resultDocuments/Academic_Calendar.pdf"
              width="100%"
              height="600px"
              className="border rounded"
              title="Academic Calendar PDF"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AcademicCalender;