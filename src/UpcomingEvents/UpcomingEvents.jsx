import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import AuthContext from '../Auth/AuthContext';

const UpcomingEvents = () => {
    const {darkMode} = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  console.log("events", events);

  useEffect(() => {
    axios.get('http://localhost:3000/events/upcoming')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <h1 className="text-3xl font-bold mb-4 text-center  md:pt-20">Upcoming Events</h1>
        <div className="grid md:grid-cols-3 gap-6 p-8">
            {events.map(event => (
                <div key={event._id} className={`card ${darkMode ? 'bg-gray-800 p-7 shadow-2xl text-white' : 'bg-white text-gray-900'} shadow-xl p-4 rounded-xl`}>
                <img src={event.thumbnail} alt={event.title} className="rounded-lg h-48 w-full object-cover"/>
                <h2 className="text-xl font-bold mt-3">{event.title}</h2>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Type:</strong> {event.type}</p>
                <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
                <Link to={`/event/${event._id}`}>
                    <button className="btn btn-primary w-full mt-3">View Event</button>
                </Link>
                </div>
            ))}
            </div>
    </div>
  );
};

export default UpcomingEvents;
