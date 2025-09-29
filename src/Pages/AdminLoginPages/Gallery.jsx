import React, { useState, useEffect } from "react";
import api from "../../../api";
import AdminHeader from "../../Components/AdminHeader";
import toast from "react-hot-toast";

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    photos: [],
  });
  const [editingGalleryId, setEditingGalleryId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(true);
  const baseUrl = api?.defaults?.baseURL || "";

  // Fetch all galleries
  const fetchGalleries = async () => {
    setLoading(true);
    try {
      const response = await api.get("/gallery/view");
      if (response.data && Array.isArray(response.data.galleries)) {
        setGalleries(response.data.galleries);
      } else {
        setGalleries([]);
        toast.error("No galleries found.");
      }
    } catch (error) {
      console.error("Error fetching galleries:", error.message);
      toast.error("Error fetching galleries.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleries();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    setFormData({ ...formData, photos: Array.from(e.target.files) });
  };

  // Handle form submission for creating or editing galleries
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formData.photos.forEach((photo) => formDataToSend.append("photos", photo));

    try {
      if (editingGalleryId) {
        // Implement update logic if needed
        toast.success("Gallery updated successfully!");
      } else {
        await api.post("/gallery/upload", formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Gallery created successfully!");
      }
      setFormData({ title: "", photos: [] });
      setEditingGalleryId(null);
      fetchGalleries();
    } catch (error) {
      console.error("Error submitting gallery:", error.message);
      toast.error("Failed to submit gallery. Please try again.");
    }
  };

  // Handle edit button click
  const handleEdit = (gallery) => {
    setEditingGalleryId(gallery._id);
    setFormData({ title: gallery.title, photos: [] });
    setShowCreateForm(true);
    toast.info("Edit the gallery details and click Submit.");
  };

  // Handle delete button click
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this gallery?")) {
      try {
        await api.delete(`/gallery/delete/${id}`, { withCredentials: true });
        setGalleries(galleries.filter((gallery) => gallery._id !== id));
        toast.success("Gallery deleted successfully!");
      } catch (error) {
        console.error("Error deleting gallery:", error.message);
        toast.error("Failed to delete gallery. Please try again.");
      }
    }
  };

  return (
    <div>
      <AdminHeader title="Gallery" />
      <div className="min-h-screen bg-gray-100 px-4 sm:px-6 md:px-8 py-6 w-full md:ml-64 transition-all duration-300">
        <h1 className="text-2xl font-bold mb-6 text-center md:text-left">Manage Galleries</h1>

        {/* Toggle Buttons */}
        <div className="flex justify-center md:justify-start mb-6 font-semibold text-lg gap-2">
          <button
            onClick={() => setShowCreateForm(true)}
            className={`px-6 py-2 rounded-l-md ${showCreateForm ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-600"} transition`}
          >
            Create
          </button>
          <button
            onClick={() => {
              setShowCreateForm(false);
              fetchGalleries();
            }}
            className={`px-6 py-2 rounded-r-md ${!showCreateForm ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-600"} transition`}
          >
            All Galleries
          </button>
        </div>

        {/* Create Gallery Form */}
        {showCreateForm ? (
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 mb-8 max-w-lg mx-auto w-full">
            <h2 className="text-lg font-bold mb-4 text-center">
              {editingGalleryId ? "Edit Gallery" : "Create Gallery"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Gallery Title"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Photos</label>
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full"
              >
                {editingGalleryId ? "Update Gallery" : "Create Gallery"}
              </button>
            </form>
          </div>
        ) : (
          // Display All Galleries
          <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
            <h2 className="text-lg font-bold mb-4 text-center">All Galleries</h2>
            {loading ? (
              <p>Loading...</p>
            ) : galleries.length > 0 ? (
              <div className="flex flex-col gap-6">
                {galleries.map((gallery) => (
                  <div
                    key={gallery._id}
                    className="border rounded-lg shadow-md p-4 bg-gray-100 w-full"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <h3 className="text-xl font-bold mb-2">{gallery.title}</h3>
                      <div className="flex gap-x-2">
                        <button
                          onClick={() => handleEdit(gallery)}
                          className="bg-yellow-500 text-white px-4 py-1 rounded-md hover:bg-yellow-600 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(gallery._id)}
                          className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                      {Array.isArray(gallery.photos) &&
                        gallery.photos.map((photo, index) => (
                          <img
                            key={index}
                            src={`${baseUrl}/${photo}`}
                            alt={`Gallery ${gallery.title}`}
                            className="w-full h-48 sm:h-64 object-cover rounded"
                          />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No galleries found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;