import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";


const FeeStructure = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* <h1 className="text-2xl font-bold text-center text-blue-700 mt-200">
            Fee Structure
          </h1> */}

          {/* Fee Structure Table */}
          {/* <div className="bg-white shadow-lg rounded-lg mb-8 p-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Fee Structure Details
            </h2>
            <table className="w-full border-collapse border border-gray-300 text-gray-800 text-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Class</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Tuition Fee (Monthly)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Annual Charges</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Other Fees</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Nursery</td>
                  <td className="border border-gray-300 px-4 py-2">₹1,500</td>
                  <td className="border border-gray-300 px-4 py-2">₹5,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹2,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Class 1 to 5</td>
                  <td className="border border-gray-300 px-4 py-2">₹2,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹6,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹2,500</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Class 6 to 8</td>
                  <td className="border border-gray-300 px-4 py-2">₹2,500</td>
                  <td className="border border-gray-300 px-4 py-2">₹7,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Class 9 to 10</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹8,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,500</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Class 11 to 12</td>
                  <td className="border border-gray-300 px-4 py-2">₹3,500</td>
                  <td className="border border-gray-300 px-4 py-2">₹10,000</td>
                  <td className="border border-gray-300 px-4 py-2">₹4,000</td>
                </tr>
              </tbody>
            </table>
          </div> */}

          {/* PDF Viewer */}
          <div className="bg-white shadow-lg rounded-lg p-5 mt-20 ">
            <h2 className="text-3xl font-bold text-blue-600 mb-2">
               Fee Structure 
            </h2>
            <iframe
              src="/resultDocuments/Fees_Structure.pdf"
              width="100%"
              height="500px"
              className="border rounded "
              title="Fee Structure "/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FeeStructure;