import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import api from "../../api";
import { Link, useNavigate } from "react-router-dom";

const scrollingAnimation = `
  @keyframes scrollUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50%);
    }
  }
`;

export default function InfoCard() {
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [gallery, setGallery] = useState([]);
  const baseUrl = api.defaults.baseURL;

  const trimDate = (timestamp) => {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) throw new Error("Invalid timestamp");
    return `${String(date.getUTCDate()).padStart(2, '0')}.${String(date.getUTCMonth() + 1).padStart(2, '0')}.${date.getUTCFullYear()}`;
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [noticeRes, eventRes, galleryRes] = await Promise.all([
          api.get(`/notices/`),
          api.get(`/events/`),
          api.get(`/gallery/view`),
        ]);
        console.log("Notice Response:", noticeRes.data);
        console.log("Event Response:", eventRes.data);
        console.log("Gallery Response:", galleryRes.data);

        setNotices(noticeRes.data.data || []);
        setEvents(eventRes.data.data || []);
        setGallery(galleryRes.data.galleries || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Duplicate notices and events for seamless looping
  const duplicatedNotices = notices.length > 0 ? [...notices, ...notices] : [];
  const duplicatedEvents = events.length > 0 ? [...events, ...events] : [];
  
  return (
    <>
      {/* Add the style tag for animation */}
      <style>{scrollingAnimation}</style>
      
    
      <div className="grid grid-cols-1 gap-4 sm:gap-6 p-3 sm:p-6 bg-gray-50">
        {/* Notice and Events section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 m-2 sm:m-8">
          {/* Notices with infinite scrolling */}
          <div className="rounded-2xl border-b-6 shadow p-3 sm:p-6 bg-gray-800">
            <div className="border-b pb-2 sm:pb-3 mb-2 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-red-500">Recent Notices:</h2>
            </div>
            <div className="h-[250px] sm:h-[400px] overflow-hidden relative">
              {/* ...existing notice code... */}
            </div>
          </div>

          {/* Events with infinite scrolling */}
          <div className="bg-gray-800 rounded-2xl shadow-xl/20 p-3 sm:p-5 relative">
            <div className="border-b pb-2 sm:pb-3 mb-2 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-red-500">Upcoming Events:</h2>
            </div>
            <div className="h-[250px] sm:h-[400px] overflow-hidden relative">
              {/* ...existing event code... */}
            </div>
          </div>
        </div>

        {/* School Teacher Committee */}
        <div className="bg-white rounded-2xl shadow-xl/20 p-3 sm:p-5">
          <div className="border-b-1 pb-2 sm:pb-3 mb-2 sm:mb-4 flex items-center">
            <h2 className="mr-2 sm:mr-3 font-bold text-lg sm:text-2xl text-gray-800">School Committee</h2>
          </div>
        </div>

        {/* Gallery section */}
        <div className="bg-white rounded-2xl shadow-xl/20 p-3 sm:p-5">
          <div className="border-b-1 pb-2 sm:pb-3 mb-2 sm:mb-4 flex items-center">
            <h2 className="mr-2 sm:mr-3 font-bold text-lg sm:text-2xl text-gray-800">Gallery</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {gallery.length > 0 ? gallery.slice(0, 8).map((item, i) => (
              <Link key={i} to={`/gallery-info/${item._id}`}>
                <div className="overflow-hidden rounded-lg shadow relative group">
                  {item.photos.length > 0 && (
                    <>
                      <img
                        src={`${baseUrl}/${item.photos[0]}`}
                        alt={item.title}
                        className="object-cover w-full h-40 sm:h-64 md:h-48 brightness-50 group-hover:brightness-30 transition duration-300 ease-in-out"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-base sm:text-xl md:text-2xl font-semibold text-center px-2 sm:px-4">
                          {item.title}
                        </h3>
                      </div>
                    </>
                  )}
                </div>
              </Link>
            )) : (
              <p className="text-gray-400 col-span-full text-center">No gallery items available</p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-4 sm:mt-6 gap-4 sm:gap-6">
          {/* Facebook Page Embed Section */}
          <div className="bg-gray-800 rounded-2xl m-2 sm:m-8 shadow-xl/20 p-3 sm:p-5 w-full md:w-1/2">
            <div className="border-b pb-2 sm:pb-3 mb-2 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-red-500">Facebook</h2>
            </div>
            <div className="flex justify-center">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnrcollage&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="300"
                className="max-w-full rounded-lg"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Page"
              ></iframe>
            </div>
          </div>

          {/* Second Facebook Page Embed Section */}
          <div className="bg-gray-800 rounded-2xl m-2 sm:m-8 shadow-xl/20 p-3 sm:p-5 w-full md:w-1/2">
            <div className="border-b pb-2 sm:pb-3 mb-2 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-red-500">Facebook</h2>
            </div>
            <div className="flex justify-center">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnrcollage&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="100%"
                height="300"
                className="max-w-full rounded-lg"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Page"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}