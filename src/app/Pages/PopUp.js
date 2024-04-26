import { useState } from 'react';

const DisclaimerPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem('popupClosed', 'true');
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 p-8">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[1000px]">
            <h2 className="text-lg font-bold mb-4 text-center text-red-500">Disclaimer</h2>
            <p className="mb-4 text-justify">This website is a Final Year Project created by Student <span className='text-red-500'>Muhammad Awais</span>, featuring dummy data sourced from GCUF Sahiwal. It is important to note that this website <span className='text-red-500'>is not an official platform of GCUF Sahiwal.</span> All logos, faculty public images, and other content utilized within this project have been obtained with explicit permission from the respective authorities, including the head of department.

The project encompasses a Student Portal, Admin Portal, Faculty Portal, and Website, all of which contain simulated university-related content.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded " onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default DisclaimerPopup;
