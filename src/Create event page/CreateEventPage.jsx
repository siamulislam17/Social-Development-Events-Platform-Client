import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router';
import AuthContext from '../Auth/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';

const CreateEventPage = () => {
  const { user, darkMode } = useContext(AuthContext);
  const [date, setDate] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const type = form.type.value;
    const thumbnail = form.thumbnail.value;
    const location = form.location.value;

   
    const eventData = {
    title,
    description,
    type,
    thumbnail,
    location,
    date: date?.toISOString(),
    creatorEmail: user?.email,
  };

    try {
        const res = await axios.post('http://localhost:3000/events', eventData);
        if (res.data.insertedId || res.data.acknowledged) {
        Swal.fire('Success!', 'Event created successfully!', 'success');
        navigate('/'); // Or navigate to your event list page
        } else {
        throw new Error('Event creation failed');
        }
    } catch (err) {
        console.error(err);
        Swal.fire('Error!', 'Failed to create event', 'error');
    }
};

  const inputStyle = `input input-bordered w-full  ${darkMode ? 'bg-gray-100 text-gray-800 placeholder-gray-700' : ''}`;
  const textareaStyle = `textarea textarea-bordered w-full ${darkMode ? 'bg-gray-100 text-gray-900 placeholder-gray-700' : ''}`;
  const selectStyle = `select select-bordered w-full ${darkMode ? 'bg-gray-100 text-gray-900' : ''}`;

  return (
    <div className={`mx-auto p-6 shadow-2xl  transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-2xl md:mt-8 font-bold mb-6 text-center">Create New Event</h2>

      <form onSubmit={handleSubmit} className={`md:w-1/2 mx-auto py-8 md:py-16 md:px-16 space-y-5 p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-base-200'} shadow-2xl my-15`}>
        <label className="block mb-2 font-medium">Event Title</label>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          className={inputStyle}
          required
        />
        <label  className="block mb-2 font-medium">Event Description</label>
        <textarea
          name="description"
          placeholder="Event Description"
          className={textareaStyle}
          required
        ></textarea>

        <label className="block mb-2 font-medium">Event Type</label>
        <select name="type" className={selectStyle} required>
          <option value="" disabled>Select Event Type</option>
          <option value="Cleanup">Cleanup</option>
          <option value="Plantation">Plantation</option>
          <option value="Donation">Donation</option>
        </select>

        <label className="block mb-2 font-medium">Thumbnail Image URL</label>
        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail Image URL"
          className={inputStyle}
          required
        />

        <label className="block mb-2 font-medium">Event Location</label>
        <input
          type="text"
          name="location"
          placeholder="Event Location"
          className={inputStyle}
          required
        />

        <div>
          <label className="block mb-2 font-medium">Event Date</label>
          <DatePicker
            selected={date}
            onChange={(selectedDate) => setDate(selectedDate)}
            minDate={new Date()}
            showTimeSelect
            dateFormat="Pp"
            className={`input input-bordered w-full  px-12 ${darkMode ? 'bg-gray-100 text-gray-800 placeholder-gray-700' : ''}`}
            placeholderText="Select event date and time"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEventPage;
