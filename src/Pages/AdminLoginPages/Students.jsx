import React, { useState } from "react";
import axios from "axios";
import AdminHeader from "../../Components/AdminHeader";

const Students = () => {
  const [filters, setFilters] = useState({
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
  });

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      console.log(filters);
      const response = await axios.get("/api/students", { params: filters });
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <AdminHeader/>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-6">Search Students</h1>



        {/* Filters Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold mb-4">Filter Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <select
              type="option"
              name="session"
              placeholder="Session (e.g., 2024-25)"
              value={filters.session}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="" >Select Session</option>
              <option value="2024-2025">2024-2025</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2022-2023">2022-2023</option>
              <option value="2021-2022">2021-2022</option>
            </select>
            <input
              type="text"
              name="srNo"
              placeholder="Sr No"
              value={filters.srNo}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={filters.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            
            <input
              type="text"
              name="class"
              placeholder="Class"
              value={filters.class}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              name="section"
              placeholder="Section"
              value={filters.section}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={filters.dob}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <select
              name="gender"
              value={filters.gender}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={filters.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            onClick={handleSearch}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {/* Results Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Search Results</h2>
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
                {students.map((student) => (
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
        </div>
      </div>
    </div >
  );
};

export default Students;