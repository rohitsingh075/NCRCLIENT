import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const GalleryPage = () => {
  const { id } = useParams();
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await api.get(`/gallery/view/${id}`);
        console.log(response.data.gallery);
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
      <div className="bg-gray-100 min-h-screen px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto rounded-lg bg-gray-100">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">
            {gallery.title}
          </h1>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gallery.photos.map((photo, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={`${api.defaults.baseURL}/${photo}`}
                  alt={`Gallery ${gallery.title}`}
                  className="w-full object-cover
                             h-auto sm:h-72 md:h-80 lg:h-96"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
