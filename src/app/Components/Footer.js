import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaLocationArrow } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className="bg-[#244989] text-white py-8">
        <div className="container mx-auto flex flex-col p-4 md:flex-row justify-between gap-10">
          {/* Column 1 - About Us */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2 border-b-2">About Us</h3>
            <p className='text-justify w-full md:w-[450px]'>Government College University, Faisalabad has emerged as a leading center of learning and research in a short span of time. The University with its dynamic faculty and innovative syllabi has become a catalyst of intellectual, social and industrial change. It caters to the diverse needs of society by imparting education in almost all the major fields of learning.</p>
            <div className="flex mt-2">
              <a href="https://www.facebook.com/OfficialGCUFSahiwalCampus/" className="mr-4">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="https://www.instagram.com/gcuf_sahiwalcampus/">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
          {/* Column 2 - Our Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2 border-b-2">Our Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Services</a></li>
              {/* Add more links here */}
            </ul>
          </div>

          {/* Column 3 - Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-2 border-b-2">Contact Us</h3>
            <div className="flex items-center mb-2">
              <FaPhone />
              <p className="ml-2">+92-300-0505105</p>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope />
              <p className="ml-2">admin@gcuf.com</p>
            </div>
            <div className="flex items-center">
              <FaLocationArrow />
              <p className="ml-2">GCUF, Sahiwal Campus <br /> Pakpattan Road, Sahiwal</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="text-center">
        <p>Copyright © 2023. All rights reserved.</p>
        <div className="flex items-center justify-center">
          <a href="https://www.instagram.com/awais144506/" className="flex items-center text-[#4E7AC8] font-semibold">
            <p className="mr-2">Muhammad Awais</p>
            <FaInstagram className="text-[#4E7AC8]" size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
