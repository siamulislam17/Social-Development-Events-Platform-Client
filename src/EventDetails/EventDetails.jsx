import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import AuthContext from '../Auth/AuthContext';
import Swal from 'sweetalert2';

const EventDetails = () => {
   
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const { user, darkMode } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`http://localhost:3000/events/${id}`)
      .then(res => setEvent(res.data));
  }, [id]);

  const handleJoin = () => {
    const joinData = {
      eventId: id,
      userEmail: user?.email,
      joinedAt: new Date(),
    };

    axios.post('http://localhost:3000/joined-events', joinData)
      .then(() => {
        Swal.fire({
          title: 'Success',
          text: 'You have successfully joined the event!',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      })
      .catch(
        Swal.fire({
          title: 'Error',
          text: 'Failed to join the event. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK',
        })
      );
  };

  if (!event) return <div>Loading...</div>;

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-base-100 text-gray-900'}   flex items-center justify-center`}>
        <div className={`max-w-3xl my-10 shadow-2xl mx-auto p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-base-200 text-gray-900'} rounded-xl shadow-md`}>
            <img src={event.thumbnail} className="w-full h-64 object-cover rounded-lg" />
            <h1 className="text-3xl font-bold my-4">{event.title}</h1>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Type:</strong> {event.type}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
            <p className="mt-4">{event.description}</p>
            <button onClick={handleJoin} className="btn btn-success mt-6 w-full">Join Event</button>
            </div>
    </div>
  );
};

export default EventDetails;
