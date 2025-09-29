import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaCalendarAlt,
  FaStickyNote,
  FaImages,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { toast } from "react-hot-toast";
import api from "../../api";

const AdminHeader = ({ title = "Welcome Admin" }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onclickHandler = async () => {
    try {
      await api.post("/logout", {}, { withCredentials: true });
      navigate("/");
      toast.success("Logged out successfully", {
        style: { marginTop: "50px", zIndex: 1000 },
      });
    } catch (error) {
      console.error("Error during logout:", error.message);
      toast.error("Failed to log out. Please try again.");
    }
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`bg-blue-600 text-white fixed top-0 left-0 h-screen w-64 z-40 transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:block`}
      >
        <div className="flex items-center justify-between p-4 border-b border-blue-500 md:hidden">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsSidebarOpen(false)}>
            <FaTimes className="w-6 h-6 text-white" />
          </button>
        </div>
        <nav className="space-y-3 px-4 mt-20 text-lg font-semibold">
          <Link
            to="/dashboard"
            className="flex items-center space-x-4 py-3 px-4 rounded-md hover:bg-blue-700 transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaHome />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/students"
            className="flex items-center space-x-4 py-3 px-4 rounded-md hover:bg-blue-700 transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaUserGraduate />
            <span>Students</span>
          </Link>
          <Link
            to="/events"
            className="flex items-center space-x-4 py-3 px-4 rounded-md hover:bg-blue-700 transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaCalendarAlt />
            <span>Events</span>
          </Link>
          <Link
            to="/notices"
            className="flex items-center space-x-4 py-3 px-4 rounded-md hover:bg-blue-700 transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaStickyNote />
            <span>Notices</span>
          </Link>
          <Link
            to="/gallery"
            className="flex items-center space-x-4 py-3 px-4 rounded-md hover:bg-blue-700 transition"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaImages />
            <span>Gallery</span>
          </Link>
        </nav>
      </aside>

      {/* Top Navbar */}
      <header className="fixed top-0 left-0 w-full h-16 bg-gray-700 text-white flex items-center justify-between px-4 md:px-6 z-50"
        style={{ marginLeft: '0px' }}>
        {/* Hamburger menu (mobile) */}
        <button
          className="md:hidden p-1 text-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FaBars className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">{title}</h1>
        <button
          onClick={onclickHandler}
          className="cursor-pointer bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </header>
      {/* Spacer for fixed header */}
      <div className="h-16"></div>
    </>
  );
};

export default AdminHeader;