"use client"
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function NavbarDirectories() {
    const navigate = useNavigate()
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleMobileDropdownClick = (menuItem) => {
        if (activeDropdown === menuItem) {
            // If the same menu item is clicked again, close it
            setActiveDropdown(null);
            setDropdownVisible(false);
        } else {
            // Otherwise, open the clicked menu item and close others
            setActiveDropdown(menuItem);
            setDropdownVisible(true);
        }
    }
    const handleMouseEnter = (menuItem) => {

        setActiveDropdown(menuItem);

    };

    const handleMouseLeave = () => {

        // Use a setTimeout to delay hiding the dropdown
        hideTimeout = setTimeout(() => {
            setActiveDropdown(null);
            setDropdownVisible(false);
        }, 2000); // Change the delay time as needed (2000 milliseconds = 2 seconds)

    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleDropdownMouseEnter = () => {
        // Cancel the scheduled hide if the mouse enters the dropdown
        clearTimeout(hideTimeout);
        setActiveDropdown(activeDropdown);
    };

    const handleDropdownMouseLeave = () => {
        hideTimeout = setTimeout(() => {
            setActiveDropdown(null);
            setDropdownVisible(false);
        }, 100);
    };

    let hideTimeout;

    return (


        <nav className="bg-white text-black py-4 p-2" style={{ zIndex: 2 }}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">
                    <a href="/">
                        <img
                            className="w-20 h-20 mr-3"
                            src="/logo.png"
                            alt="Profile"
                        />
                    </a>
                </div>
                <div
                    className="lg:hidden cursor-pointer"
                    onClick={toggleMobileMenu}
                >
                    <FaBars className="w-6 h-6" />
                </div>
                <ul className={`hidden lg:flex space-x-6 ${mobileMenuOpen ? 'hidden' : ''}`}>
                    <li>
                        <a href="/" className='hover:text-[#4E7AC8] font-semibold text-lg'>Home</a>
                    </li>
                    <li
                        className={`relative group ${activeDropdown === 'administration' ? 'active-dropdown' : ''}`}
                        onMouseEnter={() => handleMouseEnter('administration')}
                        onClick={() => handleMouseEnter('administration')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <a
                            href="#"
                            className=" bg-[white] font-semibold text-lg hover:text-[#4E7AC8]"
                        >
                            Administration
                        </a>
                        {activeDropdown === 'administration' && (
                            <div
                                className="absolute left-0 mt-2 bg-white border border-gray-200 p-2 rounded-lg shadow-lg w-64"
                                onMouseEnter={handleDropdownMouseEnter}
                                onMouseLeave={handleDropdownMouseLeave}
                                style={{ zIndex: 3 }}
                            >
                                <div className='p-3 flex-col '>
                                    <a onClick={() => navigate("/VCOffice")} className="block font-semibold cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Vice Chancellor Office</a>
                                    <a onClick={() => navigate("/Registrar")} className="block font-semibold cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Registrar Office</a>
                                    <a onClick={() => navigate("/ControllerExamination")} className="block cursor-pointer font-semibold py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Controller Examination</a>
                                    <a onClick={() => navigate("/AdmissionOffice")} className="block cursor-pointer font-semibold py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Admissions Office</a>
                                </div>
                            </div>
                        )}
                    </li>
                    {/* Repeat the above structure for other menu items */}
                    <li
                        className={`relative group ${activeDropdown === 'faculties' ? 'active-dropdown' : ''}`}
                        onMouseEnter={() => handleMouseEnter('faculties')}
                        onClick={() => handleMouseEnter('faculties')}
                        onMouseLeave={handleMouseLeave}
                        style={{ zIndex: 3 }}
                    >
                        <a
                            href="#"
                            className=" bg-[white] font-semibold text-lg hover:text-[#4E7AC8]"
                        >
                            Faculties
                        </a>
                        {activeDropdown === 'faculties' && (
                            <div
                                className="absolute left-0 mt-2 bg-white border border-gray-200 p-2 rounded shadow-lg w-64"
                                onMouseEnter={handleDropdownMouseEnter}
                                onMouseLeave={handleDropdownMouseLeave}
                            >
                                <div className='p-3 flex-col '>
                                    <a onClick={() => navigate("/ComputerScience")} className="block py-2 cursor-pointer border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Computer Science</a>
                                    <a onClick={() => navigate("/SoftwareEngineering")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Software Engineering</a>
                                    <a onClick={() => navigate("/InformationTechnology")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Information Technology</a>
                                    <a onClick={() => navigate("/FoodScience")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Food Science</a>
                                    <a onClick={() => navigate("/HumanNutrition&Dietetics")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">HND</a>
                                    <a onClick={() => navigate("/BachelorofBusinessAdministration(BBA)")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Business Administration (BBA)</a>
                                    <a onClick={() => navigate("/Accounting&Finance")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Accounting & Finance</a>
                                    <a onClick={() => navigate("/Mathematics")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Mathematics</a>
                                    <a onClick={() => navigate("/Chemistry")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Chemistry</a>
                                    <a onClick={() => navigate("/Physics")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Physics</a>
                                </div>
                            </div>
                        )}
                    </li>
                    <li
                        className={`relative group ${activeDropdown === 'academics' ? 'active-dropdown' : ''}`}
                        onMouseEnter={() => handleMouseEnter('academics')}
                        onClick={() => handleMouseEnter('academics')}
                        onMouseLeave={handleMouseLeave}
                        style={{ zIndex: 3 }}
                    >
                        <a
                            href="#"
                            className=" bg-[white] font-semibold text-lg hover:text-[#4E7AC8]"
                        >
                            Academics
                        </a>
                        {activeDropdown === 'academics' && (
                            <div
                                className="absolute left-0 mt-2 bg-white border border-gray-200 p-2 rounded shadow-lg w-64"
                                onMouseEnter={handleDropdownMouseEnter}
                                onMouseLeave={handleDropdownMouseLeave}
                            >
                                <div className='p-3 flex-col '>
                                    <a onClick={() => navigate("/TimeTable")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Time Table</a>
                                    <a onClick={() => navigate("/DateSheet")} className="block py-2 cursor-pointer border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Date Sheet</a>
                                    <a onClick={() => navigate("/AcademicCalender")} className="block py-2 cursor-pointer border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Academic Calander</a>
                                    <a onClick={() => navigate("/RoadMaps")} className="block py-2 cursor-pointer border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Road Map</a>
                                    <a onClick={() => navigate("/Prospectus")} className="block py-2 cursor-pointer border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Prospectus</a>
                                    <a onClick={() => navigate("/MeritLists")} className="block py-2 cursor-pointer border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Merit List</a>
                                </div>
                            </div>
                        )}
                    </li>
                    {/* Repeat the structure for other menu items */}

                    <li>
                        <a onClick={() => navigate("/Prospectus")} className='hover:text-[#4E7AC8] cursor-pointer font-semibold text-lg'>Admissions</a>
                    </li>
                    <li>
                        <a onClick={() => navigate("/Contact")} className='hover:text-[#4E7AC8] cursor-pointer font-semibold text-lg active:text-[#4E7AC8]'>Contact</a>
                    </li>
                </ul>
            </div>
            {mobileMenuOpen && (
                <div className="lg:hidden">
                    <ul className="bg-white p-4 space-y-2">
                        <li>
                            <a href="/" className='hover:text-[#4E7AC8] font-semibold text-lg'>Home</a>
                        </li>

                        <li
                            className={`relative group ${activeDropdown === 'administration' ? 'active-dropdown' : ''}`}
                            onClick={() => handleMobileDropdownClick('administration')}
                        >
                            <button
                                className={`bg-[white] font-semibold text-lg w-full text-left hover:text-[#4E7AC8] ${activeDropdown === 'administration' ? 'text-[#4E7AC8]' : ''}`}
                            >
                                Administration
                            </button>
                            {activeDropdown === 'administration' && dropdownVisible && (
                                <div
                                    className="mt-2 bg-white border border-gray-200 p-2 rounded shadow-lg"
                                >
                                    <div className='p-3 flex-col '>
                                    <a onClick={() => navigate("/VCOffice")} className="block font-semibold cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Vice Chancellor Office</a>
                                    <a onClick={() => navigate("/Registrar")} className="block font-semibold cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Registrar Office</a>
                                    <a onClick={() => navigate("/ControllerExamination")} className="block cursor-pointer font-semibold py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Controller Examination</a>
                                    <a onClick={() => navigate("/AdmissionOffice")} className="block cursor-pointer font-semibold py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Admissions Office</a>
                                </div>
                                </div>
                            )}
                        </li>
                        <li
                            className={`relative group ${activeDropdown === 'faculties' ? 'active-dropdown' : ''}`}
                            onClick={() => handleMobileDropdownClick('faculties')}
                        >
                            <button
                                className={`bg-[white] font-semibold text-lg w-full text-left hover:text-[#4E7AC8] ${activeDropdown === 'faculties' ? 'text-[#4E7AC8]' : ''}`}
                            >
                                Faculties
                            </button>
                            {activeDropdown === 'faculties' && dropdownVisible && (
                                <div
                                    className="mt-2 bg-white border border-gray-200 p-2 rounded shadow-lg"
                                >
                                    <div className='p-3 flex-col '>
                                    <a onClick={() => navigate("/ComputerScience")} className="block py-2 cursor-pointer border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Computer Science</a>
                                    <a onClick={() => navigate("/SoftwareEngineering")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Software Engineering</a>
                                    <a onClick={() => navigate("/InformationTechnology")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Information Technology</a>
                                    <a onClick={() => navigate("/FoodScience")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Food Science</a>
                                    <a onClick={() => navigate("/HumanNutrition&Dietetics")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">HND</a>
                                    <a onClick={() => navigate("/BachelorofBusinessAdministration(BBA)")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Business Administration (BBA)</a>
                                    <a onClick={() => navigate("/Accounting&Finance")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Accounting & Finance</a>
                                    <a onClick={() => navigate("/Mathematics")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Mathematics</a>
                                    <a onClick={() => navigate("/Chemistry")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Chemistry</a>
                                    <a onClick={() => navigate("/Physics")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Physics</a>
                                </div>
                                </div>
                            )}
                        </li>
                        <li
                            className={`relative group ${activeDropdown === 'academics' ? 'active-dropdown' : ''}`}
                            onClick={() => handleMobileDropdownClick('academics')}
                        >
                            <button
                                className={`bg-[white] font-semibold text-lg w-full text-left hover:text-[#4E7AC8] ${activeDropdown === 'academics' ? 'text-[#4E7AC8]' : ''}`}
                            >
                                Academics
                            </button>
                            {activeDropdown === 'academics' && dropdownVisible && (
                                <div
                                    className="mt-2 bg-white border border-gray-200 p-2 rounded shadow-lg"
                                >
                                   <div className='p-3 flex-col '>
                                    <a onClick={() => navigate("/TimeTable")} className="block cursor-pointer py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Time Table</a>
                                    <a onClick={() => navigate("/DateSheet")} className="block py-2 cursor-pointer border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Date Sheet</a>
                                    <a onClick={() => navigate("/AcademicCalender")} className="block py-2 cursor-pointer border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Academic Calander</a>
                                    <a onClick={() => navigate("/RoadMaps")} className="block py-2 cursor-pointer border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Road Map</a>
                                    <a onClick={() => navigate("/Prospectus")} className="block py-2 cursor-pointer border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Prospectus</a>
                                    <a onClick={() => navigate("/MeritLists")} className="block py-2 cursor-pointer border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Merit List</a>
                                </div>
                                </div>
                            )}
                        </li>
                       
                        <li>
                        <a onClick={() => navigate("/Prospectus")} className='hover:text-[#4E7AC8] cursor-pointer font-semibold text-lg'>Admissions</a>
                    </li>
                    <li>
                        <a onClick={() => navigate("/Contact")} className='hover:text-[#4E7AC8] cursor-pointer font-semibold text-lg active:text-[#4E7AC8]'>Contact</a>
                    </li>
                    </ul>
                </div>
            )}
        </nav>

    )
}

export default NavbarDirectories;
