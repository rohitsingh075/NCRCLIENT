import './App.css'
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Layout from "./Components/Layout.jsx"
import ScrollToTop from './Components/ScrollToTop.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import AboutSchool from './Pages/AboutUsPages/AboutSchool.jsx';
import History from './Pages/AboutUsPages/History.jsx';
import VissionAndMission from './Pages/AboutUsPages/VissionAndMission.jsx';
import OurGoals from './Pages/AboutUsPages/OurGoals.jsx';
import PrincipalMessage from './Pages/AboutUsPages/PrincipalMessage.jsx';
import StudentGuidelines from './Pages/RulesAndRegulations/StudentGuidleines.jsx';
import Login from './Pages/AdminLoginPages/Login.jsx';
import Dashboard from './Pages/AdminLoginPages/Dashboard.jsx';
import Students from './Pages/AdminLoginPages/Students.jsx';
import Events from './Pages/AdminLoginPages/Events.jsx';
import Notices from './Pages/AdminLoginPages/Notices.jsx';
import Gallery from './Pages/AdminLoginPages/Gallery.jsx';
import MandatoryDisclosure from './Pages/MandatoryDisclosures/MandatoryDisclosure.jsx';
import GeneralInformation from './Pages/MandatoryDisclosures/GeneralInfomation.jsx';
import DocumentsAndInfomation from './Pages/MandatoryDisclosures/DocumetsAndInfomation.jsx';
import ResultAndAcademics from './Pages/MandatoryDisclosures/ResultsAndAcademics.jsx';
import TeachingStaff from './Pages/MandatoryDisclosures/TeachingStaff.jsx';
import SchoolInfra from './Pages/MandatoryDisclosures/SchoolInfra.jsx';
import AdmissionProcedure from './Pages/AdmissionPages/AdmissionProcedure.jsx';
import FeeStructure from './Pages/AdmissionPages/FeeStructure.jsx';
import SchoolUniform from './Pages/RulesAndRegulations/SchoolUniform.jsx';
import AcademicCurriculum from './Pages/AcademicPages/AcadminCurriculum.jsx';
import AcademicCalender from './Pages/AcademicPages/AcademicCalender.jsx';
import Facilities from './Pages/AcademicPages/Facilites.jsx';
import NationalEducationPolicy from './Pages/AcademicPages/NationalEducationPolicy.jsx';
import EventPage from './Pages/EventPage.jsx';
import NoticePage from './Pages/NoticePage.jsx';
import GalleryPage from './Pages/GalleryPage.jsx';
import AdminPrivateRoute from './Components/AdminPrivateRoute.jsx';
import StudentEdit from './Pages/EditPages/StudentEdit.jsx';
import { setNavigate } from '../api.js';
import StudentDetails from './Pages/AdminLoginPages/StudentDetails.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import AllNoticesPage from './Pages/HomePage/AllNoticesPage.jsx';
import AllEventsPage from './Pages/HomePage/AllEventsPage.jsx';



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,  // Wrap everything under Layout
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <Login /> },
      { path: '/about', element: <AboutSchool /> },
      { path: '/history', element: <History /> },
      { path: '/vission-mission', element: <VissionAndMission /> },
      { path: '/our-goals', element: <OurGoals /> },
      { path: '/all-notices', element: <AllNoticesPage /> },
      { path: '/all-events', element: <AllEventsPage /> },
      { path: '/principal-message', element: <PrincipalMessage /> },
      { path: '/student-guidelines', element: <StudentGuidelines /> },
      { path: '/school-uniform', element: <SchoolUniform /> },
      { path: '/contact', element: <ContactPage /> },

      { path: '/mandatory-disclosures', element: <MandatoryDisclosure /> },
      { path: '/general-information', element: <GeneralInformation /> },
      { path: '/documents-and-information', element: <DocumentsAndInfomation /> },
      { path: '/result-and-academics', element: <ResultAndAcademics /> },
      { path: '/teaching-staff', element: <TeachingStaff /> },
      { path: '/school-infrastructure', element: <SchoolInfra /> },
      { path: '/admission-procedure', element: <AdmissionProcedure /> },
      { path: '/fee-structure', element: <FeeStructure /> },
      { path: '/academic-curriculum', element: <AcademicCurriculum /> },
      { path: '/facilities', element: <Facilities /> },
      { path: '/academic-calendar', element: <AcademicCalender /> },
      { path: '/nep', element: <NationalEducationPolicy /> },
      { path: '/notice-info/:id', element: <NoticePage /> },
      { path: '/event-info/:id', element: <EventPage /> },
      { path: '/gallery-info/:id', element: <GalleryPage /> },
      { path: '/update-student/:id', element: <StudentEdit/> },
      {
        element: <AdminPrivateRoute />,
        children: [
          { path: '/dashboard', element: <Dashboard /> },
          { path: '/students', element: <Students /> },
          { path: '/notices', element: <Notices /> },
          { path: '/events', element: <Events /> },
          { path: '/gallery', element: <Gallery /> },
          { path: '/student-details/:id', element: <StudentDetails/> },

        ]
      }
    ]
  }
]);


function App() {
 
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
