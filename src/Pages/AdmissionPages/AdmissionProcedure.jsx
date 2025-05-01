import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

import processImage from "../../assets/admisson.webp"; // Replace with an actual image for Admission Process
import documentsImage from "../../assets/reqdoc.webp"; // Replace with an actual image for Required Documents
import criteriaImage from "../../assets/academics.jpg"; // Replace with an actual image for Admission Criteria
import contactImage from "../../assets/contact.jpg"; // Replace with an actual image for Contact Information

const AdmissionProcedure = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
  

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-extrabold text-center text-red-700 mb-12">
            Admission Procedure
          </h1>

          {/* Admission Process */}
          <div className="bg-gray-800 shadow-lg rounded-lg mb-8 p-8 hover:shadow-xl transition duration-300 flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">📋</span> Admission Process
              </h2>
              <ol className="list-decimal list-inside text-gray-200 space-y-4 text-lg">
                <li>Fill out the online admission form available on the school website.</li>
                <li>Submit the required documents (listed below) along with the form.</li>
                <li>Pay the registration fee online or at the school office.</li>
                <li>Attend the entrance test or interview (if applicable).</li>
                <li>Check the admission results on the school notice board or website.</li>
                <li>Complete the admission formalities by paying the admission fee.</li>
              </ol>
            </div>
            <div className="flex-1">
              <img
                src={processImage}
                alt="Admission Process"
                className="w-full min-h-56 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Required Documents */}
          <div className="bg-gray-800 shadow-lg rounded-lg mb-8 p-8 hover:shadow-xl transition duration-300 flex flex-col md:flex-row items-center  gap-x-6">
           
           
          <div className="flex-1">
              <img
                src={documentsImage}
                alt="Required Documents"
                className="w-full min-h-56 object-cover rounded-lg"
              />
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">📑</span> Required Documents
              </h2>
              <ul className="list-disc list-inside text-gray-200 space-y-4 text-lg">
                <li>Birth Certificate (original and photocopy)</li>
                <li>Transfer Certificate (if applicable)</li>
                <li>Marksheet of the previous class (if applicable)</li>
                <li>Passport-sized photographs (4 copies)</li>
                <li>Address Proof (Aadhar Card, Passport, etc.)</li>
                <li>Parent's ID Proof (Aadhar Card, Passport, etc.)</li>
                <li>Medical Certificate (if required)</li>
              </ul>
            </div>
           
          </div>

          {/* Admission Criteria */}
          <div className="bg-gray-800 shadow-lg rounded-lg mb-8 p-8 hover:shadow-xl transition duration-300 flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">✅</span> Admission Criteria
              </h2>
              <ul className="list-disc list-inside text-gray-200 space-y-4 text-lg">
                <li>Admission is open to students of all nationalities and religions.</li>
                <li>Age criteria must be met as per the class applied for.</li>
                <li>Admission to higher classes is subject to the availability of seats.</li>
                <li>Students must pass the entrance test or interview (if applicable).</li>
                <li>Priority is given to siblings of existing students and alumni children.</li>
              </ul>
            </div>
            <div className="flex-1">
              <img
                src={criteriaImage}
                alt="Admission Criteria"
                className="w-full min-h-56 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-800 shadow-lg rounded-lg p-8 hover:shadow-xl transition duration-300 flex flex-col md:flex-row  gap-x-6 items-center">
           
          <div className="flex-1 ">
              <img
                src={contactImage}
                alt="Contact Information"
                className="w-full min-h-56 object-cover rounded-lg"
              />
            </div>
           
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">📞</span> Contact Information
              </h2>
              <p className="text-gray-200 text-lg">
                For any queries regarding the admission process, please contact:
              </p>
              <p className="text-gray-200 text-lg mt-4">
                <strong>Phone:</strong> 05612229463
              </p>
              <p className="text-gray-200 text-lg">
                <strong>Email:</strong> ncrcollegetundla@rediffmail.com
              </p>
              <p className="text-gray-200 text-lg">
                <strong>Address:</strong> North Central Railway College, Tundla, Uttar Pradesh, PIN: 283204
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