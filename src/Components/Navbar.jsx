import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import logo from '../assets/logo.jpg'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false);

  return (
    <header className="w-full bg-white  shadow-md fixed top-0 inset-x-0 z-50 ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between  py-2 ">

        {/* Left: Logo and School Info */}
        <div className="flex items-center ">
          <Link to="/"><img src={logo} alt="NCR COLLEGE" className="w-22 h-22" /></Link>
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
        <div className="hidden md:flex space-x-6  items-center  text-sm font-medium ">
          <nav className="bg-white">
            <div className="px-4 py-2 flex flex-wrap justify-center items-center gap-4 text-base font-medium">

              <Link to="/">
                <button className="hover:text-blue-600 flex items-center">
                  Home
                </button>
              </Link>

              {/* About Us Dropdown */}
              <div className="relative group z-50">
                <button className="hover:text-blue-600 flex items-center">
                  About Us ▾
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black/10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transform transition-all overflow-y-auto duration-200">
                  <ul className="py-2 text-sm text-gray-700">
                    <Link to="/history"><li className="block px-4 py-2 hover:bg-gray-200">History</li></Link>
                    <Link to="/about"><li><a href="#" className="block px-4 py-2 hover:bg-gray-200">About School</a></li></Link>
                    <Link to="/vission-mission"><li className="block px-4 py-2 hover:bg-gray-200"> Vision & Mission</li></Link>
                    <Link to="/our-goals">
                      <li className="block px-4 py-2 hover:bg-gray-200">Our Goals</li>
                    </Link>
                    {/* <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Our Founder</a></li> */}
                    {/* <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Chairman's Message</a></li> */}
                    <Link to="/principal-message">
                      <li className="block px-4 py-2 hover:bg-gray-200"> Principal's Message</li>
                    </Link>
                    {/* <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Mandatory Public Disclosures</a></li> */}
                  </ul>
                </div>
              </div>


              {/* Mandatory Disclosure  */}
              <div className="relative group z-50">
                <Link to="/mandatory-disclosures">
                  <button className="hover:text-blue-600 flex items-center">
                    Mandatory Disclosures ▾
                  </button>
                </Link>
                <div className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black/10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transform transition-all duration-200">
                  <ul className="py-2 text-sm text-gray-700">
                    <Link to="/general-information"><li className="block px-4 py-2 hover:bg-gray-200">General Information</li></Link>
                    <Link to="/documents-and-information"><li className="block px-4 py-2 hover:bg-gray-200">Documents and Information</li></Link>
                    <Link to="/result-and-academics"><li className="block px-4 py-2 hover:bg-gray-200">Result and Academics</li></Link>
                    <Link to="/teaching-staff"><li className="block px-4 py-2 hover:bg-gray-200">Staff (Teaching)</li></Link>
                    <Link to="/school-infrastructure"><li className="block px-4 py-2 hover:bg-gray-200">School Infrastructure</li></Link>
                  </ul>
                </div>
              </div>


              <div className="relative group">
                <button className="hover:text-blue-600 flex items-center z-50">
                  Admission ▾
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black/10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transform transition-all duration-200">
                  <ul className="py-2 text-sm text-gray-700">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Admission Procedure</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Fee Structure</a></li>
                    {/* <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Apply For Admission</a></li> */}
                  </ul>
                </div>
              </div>



              <div className="relative group">
                <button className="hover:text-blue-600 flex items-center">
                  Rules & Regulations ▾
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black/10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transform transition-all duration-200">
                  <ul className="py-2 text-sm text-gray-700">
                    <Link to="/student-guidelines">
                      <li className="block px-4 py-2 hover:bg-gray-200">Student Guidelines</li>
                    </Link>

                    <Link to="/school-uniform">
                      <li className="block px-4 py-2 hover:bg-gray-200">School Uniform</li>
                    </Link>
                    {/* <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Apply For Admission</a></li> */}
                  </ul>
                </div>
              </div>





              <div className="relative group">
                <button className="hover:text-blue-600 flex items-center">
                  Academics ▾
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black/10 opacity-0 group-hover:opacity-100 invisible group-hover:visible transform transition-all duration-200 max-w-56 overflow-x-auto z-50">
                  <ul className="py-2 text-sm text-gray-700">
                    {/* <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Beyound Academic</a></li> */}
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Academic Curriculum</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Facilities</a></li>
                    {/* <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">School Calendar</a></li> */}
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Academic Caledar</a></li>
                    {/* <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Monthly Planner</a></li> */}
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">National Education Policy(NEP)</a></li>
                  </ul>
                </div>

              </div>

              {/* <a href="#" className="hover:text-blue-600">Contact</a> */}
              <div className="bg-black hover:bg-blue-600 text-white hover:text-white px-3 py-1.5 ml-2 rounded-md  transition duration-300">
                <button  >
                  <Link to="/login">Login</Link>
                </button>
              </div>
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
            <button onClick={() => setAdmissionOpen(!admissionOpen)} className="w-full flex justify-between items-center py-2">
              About Us {admissionOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
