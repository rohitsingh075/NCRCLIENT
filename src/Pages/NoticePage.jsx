import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const NoticePage = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = api.defaults.baseURL;

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await api.get(`/notices/${id}`);
        setNotice(response.data.data);
      } catch (error) {
        console.error("Error fetching notice:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotice();
  }, [id]);

  const isPDF = (url) => url?.toLowerCase().endsWith(".pdf");
  const isImage = (url) => {
    const extensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"];
    return url ? extensions.some((ext) => url.toLowerCase().endsWith(ext)) : false;
  };

  if (loading) return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  if (!notice) return <p className="text-center text-gray-500 mt-10">Notice not found.</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-4 sm:p-6 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 break-words">
            {notice.title}
          </h1>

          <p className="text-gray-700 mb-2 text-sm sm:text-base">
            <strong>Date:</strong> {notice.date ? notice.date.split("T")[0] : "N/A"}
          </p>
          <p className="text-gray-700 mb-2 text-sm sm:text-base">
            <strong>Issued By:</strong> {notice.issuedBy || "N/A"}
          </p>
          <p className="text-gray-700 mb-2 text-sm sm:text-base">
            <strong>Tags:</strong> {notice.tags ? notice.tags.join(", ") : "N/A"}
          </p>
          <p className="text-gray-700 mb-2 text-sm sm:text-base">
            <strong>Important:</strong> {notice.important ? "Yes" : "No"}
          </p>

          <div className="text-gray-700 mb-6 text-sm sm:text-base">
            <strong>Description:</strong>
            <p className="mt-2 break-words">{notice.description || "N/A"}</p>
          </div>

          {/* Attachment */}
          {notice.noticeUpload && (
            <div className="mt-6 pt-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Attachment</h3>

              {isPDF(notice.noticeUpload) && (
                <div className="mt-4">
                  <iframe
                    src={`${baseUrl}/${notice.noticeUpload}`}
                    className="w-full h-[400px] sm:h-[600px] border-0 rounded-md shadow-lg"
                    title="PDF Viewer"
                  ></iframe>
                </div>
              )}

              {isImage(notice.noticeUpload) && (
                <div className="mt-4 flex justify-center">
                  <img
                    src={`${baseUrl}/${notice.noticeUpload}`}
                    alt="Notice Attachment"
                    className="w-full sm:max-w-full max-h-[400px] sm:max-h-[600px] rounded-md shadow-lg object-contain"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoticePage;
