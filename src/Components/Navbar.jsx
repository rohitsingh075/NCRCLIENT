import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 inset-x-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Left: Logo and School Info */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="NCR COLLEGE" className="w-22 h-22" />
          <div className="text-sm">
            <div className="text-xl font-bold">
              North Central Railway College
            </div>
            <div className="text-xl font-bold text-center">
              {/* <span>Tundla</span> */}
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center text-sm font-medium">
          <nav className="bg-white">
            <div className="px-4 py-2 flex flex-wrap justify-center gap-6 text-base font-medium">
              <a href="#" className="hover:text-red-600">Home</a>
              {/* About Us Dropdown */}
              <div className="relative group">
                <button className="hover:text-red-500 flex items-center">
                  About Us ▾
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black/10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transform transition-all duration-200">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">About School</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Vision & Mission</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Our Goals</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Our Founder</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Chairman's Message</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Principal's Message</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Mandatory Public Disclosures</a></li>
                  </ul>
                </div>
              </div>
              <div className="relative group">
                <button className="hover:text-red-500 flex items-center">
                  Admission ▾
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black/10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transform transition-all duration-200">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Admission Procedure</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Fee Structure</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Apply For Admission</a></li>
                  </ul>
                </div>
              </div>
              <div className="relative group">
                <button className="hover:text-red-500 flex items-center">
                  Academic ▾
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black/10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transform transition-all duration-200">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Beyound Academic</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Academic Curriculum</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Facilities</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">School Calendar</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Academic Caledar</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Monthly Planner</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">National Education Policy(NEP)</a></li>
                  </ul>
                </div>
              </div>
              <a href="#" className="hover:text-red-600">Contact</a>
            </div>
          </nav>
        </div>

        {/* Mobile Toggler */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RxCross1 size={24} /> : <IoMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 py-4 bg-white border-t space-y-2 text-sm font-medium">
          <a href="#" className="block">Home</a>

          <div>
            <button onClick={() => setAboutOpen(!aboutOpen)} className="w-full flex justify-between items-center py-2">
              About Us {aboutOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {aboutOpen && (
              <div className="pl-4 space-y-2">
                <a href="#" className="block">About School</a>
                <a href="#" className="block">Vision & Mission</a>
                <a href="#" className="block">Our Goals</a>
                <a href="#" className="block">Our Founder</a>
                <a href="#" className="block">Chairman's Message</a>
                <a href="#" className="block">Principal's Message</a>
                <a href="#" className="block">Mandatory Public Disclosures</a>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => setAdmissionOpen(!admissionOpen)} className="w-full flex justify-between items-center py-2">
              Admission {admissionOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {admissionOpen && (
              <div className="pl-4 space-y-2">
                <a href="#" className="block">Admission Procedure</a>
                <a href="#" className="block">Fee Structure</a>
                <a href="#" className="block">Apply For Admission</a>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => setAcademicOpen(!academicOpen)} className="w-full flex justify-between items-center py-2">
              Academic {academicOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {academicOpen && (
              <div className="pl-4 space-y-2">
                <a href="#" className="block">Beyond Academic</a>
                <a href="#" className="block">Academic Curriculum</a>
                <a href="#" className="block">Facilities</a>
                <a href="#" className="block">School Calendar</a>
                <a href="#" className="block">Academic Calendar</a>
                <a href="#" className="block">Monthly Planner</a>
                <a href="#" className="block">National Education Policy (NEP)</a>
              </div>
            )}
          </div>
          <a href="#" className="block">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
