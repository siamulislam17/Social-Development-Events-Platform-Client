import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Auth/AuthContext';
import axios from 'axios';

const JoinPage = () => {
  const { user, darkMode } = useContext(AuthContext); // get logged-in user
  const [userJoinedEvents, setUserJoinedEvents] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  

   useEffect(() => {
    if (user?.email) {
      axios.get(`http://localhost:3000/joined-events?email=${user.email}`)
        .then(res => setUserJoinedEvents(res.data))
        .catch(err => console.error('Error fetching joined events:', err));
    }
  }, [user?.email]);

    
    useEffect(() => {
  if (userJoinedEvents.length > 0) {
    axios.get(`http://localhost:3000/events`)
      .then(res => {
        const filteredEvents = res.data.filter(event =>
          userJoinedEvents.some(joinedEvent => joinedEvent.eventId === event._id.toString())
        );
        setDisplayData(filteredEvents);
      })
      .catch(err => console.error('Error fetching events:', err));
  }
}, [userJoinedEvents]);


  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} p-4`}>
      <h2 className="text-2xl font-bold mb-4">My Joined Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayData.map(event => (
          <div key={event._id} className={`shadow-lg p-4 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <img src={event.thumbnail} alt={event.title} className="w-full h-48 object-cover mb-2 rounded" />
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Type:</strong> {event.type}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinPage;
