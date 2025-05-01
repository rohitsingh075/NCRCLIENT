import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import AdminHeader from "../../Components/AdminHeader";
import api from "../../../api";
import toast from "react-hot-toast";

const StudentDetails = () => {
  const { id } = useParams(); // Get the student ID from the route parameter
  const navigate = useNavigate(); // For navigation
  const location = useLocation(); // To access state passed from the previous page
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseURL = api.defaults.baseURL; // Base URL for file paths

  // Fetch student details by ID
  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await api.get(`/students/${id}`);
        setStudent(response.data.student);
      } catch (error) {
        console.error("Error fetching student details:", error.message);
        toast.error("Failed to fetch student details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentDetails();
  }, [id]);

  const handleBack = () => {
    // Navigate back to the Students page with the same search data
    navigate("/students", { state: location.state });
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!student) {
    return <p className="text-center text-red-500">Student not found.</p>;
  }

  return (
    <div>
      <AdminHeader title="Student Details" />
      <div className="ml-64 p-6 -mt-15">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Student Details</h1>
          <button
            onClick={handleBack} // Navigate back to the Students page
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Back
          </button>
        </div>

        {/* Student Details Table */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold mb-4">Details of {student.name}</h2>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <tbody>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium">Sr No</td>
                <td className="px-4 py-2">{student.srNo}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium">Name</td>
                <td className="px-4 py-2">{student.name}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium">Father's Name</td>
                <td className="px-4 py-2">{student.fatherName}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium">Mother's Name</td>
                <td className="px-4 py-2">{student.motherName}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium">Session</td>
                <td className="px-4 py-2">{student.session}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium">Class</td>
                <td className="px-4 py-2">{student.class}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium">Section</td>
                <td className="px-4 py-2">{student.section}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium">Date of Birth</td>
                <td className="px-4 py-2">
                  {student.dob ? new Date(student.dob).toLocaleDateString() : "N/A"}
                </td>
              </tr>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium">Gender</td>
                <td className="px-4 py-2">{student.gender}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium">Address</td>
                <td className="px-4 py-2">{student.address}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium">Mobile Number</td>
                <td className="px-4 py-2">{student.mobileNo || "N/A"}</td>
              </tr>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium">Admission Date</td>
                <td className="px-4 py-2">
                  {student.admissionDate
                    ? new Date(student.admissionDate).toLocaleDateString()
                    : "N/A"}
                </td>
              </tr>
              <tr className="border border-gray-300">
                <td className="px-4 py-2 font-medium">School Leaving Date</td>
                <td className="px-4 py-2">
                  {student.schoolLeavingDate
                    ? new Date(student.schoolLeavingDate).toLocaleDateString()
                    : "N/A"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Transfer Certificate Section */}
        {student.transferCertificate && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Transfer Certificate</h2>
            <iframe
              src={`${baseURL}/${student.transferCertificate}`}
              width="100%"
              height="500px"
              className="border rounded-md"
              title="Transfer Certificate"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDetails;