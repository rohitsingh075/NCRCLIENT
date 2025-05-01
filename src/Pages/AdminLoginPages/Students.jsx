import React, { useState, useEffect, useRef } from "react";
import AdminHeader from "../../Components/AdminHeader";
import toast from "react-hot-toast";
import api from "../../../api";
import { useNavigate, useLocation } from "react-router-dom";

const Students = () => {
  const location = useLocation(); // Access state passed from StudentDetails
  const [filters, setFilters] = useState(location.state?.filters || {
    srNo: "",
    name: "",
    session: "",
    class: "",
    section: "",
    dob: "",
    gender: "",
    address: "",
    rlyWard: "",
    caste: "",
    aadharNo: "",
    house: "",
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
    rlyWard: "",
    caste: "",
    aadharNo: "",
    house: "",
    religion: "",
    phoneNo: "", // Added phoneNo to newStudent
  });

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickedCreate, setClickedCreate] = useState(1);
  const [showCreateForm, setShowCreateForm] = useState(location.state?.showCreateForm ?? true); // Preserve active button
  const navigate = useNavigate();

  // Reference for the search results div
  const searchResultsRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const clearFilters = () => {
    // Reset filters to their default values
    setFilters({
      srNo: "",
      name: "",
      session: "",
      class: "",
      section: "",
      dob: "",
      gender: "",
      address: "",
      rlyWard: "",
      caste: "",
      aadharNo: "",
      house: "",
      phoneNo: "", // Reset phoneNo as well
    });

    // Clear the students list
    setStudents([]);

    // toast.success("Filters cleared successfully!");
  };

  const handleNewStudentChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const seeStudentDetails = (id) => {
    navigate(`/student-details/${id}`, {
      state: { filters, showCreateForm }, // Pass current state to StudentDetails
    });
  };

  const handleFilterSearch = async () => {
    // Check if all filters are empty
    const isEmptyFilters = Object.values(filters).every((value) => value === "" || value === null);

    if (isEmptyFilters) {
      toast.error("No filters applied. Please fill at least one filter to search.");
      return; // Exit the function without calling the API
    }

    setLoading(true);
    try {
      // Ensure filters are passed correctly to the API
      const response = await api.get("/students/filter", { params: filters });
      setStudents(response.data.students);

      // Scroll to the search results div
      if (searchResultsRef.current) {
        searchResultsRef.current.scrollIntoView({ behavior: "smooth" });
      }

      toast.success("Filter applied successfully!");
    } catch (error) {
      console.error("Error fetching filtered students:", error.message);
      toast.error("Failed to apply filters. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // const handleSearchAll = async () => {
  //   setLoading(true);
  //   try {
  //     // Fetch all students without filters
  //     const response = await api.get("/students/");
  //     setStudents(response.data.students);

  //     // Scroll to the search results div
  //     if (searchResultsRef.current) {
  //       searchResultsRef.current.scrollIntoView({ behavior: "smooth" });
  //     }

  //     // toast.success("All students fetched successfully!");
  //   } catch (error) {
  //     console.error("Error fetching all students:", error.message);
  //     toast.error("Failed to fetch all students. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleCreateStudent = async () => {
    try {
      const formData = new FormData();

      // Append all fields to FormData
      for (const key in newStudent) {
        formData.append(key, newStudent[key]);
      }

      const response = await api.post("/students/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

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
        rlyWard: "",
        caste: "",
        aadharNo: "",
        house: "",
        religion: "",
        phoneNo: "",
      });
      set

      toast.success("Student created successfully!");

      // Scroll to the search results div
      if (searchResultsRef.current) {
        searchResultsRef.current.scrollIntoView({ behavior: "smooth" });
      }

      setClickedCreate(1);
    } catch (error) {
      console.error("Error creating student:", error.response?.data || error.message);
      toast.error("Failed to create student. Please try again.");
    }
  };

  const handleEditStudent = async (id) => {
    try {
      navigate(`/update-student/${id}`);
    } catch (error) {
      console.error("Error fetching student details:", error.message);
      toast.error("Failed to fetch student details. Please try again.");
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      window.confirm("Are you sure to delelte the student data")
      await api.delete(`/students/${id}`);
      setStudents(students.filter((student) => student._id !== id));
      toast.success("Student deleted successfully!");
    } catch (error) {
      console.error("Error deleting student:", error.message);
      toast.error("Failed to delete student. Please try again.");
    }
  };

  useEffect(() => {
    // Remove the automatic call to handleFilterSearch
    // This ensures no API calls are made when toggling between Create and Search modes
  }, [showCreateForm]);

  return (
    <div>
      <AdminHeader title="Students" />
      <div className="ml-64 p-6 -mt-15">
        <h1 className="text-2xl font-bold mb-6">Manage Students</h1>

        {/* Toggle Buttons */}
        <div className="flex justify-start mt-2 mb-6">
          <button
            onClick={() => {
              setShowCreateForm(true);
              setClickedCreate(1);
              clearFilters();
              setStudents([]); // Clear the students list when switching to Create mode
            }}
            className={`px-15 py-2 text-md rounded-l-md ${
              showCreateForm ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-600"
            } transition`}
          >
            Create
          </button>
          <button
            onClick={() => {
              setShowCreateForm(false);
              setClickedCreate(0);
              // No API call or filter logic here, just UI changes
            }}
            className={`px-15 py-2 text-md rounded-r-md ${
              !showCreateForm ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-600"
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
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, transferCertificate: e.target.files[0] })}
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
                <label className="block text-gray-700 font-medium mb-1">Rly Ward</label>
                <select
                  name="rlyWard"
                  value={newStudent.rlyWard}
                  onChange={handleNewStudentChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Rly Ward</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Caste</label>
                <select
                  name="caste"
                  value={newStudent.caste}
                  onChange={handleNewStudentChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Caste</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Aadhar Number</label>
                <input
                  type="text"
                  name="aadharNo"
                  value={newStudent.aadharNo}
                  onChange={handleNewStudentChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">House</label>
                <select
                  name="house"
                  value={newStudent.house}
                  onChange={handleNewStudentChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select House</option>
                  <option value="S">S</option>
                  <option value="T">T</option>
                  <option value="A">A</option>
                  <option value="P">P</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Religion</label>
                <select
                  name="religion"
                  value={newStudent.religion}
                  onChange={handleNewStudentChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Religion</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Sikh">Sikh</option>
                  <option value="Christian">Christian</option>
                  <option value="Jain">Jain</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phoneNo"
                  value={newStudent.phoneNo}
                  onChange={handleNewStudentChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
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
              <div>
                <label className="block text-gray-700 font-medium mb-1">Rly Ward</label>
                <select
                  name="rlyWard"
                  value={filters.rlyWard || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Rly Ward</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Caste</label>
                <select
                  name="caste"
                  value={filters.caste || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Caste</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Aadhar Number</label>
                <input
                  type="text"
                  name="aadharNo"
                  value={filters.aadharNo || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">House</label>
                <select
                  name="house"
                  value={filters.house || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select House</option>
                  <option value="S">S</option>
                  <option value="T">T</option>
                  <option value="A">A</option>
                  <option value="P">P</option>
                </select>
              </div>
            </div>
            <button
              onClick={handleFilterSearch}
              className="mt-4 bg-blue-600 text-white px-15 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Filter Search
            </button>
            
            <button
              onClick={clearFilters}
              className="mt-4 bg-blue-600 text-white px-15 py-2 ml-5 rounded-md hover:bg-blue-700 transition"
            >
              Clear Filter
            </button>
            {/* <button
              onClick={handleSearchAll}
              className="mt-4 bg-blue-600 text-white px-15 py-2 ml-5 rounded-md hover:bg-blue-700 transition"
            >
               All Students
            </button> */}
          </div>
        )}

        {/* Search Results */}
        <div ref={searchResultsRef} className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-lg font-bold mb-4 text-left">{clickedCreate ? "Created Student" : "Search Results"}</h2>
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
                      <div className="flex justify-center gap-x-4">
                        <button
                          onClick={() => seeStudentDetails(student._id)}
                          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-00 transition mr-2"
                        >
                          See Details
                        </button>
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
                      </div>
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