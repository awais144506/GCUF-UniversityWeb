import Footer from "../Components/Footer";
import NavbarDirectories from "../Components/NavbarDirectories";
import React, { useState, useEffect } from 'react';
import EventCard from "../Components/EventCard";
import { FaGraduationCap } from 'react-icons/fa';
import { db, storage } from "../../../appwrite";


function AllEvents() {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    const fetchDataAndPreviews = async () => {
      try {
        // Step 1: Fetch documents
        const documentResponse = await db.listDocuments("6506cf5aa359dba589cb", "6506cf6a19897b111c76");

        // Step 2: Fetch previews for each document
        const previewPromises = documentResponse.documents.map(async document => {
          const documentId = document["$id"];
          const preview = await storage.getFilePreview("6506cff041f958b67dca", documentId);
          return { document, preview }; // Pair the document and its preview
        });

        const previews = await Promise.all(previewPromises);
        const validPreviews = previews.filter(pair => pair.preview !== null);

        setDocuments(validPreviews); // Update state with valid previews
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDataAndPreviews();
  }, []);



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
          {documents.slice().reverse().map((pair, index) =>  (
          <div key={index} className="w-full md:w-1/3 sm:w-full p-2">
            <EventCard
              title={pair.document.heading}
              description={pair.document.description}
              date={pair.document.date}
              imageUrl={pair.preview}
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
