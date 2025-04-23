import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "../../Components/AdminHeader";

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    photos: [],
  });
  const [editingGalleryId, setEditingGalleryId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all galleries
  const fetchGalleries = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/galleries");
      if (response.data && Array.isArray(response.data.galleries)) {
        setGalleries(response.data.galleries);
      } else {
        setGalleries([]);
      }
    } catch (error) {
      console.error("Error fetching galleries:", error);
      setGalleries([]);
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
        await axios.put(`/api/galleries/${editingGalleryId}`, formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Gallery updated successfully!");
      } else {
        await axios.post("/api/galleries", formDataToSend, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Gallery created successfully!");
      }
      setFormData({ title: "", photos: [] });
      setEditingGalleryId(null);
      fetchGalleries();
    } catch (error) {
      console.error("Error submitting gallery:", error);
    }
  };

  // Handle edit button click
  const handleEdit = (gallery) => {
    setEditingGalleryId(gallery._id);
    setFormData({ title: gallery.title, photos: [] }); // Photos will be uploaded again
  };

  // Handle delete button click
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this gallery?")) {
      try {
        await axios.delete(`/api/galleries/${id}`);
        alert("Gallery deleted successfully!");
        fetchGalleries();
      } catch (error) {
        console.error("Error deleting gallery:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-6">Manage Galleries</h1>

        {/* Gallery Form */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold mb-4">
            {editingGalleryId ? "Edit Gallery" : "Create Gallery"}
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
                placeholder="Gallery Title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="photos" className="block font-medium mb-1">
                Photos
              </label>
              <input
                type="file"
                id="photos"
                name="photos"
                multiple
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required={!editingGalleryId}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition md:col-span-2"
            >
              {editingGalleryId ? "Update Gallery" : "Create Gallery"}
            </button>
          </form>
        </div>

        {/* Galleries List */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">All Galleries</h2>
          {loading ? (
            <p>Loading...</p>
          ) : galleries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleries.map((gallery) => (
                <div key={gallery._id} className="bg-gray-50 shadow-md rounded-lg p-4">
                  <h3 className="text-lg font-bold mb-2">{gallery.title}</h3>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {gallery.photos.map((photo, index) => (
                      <img
                        key={index}
                        src={`/uploads/${photo}`}
                        alt={`Gallery ${gallery.title}`}
                        className="w-full h-32 object-cover rounded-md"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={() => handleEdit(gallery)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(gallery._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No galleries found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;