import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const AdmissionProcedure = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-12">
            Admission Procedure
          </h1>

          {/* Admission Process */}
          <div className="bg-white shadow-lg rounded-lg mb-8 p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Admission Process
            </h2>
            <ol className="list-decimal list-inside text-gray-800 space-y-4 text-lg">
              <li>Fill out the online admission form available on the school website.</li>
              <li>Submit the required documents (listed below) along with the form.</li>
              <li>Pay the registration fee online or at the school office.</li>
              <li>Attend the entrance test or interview (if applicable).</li>
              <li>Check the admission results on the school notice board or website.</li>
              <li>Complete the admission formalities by paying the admission fee.</li>
            </ol>
          </div>

          {/* Required Documents */}
          <div className="bg-white shadow-lg rounded-lg mb-8 p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Required Documents
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-4 text-lg">
              <li>Birth Certificate (original and photocopy)</li>
              <li>Transfer Certificate (if applicable)</li>
              <li>Marksheet of the previous class (if applicable)</li>
              <li>Passport-sized photographs (4 copies)</li>
              <li>Address Proof (Aadhar Card, Passport, etc.)</li>
              <li>Parent's ID Proof (Aadhar Card, Passport, etc.)</li>
              <li>Medical Certificate (if required)</li>
            </ul>
          </div>

          {/* Admission Criteria */}
          <div className="bg-white shadow-lg rounded-lg mb-8 p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Admission Criteria
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-4 text-lg">
              <li>Admission is open to students of all nationalities and religions.</li>
              <li>Age criteria must be met as per the class applied for.</li>
              <li>Admission to higher classes is subject to the availability of seats.</li>
              <li>Students must pass the entrance test or interview (if applicable).</li>
              <li>Priority is given to siblings of existing students and alumni children.</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-800 text-lg">
              For any queries regarding the admission process, please contact:
            </p>
            <p className="text-gray-800 text-lg mt-4">
              <strong>Phone:</strong> 05612229463
            </p>
            <p className="text-gray-800 text-lg">
              <strong>Email:</strong> ncrcollegetundla@rediffmail.com
            </p>
            <p className="text-gray-800 text-lg">
              <strong>Address:</strong> North Central Railway College, Tundla, Uttar Pradesh ,  PIN: 283204
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdmissionProcedure;