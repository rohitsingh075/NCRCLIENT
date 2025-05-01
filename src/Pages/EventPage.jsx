import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import api from "../../api";
import Navbar from "../Components/Navbar";

const EventPage = () => {
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams(); // Get the  ID from the route parameter


    console.log("event id", id);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await api.get(`/events/${id}`); // Fetch event by ID
                console.log(response.data);
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
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (!event) {
        return <p className="text-center text-gray-500">Event not found.</p>;
    }

    return (
       <div>
        <Navbar/>
         <div className="p-10 bg-gray-800 min-h-screen">
            <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6 bg-white shadow-md rounded-lg p-6">
                {event.imagePath && (
                    <img
                        src={`${api.defaults.baseURL}/${event.imagePath}`}
                        alt={event.name}
                        className="w-full h-108 object-cover rounded-md mb-4"
                    />
                )}
                <div>
                <h1 className="text-3xl font-bold text-red-700 mb-4">{event.name}</h1>
                <div className="">
                <p className="text-gray-700 mb-2">
                    <strong>Date:</strong> {event.date ? event.date.split("T")[0] : "N/A"}
                </p>
                <p className="text-gray-700 mb-2">
                    <strong>Time:</strong> {event.time || "N/A"}
                </p>
                </div>
                <div className="" >
                <p className="text-gray-700 mb-2">
                    <strong>Location:</strong> {event.location || "N/A"}
                </p>
                <p className="text-gray-700 mb-2">
                    <strong>Organizer:</strong> {event.organizer || "N/A"}
                </p>
                <p className="text-gray-700">
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