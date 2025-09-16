import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import train from "../assets/train.png";
import {
  Phone, Mail, Clock,
  Facebook, Twitter, Instagram, Linkedin
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false);
  const [showTrain, setShowTrain] = useState(true);

  useEffect(() => {
    const trainShown = sessionStorage.getItem("trainShown");
    if (!trainShown) {
      setShowTrain(true);
      const timer = setTimeout(() => {
        setShowTrain(false);
        sessionStorage.setItem("trainShown", "true");
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      setShowTrain(false);
    }
  }, []);

  return (
    <header className="w-full relative top-0 inset-x-0 z-50">
      {/* Train Animation (first visit) */}
      {showTrain && (
        <div className="absolute top-0 left-0 w-full z-50">
          <div className="train-animation h-[160px] py-1 z-0 px-4 flex justify-start items-center">
            <img src={train} alt="train" width="800" />
          </div>
        </div>
      )}

      {/* ======= TOP BAR ======= */}
      <div className="bg-[#00001a] text-red-100 text-sm ">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex space-x-3">
            <a href="#" className="hover:text-red-500 transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Twitter size={16} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Instagram size={16} /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Linkedin size={16} /></a>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <span className="flex items-center gap-1"><Phone size={14} /> 05612229463</span>
            <span className="flex items-center gap-1"><Mail size={14} /> ncrcollegetundla@rediffmail.com</span>
            {/* <span className="flex items-center gap-1"><Clock size={14} /> Mon - Fri (08AM - 10PM)</span>/ */}
          </div>
        </div>
      </div>

      {/* ======= MAIN NAVBAR (merged middle + bottom) ======= */}
      <div className="w-full bg-white text-[#00001a] shadow-md">
        <div className=" mx-auto flex items-center justify-between px-5  py-3 ">
          <div className="scale-125 mx-8  flex items-center justify-between ">
            {/* Brand */}
            <Link to="/" className="min-w-0 flex items-center  flex-shrink-0">
              <img src={logo} alt="NCR COLLEGE" className="w-14 h-14 mr-1" />
              <div className="hidden sm:block">
                <div className="text-base font-bold  leading-tight whitespace-nowrap">
                  North Central Railway College
                </div>
                <div className="text-[10px] font-semibold text-gray-800 whitespace-nowrap">
                  Affiliated to CBSE, New Delhi (Code: 62013)
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-4 text-md font-medium whitespace-nowrap ">
            <Link to="/" className="hover:text-red-400">Home</Link>

            {/* About Us */}
            <div className="relative group  ">
              <button className="hover:text-red-400 flex items-center cursor-pointer">
                About Us ▾
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white text-gray-700 rounded-md shadow-lg ring-1 ring-black/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 cursor-pointer">
                <Link to="/history" className="block px-4 py-2 hover:bg-rose-100">History</Link>
                <Link to="/about" className="block px-4 py-2 hover:bg-rose-100">About School</Link>
                <Link to="/vission-mission" className="block px-4 py-2 hover:bg-rose-100">Vision &amp; Mission</Link>
                <Link to="/our-goals" className="block px-4 py-2 hover:bg-rose-100">Our Goals</Link>
                <Link to="/principal-message" className="block px-4 py-2 hover:bg-rose-100">Principal&apos;s Message</Link>
              </div>
            </div>

            {/* Mandatory Disclosure */}
            <div className="relative group">
              <button className="hover:text-red-400 flex items-center">
                Mandatory Disclosure ▾
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white text-gray-700 rounded-md shadow-lg ring-1 ring-black/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/general-information" className="block px-4 py-2 hover:bg-rose-100">General Information</Link>
                <Link to="/documents-and-information" className="block px-4 py-2 hover:bg-rose-100">Documents &amp; Information</Link>
                <Link to="/result-and-academics" className="block px-4 py-2 hover:bg-rose-100">Result &amp; Academics</Link>
                <Link to="/teaching-staff" className="block px-4 py-2 hover:bg-rose-100">Staff (Teaching)</Link>
                <Link to="/school-infrastructure" className="block px-4 py-2 hover:bg-rose-100">School Infrastructure</Link>
              </div>
            </div>

            {/* Admission */}
            <div className="relative group">
              <button className="hover:text-red-400 flex items-center">
                Admission ▾
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white text-gray-700 rounded-md shadow-lg ring-1 ring-black/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/admission-procedure" className="block px-4 py-2 hover:bg-rose-100">Admission Procedure</Link>
                <Link to="/fee-structure" className="block px-4 py-2 hover:bg-rose-100">Fee Structure</Link>
              </div>
            </div>

            {/* Rules & Regulations (added back) */}
            <div className="relative group">
              <button className="hover:text-red-400 flex items-center">
                Rules &amp; Regulations ▾
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white text-gray-700 rounded-md shadow-lg ring-1 ring-black/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/student-guidelines" className="block px-4 py-2 hover:bg-rose-100">Student Guidelines</Link>
                <Link to="/school-uniform" className="block px-4 py-2 hover:bg-rose-100">School Uniform</Link>
              </div>
            </div>

            {/* Academics */}
            <div className="relative group">
              <button className="hover:text-red-400 flex items-center">
                Academics ▾
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white text-gray-700 rounded-md shadow-lg ring-1 ring-black/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/academic-curriculum" className="block px-4 py-2 hover:bg-rose-100">Academic Curriculum</Link>
                <Link to="/facilities" className="block px-4 py-2 hover:bg-rose-100">Facilities</Link>
                <Link to="/academic-calendar" className="block px-4 py-2 hover:bg-rose-100">Academic Calendar</Link>
                <Link to="/nep" className="block px-4 py-2 hover:bg-rose-100">National Education Policy (NEP)</Link>
              </div>
            </div>


            <Link to="/contact" className="hover:text-red-400">Contact</Link>


            <Link
              to="/login"
              className="ml-1 bg-red-700 hover:bg-red-600 text-white px-4 py-1.5 rounded-md"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden ml-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <RxCross1 size={24} /> : <IoMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#0c0c2a] text-white px-4 py-4 space-y-2 text-sm font-medium border-t border-white/10">
            <Link to="/" className="block py-2" onClick={() => setIsOpen(false)}>Home</Link>

            {/* Admission */}
            <div>
              <button
                onClick={() => setAdmissionOpen(!admissionOpen)}
                className="w-full flex justify-between items-center py-2"
              >
                Admission {admissionOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {admissionOpen && (
                <div className="pl-4 space-y-2">
                  <Link to="/admission-procedure" onClick={() => setIsOpen(false)} className="block">Admission Procedure</Link>
                  <Link to="/fee-structure" onClick={() => setIsOpen(false)} className="block">Fee Structure</Link>
                </div>
              )}
            </div>

            {/* Academics */}
            <div>
              <button
                onClick={() => setAcademicOpen(!academicOpen)}
                className="w-full flex justify-between items-center py-2"
              >
                Academics {academicOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              {academicOpen && (
                <div className="pl-4 space-y-2">
                  <Link to="/academic-curriculum" onClick={() => setIsOpen(false)} className="block">Academic Curriculum</Link>
                  <Link to="/facilities" onClick={() => setIsOpen(false)} className="block">Facilities</Link>
                  <Link to="/academic-calendar" onClick={() => setIsOpen(false)} className="block">Academic Calendar</Link>
                  <Link to="/nep" onClick={() => setIsOpen(false)} className="block">National Education Policy</Link>
                </div>
              )}
            </div>

            {/* Simple links */}
            <Link to="/general-information" className="block py-2" onClick={() => setIsOpen(false)}>General Information</Link>
            <Link to="/documents-and-information" className="block py-2" onClick={() => setIsOpen(false)}>Documents & Information</Link>
            <Link to="/result-and-academics" className="block py-2" onClick={() => setIsOpen(false)}>Result & Academics</Link>
            <Link to="/teaching-staff" className="block py-2" onClick={() => setIsOpen(false)}>Staff (Teaching)</Link>
            <Link to="/school-infrastructure" className="block py-2" onClick={() => setIsOpen(false)}>School Infrastructure</Link>
            <Link to="/student-guidelines" className="block py-2" onClick={() => setIsOpen(false)}>Student Guidelines</Link>
            <Link to="/school-uniform" className="block py-2" onClick={() => setIsOpen(false)}>School Uniform</Link>
            <Link to="/history" className="block py-2" onClick={() => setIsOpen(false)}>History</Link>
            <Link to="/about" className="block py-2" onClick={() => setIsOpen(false)}>About School</Link>
            <Link to="/vission-mission" className="block py-2" onClick={() => setIsOpen(false)}>Vision & Mission</Link>
            <Link to="/our-goals" className="block py-2" onClick={() => setIsOpen(false)}>Our Goals</Link>
            <Link to="/principal-message" className="block py-2" onClick={() => setIsOpen(false)}>Principal's Message</Link>

            <Link to="/contact" className="block py-2" onClick={() => setIsOpen(false)}>Contact</Link>


            <div className="pt-3 border-t border-white/10">
              <Link to="/login" className="block bg-red-700 hover:bg-red-600 text-white px-4 py-2 rounded-md text-center" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
