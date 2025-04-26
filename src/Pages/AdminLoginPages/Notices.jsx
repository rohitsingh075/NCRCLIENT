import React, { useState, useEffect } from "react";
import api from "../../../api";
import AdminHeader from "../../Components/AdminHeader";
import toast from "react-hot-toast";

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
  const [showCreateForm, setShowCreateForm] = useState(true);

  // Fetch all notices
  const fetchNotices = async () => {
    setLoading(true);
    try {
      const response = await api.get("/notices/");
      console.log("Fetched notices:", response.data.data);
      if (response.data.data && Array.isArray(response.data.data)) {
        setNotices(response.data.data);
        console.log("Notices final:", notices.data);
        // toast.success("All notices fetched successfully!");
      } else {
        setNotices([]);
        // toast.error("No notices found.");
      }
    } catch (error) {
      console.error("Error fetching notices:", error.message);
      toast.error("Failed to fetch notices. Please try again.");
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
        await api.put(`/notices/${editingNoticeId}`, formData);
        toast.success("Notice updated successfully!");
      } else {
        await api.post("/notices/", formData);
        toast.success("Notice created successfully!");
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
      console.error("Error submitting notice:", error.message);
      toast.error("Failed to submit notice. Please try again.");
    }
  };

  // Handle edit button click
  const handleEdit = (notice) => {
    setEditingNoticeId(notice._id);
    setFormData({
      title: notice.title,
      description: notice.description,
      date: notice.date ? notice.date.split("T")[0] : "",
      attachmentUrl: notice.attachmentUrl,
      issuedBy: notice.issuedBy,
      important: notice.important,
      tags: notice.tags.join(", "),
    });
    setShowCreateForm(true);
    toast.info("Edit the notice details and click Submit.");
  };

  // Handle delete button click
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this notice?")) {
      try {
        await api.delete(`/notices/${id}`);
        setNotices(notices.filter((notice) => notice._id !== id));
        toast.success("Notice deleted successfully!");
      } catch (error) {
        console.error("Error deleting notice:", error.message);
        toast.error("Failed to delete notice. Please try again.");
      }
    }
  };

  return (
    <div>
      <AdminHeader title="Notices" />
      <div className="ml-64 p-6 -mt-15">
        <h1 className="text-2xl font-bold mb-6">Manage Notices</h1>

        {/* Toggle Buttons */}
        <div className="flex justify-start mt-2 mb-6 font-semibold text-lg">
          <button
            onClick={() => setShowCreateForm(true)}
            className={`px-15 py-2 text-md rounded-l-md ${
              showCreateForm ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-600"
            } transition`}
          >
            Create
          </button>
          <button
            onClick={() => {
              setShowCreateForm(false);
              fetchNotices();
            }}
            className={`px-15 py-2 text-md rounded-r-md ${
              !showCreateForm ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-600"
            } transition`}
          >
            All Notices
          </button>
        </div>

        {/* Create Notice Form */}
        {showCreateForm ? (
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold mb-4">
              {editingNoticeId ? "Edit Notice" : "Create Notice"}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Notice Title"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Attachment URL</label>
                <input
                  type="text"
                  name="attachmentUrl"
                  value={formData.attachmentUrl}
                  onChange={handleInputChange}
                  placeholder="Attachment URL"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Issued By</label>
                <input
                  type="text"
                  name="issuedBy"
                  value={formData.issuedBy}
                  onChange={handleInputChange}
                  placeholder="Issued By"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Tags (comma-separated)</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="e.g., exam, academic"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="important"
                  checked={formData.important}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label className="font-medium">Mark as Important</label>
              </div>
              <div className="md:col-span-2">
                <label className="block font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Notice Description"
                  className="w-full px-4 py-2 border rounded-md"
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
        ) : (
          // Display All Notices
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">All Notices</h2>
            {loading ? (
              <p>Loading...</p>
            ) : notices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notices.map((notice) => (
                  <div
                  key={notice._id}
                  className="h-64 w-fit max-w-full border rounded-lg shadow-md p-4 bg-gray-100 overflow-auto"
                >
                
                     <div className="flex justify-end mb-4 gap-x-4">
                     <button
                        onClick={() => handleEdit(notice)}
                        className="bg-yellow-500 text-white px-6 py-0.5 rounded-md hover:bg-yellow-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(notice._id)}
                        className="bg-red-500 text-white px-3 py-0.5 rounded-md hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                     </div>
                    <h3 className="text-xl font-bold mb-2">{notice.title}</h3>
                    <p className="text-gray-700 mb-1">
                      <strong>Issued Date:</strong> {notice.date ? notice.date.split("T")[0] : "N/A"}
                    </p>
                    <p className="text-gray-700 mb-1">
                      <strong>Issued By:</strong> {notice.issuedBy}
                    </p>
                    <p className="text-gray-700 mb-1">
                      <strong>Tags:</strong> {notice.tags.join(", ")}
                    </p>
                    <p className="text-gray-700 mb-1">
                      <strong>Important:</strong> {notice.important ? "Yes" : "No"}
                    </p>
                    <p className="text-gray-700">
                      <strong>Description:</strong> {notice.description}
                    </p>
                    <div className="flex justify-between mt-4">
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No notices found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notices;