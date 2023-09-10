import Footer from "../Components/Footer"
import NavbarDirectories from "../Components/NavbarDirectories"
import React from 'react';
import EventCard from "../Components/EventCard";
import { FaGraduationCap } from 'react-icons/fa';
export const events = [
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
  {
    title: 'Event 2',
    description: 'Description of Event 2...',
    date: '13-Sep',
    imageUrl: '/event3.jpg',
  },
  {
    title: 'Event 2',
    description: 'Description of Event 2...',
    date: '13-Sep',
    imageUrl: '/event3.jpg',
  },
  {
    title: 'Event 2',
    description: 'Description of Event 2...',
    date: '13-Sep',
    imageUrl: '/event3.jpg',
  },
];
function AllEvents() {

 
  return (
    <div>
      <NavbarDirectories />
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
      </div>
      
      <Footer />
    </div>
  );
}

export default AllEvents;