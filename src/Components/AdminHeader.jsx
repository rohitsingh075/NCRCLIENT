import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaUserGraduate, FaCalendarAlt, FaStickyNote, FaImages } from "react-icons/fa";
import { toast } from "react-hot-toast";
import api from "../../api";

const AdminHeader = ({ title = "Welcome Admin" }) => {
  const navigate = useNavigate();

  const onclickHandler = async () => {
    try {
      // ✅ Call logout API (cookie-based)
      await api.post("/logout", {}, { withCredentials: true });

      // ✅ Redirect to login page
      navigate("/");

      toast.success("Logged out successfully", {
        style: { marginTop: "50px", zIndex: 1000 },
      });
      // ✅ Show success toast

      console.log("Logging out...");
    } catch (error) {
      console.error("Error during logout:", error.message);
      toast.error("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="bg-blue-600 text-white w-64 min-h-screen fixed">
        <h1 className="text-2xl font-bold mb-8 text-center py-6"></h1>
        <nav className="space-y-3 px-4 mt-20 text-lg font-semibold text-shadow-md">
          <Link
            to="/dashboard"
            className="flex items-center space-x-4 py-3 px-4 rounded-md hover:bg-blue-700 transition"
          >
            <FaHome />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/students"
            className="flex items-center space-x-4 py-3 px-4 rounded-md hover:bg-blue-700 transition"
          >
            <FaUserGraduate />
            <span>Students</span>
          </Link>
          <Link
            to="/events"
            className="flex items-center space-x-4 py-3 px-4 rounded-md hover:bg-blue-700 transition"
          >
            <FaCalendarAlt />
            <span>Events</span>
          </Link>
          <Link
            to="/notices"
            className="flex items-center space-x-4 py-3 px-4 rounded-md hover:bg-blue-700 transition"
          >
            <FaStickyNote />
            <span>Notices</span>
          </Link>
          <Link
            to="/gallery"
            className="flex items-center space-x-4 py-3 px-4 rounded-md hover:bg-blue-700 transition"
          >
            <FaImages />
            <span>Gallery</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <header className="w-full bg-gray-600 text-white py-4 shadow-md">
          <div className="px-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <button
              onClick={onclickHandler}
              className="cursor-pointer bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </header>

        <div className="p-6">
          {/* Content will be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
