import React, { useEffect, useState } from "react";
import AdminHeader from "../../Components/AdminHeader";

const Dashboard = () => {
  const [adminData, setAdminData] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    role: "Principal",
  });

  useEffect(() => {
    const data = {
      name: "John Doe",
      email: "principal@ncrcollege.edu",
      role: "Admin",
    };
    setAdminData(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />

      {/* Main Content */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-6 md:ml-64 mt-6">
        <div className="w-full">
          {/* Admin Info */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-2">Welcome, {adminData.name}</h2>
            <p className="text-gray-700">Email: {adminData.email}</p>
            <p className="text-gray-700">Role: {adminData.role}</p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Activities */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Updated school calendar for 2025–26 session</li>
                <li>Approved 12 new student admissions</li>
                <li>Reviewed Q1 staff performance reports</li>
                <li>Attended NCR regional principals' meeting</li>
                <li>Published Annual Exam Result Guidelines</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="list-disc pl-5 text-blue-600 space-y-2">
                <li><a href="/manage-students" className="hover:underline">Manage Students</a></li>
                <li><a href="/manage-staff" className="hover:underline">Manage Staff</a></li>
                <li><a href="/view-reports" className="hover:underline">View Reports</a></li>
                <li><a href="/settings" className="hover:underline">Settings</a></li>
                <li><a href="/notifications" className="hover:underline">Notifications</a></li>
              </ul>
            </div>

            {/* System Stats */}
            <div className="bg-white shadow-md rounded-lg p-6 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">System Stats</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-gray-700">
                <div><p className="text-2xl font-bold">1240</p><p>Students</p></div>
                <div><p className="text-2xl font-bold">78</p><p>Teachers</p></div>
                <div><p className="text-2xl font-bold">22</p><p>Classes</p></div>
                <div><p className="text-2xl font-bold">15</p><p>Pending Tasks</p></div>
              </div>
            </div>

            {/* Tasks */}
            <div className="bg-white shadow-md rounded-lg p-6 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Upcoming Tasks / Reminders</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Prepare final list for class 11 subject allocation – <span className="text-sm text-gray-500">Due April 25</span></li>
                <li>Finalize teacher allocations – <span className="text-sm text-gray-500">Due April 28</span></li>
                <li>Review disciplinary actions report – <span className="text-sm text-gray-500">Due April 27</span></li>
                <li>Meeting with board officials – <span className="text-sm text-gray-500">April 26, 11:00 AM</span></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;