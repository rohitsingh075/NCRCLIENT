import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import Navbar from "../Components/Navbar";

const EventPage = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Get the ID from the route parameter

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await api.get(`/events/${id}`);
        setEvent(response.data.data);
      } catch (error) {
        console.error("Error fetching event:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  }

  if (!event) {
    return <p className="text-center text-gray-500 mt-10">Event not found.</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-4 sm:p-6 bg-gray-100">
        <div
          className="
            max-w-5xl mx-auto bg-white shadow-md rounded-lg 
            p-4 sm:p-6 
            grid grid-cols-1 md:grid-cols-2 gap-6
          "
        >
          {/* Event Image */}
          {event.imagePath && (
            <img
              src={`${api.defaults.baseURL}/${event.imagePath}`}
              alt={event.name}
              className="
                w-full h-60 sm:h-80 md:h-96 
                object-cover rounded-md
              "
            />
          )}

          {/* Event Details */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 break-words">
              {event.name}
            </h1>

            <div className="space-y-2 text-sm sm:text-base text-gray-700">
              <p>
                <strong>Date:</strong>{" "}
                {event.date ? event.date.split("T")[0] : "N/A"}
              </p>
              <p>
                <strong>Time:</strong> {event.time || "N/A"}
              </p>
              <p>
                <strong>Location:</strong> {event.location || "N/A"}
              </p>
              <p>
                <strong>Organizer:</strong> {event.organizer || "N/A"}
              </p>
              <p className="break-words">
                <strong>Description:</strong> {event.description || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
