import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import api from "../../api";
import { Link, useNavigate } from "react-router-dom";

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
          api.get(`${baseUrl}/notices/`),
          api.get(`${baseUrl}/events/`),
          api.get(`${baseUrl}/gallery/view`),
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

  return (
    <div className="grid grid-cols-1 gap-6 p-6 bg-gray-50">



      {/* Notice and Events section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-8  ">
        {/* Notices */}
        <div className=" rounded-2xl border-b-6 shadow p-6   bg-gray-800">
          <div className="border-b pb-3 mb-4">
            <h2 className="text-xl font-bold text-gray-100">Recent Notices:</h2>

          </div>
          <div className="h-120 overflow-y-auto relative">
            <div className="flex flex-col text-gray-100 ">
              {notices.length > 0 ? notices.map((notice, i) => (
                <div key={i} className="flex   justify-between px-4 py-4">
                  <div className="flex justify-between h-auto w-full animate-vertical-scroll p-4 items-center rounded-lg border-2 box-border text-lg ">
                    <p className="font-medium px-6 py-2 text-gray-100 ">{notice.title}</p>
                    <p className="font-medium px-6 py-2 text-gray-100">{trimDate(notice.date)}</p>
                    <p className="font-medium text-gray-700">href={notice.description}</p>
                    <Link to={`/notice-info/${notice._id}`} >
                      <p className="text-blue-600 text-sm hover:underline">Read More...</p>
                    </Link>
                  </div>
                </div>
              )) : <p className="text-gray-500">No notices available</p>}
            </div>
          </div>

        </div>




        {/* Events */}
        <div className="bg-gray-800 rounded-2xl shadow-xl/20 p-5 relative ">
          <div className="border-b pb-3  mb-4">
            <h2 className="text-xl font-bold text-white">Upcoming Events:</h2>
          </div>
          <div className=" h-120 overflow-auto ">
            <div className="flex flex-col text-gray-100  gap-y-7  " >
              {events.length > 0 ? events.map((event, i) => (
                <Link to={`/event-info/${event._id}`}>
                  <div key={i} className="flex  items-center  border-gray-400 border-2 rounded-lg p-5">
                    <div className="grid grid-cols-2">
                      <img
                        src={`${baseUrl}/${event.imagePath}`}
                        alt={event.name}
                        className="object-fit w-full h-72 p-6 box-border"
                      />
                      <div className="flex flex-col justify-center gap-y-2 text-lg">
                        <p className=" text-gray-100"><span className="font-bold">Name:</span>  {event.name}</p>
                        <span className=" text-gray-100"><span className="font-bold">Date :</span> {new Date(event.date).toLocaleDateString()}</span>
                        <p className="font-medium text-gray-100"><span>Event-Time: </span>{event.time}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              )) : <p className="text-gray-100">No events available</p>}

            </div>
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
      <div className="bg-white rounded-2xl  shadow-xl/20  p-5">
        <div className="border-b-1 pb-3 mb-4 flex items-center">
          <h2 className=" mr-3 font-bold text-2xl text-gray-800">Gallery</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.length > 0 ? gallery.slice(0, 8).map((item, i) => (
            // Here in params item id i.e the first photo id of the gallery is being passed to 
            <Link to={`/gallery-info/${item._id}`}>
              <div key={i} className="overflow-hidden rounded-lg shadow">
                <p className="ml-7 text-2xl font-semibold text-red-700">{item.title}</p>
                {/* Pehla photo gallery ke photos array ka display karenge */}
                {item.photos.length > 0 && (
                  <img
                    src={`${baseUrl}/${item.photos[0]}`}
                    alt={item.title}
                    className="object-fit w-full h-72 p-6 brightness-50 hover:brightness-80 transition duration-300 ease-in-out"
                  />
                )}
              </div></Link>
          )) : (
            <p className="text-gray-400 col-span-full text-center">No gallery items available</p>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6 mt-6">
        {/* Facebook Page Embed Section */}
        <div className="bg-gray-800 rounded-2xl m-8 shadow-xl/20 p-5 w-full md:w-1/2">
          <div className="border-b pb-3 mb-4">
            <h2 className="text-xl font-bold text-gray-100">Facebook</h2>
          </div>
          <div className="flex justify-center">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnrcollage&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="500" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>

        {/* Second Facebook Page Embed Section */}
        <div className="bg-gray-800  rounded-2xl m-8  shadow-xl/20 p-5 w-full  md:w-1/2">
          <div className="border-b pb-3 mb-4">
            <h2 className="text-xl font-bold text-gray-100">Facebook</h2>
          </div>
          <div className="flex justify-center">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnrcollage&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="500" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}