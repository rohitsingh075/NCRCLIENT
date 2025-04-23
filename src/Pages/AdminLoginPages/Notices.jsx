import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "../../Components/AdminHeader";

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    attachmentUrl: "",
    issuedBy: "Admin",
    important: false,
    tags: "",
  });
  const [editingNoticeId, setEditingNoticeId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all notices
  const fetchNotices = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/notices");
      if (response.data && Array.isArray(response.data.notices)) {
        setNotices(response.data.notices);
      } else {
        setNotices([]);
      }
    } catch (error) {
      console.error("Error fetching notices:", error);
      setNotices([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission for creating or editing notices
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingNoticeId) {
        await axios.put(`/api/notices/${editingNoticeId}`, formData);
        alert("Notice updated successfully!");
      } else {
        await axios.post("/api/notices", formData);
        alert("Notice created successfully!");
      }
      setFormData({
        title: "",
        description: "",
        date: "",
        attachmentUrl: "",
        issuedBy: "Admin",
        important: false,
        tags: "",
      });
      setEditingNoticeId(null);
      fetchNotices();
    } catch (error) {
      console.error("Error submitting notice:", error);
    }
  };

  // Handle edit button click
  const handleEdit = (notice) => {
    setEditingNoticeId(notice._id);
    setFormData({
      title: notice.title,
      description: notice.description,
      date: notice.date.split("T")[0],
      attachmentUrl: notice.attachmentUrl,
      issuedBy: notice.issuedBy,
      important: notice.important,
      tags: notice.tags.join(", "),
    });
  };

  // Handle delete button click
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this notice?")) {
      try {
        await axios.delete(`/api/notices/${id}`);
        alert("Notice deleted successfully!");
        fetchNotices();
      } catch (error) {
        console.error("Error deleting notice:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-6">Manage Notices</h1>

        {/* Notice Form */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold mb-4">
            {editingNoticeId ? "Edit Notice" : "Create Notice"}
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="title" className="block font-medium mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Notice Title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="block font-medium mb-1">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="attachmentUrl" className="block font-medium mb-1">
                Attachments - Image / PDF (Optional)
              </label>
              <input
                type="text"
                id="attachmentUrl"
                name="attachmentUrl"
                placeholder="Attachment URL"
                value={formData.attachmentUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="issuedBy" className="block font-medium mb-1">
                Issued By
              </label>
              <input
                type="text"
                id="issuedBy"
                name="issuedBy"
                placeholder="Issued By"
                value={formData.issuedBy}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="tags" className="block font-medium mb-1">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                placeholder="e.g., exam, academic"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="important"
                name="important"
                checked={formData.important}
                onChange={handleInputChange}
                className="mr-2"
              />
              <label htmlFor="important" className="font-medium">
                Mark as Important
              </label>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="description" className="block font-medium mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Notice Description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition md:col-span-2"
            >
              {editingNoticeId ? "Update Notice" : "Create Notice"}
            </button>
          </form>
        </div>

        {/* Notices List */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">All Notices</h2>
          {loading ? (
            <p>Loading...</p>
          ) : notices.length > 0 ? (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Title</th>
                  <th className="border border-gray-300 px-4 py-2">Date</th>
                  <th className="border border-gray-300 px-4 py-2">Issued By</th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice) => (
                  <tr key={notice._id}>
                    <td className="border border-gray-300 px-4 py-2">{notice.title}</td>
                    <td className="border border-gray-300 px-4 py-2">{notice.date.split("T")[0]}</td>
                    <td className="border border-gray-300 px-4 py-2">{notice.issuedBy}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        onClick={() => handleEdit(notice)}
                        className="text-blue-600 hover:underline mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(notice._id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No notices found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notices;