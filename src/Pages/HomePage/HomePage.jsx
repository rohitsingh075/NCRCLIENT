import Navbar from '../../Components/Navbar.jsx';
import Footer from '../../Components/Footer.jsx';
import EventsNotices from '../../Components/EventsNotices.jsx';
import SchoolInfoCards from '../../Components/SchoolInfoCards.jsx';
import SchoolHeroSlider from '../../Components/HeroSlider.jsx';
import ActivitiesSection from '../../Components/ActivitiesSection.jsx';
import GallerySection from '../../Components/GallerySection.jsx';
import ConnectWithUs from '../../Components/ConnectSection.jsx';
import SchoolCommittee from '../../Components/SchoolCommitee.jsx';
import AlumniSection from '../../Components/AlumniSection.jsx';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            {/* <FadeSwiper /> */}
            <SchoolHeroSlider />
            <EventsNotices />
            <SchoolInfoCards />
            <br />
            <GallerySection />
            <br />
            <br />
            <AlumniSection />
            <SchoolCommittee />
            <br />
            <ConnectWithUs />
            <ActivitiesSection />
            <br />
            <br />
            <br />
            <Footer />
             
        </div>

            
      
      
    );
    <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay-1 {
          animation: fade-in 1s ease-out 0.2s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.4s both;
        }
        
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        
        .animate-fade-in-delay-4 {
          animation: fade-in 1s ease-out 0.8s both;
        }
      `}</style>
};

export default HomePage;