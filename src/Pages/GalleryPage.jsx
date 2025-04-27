import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import { FaLongArrowAltLeft } from "react-icons/fa";

const GalleryPage = () => {
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);
  const { galleryId } = useParams(); // Assuming galleryId is passed as a route parameter
  const baseUrl = api.defaults.baseURL;

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await api.get(`/gallery/${galleryId}`);
        setGallery(response.data.gallery);
      } catch (error) {
        console.error("Error fetching gallery:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [galleryId]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!gallery) {
    return <p className="text-center text-gray-500">Gallery not found.</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <a href="/gallery" className="text-blue-600 hover:underline flex items-center gap-2">
          <FaLongArrowAltLeft /> Back to Galleries
        </a>
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{gallery.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {gallery.photos.map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow">
            <img
              src={`${baseUrl}/${photo}`}
              alt={`Gallery ${gallery.title}`}
              className="object-cover w-full h-48"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;