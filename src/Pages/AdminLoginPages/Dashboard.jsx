import React, { useEffect, useState } from "react";
import AdminHeader from "../../Components/AdminHeader.jsx"; // ✅ Import the reusable AdminHeader component

const Dashboard = () => {
  const [adminData, setAdminData] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    role: "Principal",
  });

  useEffect(() => {
    // Replace with real API call if needed
    const fetchAdminData = async () => {
      const data = {
        name: "John Doe",
        email: "principal@ncrcollege.edu",
        role: "Principal",
      };
      setAdminData(data);
    };

    fetchAdminData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ✅ Reusable Header with title and navigation */}
      <AdminHeader />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Admin Info */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Welcome, {adminData.name}</h2>
          <div className="text-gray-700 space-y-2">
            <p><strong>Email:</strong> {adminData.email}</p>
            <p><strong>Role:</strong> {adminData.role}</p>
            <p><strong>Last Login:</strong> April 22, 2025 at 08:30 AM</p>
            <p><strong>Department:</strong> Administration</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Recent Activities</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Updated school calendar for 2025–26 session</li>
              <li>Approved 12 new student admissions</li>
              <li>Reviewed Q1 staff performance reports</li>
              <li>Attended NCR regional principals' meeting</li>
              <li>Published Annual Exam Result Guidelines</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <a href="/manage-students" className="text-blue-600 hover:underline">
                  Manage Students
                </a>
              </li>
              <li>
                <a href="/manage-staff" className="text-blue-600 hover:underline">
                  Manage Staff
                </a>
              </li>
              <li>
                <a href="/view-reports" className="text-blue-600 hover:underline">
                  View Reports
                </a>
              </li>
              <li>
                <a href="/settings" className="text-blue-600 hover:underline">
                  Settings
                </a>
              </li>
              <li>
                <a href="/notifications" className="text-blue-600 hover:underline">
                  Notifications
                </a>
              </li>
            </ul>
          </div>

          {/* System Stats */}
          <div className="bg-white shadow-md rounded-lg p-6 md:col-span-2">
            <h3 className="text-lg font-bold mb-4">System Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700">
              <div>
                <p className="text-2xl font-bold">1240</p>
                <p>Students</p>
              </div>
              <div>
                <p className="text-2xl font-bold">78</p>
                <p>Teachers</p>
              </div>
              <div>
                <p className="text-2xl font-bold">22</p>
                <p>Classes</p>
              </div>
              <div>
                <p className="text-2xl font-bold">15</p>
                <p>Pending Tasks</p>
              </div>
            </div>
          </div>

          {/* Tasks / Reminders */}
          <div className="bg-white shadow-md rounded-lg p-6 md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Upcoming Tasks / Reminders</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Prepare final list for class 11 subject allocation – <span className="text-sm text-gray-500">Due April 25</span></li>
              <li>Finalize teacher allocations for next session – <span className="text-sm text-gray-500">Due April 28</span></li>
              <li>Review disciplinary actions report – <span className="text-sm text-gray-500">Due April 27</span></li>
              <li>Meeting with school board officials – <span className="text-sm text-gray-500">April 26 at 11:00 AM</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
