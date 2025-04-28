import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import api from "../../api";

export default function InfoCard() {
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [gallery, setGallery] = useState([]);
  const baseUrl = api.defaults.baseURL;

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
    <div className="grid grid-cols-1 gap-6 p-6 bg-gray-100">
      {/* Notice and Events section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Notices */}
        <div className=" rounded-2xl border-b-6 shadow p-6 ">
          <div className="border-b pb-3 mb-4">
            <h2 className="text-xl font-bold text-gray-800">Recent Notices:</h2>
            <p href="/notices" className="text-blue-600 text-sm hover:underline flex items-center mt-1 gap-2">
              View all <span className="mt-1"><FaLongArrowAltRight /></span>
            </p>
          </div>
          <div className="h-120 overflow-y-auto relative">
  <div className="flex flex-col animate-vertical-scroll ">
    {notices.length > 0 ? notices.map((notice, i) => (
      <div key={i} className="flex justify-between px-4 py-4">
        <div className="flex justify-between w-full p-4 items-center rounded-lg border-2 box-border text-lg bg-yellow-500">
          <p className="font-medium px-6 py-2 text-gray-700 bg-blue-200">{notice.date}</p>
          <p className="font-medium px-6 py-2 text-gray-700 bg-blue-200">{notice.title}</p>
          <p className="font-medium text-gray-700">href={notice.description}</p>
          <p href={`/notice/${notice._id}`} className="text-blue-600 text-sm hover:underline">Read More...</p>
        </div>
      </div>
    )) : <p className="text-gray-500">No notices available</p>}
  </div>
</div>

        </div>

        {/* Events */}
        <div className="bg-white rounded-2xl border-b-6 shadow p-5 relative ">
          <div className="border-b pb-3 mb-4">
            <h2 className="text-xl font-bold text-gray-800">Upcoming Events:</h2>
            <p href="/events" className="text-blue-600 text-sm hover:underline flex items-center mt-1 gap-2">
              View all <span className="mt-1"><FaLongArrowAltRight /></span>
            </p>
          </div>
          <div className=" h-120 overflow-auto">
            <div className="flex flex-col  gap-y-7  " >
              {events.length > 0 ? events.map((event, i) => (
                <div key={i} className="flex  items-center border-blue-400 border-2 rounded-lg p-5">
                  <div className="grid grid-cols-2">
                  <img
                    src={`${baseUrl}/${event.imagePath}`}
                    alt={event.name}
                    className="object-fit w-full h-72 p-6 box-border"
                  />
                  <div className="flex flex-col justify-center gap-y-2 text-lg">
                    <p className=" text-gray-700"><span className="font-bold">Name:</span>  {event.name}</p>
                    <span className=" text-gray-700"><span className="font-bold">Date :</span> {new Date(event.date).toLocaleDateString()}</span>
                    <p className="font-medium text-gray-700"><span>Event-Time: </span>{event.time}</p>
                  </div>
                  </div>
                </div>
              )) : <p className="text-gray-500">No events available</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery section */}
      <div className="bg-white rounded-2xl border-b-6 shadow p-5">
        <div className="border-b-1 pb-3 mb-4 flex  items-center">
          <h2 className="text-xl mr-3 font-bold text-gray-800">Gallery</h2>
          <p
            href="/gallery"
            className="text-blue-600 mt-1  vtext-sm hover:underline flex items-center gap-1"
          >
            View all <span className="mt-1"><FaLongArrowAltRight /></span>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.length > 0 ? gallery.slice(0, 8).map((item, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow">
              <p className="ml-7 font-semibold text-red-700">{item.title}</p>
              {/* Pehla photo gallery ke photos array ka display karenge */}
              {item.photos.length > 0 && (
                <img
                  src={`${baseUrl}/${item.photos[0]}`}
                  alt={item.title}
                  className="object-fit w-full h-72 p-6"
                />
              )}
            </div>
          )) : (
            <p className="text-gray-500 col-span-full text-center">No gallery items available</p>
          )}
        </div>

      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6 mt-6">
        {/* Facebook Page Embed Section */}
        <div className="bg-white rounded-2xl border-b-6 shadow p-5 w-full md:w-1/2">
          <div className="border-b pb-3 mb-4">
            <h2 className="text-xl font-bold text-gray-800">Facebook</h2>
          </div>
          <div className="flex justify-center">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnrcollage&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="500" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>

        {/* Second Facebook Page Embed Section */}
        <div className="bg-white rounded-2xl border-b-6 shadow p-5 w-full md:w-1/2">
          <div className="border-b pb-3 mb-4">
            <h2 className="text-xl font-bold text-gray-800">Facebook</h2>
          </div>
          <div className="flex justify-center">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fnrcollage&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="500" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}