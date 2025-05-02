import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Navbar from "../Components/Navbar.jsx"
import Footer from "../Components/Footer.jsx"

const NoticePage = () => {
  const { id } = useParams(); // Get the notice ID from the route parameter
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseUrl = api.defaults.baseURL;

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await api.get(`/notices/${id}`); // Fetch notice by ID
        setNotice(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.error("Error fetching notice:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotice();
  }, [id]);

  // Function to determine if the attachment is a PDF
  const isPDF = (url) => {
    if (!url) return false;
    return url.toLowerCase().endsWith('.pdf');
  };

  // Function to determine if the attachment is an image
  const isImage = (url) => {
    if (!url) return false;
    const extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];
    return extensions.some(ext => url.toLowerCase().endsWith(ext));
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!notice) {
    return <p className="text-center text-gray-500">Notice not found.</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-800 min-h-screen">
        <div className="max-w-4xl mt-10 mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-red-700 mb-4">{notice.title}</h1>
          <p className="text-gray-700 mb-2">
            <strong>Date:</strong> {notice.date ? notice.date.split("T")[0] : "N/A"}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Issued By:</strong> {notice.issuedBy || "N/A"}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Tags:</strong> {notice.tags ? notice.tags.join(", ") : "N/A"}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Important:</strong> {notice.important ? "Yes" : "No"}
          </p>
          <div className="text-gray-700 mb-6">
            <strong>Description:</strong> <p className="mt-2">{notice.description || "N/A"}</p>
          </div>

          {/* Attachment Display Section */}
          {notice.noticeUpload && (
            <div className="mt-6  pt-4">
              <h3 className="text-xl font-semibold mb-3">Attachment</h3>

              {/* PDF Viewer */}
              {isPDF(notice.noticeUpload) && (
                <div className="mt-4">
                  <iframe
                    src={`${baseUrl}/${notice.noticeUpload}`}
                    className="w-full h-[600px] border-0 rounded-md shadow-lg"
                    title="PDF Viewer"
                  ></iframe>
                </div>
              )}

              {/* Image Viewer */}
              {isImage(notice.noticeUpload) && (
                <div className="mt-4 flex justify-center">
                  <img
                    src={`${baseUrl}/${notice.noticeUpload}`}
                    alt="Notice Attachment"
                    className="max-w-full max-h-[600px] rounded-md shadow-lg object-contain"
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