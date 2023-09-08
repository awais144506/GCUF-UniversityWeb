"use client"
import React, { useState } from 'react';

function VCMessage() {
  const [showFullMessage, setShowFullMessage] = useState(false);

  const toggleMessage = () => {
    setShowFullMessage(!showFullMessage);
  }

  return (
    <div className="flex bg-white rounded-lg shadow-xl p-6 sm:p-10 flex-col items-center mx-auto max-w-[80%] sm:w-full">
      <div className="mb-6">
        <img className="rounded-full h-32 w-32 sm:h-40 sm:w-40" src="/Vc.jpg" alt="VC" />
      </div>
      <div className="flex flex-col text-center">
        <div className="font-bold text-xl mb-2 text-blue-500">Dr. Nasir Amin</div>
        <div className="text-gray-700 text-lg font-semibold mb-2">Vice Chancellor</div>
        <div className="text-blue-900 text-lg text-justify">
          <p>
            Government College University Faisalabad is a dynamic seat of learning aspiring to provide highly stimulating and conducive academic environments for quality research, formal education and professional growth. In the recent years, the university has achieved phenomenal success in research contribution and in improving the quality of education which is reflected through the meteoric rise of the institution in HEC ranking from 59th to its 7th position,resulting in growing confidence of civil society and business community of the region.{'\n'}
            {showFullMessage ? (
              <>
                 <br />This university is striving for academic and cultural excellence by living up to the international standards of education. We offer innovative syllabi encompassing the latest trends and approaches in the field's higher education. Our curricula inculcate creativity, objectivity and critical thinking, impart values of commitment and singleness of purpose to learning and professionalism and promote confidence, adaptability and high level communication skills in students to ensure success of our graduates in this highly competitive and challenging global world order.
                 We are for inter-disciplinary approach and social cohesion. We offer a wide range of courses in the fields of Natural and Physical Sciences, Information Technology, Engineering, Food and Home Sciences, and Medical Sciences in addition to others to cater the diverse needs of social and industrial sectors of this region. 
                <button className="text-blue-500 underline" onClick={()=>setShowFullMessage(false)}>
                   Read Less...
                </button>
              </>
            ) : (
              <>
                ...{' '}
                <button className="text-blue-500 underline" onClick={toggleMessage}>
                  Read More...
                </button>
               
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VCMessage;
