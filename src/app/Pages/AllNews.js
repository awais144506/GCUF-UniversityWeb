import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import NavbarDirectories from "../Components/NavbarDirectories";
import { FaGraduationCap } from 'react-icons/fa';
import { db } from "../../../appwrite";

function AllNews() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await db.listDocuments("6506cf5aa359dba589cb","6506d0011351ee9de1ef");
        setDocuments(response.documents);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchData();
  }, []);

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
          {documents.reverse().map((document) => (
            <div
              key={document["$id"]}
              className="group flex-basis-0 w-full md:flex-basis-48 bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-500 hover:text-white mb-4"
            >
               <p className="text-gray-700 mb-2 font-semibold group-hover:text-white">
              {document.date}
            </p>
              <h2 className="text-xl font-bold mb-4">{document["heading"]}</h2>
              <p className="text-gray-700 mb-6 group-hover:text-white">
                {document["description"]}
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
  );
}

export default AllNews;
