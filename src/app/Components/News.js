import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

function News() {
  const NewsData = [
    {
      heading: "Fall Semester 2023",
      description: "Semester is starting from 04-09-2023",
    },
    {
      heading: "Fall Semester 2023",
      description: "Semester is starting from 04-09-2023",
    },
    {
      heading: "Fall Semester 2023",
      description: "Semester is starting from 04-09-2023",
    },
    {
      heading: "Fall Semester 2023",
      description: "Semester is starting from 04-09-2023",
    },
  ];

  return (
    <div className="container mx-auto mb-40 mt-40">
      <h3 className='flex items-center justify-center text-blue-500 text-lg font-semibold'>
        <FaGraduationCap className="mr-2 text-center" />
        Latest
      </h3>
      <h2 className="text-3xl font-bold mb-4 text-center">News & Notices</h2>
      <div className="flex flex-wrap justify-center mt-10  space-y-4 md:space-y-0 p-4">
        {NewsData.map((news, index) => (
          <div
            key={index}
            className="group w-full md:w-72 bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-500 hover:text-white"
          >
            <h2 className="text-xl font-bold mb-4">{news.heading}</h2>
            <p className="text-gray-700 mb-6 group-hover:text-white">
              {news.description}
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
              Read More
            </button>
          </div>
        ))}
      </div>
      <button className="block mx-auto mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded" type='button'>
        All News
      </button>
    </div>
  );
}

export default News;
