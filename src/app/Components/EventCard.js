import React from 'react';
import Image from 'next/image';

const EventCard = ({ title, description, date, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4 relative  cursor-pointer">
      <div className="absolute top-0 left-0 bg-blue-500 text-white p-2" >
        {date}
      </div>
      <Image src={imageUrl} alt={title} width={400} height={200}/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </div>
  );
}

export default EventCard;
