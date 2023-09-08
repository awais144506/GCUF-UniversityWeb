import React from 'react';
import EventCard from './EventCard';
import { FaGraduationCap } from 'react-icons/fa';

const Events = () => {
  const events = [
    {
      title: 'Event 1',
      description: 'Description of Event 1...',
      date: '12-Sep',
      imageUrl: '/event1.jpg',
    },
    {
      title: 'Event 2',
      description: 'Description of Event 2...',
      date: '13-Sep',
      imageUrl: '/event2.jpg',
    },
    {
      title: 'Event 2',
      description: 'Description of Event 2...',
      date: '13-Sep',
      imageUrl: '/event3.jpg',
    },
    // Add more events as needed
  ];

  return (
    <div className="container mx-auto mb-40 mt-40">
      <div className="text-center my-8">
        <h3 className='flex items-center justify-center text-blue-500 text-lg font-semibold'>
          <FaGraduationCap className="mr-2" />
          Events Gallery
        </h3>
        <h2 className="text-3xl font-bold mb-4">Our Events</h2>
        <div className="flex flex-wrap justify-center md:flex-row sm:flex-col">
          {events.map((event, index) => (
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
      <button className="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded" type='button'>
        All Events
      </button>
    </div>
  );
}

export default Events;
