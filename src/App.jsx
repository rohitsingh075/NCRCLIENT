import './App.css'
import { createBrowserRouter} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
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
import { SchoolIcon } from 'lucide-react';
import SchoolInfraStructure from './Pages/MandatoryDisclosures/SchoolInfraStructure.jsx';

export const router= createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path:'/about',
    element: <AboutSchool/>,
  },  
  {
    path:'/history',
    element: <History/>,
  },  
  {
    path:'/vission-mission',
    element: <VissionAndMission/>,
  },  
  {
    path:'/our-goals',
    element: <OurGoals />,
  },  
  {
    path:'/principal-message',
    element: <PrincipalMessage/>,
  },  
  {
    path:'/student-guidelines',
    element: <StudentGuidelines/>,
  },  
  {
    path:'/dashboard',
    element: <Dashboard/>,
  },  
  {
    path:'/students',
    element: <Students/>,
  },  
  {
    path:'/events',
    element: <Events/> ,
  },  
  {
    path:'/notices',
    element: <Notices/>,
  },  
  {
    path:'/gallery',
    element: <Gallery/>,
  },  
  {
    path:'/mandatory-disclosures',
    element: <MandatoryDisclosure/>,
  },  
  {
    path:'/general-information',
    element: <GeneralInformation/>,
  },  
 
  {
    path:'/documents-and-information',
    element: <DocumentsAndInfomation/>,
  },  
  {
    path:'/result-and-academics',
    element: <ResultAndAcademics/>,
  },  
  {
    path:'/teaching-staff',
    element: <TeachingStaff/>,
  },  
  {
    path:'/school-infrastructure',
    element: <SchoolInfraStructure/>,
  },  
 
 
]);


function App() {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
