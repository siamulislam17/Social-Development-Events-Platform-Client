import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../Auth/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageEvent = () => {
  const { user, darkMode } = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);

  useEffect(() => {
    if (user?.email) {
      axios.get(`http://localhost:3000/events/upcoming/${user.email}`)
        .then(res => setEvents(res.data))
        .catch(err => console.error(err));
    }
  }, [user]);

  const handleEdit = (eventObj) => {
    setEditEvent({ ...eventObj }); // Store selected event for editing
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedEvent = {
      ...editEvent,
      title: form.title.value,
      description: form.description.value,
      location: form.location.value,
      thumbnail: form.thumbnail.value,
      creatorEmail: editEvent.creatorEmail, // preserve email
    };

    axios.put(`http://localhost:3000/events/${editEvent._id}`, updatedEvent)
      .then(() => {
        setEditEvent(null);
        return axios.get(`http://localhost:3000/events/upcoming/${user.email}`);
      })
      .then(res => {
        setEvents(res.data);
        Swal.fire('Success!', 'Event updated successfully!', 'success');
      })
      .catch(err => Swal.fire('Error!', 'Failed to update event', 'error'));
  };

  const themeCard = darkMode ? "bg-gray-800 text-white" : "bg-base-100";
  const themeForm = darkMode ? "bg-gray-900 text-white" : "bg-base-200";

  return (
    <div className={`p-6 max-w-4xl mx-auto ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-100 text-gray-900'}`}>
      <h2 className="text-3xl font-bold mb-6 text-center">Manage Your Upcoming Events</h2>

      <div className="space-y-4">
        {events.map(ev => (
          <div key={ev._id} className={`card ${themeCard} shadow-md p-4`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-1">{ev.title}</h3>
                <p className="opacity-80 mb-2">{ev.description}</p>
                <p><span className="font-semibold">📍 Location:</span> {ev.location}</p>
                <p><span className="font-semibold">📅 Date:</span> {new Date(ev.date).toLocaleString()}</p>
              </div>
              <button onClick={() => handleEdit(ev)} className="btn btn-sm btn-outline btn-primary">Edit</button>
            </div>
          </div>
        ))}
      </div>

      {editEvent && (
        <form onSubmit={handleUpdate} className={`mt-10 ${themeForm} p-6 rounded-lg shadow-lg`}>
          <h3 className="text-xl font-bold mb-6">✏️ Edit Event</h3>

          <div className="mb-4">
            <label className="label font-semibold">Title</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name='title'
              defaultValue={editEvent.title}
              required
            />
          </div>

          <div className="mb-4">
            <label className="label font-semibold">Description</label>
            <textarea
              className="textarea textarea-bordered w-full"
              name='description'
              defaultValue={editEvent.description}
              required
            />
          </div>

          <div className="mb-4">
            <label className="label font-semibold">Location</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name='location'
              defaultValue={editEvent.location}
              required
            />
          </div>

          <div className="mb-4">
            <label className="label font-semibold">Thumbnail URL</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name='thumbnail'
              defaultValue={editEvent.thumbnail}
              required
            />
          </div>

          <div className="mb-4">
            <label className="label font-semibold">Creator Email</label>
            <input
              type="email"
              className="input input-bordered w-full bg-gray-100 text-gray-500"
              value={editEvent.creatorEmail}
              readOnly
            />
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button type="submit" className="btn btn-success">💾 Save</button>
            <button type="button" className="btn btn-ghost" onClick={() => setEditEvent(null)}>✖ Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ManageEvent;
