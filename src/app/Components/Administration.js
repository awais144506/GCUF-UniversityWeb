import React from 'react';
import { FaGraduationCap, FaEnvelope } from 'react-icons/fa';

function Administration() {
  return (
    <div className="container mx-auto mt-16 mb-60 px-4">
      <h3 className='flex items-center justify-center text-blue-500 text-lg font-semibold mb-4'>
        <FaGraduationCap className="mr-2 text-center" />
        Video Message
      </h3>
      <h2 className="text-3xl font-bold text-center mb-8">Administration</h2>
      <div className="flex justify-center items-center flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <video className="w-full" width="320" height="240" controls>
            <source src="/gcuf.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex-col w-full space-y-10 md:w-1/2 md:space-y-4 md:space-x-4">
          <div className="w-full bg-white p-4 rounded-lg shadow-md md:ml-4">
            <h3 className="text-xl font-bold mb-2">Media Gallery</h3>
            <h4 className="font-semibold">Muhammad Awais</h4>
            <p>Focal Person for Media Affairs For matters pertaining to media.</p>
            <div className="flex items-center mb-2">
              <FaEnvelope className="font-bold mr-2" />
              <p className="font-semibold"> media@gcufswl.edu.pk</p>
            </div>
          </div>
          <div className="w-full bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Enrolled Students</h3>
            <p>For queries related to enrolled students.</p>
            <div className="flex items-center mb-2">
              <FaEnvelope className="font-bold mr-2" />
              <p className="font-semibold">dsa@gcufswl.edu.pk</p>
            </div>
          </div>
          <div className="w-full bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Admission Help Desk</h3>
            <p>For queries related to admissions</p>
            <div className="flex items-center mb-2">
              <FaEnvelope className="font-bold mr-2" />
              <p className="font-semibold">admissions@gcufswl.edu.pk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Administration;
