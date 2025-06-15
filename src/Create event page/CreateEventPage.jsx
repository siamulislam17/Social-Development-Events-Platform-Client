import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router';
import AuthContext from '../Auth/AuthContext';
import Swal from 'sweetalert2';

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
      date,
      creatorEmail: user.email,
    };

    console.log('Event Data:', eventData);
  };

  const inputStyle = `input input-bordered w-full  ${darkMode ? 'bg-gray-100 text-gray-800 placeholder-gray-700' : ''}`;
  const textareaStyle = `textarea textarea-bordered w-full ${darkMode ? 'bg-gray-100 text-gray-900 placeholder-gray-700' : ''}`;
  const selectStyle = `select select-bordered w-full ${darkMode ? 'bg-gray-100 text-gray-900' : ''}`;

  return (
    <div className={`mx-auto p-6 shadow-2xl  transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-2xl font-bold mb-6 text-center">Create New Event</h2>

      <form onSubmit={handleSubmit} className={`space-y-5 p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-base-200'} shadow-2xl my-15`}>
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          className={inputStyle}
          required
        />

        <textarea
          name="description"
          placeholder="Event Description"
          className={textareaStyle}
          required
        ></textarea>

        <select name="type" className={selectStyle} required>
          <option value="" disabled>Select Event Type</option>
          <option value="Cleanup">Cleanup</option>
          <option value="Plantation">Plantation</option>
          <option value="Donation">Donation</option>
        </select>

        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail Image URL"
          className={inputStyle}
          required
        />

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
