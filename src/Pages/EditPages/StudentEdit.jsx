import React, { useState, useEffect } from "react";
import AdminHeader from "../../Components/AdminHeader";
import toast from "react-hot-toast";
import api from "../../../api";
import { useNavigate, useParams } from "react-router-dom";

const StudentEdit = () => {
  const { id } = useParams(); // Get the student ID from the route parameter
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    srNo: "",
    name: "",
    fatherName: "",
    motherName: "",
    session: "",
    class: "",
    section: "",
    dob: "",
    gender: "",
    address: "",
    transferCertificate: "",
    admissionDate: "",
    schoolLeavingDate: "",
  });

  const [loading, setLoading] = useState(false);
  const [transferCertificateFile, setTransferCertificateFile] = useState(null);

  // Fetch the student details when the component loads
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/students/${id}`); // Fetch student by ID
        setStudent(response.data.student); // Populate the form with the student's details
      } catch (error) {
        console.error("Error fetching student details:", error.message);
        toast.error("Failed to fetch student details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setTransferCertificateFile(file); // Update the file state
    setStudent({ ...student, transferCertificate: file.name }); // Update the student object with the file name
  };

  const handleUpdateStudent = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const formData = new FormData();
      Object.entries(student).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (transferCertificateFile) {
        formData.append("transferCertificate", transferCertificateFile); // Append the file if uploaded
      }

      await api.put(`/students/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(`Student Sr No. ${student.srNo} updated successfully!`);
      navigate("/students"); // Redirect to the students list page
    } catch (error) {
      console.error("Error updating student:", error.message);
      toast.error("Failed to update student. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div>
      <AdminHeader title="Edit Student" />
      <div className="ml-64 p-6 -mt-15">
        <h1 className="text-2xl font-bold mb-6">Edit Student</h1>

        <div className="bg-white shadow-md rounded-lg p-3 mb-8 border-2 border-blue-400">
          <h2 className="text-lg font-bold mb-2">Edit Student Details</h2>
          <form onSubmit={handleUpdateStudent} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Sr No</label>
              <input
                type="text"
                name="srNo"
                value={student.srNo}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={student.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Father's Name</label>
              <input
                type="text"
                name="fatherName"
                value={student.fatherName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Mother's Name</label>
              <input
                type="text"
                name="motherName"
                value={student.motherName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Session</label>
              <select
                name="session"
                value={student.session}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select Session</option>
                <option value="2027-2028">2027-2028</option>
                <option value="2026-2027">2026-2027</option>
                <option value="2025-2026">2025-2026</option>
                <option value="2024-2025">2024-2025</option>
                <option value="2023-2024">2023-2024</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Class</label>
              <select
                name="class"
                value={student.class}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select Class</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Section</label>
              <select
                name="section"
                value={student.section}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select Section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={student.dob ? new Date(student.dob).toISOString().slice(0, 10) : ""}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Gender</label>
              <select
                name="gender"
                value={student.gender}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={student.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Admission Date</label>
              <input
                type="date"
                name="admissionDate"
                value={student.admissionDate ? student.admissionDate.slice(0, 10) : ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">School Leaving Date</label>
              <input
                type="date"
                name="schoolLeavingDate"
                value={student.schoolLeavingDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Transfer Certificate</label>
              <input
                type="file"
                name="transferCertificate"
                onChange={handleFileChange} // Handle file input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {student.transferCertificate && (
                <a
                  href={`${api.defaults.baseURL}/${student.transferCertificate}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline mt-2 block"
                >
                  View Current Transfer Certificate
                </a>
              )}
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-15 py-2 rounded-md hover:bg-green-700 transition md:col-span-2"
            >
              Update Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentEdit;