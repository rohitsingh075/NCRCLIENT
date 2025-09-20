import { useEffect, useState } from "react";
import { Clock, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../../api";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const AllNoticesPage = () => {
    const [notices, setNotices] = useState([]);
    const baseUrl = api.defaults.baseURL;

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const res = await api.get("/notices");

                // Sort notices newest to oldest by date
                const sorted = (res.data.data || []).sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                );
                setNotices(sorted);
            } catch (error) {
                console.error("Error fetching notices:", error);
            }
        };
        fetchNotices();
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

    const getPriorityStyles = (priority) => {
        switch (priority) {
            case "High":
                return "bg-red-50 text-red-700 border-red-200";
            case "Medium":
                return "bg-yellow-50 text-yellow-700 border-yellow-200";
            case "Low":
                return "bg-green-50 text-green-700 border-green-200";
            default:
                return "bg-gray-50 text-gray-700 border-gray-200";
        }
    };

    return (
        <div>
            <Navbar />
            <section className="bg-gray-50 py-8 min-h-screen">

                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl font-bold text-red-700 mb-3 inline-block">
                            All Notices
                        </h2>
                        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
                            Browse all recent notices from North Central Railway College.
                        </p>
                    </motion.div>
                    <div className="space-y-8">
                        {notices.length > 0 ? (
                            notices.map((notice, index) => (
                                <motion.div
                                    key={notice._id}
                                    className="bg-white border cursor-pointer border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition duration-300"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: index * 0.1 }}
                                    onClick={() => window.location.href = `/notice-info/${notice._id}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className={`w-14 h-14 flex items-center justify-center rounded-md border ${getPriorityStyles(
                                                notice.priority
                                            )}`}
                                        >
                                            <Bell className="w-5 h-5 text-gray-700" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-lg font-semibold text-gray-900">
                                                    {notice.title}
                                                </h4>
                                                {notice.priority && (
                                                    <span
                                                        className={`text-xs px-3 py-1 rounded-md border ${getPriorityStyles(
                                                            notice.priority
                                                        )}`}
                                                    >
                                                        {notice.priority}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4">
                                                {notice.description}
                                            </p>
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="flex items-center gap-1 text-gray-900 font-bold text-[14px]">
                                                    <Clock className="w-4 h-4" />
                                                    {formatDate(notice.date)}
                                                </div>
                                                <Link
                                                    to={`/notice-info/${notice._id}`}
                                                    className="text-gray-800 hover:text-gray-900 font-medium"
                                                >
                                                    Read More →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center">No notices available</p>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AllNoticesPage;
