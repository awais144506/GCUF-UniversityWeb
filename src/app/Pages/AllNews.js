import React from "react";
import Footer from "../Components/Footer";
import NavbarDirectories from "../Components/NavbarDirectories";
import { FaGraduationCap } from 'react-icons/fa';

export const NewsData = [
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
  {
    heading: "Fall Semester 2023",
    description: "Semester is starting from 04-09-2023",
  },
  {
    heading: "Fall Semester 2023",
    description: "Semester is starting from 04-09-2023",
  },
];

function AllNews() {
    return (
        <>
          <NavbarDirectories />
          <div className="container mx-auto mb-40 mt-40">
            <h3 className='flex items-center justify-center text-blue-500 text-lg font-semibold'>
              <FaGraduationCap className="mr-2 text-center" />
              Latest
            </h3>
            <h2 className="text-3xl font-bold mb-4 text-center">News & Notices</h2>
            <div className="flex flex-wrap justify-between mt-10 p-4">
              {NewsData.map((news, index) => (
                <div
                  key={index}
                  className="group flex-basis-0 w-full md:flex-basis-48 bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-500 hover:text-white mb-4"
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
          </div>
          <Footer />
        </>
      )
}

export default AllNews;
