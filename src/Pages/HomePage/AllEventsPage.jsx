import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../../api";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const AllEventsPage = () => {
    const [events, setEvents] = useState([]);
    const baseUrl = api.defaults.baseURL;

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await api.get("/events/");
                // Sort events newest to oldest by date
                const sorted = (res.data.data || []).sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                );
                setEvents(sorted);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };
        fetchEvents();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        if (isNaN(date)) return "Invalid date";
        return date.toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div>
            <Navbar />
            <section className="bg-gray-50 py-20 min-h-screen">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl font-bold text-red-700 mb-3 inline-block">
                            All Events
                        </h2>
                        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
                            Browse all upcoming and past events from North Central Railway College.
                        </p>
                    </motion.div>
                    <div className="space-y-8">
                        {events.length > 0 ? (
                            events.map((event, index) => (
                                <motion.div
                                    key={event._id}
                                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: index * 0.1 }}
                                >
                                    <div className="flex items-start gap-4">
                                        <img
                                            src={`${baseUrl}/${event.imagePath}`}
                                            alt={event.name}
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-lg font-semibold text-gray-900">
                                                    {event.name}
                                                </h4>
                                                {event.category && (
                                                    <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-md">
                                                        {event.category}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="flex items-center gap-1 text-gray-500">
                                                    <Calendar className="w-4 h-4" />
                                                    {formatDate(event.date)}
                                                </div>
                                                <Link
                                                    to={`/event-info/${event._id}`}
                                                    className="text-gray-800 hover:text-gray-900 font-medium"
                                                >
                                                    Learn More →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center">No events available</p>
                        )}
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    );
};

export default AllEventsPage;
