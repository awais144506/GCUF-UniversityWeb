import React from 'react';
import EventCard from './EventCard';
import { FaGraduationCap } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { events } from '../Pages/AllEvents';
const Events = () => {
  const navigate = useNavigate()
 
  const firstThreeEvents = events.slice(0,3)
  const handleClick = (e) => {
    e.preventDefault()
    navigate("/AllEvents");
  };

  return (
    <div className="container mx-auto mb-40 mt-40">
      <div className="text-center my-8">
        <h3 className='flex items-center justify-center text-blue-500 text-lg font-semibold'>
          <FaGraduationCap className="mr-2" />
          Events Gallery
        </h3>
        <h2 className="text-3xl font-bold mb-4">Our Events</h2>
        <div className="flex flex-wrap justify-center md:flex-row sm:flex-col">
          {firstThreeEvents.map((event, index) => (
            
            <div key={index} className="w-full md:w-1/3 sm:w-full p-2">
              <EventCard
                title={event.title}
                description={event.description}
                date={event.date}
                imageUrl={event.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>

      <button onClick={handleClick} className="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
        All Events
      </button>
    </div>
  );
}

export default Events;
