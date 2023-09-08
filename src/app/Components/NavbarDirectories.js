"use client"
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

function NavbarDirectories() {

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
                                    <a href="/admin-page-1"  className="block font-semibold py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Admin Page 1</a>
                                    <a href="/admin-page-2" className="block font-semibold py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Admin Page 2</a>
                                    <a href="/admin-page-3"  className="block font-semibold py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Admin Page 3</a>
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
                                    <a href="/admin-page-1"  className="block py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Admin Page 1</a>
                                    <a href="/admin-page-2" className="block py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Admin Page 2</a>
                                    <a href="/admin-page-3"  className="block py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Admin Page 3</a>
                                </div>
                            </div>
                        )}
                    </li>
                    {/* Repeat the structure for other menu items */}
                    <li>
                        <a href="/directories" className='hover:text-[#4E7AC8] font-semibold text-lg'>Directories</a>
                    </li>
                    <li>
                        <a href="/admissions" className='hover:text-[#4E7AC8] font-semibold text-lg'> Admissions</a>
                    </li>
                    <li>
                        <a href="/merit-list" className='hover:text-[#4E7AC8] font-semibold text-lg'>Merit List</a>
                    </li>
                    <li>
                        <a href="/downloads" className='hover:text-[#4E7AC8] font-semibold text-lg'>Downloads</a>
                    </li>
                    <li>
                        <a href="/contact" className='hover:text-[#4E7AC8] font-semibold text-lg active:text-[#4E7AC8]'>Contact</a>
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
                                    <a href="/admin-page-1"  className="block font-semibold py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Admin Page 1</a>
                                    <a href="/admin-page-2" className="block font-semibold py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Admin Page 2</a>
                                    <a href="/admin-page-3"  className="block font-semibold py-2 border-b rounded-lg border-gray-300 hover:text-[white] hover:bg-[#4E7AC8] p-1">Admin Page 3</a>
                                </div>
                            </div>
                        )}
                    </li>
                        {/* Repeat the above structure for other menu items */}
                        <li
                            className={`relative group ${activeDropdown === 'faculties' ? 'active-dropdown' : ''}`}
                           onClick={() => handleMobileDropdownClick('faculties')}
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
                                    {/* Dropdown content */}
                                    <a href="/faculty-page-1">Faculty Page 1</a>
                                    <a href="/faculty-page-2">Faculty Page 2</a>
                                </div>
                            )}
                        </li>
                        {/* Repeat the structure for other menu items */}
                        <li>
                            <a href="/directories" className='hover:text-[#4E7AC8] font-semibold text-lg'>Directories</a>
                        </li>
                        <li>
                            <a href="/admissions" className='hover:text-[#4E7AC8] font-semibold text-lg'> Admissions</a>
                        </li>
                        <li>
                            <a href="/merit-list" className='hover:text-[#4E7AC8] font-semibold text-lg'>Merit List</a>
                        </li>
                        <li>
                            <a href="/downloads" className='hover:text-[#4E7AC8] font-semibold text-lg'>Downloads</a>
                        </li>
                        <li>
                            <a href="/contact" className='hover:text-[#4E7AC8] font-semibold text-lg active:text-[#4E7AC8]'>Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>

    )
}

export default NavbarDirectories;
