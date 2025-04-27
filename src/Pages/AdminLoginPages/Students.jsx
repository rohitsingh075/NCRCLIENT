import React, { useState } from "react";
import AdminHeader from "../../Components/AdminHeader";
import toast from "react-hot-toast";
import api from "../../../api";
import { useNavigate } from "react-router-dom";



const Students = () => {
  const [filters, setFilters] = useState({
    srNo: "",
    name: "",
    session: "",
    class: "",
    section: "",
    dob: "",
    gender: "",
    address: "",
  });

  const [newStudent, setNewStudent] = useState({
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

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickedCreate, setClickedCreate] = useState(1);
  const [showCreateForm, setShowCreateForm] = useState(true);
  const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const clearFilters = () => {
    setFilters({
      srNo: "",
      name: "",
      session: "",
      class: "",
      section: "",
      dob: "",
      gender: "",
      address: "",
    });
  };
  

  const handleNewStudentChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleFilterSearch = async () => {
    setLoading(true);
    try {
      // console.log("Filters applied:", filters);
      setStudents([]);
      const response = await api.get("/students/filter", { params: filters });
      setStudents(response.data.students);
      toast.success("Students Searched successfully!");

    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleSearchAll = async () => {
    setLoading(true);
    try {
      const response = await api.get("/students/");
      setStudents(response.data.students);
      toast.success("Student Searched successfully!");

    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateStudent = async () => {
    try {
      setStudents([]);
      console.log("Student :", newStudent);
      const response = await api.post("/students/", newStudent);
      setStudents([...students, response.data.student]);
      setNewStudent({
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
      toast.success("Student created successfully!");
      setClickedCreate(1);
    } catch (error) {
      console.error("Error creating student:", error.message);
      toast.error("Failed to create student. Please try again.");
    }
  };

  const handleEditStudent = async (id) => {
    try {
      navigate("/update-student");
      // Fetch the student details from the API
      const response = await api.put(`/students/${id}`);
      const studentToEdit = response.data;
  
      if (studentToEdit) {
        setNewStudent(studentToEdit); // Populate the form with the student's details
        setShowCreateForm(true); // Switch to the Create form for editing
        toast.info("Edit the student details and click Submit.");
      }
    } catch (error) {
      console.error("Error fetching student details:", error.message);
      toast.error("Failed to fetch student details. Please try again.");
    }
  };
  
  const handleDeleteStudent = async (id) => {
    try {
      // Send a DELETE request to the API
      await api.delete(`/students/${id}`);
      setStudents(students.filter((student) => student._id !== id)); // Remove the student from the list
      toast.success("Student deleted successfully!");
    } catch (error) {
      console.error("Error deleting student:", error.message);
      toast.error("Failed to delete student. Please try again.");
    }
  };

  return (
    <div>
      <AdminHeader title="Students" />
      <div className="ml-64 p-6 -mt-15">
        <h1 className="text-2xl font-bold mb-6">Manage Students</h1>

        {/* Toggle Buttons */}
        <div className="flex justify-start mt-2 mb-6">
          <button
            onClick={() => {setShowCreateForm(true),setClickedCreate(1),setStudents([])}}
            className={`px-15 py-2 text-md rounded-l-md ${showCreateForm ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-600"
              } transition`}
          >
            Create
          </button>
          <button
            onClick={() => {setShowCreateForm(false),setClickedCreate(0),setStudents([])}}
            className={`px-15 py-2 text-md rounded-r-md ${!showCreateForm ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-600"
              } transition`}
          >
            Search
          </button>
        </div>

        {/* Create Form */}
        {showCreateForm ? (
          <div className="bg-white shadow-md rounded-lg p-3 mb-8  border-2 border-blue-400">
            <h2 className="text-lg font-bold mb-2">Create Student</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Sr No</label>
                <input
                  type="text"
                  required='true'
                  name="srNo"
                  value={newStudent.srNo}
                  onChange={handleNewStudentChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newStudent.name}
                  onChange={handleNewStudentChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Father's Name</label>
                <input
                  type="text"
                  name="fatherName"
                  value={newStudent.fatherName}
                  onChange={handleNewStudentChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Mother's Name</label>
                <input
                  type="text"
                  name="motherName"
                  value={newStudent.motherName}
                  onChange={handleNewStudentChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Session</label>
                <select
                  name="session"
                  value={newStudent.session}
                  onChange={handleNewStudentChange}
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
                  value={newStudent.class}
                  onChange={handleNewStudentChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Class</option>
                  {/* <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option> */}
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
                  value={newStudent.section}
                  onChange={handleNewStudentChange}
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
                  value={newStudent.dob}
                  onChange={handleNewStudentChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Gender</label>
                <select
                  name="gender"
                  value={newStudent.gender}
                  onChange={handleNewStudentChange}
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
                  value={newStudent.address}
                  onChange={handleNewStudentChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Transfer Certificate (Previous - If any)</label>
                <input
                  type="file"
                  name="transferCertificate"
                  value={newStudent.transferCertificate}
                  onChange={handleNewStudentChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Admission Date</label>
                <input
                  type="date"
                  name="admissionDate"
                  value={newStudent.admissionDate}
                  onChange={handleNewStudentChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
              </div>
            </div>
            <button
              onClick={handleCreateStudent}
              className="mt-4 bg-green-600 text-white px-15 py-2 rounded-md hover:bg-green-700 transition"
            >
              Submit
            </button>
          </div>
        ) : (
          // Search Form
          <div className="bg-white shadow-md rounded-lg p-3 mb-8 border-2 border-blue-400">
            <h2 className="text-lg font-bold mb-4">Search Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Sr No</label>
                <input
                  type="text"
                  name="srNo"
                  value={filters.srNo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={filters.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Session</label>
                <select
                  name="session"
                  value={filters.session}
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
                  value={filters.class}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Class</option>
                  {/* <option value="1">1</option>
                  <option value="2">2</option>

                  <option value="3">3</option> */}
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
                  value={filters.section}
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
                  value={filters.dob}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Gender</label>
                <select
                  name="gender"
                  value={filters.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={filters.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>
            <button
              onClick={handleFilterSearch}
              className="mt-4 bg-blue-600 text-white px-15 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Filter Search
            </button>
            <button
              onClick={handleSearchAll}
              className="mt-4 bg-blue-600 text-white px-15 py-2 ml-5 rounded-md hover:bg-blue-700 transition"
            >
              Search All
            </button>
            <button
              onClick={clearFilters}
              className="mt-4 bg-blue-600 text-white px-15 py-2 ml-5 rounded-md hover:bg-blue-700 transition"
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* Created Student */}
        {/* <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-lg font-bold mb-4 text-left">Created Results</h2>
          {loading ? (
            <p>Loading...</p>
          ) : students.length > 0 ? (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Sr No</th>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Class</th>
                  <th className="border border-gray-300 px-4 py-2">Section</th>
                  <th className="border border-gray-300 px-4 py-2">Session</th>
                  <th className="border border-gray-300 px-4 py-2">Gender</th>
                </tr>
              </thead>
              <tbody>
                {createdStudent.map((student) => (
                  <tr key={student.srNo}>
                    <td className="border border-gray-300 px-4 py-2">{student.srNo}</td>
                    <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{student.class}</td>
                    <td className="border border-gray-300 px-4 py-2">{student.section}</td>
                    <td className="border border-gray-300 px-4 py-2">{student.session}</td>
                    <td className="border border-gray-300 px-4 py-2">{student.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No students found.</p>
          )}
        </div> */}

        {/* Search Results */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-lg font-bold mb-4 text-left">{clickedCreate ? "Created Student":"Search Results"}</h2>
          {loading ? (
            <p>Loading...</p>
          ) : students.length > 0 ? (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Sr No</th>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Class</th>
                  <th className="border border-gray-300 px-4 py-2">Section</th>
                  <th className="border border-gray-300 px-4 py-2">Session</th>
                  <th className="border border-gray-300 px-4 py-2">Gender</th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.srNo}>
                    <td className="border border-gray-300 px-4 py-2">{student.srNo}</td>
                    <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{student.class}</td>
                    <td className="border border-gray-300 px-4 py-2">{student.section}</td>
                    <td className="border border-gray-300 px-4 py-2">{student.session}</td>
                    <td className="border border-gray-300 px-4 py-2">{student.gender}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        onClick={() => handleEditStudent(student._id)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(student._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No students found.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Students;