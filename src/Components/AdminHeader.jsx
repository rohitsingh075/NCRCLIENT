import React from "react";
import { Link } from "react-router-dom";

const AdminHeader = ({ title = "Admin Dashboard" }) => {
  return (
    <header className="bg-gray-500 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left Side - Title */}
        <h1 className="text-2xl font-bold">{title}</h1>

        {/* Middle - Navbar Tabs */}
        <nav className="flex space-x-6">
          <Link to="/dashboard" className="hover:text-blue-200 font-medium">
            Home
          </Link>
          <Link to="/students" className="hover:text-blue-200 font-medium">
            Students
          </Link>
          <Link to="/events" className="hover:text-blue-200 font-medium">
            Events
          </Link>
          <Link to="/notices" className="hover:text-blue-200 font-medium">
            Notices
          </Link>
          <Link to="/gallery" className="hover:text-blue-200 font-medium">
            Gallery
          </Link>
        </nav>

        {/* Right Side - Logout */}
        <Link to="/">
          <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition">
            Logout
          </button>
        </Link>
      </div>
    </header>
  );
};

export default AdminHeader;
