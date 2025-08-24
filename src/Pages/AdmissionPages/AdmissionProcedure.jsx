import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import processImage from "../../assets/admisson.webp";
import documentsImage from "../../assets/reqdoc.webp";
import criteriaImage from "../../assets/academics.jpg";
import contactImage from "../../assets/contact.jpg";

const AdmissionProcedure = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-red-600 mb-12">
            Admission Procedure
          </h1>

          {/* Section: Admission Process */}
          <div className="bg-white shadow-md rounded-2xl mb-12 p-8 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition duration-300">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600 mr-3">📋</span>
                Admission Process
              </h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-3 text-lg">
                <li>Fill out the online admission form on the school website.</li>
                <li>Submit the required documents along with the form.</li>
                <li>Pay the registration fee online or at the office.</li>
                <li>Attend the entrance test or interview (if applicable).</li>
                <li>Check results on the notice board or website.</li>
                <li>Complete formalities by paying the admission fee.</li>
              </ol>
            </div>
            <div className="flex-1">
              <img
                src={processImage}
                alt="Admission Process"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>

          {/* Section: Required Documents */}
          <div className="bg-white shadow-md rounded-2xl mb-12 p-8 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition duration-300">
            <div className="flex-1 order-2 md:order-1">
              <img
                src={documentsImage}
                alt="Required Documents"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="flex-1 order-1 md:order-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600 mr-3">📑</span>
                Required Documents
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
                <li>Birth Certificate (original & photocopy)</li>
                <li>Transfer Certificate (if applicable)</li>
                <li>Marksheet of the previous class</li>
                <li>4 Passport-sized photographs</li>
                <li>Address Proof (Aadhar, Passport, etc.)</li>
                <li>Parent’s ID Proof</li>
                <li>Medical Certificate (if required)</li>
              </ul>
            </div>
          </div>

          {/* Section: Admission Criteria */}
          <div className="bg-white shadow-md rounded-2xl mb-12 p-8 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition duration-300">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600 mr-3">✅</span>
                Admission Criteria
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
                <li>Admission is open to all nationalities & religions.</li>
                <li>Age criteria must match the class applied for.</li>
                <li>Admission to higher classes depends on seat availability.</li>
                <li>Students must clear entrance test or interview (if applicable).</li>
                <li>Preference is given to siblings & alumni children.</li>
              </ul>
            </div>
            <div className="flex-1">
              <img
                src={criteriaImage}
                alt="Admission Criteria"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
            </div>
          </div>

          {/* Section: Contact Information */}
          <div className="bg-white shadow-md rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl transition duration-300">
            <div className="flex-1 order-2 md:order-1">
              <img
                src={contactImage}
                alt="Contact Information"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="flex-1 order-1 md:order-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600 mr-3">📞</span>
                Contact Information
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                For queries regarding the admission process, please contact:
              </p>
              <p className="text-gray-700 text-lg">
                <strong>📞 Phone:</strong> 05612229463
              </p>
              <p className="text-gray-700 text-lg">
                <strong>✉️ Email:</strong> ncrcollegetundla@rediffmail.com
              </p>
              <p className="text-gray-700 text-lg">
                <strong>📍 Address:</strong> North Central Railway College, Tundla, Uttar Pradesh, PIN: 283204
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdmissionProcedure;
