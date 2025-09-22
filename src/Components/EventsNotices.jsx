import { useRef, useEffect, useState } from "react";
import { Calendar, Bell, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../../api"; // ✅ use your axios instance

const EventsNotices = () => {
  const [events, setEvents] = useState([]);
  const [notices, setNotices] = useState([]);
  const baseUrl = api.defaults.baseURL;

  // fetch events + notices
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [eventRes, noticeRes] = await Promise.all([
          api.get("/events/"),
          api.get("/notices/"),
        ]);

        setEvents(eventRes.data.data || []);
        setNotices(noticeRes.data.data || []);
      } catch (error) {
        console.error("Error fetching notices/events:", error);
      }
    };

    fetchData();
  }, []);

  // format date
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

  // priority badge colors
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

  // Auto-scroll for notices
  const noticeRef = useRef(null);
  useEffect(() => {
    const scrollContainer = noticeRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (scrollContainer && notices.length > 0) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollHeight / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTop = scrollAmount;
      }
    }, 50);

    return () => clearInterval(scrollInterval);
  }, [notices]);


  return (
    <section className="bg-gray-50 py-10 sm:py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-red-700 mb-3 relative inline-block">
            Stay informed
          </h2>
          <p className="text-base sm:text-lg text-gray-800 max-w-2xl mx-auto">
            Get the latest news, announcements, and upcoming events from North Central Railway College.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          {/* Events Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center bg-gray-200 gap-3 mb-6 sm:mb-8">
              <div className="p-2 sm:p-3 bg-gray-800 rounded-md">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg sm:text-2xl font-semibold text-gray-800">
                Upcoming Events
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {events.length > 0 ? (
                events.map((event, index) => (
                  <motion.div
                    key={event._id}
                    className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-xl transition duration-300"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                      <img
                        src={`${baseUrl}/${event.imagePath}`}
                        alt={event.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md mb-2 sm:mb-0"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                            {event.name}
                          </h4>
                          {event.category && (
                            <span className="text-xs bg-gray-200 text-gray-700 px-2 sm:px-3 py-1 rounded-md">
                              {event.category}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">{event.description}</p>
                        <div className="flex items-center justify-between text-xs sm:text-sm">
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
                <p className="text-gray-500">No events available</p>
              )}
            </div>
          </motion.div>

          {/* Notices Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center bg-gray-200 gap-3 mb-6 sm:mb-8">
              <div className="p-2 sm:p-3 bg-gray-800 rounded-md">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg sm:text-2xl font-semibold text-gray-800">
                Recent Notices
              </h3>
            </div>

            <div
              ref={noticeRef}
              className="space-y-4 sm:space-y-6 h-64 sm:h-96 overflow-hidden scrollbar-hide"
            >
              {notices.length > 0 ? (
                notices.concat(notices).map((notice, index) => (
                  <motion.div
                    key={`${notice._id}-${index}`}
                    className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-xl transition duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-md border ${getPriorityStyles(
                          notice.priority
                        )}`}
                      >
                        <Bell className="w-5 h-5 text-gray-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                            {notice.title}
                          </h4>
                          {notice.priority && (
                            <span
                              className={`text-xs px-2 sm:px-3 py-1 rounded-md border ${getPriorityStyles(
                                notice.priority
                              )}`}
                            >
                              {notice.priority}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">
                          {notice.description}
                        </p>
                        <div className="flex items-center justify-between text-xs sm:text-sm">
                          <div className="flex items-center gap-1 text-gray-500">
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
                <p className="text-gray-500">No notices available</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

};

export default EventsNotices;
