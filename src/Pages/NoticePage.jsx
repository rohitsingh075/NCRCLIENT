import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";

const NoticePage = () => {
  const { id } = useParams(); // Get the notice ID from the route parameter
  const [notice, setNotice] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(id);

  // const baseUrl=api.defaults.baseURL;
  // console.log(baseUrl)

  
  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await api.get(`/notices/${id}`); // Fetch notice by ID
        setNotice(response.data.data);
        // console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching notice:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotice();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!notice) {
    return <p className="text-center text-gray-500">Notice not found.</p>;
  }

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
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
        <p className="text-gray-700">
          <strong>Description:</strong> {notice.description || "N/A"}
        </p>
        {notice.attachmentUrl && (
          <div className="mt-4">
            <a
              href={`${api.defaults.baseURL}/${notice.attachmentUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Attachment
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticePage;