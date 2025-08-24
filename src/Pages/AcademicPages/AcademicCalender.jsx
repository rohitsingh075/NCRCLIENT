import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const AcademicCalender = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-8xl mx-auto px-6 py-4">
          <h1 className="text-4xl font-extrabold text-center mt-4 text-red-600  ">
            Academic Calendar
          </h1>

          {/* PDF Viewer */}
          <div className="bg-white shadow-lg rounded-lg py-2 mt-10">

            <iframe
              src="/resultDocuments/Academic_Calendar.pdf"
              width="100%"
              height="470px"
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