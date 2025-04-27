import React, { useState } from "react";
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
  const baseURL=(api.defaults.baseURL);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(true);

  // Fetch all events
  const fetchAllEvents = async () => {
    setLoading(true);
    try {
      const response = await api.get("/events/");
      console.log("Fetched events:", response);
      if (response.data.data && Array.isArray(response.data.data)) {
        setEvents(response.data.data);
        console.log("Events:", events[0].imageUrl);
        // toast.success("All events fetched successfully!");
      } else {
        setEvents([]);
        toast.error("No events found.");
      }
    } catch (error) {
      console.error("Error fetching events:", error.message);
      // toast.error("Failed to fetch events. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file change
  const handleFileChange = (e) => {
    console.log("Image file:", imageFile);
    setImageFile(e.target.files[0]);
  };

  // Handle form submission for creating events
  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
      if (imageFile) {
        data.append("eventImage", imageFile);
        
      }

      const response = await api.post("/events/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setEvents([...events, response.data]);
      toast.success("Event created successfully!");

      // Reset form fields
      // setFormData({
      //   name: "",
      //   date: "",
      //   time: "",
      //   description: "",
      //   location: "",
      //   organizer: "",
      // });
      setImageFile(null);
    } catch (error) {
      console.error("Error creating event:", error.message);
      toast.error("Failed to create event. Please try again.");
    }
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

  // Handle edit event
  const handleEditEvent = (event) => {
    setShowCreateForm(true);
    setFormData({
      name: event.name,
      date: event.date ? event.date.split("T")[0] : "",
      time: event.time,
      description: event.description,
      location: event.location,
      organizer: event.organizer,
    });
    setImageFile(null);
    toast.info("Edit the event details and click Submit.");
  };

  return (
    <div>
      <AdminHeader title="Events" />
      <div className="ml-64 p-6 -mt-15">
        <h1 className="text-2xl font-bold mb-6">Manage Events</h1>

        {/* Toggle Buttons */}
        <div className="flex justify-start mt-2 mb-6 font-semibold text-lg">
          <button
            onClick={() => setShowCreateForm(true)}
            className={`px-15 py-2 text-md rounded-l-md ${
              showCreateForm ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-600"
            } transition`}
          >
            Create
          </button>
          <button
            onClick={() => {
              setShowCreateForm(false);
              fetchAllEvents();
            }}
            className={`px-15 py-2 text-md rounded-r-md ${
              !showCreateForm ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-600"
            } transition`}
          >
            All Events
          </button>
        </div>

        {/* Create Event Form */}
        {showCreateForm ? (
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold mb-4">Create Event</h2>
            <form onSubmit={handleCreateEvent} className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <div>
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
              <div>
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

              {/* <div>
                <label className="block font-medium mb-1">Event Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div> */}

              <div >
                    <label className="block font-medium mb-1">Photos</label>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="w-full  px-4 py-1 border rounded-md  file:mr-4 file:py-1 file:px-4 file:h-8 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-200 file:text-blue-700 hover:file:bg-blue-500 hover:file:text-white" />
              </div>

              <div className="md:col-span-2">
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
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition md:col-span-2"
              >
                {formData._id ? "Update Event" : "Create Event"}
              </button>
            </form>
          </div>
        ) : (
          // Display All Events
          <div className=" shadow-md rounded-lg  p-6 bg-gray-300">
            <h2 className="text-lg font-bold mb-4">All Events</h2>
            {loading ? (
              <p>Loading...</p>
            ) : events.length > 0 ? (
              <div className="w-full flex justify-center ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl p-6">
                {events.map((event) => (
                  <div
                    key={event._id}
                    className="border rounded-lg shadow-md p-4 bg-gray-100"
                  >
                    <div className="flex justify-end gap-x-3 mb-4">
                      <button
                        onClick={() => handleEditEvent(event)}
                        className="bg-yellow-500 text-white px-6 py-1 rounded-md hover:bg-yellow-600 transition"
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
                    {event.imagePath && (console.log("Image URL:", event.imagePath),
                      <img
                        src={`${baseURL}/${event.imagePath}`}
                        alt={event.name}
                        className="w-full h-40 object-fill mb-4"
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
              </div>
            ) : (
              <p>No events found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;