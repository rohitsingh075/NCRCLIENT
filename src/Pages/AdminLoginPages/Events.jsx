import React, { useState, useEffect } from "react";
import api from "../../../api";
import AdminHeader from "../../Components/AdminHeader";
import toast from "react-hot-toast";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    description: "",
    location: "",
    organizer: "",
  });
  const [editingEventId, setEditingEventId] = useState(null); // Track the event being edited
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(true);
  const baseURL = api.defaults.baseURL;

  // Fetch all events
  const fetchAllEvents = async () => {
    setLoading(true);
    try {
      const response = await api.get("/events/");
      if (response.data.data && Array.isArray(response.data.data)) {
        setEvents(response.data.data);
      } else {
        setEvents([]);
        toast.error("No events found.");
      }
    } catch (error) {
      console.error("Error fetching events:", error.message);
      toast.error("Failed to fetch events. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Handle form submission for creating or updating events
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
      if (imageFile) {
        data.append("eventImage", imageFile);
      }

      if (editingEventId) {
        // Update existing event
        console.log(formData);
        const response = await api.put(`/events/${editingEventId}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event._id === editingEventId ? response.data.data : event
          )
        );
        toast.success("Event updated successfully!");
      } else {
        // Create new event
        const response = await api.post("/events/", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setEvents([...events, response.data.data]);
        toast.success("Event created successfully!");
      }

      // Reset form
      setFormData({
        name: "",
        date: "",
        time: "",
        description: "",
        location: "",
        organizer: "",
      });
      setImageFile(null);
      setEditingEventId(null);
    } catch (error) {
      console.error("Error submitting event:", error.message);
      toast.error("Failed to submit event. Please try again.");
    }
  };

  // Handle edit event
  const handleEditEvent = (event) => {
    setEditingEventId(event._id); // Set the ID of the event being edited
    setFormData({
      name: event.name,
      date: event.date ? event.date.split("T")[0] : "",
      time: event.time,
      description: event.description,
      location: event.location,
      organizer: event.organizer,
    });
    // setImageFile(null); // Reset file input for editing
    setShowCreateForm(true);
    toast.info("Edit the event details and click Submit.");
  };

  // Handle delete event
  const handleDeleteEvent = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await api.delete(`/events/${id}`);
        setEvents(events.filter((event) => event._id !== id));
        toast.success("Event deleted successfully!");
      } catch (error) {
        console.error("Error deleting event:", error.message);
        toast.error("Failed to delete event. Please try again.");
      }
    }
  };


  return (
    <div>
      <AdminHeader title="Events" />
      {/* Responsive main wrapper */}
      <div className="min-h-screen bg-gray-100 relative z-0">
        <div className="px-4 sm:px-6 md:px-8 py-6 w-full md:ml-64 transition-all duration-300">
          <h1 className="text-2xl font-bold mb-6 text-center md:text-left">Manage Events</h1>

          {/* Toggle Buttons */}
          <div className="flex justify-center md:justify-start mb-6 font-semibold text-lg gap-2">
            <button
              onClick={() => setShowCreateForm(true)}
              className={`px-6 py-2 rounded-l-md ${showCreateForm ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-600"} transition`}
            >
              Create
            </button>
            <button
              onClick={() => {
                setShowCreateForm(false);
                fetchAllEvents();
              }}
              className={`px-6 py-2 rounded-r-md ${!showCreateForm ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-600"} transition`}
            >
              All Events
            </button>
          </div>

          {/* Create or Edit Event Form */}
          {showCreateForm ? (
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 mb-8 max-w-lg mx-auto w-full">
              <h2 className="text-lg font-bold mb-4 text-center">
                {editingEventId ? "Edit Event" : "Create Event"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">Event Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Event Name"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                  />
                </div>
                <div className="flex gap-4 flex-col sm:flex-row">
                  <div className="flex-1">
                    <label className="block font-medium mb-1">Event Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block font-medium mb-1">Event Time</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-medium mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Organizer</label>
                  <input
                    type="text"
                    name="organizer"
                    value={formData.organizer}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Event Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md"
                    placeholder="Event Description"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition w-full"
                >
                  {editingEventId ? "Update Event" : "Create Event"}
                </button>
              </form>
            </div>
          ) : (
            // Display All Events
            <div className="bg-white shadow-md rounded-lg p-4 sm:p-6">
              <h2 className="text-lg font-bold mb-4 text-center">All Events</h2>
              {loading ? (
                <p>Loading...</p>
              ) : events.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.map((event) => (
                    <div
                      key={event._id}
                      className="border rounded-lg shadow-md p-4 bg-gray-100 flex flex-col"
                    >
                      <div className="flex justify-end gap-x-3 mb-4">
                        <button
                          onClick={() => handleEditEvent(event)}
                          className="bg-yellow-500 text-white px-4 py-1 rounded-md hover:bg-yellow-600 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteEvent(event._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                        >
                          Delete
                        </button>
                      </div>
                      {event.imagePath && (
                        <img
                          src={`${baseURL}/${event.imagePath}`}
                          alt={event.name}
                          className="w-full h-40 object-cover mb-4 rounded"
                        />
                      )}
                      <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                      <p className="text-gray-700 mb-1">
                        <strong>Date:</strong> {event.date ? event.date.split("T")[0] : "N/A"}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <strong>Time:</strong> {event.time}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <strong>Location:</strong> {event.location}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <strong>Organizer:</strong> {event.organizer}
                      </p>
                      <p className="text-gray-700">
                        <strong>Description:</strong> {event.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No events found.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;