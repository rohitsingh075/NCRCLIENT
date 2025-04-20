import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function InfoCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100">
      {/* Recent Notice / Circulars */}
      <div className="bg-white rounded-2xl border-b-6 shadow p-5">
        <div className="border-b pb-3 mb-4">
          <h2 className="text-xl font-bold text-gray-800">Recent Notice / Circulars:</h2>
          <a href="#" className="text-blue-600 text-sm hover:underline flex items-center mt-1 gap-2">
            View all <span className="mt-1"><FaLongArrowAltRight /></span>
          </a>
        </div>
        <div className="space-y-4">
          <div>
            <p className="font-medium text-gray-700">Admission Open for the Session 2024-25</p>
            <a href="#" className="text-blue-600 text-sm hover:underline">Read More...</a>
          </div>
          <div>
            <p className="font-medium text-gray-700">For daily updates Visit us on Facebook</p>
            <a href="#" className="text-blue-600 text-sm hover:underline">Read More...</a>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-white rounded-2xl border-b-6 shadow p-5">
        <div className="border-b pb-3 mb-4">
          <h2 className="text-xl font-bold text-gray-800">Gallery</h2>
          <a href="#" className="text-blue-600 text-sm hover:underline flex items-center mt-1 gap-2">
            View all <span className="mt-1"><FaLongArrowAltRight /></span>
          </a>
        </div>
        <div className="space-y-4">
          {[
            { title: "Diwali Celebration", date: "29 OCT 2024" },
            { title: "Sports Fiesta Week - 2024", date: "28 MAY 2024" },
            { title: "Workshops on “Anti-Bullying” and “Media Literacy”", date: "24 MAY 2024" },
            { title: "SCHOOL TOPPERS CLASS X AND XII SESSION-2023-24", date: "22 MAY 2024" },
            { title: "Author Session (Book Week)", date: "17 MAY 2024" },
          ].map((item, i) => (
            <div key={i}>
              <p className="font-medium text-gray-700">{item.title}</p>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Facebook Card */}
      <div className="bg-white rounded-2xl border-b-6 shadow p-5"> 
        <div className="border-b pb-3 mb-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Facebook</h2>
          <a
            href="https://www.facebook.com/GDGoenkaSchoolIndirapuram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm hover:underline flex items-center gap-2"
          >
            Visit Page <span className="mt-1"><FaLongArrowAltRight /></span>
          </a>
        </div>
        <div className="overflow-hidden rounded-lg">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/nrcollage&tabs=timeline&width=340&height=500"
            width="100%"
            height="350"
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media"
            title="Facebook Page"
            className="w-full h-[350px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
