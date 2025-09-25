import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import api from "../../api";

const GallerySection = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const response = await api.get("/gallery/view");
        console.log("Gallery API Response:", response.data);

        const galleryData = response.data?.galleries || [];
        setGalleries(galleryData);
      } catch (error) {
        console.error("Error fetching galleries:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleries();
  }, []);

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-black to-blue-900 opacity-95 -z-10" />

      {/* Heading */}
      <motion.div
        className="text-center mb-8 px-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-wide">
          OUR GALLERY
        </h2>
        <p className="text-gray-300 mt-2 text-sm sm:text-base">
          A glimpse of our memories & moments
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 px-2 sm:px-4 md:px-16">
        {loading ? (
          <p className="col-span-full text-center text-white">Loading...</p>
        ) : galleries.length === 0 ? (
          <p className="col-span-full text-center text-white">
            No galleries found.
          </p>
        ) : (
          galleries.slice(0, 10).map((gallery, index) => {
            const coverPhoto = gallery.photos?.[0]
              ? `${api.defaults.baseURL}/${gallery.photos[0]}`
              : "https://via.placeholder.com/300x200?text=No+Image";

            return (
              <motion.div
                key={gallery._id || index}
                className="relative group overflow-hidden rounded-lg shadow-xl cursor-pointer"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link to={`/gallery-info/${gallery._id}`}>
                  <img
                    src={coverPhoto}
                    alt={gallery.title || "Untitled"}
                    className="w-full h-32 sm:h-40 md:h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-white text-base sm:text-lg font-semibold tracking-wide px-2 text-center">
                      {gallery.title || "Untitled"}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default GallerySection;
