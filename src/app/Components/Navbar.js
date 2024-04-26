"use client"
import { FaInstagram, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";
import Carousel from './Crousel';
import NavbarDirectories from './NavbarDirectories';
const Navbar = () => {

    return (
        <div>
            <div className="md:flex md:space-x-2 items-center justify-center">
                <p className="flex items-center justify-center md:flex-row md:items-center md:space-x-2">
                    <span className="md:inline-block mr-2 font-semibold">Developed By:</span>
                    <a href="https://www.instagram.com/awais144506/" className="flex items-center text-[#4E7AC8] font-semibold">
                        Muhammad Awais <FaInstagram size={26} className="ml-1" />
                    </a>

                </p>
                <p className="flex items-center justify-center md:flex-row md:items-center md:space-x-2">

                    <a href="https://www.instagram.com/awais144506/" className="flex items-center text-[#4E7AC8] font-semibold">
                        & Abdul Manaf
                    </a>
                </p>
                <p className="flex items-center justify-center md:flex-row md:items-center md:space-x-2 mt-1 md:mt-0">
                    <span className="md:inline-block mr-2 font-semibold">Designed By:</span>
                    <a href="#" className="flex items-center text-[#dd4f4f] font-semibold">
                        Eman Khadim
                    </a>
                </p>
            </div>
            <div className="bg-[#4E7AC8] text-white flex justify-between items-center p-3">
                <div className="">
                    <p className="flex flex-col items-center justify-center md:flex-row md:items-center md:space-x-2">

                        <span className="hidden md:inline-block mr-2 font-semibold">Follow us on:</span>
                        <a href="https://www.facebook.com/OfficialGCUFSahiwalCampus/" ><FaFacebook size={24} /></a>
                        <a href="https://www.instagram.com/gcuf_sahiwalcampus/"><FaInstagram size={26} /></a>
                    </p>
                </div>
                <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-2">
                    <div className="flex items-center">
                        <FaPhone />
                        <p className="font-semibold mr-2 ml-2">+92-300-0505105</p>
                    </div>
                    <div className="flex items-center">
                        <FaEnvelope />
                        <p className="font-semibold ml-2 ">admin@gcuf.com</p>
                    </div>
                </div>
            </div>
            <NavbarDirectories />
            <Carousel />
        </div>
    );
};

export default Navbar;
