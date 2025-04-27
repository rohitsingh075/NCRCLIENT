import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false);

  return (
    <header className="w-full relative top-0 inset-x-0 z-50">
      {/* Top Navbar */}
      <div className="w-full bg-gray-800 text-white py-1 px-4 flex justify-end items-center">
        <div className="flex space-x-8 text-lg">
          <Link to="/login" className="hover:text-red-400 font-bold ">Login</Link>
          
          <button className="hover:text-red-400">
            <i className="fas fa-search"></i> Search
          </button>
        </div>
      </div>
<hr className="border-white"/>
      {/* Middle Navbar */}    {/* Logo Section */}
      <div className="w-full bg-white py-1  flex justify-center items-center shadow-md">
        <Link to="/">
          <img src={logo} alt="NCR COLLEGE" className="w-20 h-20" />
        </Link>
        <div>
        <div className="text-3xl font-bold mx-4 flex items-center justify-center text-gray-800">North Central Railway College</div>
        <div className="text-lg mx-4 text-gray-800">A School with a Difference</div>
      </div>
      </div>
      {/* <hr className="border-red-900"/> */}


      {/* Bottom Navbar */}
      <div className="w-full bg-gray-800 text-white shadow-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-evenly py-2 px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center text-[1rem] font-medium">
            <nav>
              <div className="flex items-center space-x-6">
                <Link to="/" className="hover:text-red-400">Home</Link>

                {/* About Us Dropdown */}
                <div className="relative group">
                  <button className="hover:text-red-400 flex items-center">
                    About Us ▾
                  </button>
                  <div className="absolute left-0 mt-2 w-64 rounded-md bg-white text-gray-700 shadow-lg ring-1 ring-black/10 opacity-0 scale-y-95 group-hover:opacity-100 group-hover:scale-y-100 invisible group-hover:visible transform origin-top transition-all duration-300 ease-out">
                    <ul className="py-2">
                      <Link to="/history">
                        <li className="block px-4 py-2 hover:bg-rose-100">History</li>
                      </Link>
                      <Link to="/about">
                        <li className="block px-4 py-2 hover:bg-rose-100">About School</li>
                      </Link>
                      <Link to="/vission-mission">
                        <li className="block px-4 py-2 hover:bg-rose-100">Vision & Mission</li>
                      </Link>
                      <Link to="/our-goals">
                        <li className="block px-4 py-2 hover:bg-rose-100">Our Goals</li>
                      </Link>
                      <Link to="/principal-message">
                        <li className="block px-4 py-2 hover:bg-rose-100">Principal's Message</li>
                      </Link>
                    </ul>
                  </div>
                </div>

                {/* Mandatory Disclosure Dropdown */}
                <div className="relative group">
                  <button className="hover:text-red-400  flex items-center">
                    Mandatory Disclosure ▾
                  </button>
                  <div className="absolute left-0 mt-2 w-64 rounded-md bg-white text-gray-700 shadow-lg ring-1 ring-black/10 opacity-0 scale-y-95 group-hover:opacity-100 group-hover:scale-y-100 invisible group-hover:visible transform origin-top transition-all duration-300 ease-out">
                    <ul className="py-2">
                      <Link to="/general-information">
                        <li className="block px-4 py-2 hover:bg-rose-100">General Information</li>
                      </Link>
                      <Link to="/documents-and-information">
                        <li className="block px-4 py-2 hover:bg-rose-100">Documents and Information</li>
                      </Link>
                      <Link to="/result-and-academics">
                        <li className="block px-4 py-2 hover:bg-rose-100">Result and Academics</li>
                      </Link>
                      <Link to="/teaching-staff">
                        <li className="block px-4 py-2 hover:bg-rose-100">Staff (Teaching)</li>
                      </Link>
                      <Link to="/school-infrastructure">
                        <li className="block px-4 py-2 hover:bg-rose-100">School Infrastructure</li>
                      </Link>
                    </ul>
                  </div>
                </div>

                {/* Admission Dropdown */}
                <div className="relative group">
                  <button className="hover:text-red-400 flex items-center">
                    Admission ▾
                  </button>
                  <div className="absolute left-0 mt-2 w-64 rounded-md bg-white text-gray-700 shadow-lg ring-1 ring-black/10 opacity-0 scale-y-95 group-hover:opacity-100 group-hover:scale-y-100 invisible group-hover:visible transform origin-top transition-all duration-300 ease-out">
                    <ul className="py-2">
                      <Link to="/admission-procedure">
                        <li className="block px-4 py-2 hover:bg-rose-100">Admission Procedure</li>
                      </Link>
                      <Link to="/fee-structure">
                        <li className="block px-4 py-2 hover:bg-rose-100">Fee Structure</li>
                      </Link>
                    </ul>
                  </div>
                </div>

                {/* Rules & Regulations Dropdown */}
                <div className="relative group">
                  <button className="hover:text-red-400 flex items-center">
                    Rules & Regulations ▾
                  </button>
                  <div className="absolute left-0 mt-2 w-64 rounded-md bg-white text-gray-700 shadow-lg ring-1 ring-black/10 opacity-0 scale-y-95 group-hover:opacity-100 group-hover:scale-y-100 invisible group-hover:visible transform origin-top transition-all duration-300 ease-out">
                    <ul className="py-2">
                      <Link to="/student-guidelines">
                        <li className="block px-4 py-2 hover:bg-rose-100">Student Guidelines</li>
                      </Link>
                      <Link to="/school-uniform">
                        <li className="block px-4 py-2 hover:bg-rose-100">School Uniform</li>
                      </Link>
                    </ul>
                  </div>
                </div>

                {/* Academics Dropdown */}
                <div className="relative group">
                  <button className="hover:text-red-400 flex items-center">
                    Academics ▾
                  </button>
                  <div className="absolute left-0 mt-2 w-64 rounded-md bg-white text-gray-700 shadow-lg ring-1 ring-black/10 opacity-0 scale-y-95 group-hover:opacity-100 group-hover:scale-y-100 invisible group-hover:visible transform origin-top transition-all duration-300 ease-out">
                    <ul className="py-2">
                      <Link to="/academic-curriculum">
                        <li className="block px-4 py-2 hover:bg-rose-100">Academic Curriculum</li>
                      </Link>
                      <Link to="/facilities">
                        <li className="block px-4 py-2 hover:bg-rose-100">Facilities</li>
                      </Link>
                      <Link to="/academic-calendar">
                        <li className="block px-4 py-2 hover:bg-rose-100">Academic Calendar</li>
                      </Link>
                      <Link to="/nep">
                        <li className="block px-4 py-2 hover:bg-rose-100">National Education Policy (NEP)</li>
                      </Link>
                    </ul>
                  </div>
                </div>

             
              </div>
            </nav>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <RxCross1 size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden px-4 py-4 bg-blue-900 text-white border-t space-y-2 text-sm font-medium">
            <Link to="/" className="block">Home</Link>
            <div>
              <button
                onClick={() => setAdmissionOpen(!admissionOpen)}
                className="w-full flex justify-between items-center py-2"
              >
                Admission {admissionOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {admissionOpen && (
                <div className="pl-4 space-y-2">
                  <Link to="/admission-procedure" className="block">Admission Procedure</Link>
                  <Link to="/fee-structure" className="block">Fee Structure</Link>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setAcademicOpen(!academicOpen)}
                className="w-full flex justify-between items-center py-2"
              >
                Academic {academicOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {academicOpen && (
                <div className="pl-4 space-y-2">
                  <Link to="/academic-curriculum" className="block">Academic Curriculum</Link>
                  <Link to="/facilities" className="block">Facilities</Link>
                  <Link to="/academic-calendar" className="block">Academic Calendar</Link>
                  <Link to="/nep" className="block">NEP</Link>
                </div>
              )}
            </div>
            <Link to="/contact" className="block">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;