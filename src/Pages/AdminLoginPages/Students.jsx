import React, { useState } from "react";
import AdminHeader from "../../Components/AdminHeader";

const Students = () => {
  const [newStudent, setNewStudent] = useState({ /* same fields */ });
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const handleNewStudentChange = (e) => { /* same code */ };
  const handleCreateStudent = () => { /* same code */ };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.fatherName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex">
      <AdminHeader />

      <main className="flex-1 min-h-screen bg-gray-100 px-4 sm:px-6 md:px-10 py-6 md:ml-64 transition-all">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Manage Students</h1>

          {/* Create Section */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8 border-2 border-blue-400">
            <h2 className="text-lg font-bold mb-4">Create Student</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* fields loop same as before */}
            </div>
            <button
              onClick={handleCreateStudent}
              className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
            >
              Submit
            </button>
          </div>

          {/* Search Section */}
          <div className="bg-white shadow-md rounded-lg p-6 border-2 border-blue-400">
            <h2 className="text-lg font-bold mb-4">Search Student</h2>
            <input
              type="text"
              placeholder="Search by name or father's name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <ul className="space-y-3">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <li key={index} className="p-3 border rounded-md shadow-sm bg-gray-50">
                    <p><strong>Name:</strong> {student.name}</p>
                    <p><strong>Father's Name:</strong> {student.fatherName}</p>
                    <p><strong>Class:</strong> {student.class} - {student.section}</p>
                    <p><strong>Phone:</strong> {student.phone}</p>
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No students found.</p>
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Students;
