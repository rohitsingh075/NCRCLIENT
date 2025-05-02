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
      
      <div className="grid grid-cols-1 gap-6 p-6 bg-gray-50">
        {/* Notice and Events section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-8">
          {/* Notices with infinite scrolling */}
          <div className="rounded-2xl border-b-6 shadow p-6 bg-gray-800">
            <div className="border-b pb-3 mb-4">
              <h2 className="text-xl font-bold text-red-500">Recent Notices:</h2>
            </div>
            <div className="h-[400px] overflow-hidden relative">
              {notices.length > 0 ? (
                <div 
                  className="animate-scroll" 
                  style={{
                    animation: notices.length > 3 ? 'scrollUp 30s linear infinite' : 'none',
                    height: notices.length > 3 ? '200%' : 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Original notices */}
                  {notices.map((notice, i) => (
                    <Link to={`/notice-info/${notice._id}`}>
                    <div key={`original-${i}`} className="px-4 py-2 cursor-pointer">
                      <div className="flex justify-between h-auto w-full p-4 items-center rounded-lg border-2 border-gray-400 text-lg hover:bg-gray-700 transition-all duration-300">

                        <p className="font-medium px-6 py-2 text-gray-300">{trimDate(notice.date)}</p>
                        <p className="font-medium px-6 py-2 text-gray-100">{notice.title}</p>
                        <Link to={`/notice-info/${notice._id}`} className="text-blue-400 text-sm hover:underline">
                          Read More...
                        </Link>
                      </div>
                    </div></Link>
                  ))}
                  
                  {/* Duplicated notices for seamless scrolling */}
                  {notices.length > 3 && notices.map((notice, i) => (
                    <div key={`duplicate-${i}`} className="px-4 py-2">
                      <div className="flex justify-between h-auto w-full p-4 items-center rounded-lg border-2 border-gray-400 box-border text-lg hover:bg-gray-700 transition-all duration-300">
                        <p className="font-medium px-6 py-2 text-gray-300">{trimDate(notice.date)}</p>
                        <p className="font-medium px-6 py-2 text-gray-100">{notice.title}</p>
                        <Link to={`/notice-info/${notice._id}`} className="text-blue-400 text-sm hover:underline">
                          Read More...
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : <p className="text-gray-500">No notices available</p>}
              
              {/* Gradient overlays for smooth transition effect */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-800 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Events with infinite scrolling */}
          <div className="bg-gray-800 rounded-2xl shadow-xl/20 p-5 relative">
            <div className="border-b pb-3 mb-4">
              <h2 className="text-xl font-bold text-red-500">Upcoming Events:</h2>
            </div>
            <div className="h-[400px] overflow-hidden relative">
              {events.length > 0 ? (
                <div 
                  className="animate-scroll" 
                  style={{
                    animation: events.length > 2 ? 'scrollUp 40s linear infinite' : 'none',
                    height: events.length > 2 ? '200%' : 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}
                >
                  {/* Original events */}
                  {events.map((event, i) => (
                    <div key={`original-${i}`} className="px-4 py-2">
                      <Link to={`/event-info/${event._id}`}>
                        <div className="flex items-center border-gray-400 border-2 rounded-lg p-5 hover:bg-gray-700 transition-all duration-300">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <img
                              src={`${baseUrl}/${event.imagePath}`}
                              alt={event.name}
                              className="object-cover w-full h-48 rounded-lg"
                            />
                            <div className="flex flex-col justify-center gap-y-2 text-lg">
                              <p className="text-gray-100"><span className="font-bold">Name:</span> {event.name}</p>
                              <span className="text-gray-100"><span className="font-bold">Date:</span> {new Date(event.date).toLocaleDateString()}</span>
                              <p className="font-medium text-gray-100"><span>Event-Time: </span>{event.time}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                  
                  {/* Duplicated events for seamless scrolling */}
                  {events.length > 2 && events.map((event, i) => (
                    <div key={`duplicate-${i}`} className="px-4 py-2">
                      <Link to={`/event-info/${event._id}`}>
                        <div className="flex items-center border-gray-400 border-2 rounded-lg p-5 hover:bg-gray-700 transition-all duration-300">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <img
                              src={`${baseUrl}/${event.imagePath}`}
                              alt={event.name}
                              className="object-cover w-full h-48 rounded-lg"
                            />
                            <div className="flex flex-col justify-center gap-y-2 text-lg">
                              <p className="text-gray-100"><span className="font-bold">Name:</span> {event.name}</p>
                              <span className="text-gray-100"><span className="font-bold">Date:</span> {new Date(event.date).toLocaleDateString()}</span>
                              <p className="font-medium text-gray-100"><span>Event-Time: </span>{event.time}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : <p className="text-gray-100">No events available</p>}
              
              {/* Gradient overlays for smooth transition effect */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-800 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/*School Teacher Commitee  */}
        <div className="bg-white rounded-2xl shadow-xl/20 p-5">
          <div className="border-b-1 pb-3 mb-4 flex items-center">
            <h2 className=" mr-3 font-bold text-2xl text-gray-800">School Commitee</h2>
          </div>
        </div>

        {/* Gallery section */}
        <div className="bg-white rounded-2xl shadow-xl/20 p-5">
          <div className="border-b-1 pb-3 mb-4 flex items-center">
            <h2 className="mr-3 font-bold text-2xl text-gray-800">Gallery</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.length > 0 ? gallery.slice(0, 8).map((item, i) => (
              <Link key={i} to={`/gallery-info/${item._id}`}>
                <div className="overflow-hidden rounded-lg shadow relative group">
                  {/* Removed the always visible title */}
                  {item.photos.length > 0 && (
                    <>
                      <img
                        src={`${baseUrl}/${item.photos[0]}`}
                        alt={item.title}
                        className="object-cover w-full h-64 brightness-50 group-hover:brightness-30 transition duration-300 ease-in-out"
                      />
                      {/* Title overlay that appears on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-xl md:text-2xl font-semibold text-center px-4">
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

        <div className="flex flex-col md:flex-row justify-between  mt-6">
          {/* Facebook Page Embed Section */}
          <div className="bg-gray-800 rounded-2xl m-8 shadow-xl/20 p-5 w-full md:w-1/2">
            <div className="border-b pb-3 mb-4">
              <h2 className="text-xl font-bold text-red-500">Facebook</h2>
            </div>
            <div className="flex justify-center">
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnrcollage&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="500" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
          </div>

          {/* Second Facebook Page Embed Section */}
          <div className="bg-gray-800  rounded-2xl m-8  shadow-xl/20 p-5 w-full  md:w-1/2">
            <div className="border-b pb-3 mb-4">
              <h2 className="text-xl font-bold text-red-500">Facebook</h2>
            </div>
            <div className="flex justify-center">
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnrcollage&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="500" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}