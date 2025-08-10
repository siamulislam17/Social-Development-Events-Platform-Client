import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Auth/AuthContext';
import axios from 'axios';

const JoinPage = () => {
  const { user, darkMode, loading, setLoading } = useContext(AuthContext); // get logged-in user
  const [userJoinedEvents, setUserJoinedEvents] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  

   useEffect(() => {
    if (user?.email) {
      axios.get(`https://social-development-events-platform.vercel.app/joined-events?email=${user.email}`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
        .then(res => setUserJoinedEvents(res.data))
        .catch(err => console.error('Error fetching joined events:', err));
    }
  }, [user?.email]);

    
    useEffect(() => {
  if (userJoinedEvents.length > 0) {
    axios.get(`https://social-development-events-platform.vercel.app/events`)
      .then(res => {
        const filteredEvents = res.data.filter(event =>
          userJoinedEvents.some(joinedEvent => joinedEvent.eventId === event._id.toString())
        );
        setDisplayData(filteredEvents);
        setLoading(false); 
      })
      .catch(err => console.error('Error fetching events:', err));
  }
}, [userJoinedEvents]);


if (!displayData.length) {
    return <div className='flex justify-center items-center h-screen'><span className="loading loading-bars loading-xl"></span></div>
  }

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-blue-100 text-black'} p-4 py-16`}>
      <h2 className="text-2xl font-bold mb-4">My Joined Events</h2>
      {
        loading ? (
          <span className="loading loading-bars h-screen mx-auto  loading-2xl"></span>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayData.map(event => (
              <div key={event._id} className={`shadow-lg p-6 py-7 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}>
                <img src={event.thumbnail} alt={event.title} className="w-full h-48 object-cover mb-2 rounded" />
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Type:</strong> {event.type}</p>
                <p><strong>Date:</strong> {new Date(event.date).toLocaleString()}</p>
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
};

export default JoinPage;
