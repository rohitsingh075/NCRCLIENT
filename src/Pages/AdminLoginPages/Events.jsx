import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminHeader from "../../Components/AdminHeader";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    description: "",
    location: "",
    organizer: "",
    imageUrl: "",
  });
  const [editingEventId, setEditingEventId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all events
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/events");
      if (response.data && Array.isArray(response.data.events)) {
        setEvents(response.data.events);
      } else {
        setEvents([]);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission for creating or editing events
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingEventId) {
        await axios.put(`/api/events/${editingEventId}`, formData);
        alert("Event updated successfully!");
      } else {
        await axios.post("/api/events", formData);
        alert("Event created successfully!");
      }
      setFormData({
        name: "",
        date: "",
        time: "",
        description: "",
        location: "",
        organizer: "",
        imageUrl: "",
      });
      setEditingEventId(null);
      fetchEvents();
    } catch (error) {
      console.error("Error submitting event:", error);
    }
  };

  // Handle edit button click
  const handleEdit = (event) => {
    setEditingEventId(event._id);
    setFormData({
      name: event.name,
      date: event.date.split("T")[0],
      time: event.time,
      description: event.description,
      location: event.location,
      organizer: event.organizer,
      imageUrl: event.imageUrl,
    });
  };

  // Handle delete button click
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await axios.delete(`/api/events/${id}`);
        alert("Event deleted successfully!");
        fetchEvents();
      } catch (error) {
        console.error("Error deleting event:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div>
        <AdminHeader /> {/* Reusable Header component */}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-6">Manage Events</h1>

        {/* Event Form */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold mb-4">
            {editingEventId ? "Edit Event" : "Create Event"}
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Event Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Event Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="block font-medium mb-1">
                Event Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                placeholder="Event Date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="block font-medium mb-1">
                Event Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                placeholder="Event Time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label htmlFor="location" className="block font-medium mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="organizer" className="block font-medium mb-1">
                Organizer
              </label>
              <input
                type="text"
                id="organizer"
                name="organizer"
                placeholder="Organizer"
                value={formData.organizer}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="imageUrl" className="block font-medium mb-1">
                Image URL (optional)
              </label>
              <input
                type="file"
                id="imageUrl"
                name="imageUrl"
                placeholder="Image URL (optional)"
                value={formData.imageUrl}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="description" className="block font-medium mb-1">
                Event Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Event Description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition md:col-span-2"
            >
              {editingEventId ? "Update Event" : "Create Event"}
            </button>
          </form>
        </div>

        {/* Events List */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">All Events</h2>
          {loading ? (
            <p>Loading...</p>
          ) : events.length > 0 ? (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Date</th>
                  <th className="border border-gray-300 px-4 py-2">Time</th>
                  <th className="border border-gray-300 px-4 py-2">Location</th>
                  <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event._id}>
                    <td className="border border-gray-300 px-4 py-2">{event.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{event.date.split("T")[0]}</td>
                    <td className="border border-gray-300 px-4 py-2">{event.time}</td>
                    <td className="border border-gray-300 px-4 py-2">{event.location}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        onClick={() => handleEdit(event)}
                        className="text-blue-600 hover:underline mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(event._id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No events found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;