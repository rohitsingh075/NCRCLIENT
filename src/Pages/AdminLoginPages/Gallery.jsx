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
  const [selectedFiles, setSelectedFiles] = useState([]);

  const baseUrl = api.defaults.baseURL;

  // Fetch all galleries
  const fetchGalleries = async () => {
    setLoading(true);
    try {
      const response = await api.get("/gallery/view");
      if (response.data && Array.isArray(response.data.galleries)) {
        setGalleries(response.data.galleries);
        // toast.success("All galleries fetched successfully!");
      } else {
        setGalleries([]);
        toast.error("No galleries found.");
      }
    } catch (error) {
      console.error("Error fetching galleries:", error.message);
      // toast.error("Failed to fetch galleries. Please try again.");
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
        // const id=editingGalleryId
        // await api.put(`/gallery/delete/${id}`, formDataToSend, {
        //   headers: { "Content-Type": "multipart/form-data" },
        // });
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
    setFormData({ title: gallery.title, photos: [] }); // Photos will be uploaded again
    setShowCreateForm(true);
    toast.info("Edit the gallery details and click Submit.");
  };

  // Handle delete button click
  const handleDelete = async (id) => {

    if (window.confirm("Are you sure you want to delete this gallery?")) {
      try {
        console.log("test", id);
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
      <div className="ml-64 p-6 -mt-15">
        <h1 className="text-2xl font-bold mb-6">Manage Galleries</h1>

        {/* Toggle Buttons */}
        <div className="flex justify-start mt-2 mb-6 font-semibold text-lg">
          <button
            onClick={() => setShowCreateForm(true)}
            className={`px-15 py-2 text-md rounded-l-md ${showCreateForm ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-600"
              } transition`}
          >
            Create
          </button>
          <button
            onClick={() => {
              setShowCreateForm(false);
              fetchGalleries();
            }}
            className={`px-15 py-2 text-md rounded-r-md ${!showCreateForm ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-600"
              } transition`}
          >
            All Galleries
          </button>
        </div>

        {/* Create Gallery Form */}
        {showCreateForm ? (
          <div className="bg-white shadow-md rounded-lg p-6 mb-8 " >
            <h2 className="text-lg font-bold mb-4">
              {editingGalleryId ? "Edit Gallery" : "Create Gallery"}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex gap-10 mb-4 w-6xl">
                  {/* Title Input */}
                  <div className="flex-1">
                    <label className="block font-medium mb-1">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Gallery Title"
                      className="w-full h-12 px-4 py-2 border-2 border-gray-300 rounded-md text-sm"
                      required
                    />
                  </div>

                  {/* Photos Input */}
                  <div className="flex-1">
                    <label className="block font-medium mb-1">Photos</label>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="w-full h-12 px-4 py-2 border-2 border-gray-300 rounded-md text-smfile:mr-4 file:py-1 file:px-4 file:h-8 file:rounded-md file:border-0 file:text-sm file:font-semibold    file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />

                  </div>
                </div>



              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition md:col-span-2"
              >
                {editingGalleryId ? "Update Gallery" : "Create Gallery"}
              </button>
            </form>
          </div>
        ) : (
          // Display All Galleries
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">All Galleries</h2>
            {loading ? (
              <p>Loading...</p>
            ) : galleries.length > 0 ? (
              <div className="flex flex-col gap-6">
                {galleries.map((gallery) => (console.log(gallery._id),
                  <div
                    key={gallery.id}
                    className="border rounded-lg shadow-md p-4 bg-gray-100 w-full"
                  >
                    <div className="flex gap-x-5 items-center mb-4">
                      <h3 className="text-3xl font-bold mb-2">{gallery.title}</h3>
                      <div className="flex gap-x-2 justify-between items-center ">
                        {/* <button
              onClick={() => handleEdit(gallery)}
              className="bg-yellow-500 text-white px-6 py-1 rounded-md hover:bg-yellow-600 transition"
            >
              Edit
            </button> */}
                        <button
                          onClick={() => handleDelete(gallery._id)}
                          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
                        >
                          Delete Gallery
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-2 mb-4 h-auto">
                      {gallery.photos.map((photo, index) => (console.log(``),
                        <img
                          key={index}
                          src={`${baseUrl}/${photo}`}
                          alt={`Gallery ${gallery.title}`}
                          className="w-full h-96 p-6 object-fit"
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-4">
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

