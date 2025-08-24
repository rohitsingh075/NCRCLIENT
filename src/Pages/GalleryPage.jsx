import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Navbar from "../Components/Navbar.jsx"
import Footer from "../Components/Footer.jsx"


const GalleryPage = () => {
  const { id } = useParams(); // Get the gallery ID from the route parameter
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await api.get(`/gallery/view/${id}`);
        console.log(response.data.gallery); // Fetch gallery by ID
        setGallery(response.data.gallery);
      } catch (error) {
        console.error("Error fetching gallery:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!gallery) {
    return <p className="text-center text-gray-500">Gallery not found.</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto bg-gray-100  rounded-lg p-6 mb-3">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{gallery.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 h-full gap-12">
            {/* Here */}
            {gallery.photos.map((photo, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow">
                <img
                  src={`${api.defaults.baseURL}/${photo}`}
                  alt={`Gallery ${gallery.title}`}
                  className="object-cover w-full h-96"
                />
              </div>
            ))}
          </div>
        </div >
      </div>
            <Footer/>
    </div>
  );
};

export default GalleryPage;