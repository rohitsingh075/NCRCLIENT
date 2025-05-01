import React, { useState, useEffect } from "react";
import AdminHeader from "../../Components/AdminHeader";
import toast from "react-hot-toast";
import api from "../../../api";
import { useNavigate, useParams } from "react-router-dom";

const NoticeEdit = () => {
  const { id } = useParams(); // Get the notice ID from the route parameter
  const navigate = useNavigate();

  const [notice, setNotice] = useState({
    title: "",
    description: "",
    date: "",
    issuedBy: "Admin",
    important: false,
    tags: "",
    attachmentUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const [noticeUpload, setNoticeUpload] = useState(null);

  // Fetch the notice details when the component loads
  useEffect(() => {
    const fetchNotice = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/notices/${id}`); // Fetch notice by ID
        setNotice({
          ...response.data.notice,
          date: response.data.notice.date ? response.data.notice.date.split("T")[0] : "",
          tags: response.data.notice.tags.join(", "),
        });
      } catch (error) {
        console.error("Error fetching notice details:", error.message);
        toast.error("Failed to fetch notice details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchNotice();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNotice({
      ...notice,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setNoticeUpload(e.target.files[0]);
  };

  const handleUpdateNotice = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = new FormData();

      // Add all form fields to FormData
      Object.entries(notice).forEach(([key, value]) => {
        data.append(key, value);
      });

      // Add file if it exists
      if (noticeUpload) {
        data.append("noticeUpload", noticeUpload);
      }

      await api.put(`/notices/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(`Notice "${notice.title}" updated successfully!`);
      navigate("/notices"); // Redirect to the notices list page
    } catch (error) {
      console.error("Error updating notice:", error.message);
      toast.error("Failed to update notice. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div>
      <AdminHeader title="Edit Notice" />
      <div className="ml-64 p-6 -mt-15">
        <h1 className="text-2xl font-bold mb-6">Edit Notice</h1>

        <div className="bg-white shadow-md rounded-lg p-3 mb-8 border-2 border-blue-400">
          <h2 className="text-lg font-bold mb-2">Edit Notice Details</h2>
          <form onSubmit={handleUpdateNotice} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={notice.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={notice.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Issued By</label>
              <input
                type="text"
                name="issuedBy"
                value={notice.issuedBy}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Tags (comma-separated)</label>
              <input
                type="text"
                name="tags"
                value={notice.tags}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Important</label>
              <input
                type="checkbox"
                name="important"
                checked={notice.important}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label className="font-medium">Mark as Important</label>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Attachment</label>
              <input
                type="file"
                name="noticeUpload"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={notice.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-15 py-2 rounded-md hover:bg-green-700 transition md:col-span-2"
            >
              Update Notice
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoticeEdit;