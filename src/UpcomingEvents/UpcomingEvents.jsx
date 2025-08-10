import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import AuthContext from '../Auth/AuthContext';

const UpcomingEvents = () => {
    const {darkMode,loading,setLoading} = useContext(AuthContext);
  const [events, setEvents] = useState([]);
  console.log("events", events);

  useEffect(() => {
    axios.get('https://social-development-events-platform.vercel.app/events/upcoming')
      .then(res => setEvents(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [setLoading]);

  return (
    <div className={`py-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-100 text-gray-900'}`}>
        <h1 className="text-3xl font-bold mb-4 text-center  md:pt-20">Upcoming Events</h1>
        {
          loading ? (
            <span className="loading loading-bars h-screen mx-auto  loading-xl"></span>
          ) : (
            <div className="grid md:grid-cols-3 gap-6 p-8">
            {events.map(event => (
                <div
                    key={event._id}
                    className={`card p-6 rounded-xl shadow-xl transition-all duration-300 ${
                      darkMode
                        ? 'bg-gray-800 text-white shadow-2xl'
                        : 'bg-gradient-to-br from-blue-50 via-white to-cyan-100 text-gray-900'
                    }`}
                  >
                <img src={event.thumbnail} alt={event.title} className="rounded-lg h-48 w-full object-cover"/>
                <h2 className="text-xl font-bold mt-3">{event.title}</h2>
                <p><strong>Type:</strong> {event.type}</p>
                <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
                <Link to={`/event/${event._id}`}>
                    <button 
                    className="bg-accent hover:bg-accent/80 hover:shadow-2xl rounded-2xl py-1.5 text-white font-semibold w-full mt-3">
                      View Event
                      </button>
                </Link>
                </div>
            ))}
            </div>
          )
          
        }
    </div>
  );
};

export default UpcomingEvents;
