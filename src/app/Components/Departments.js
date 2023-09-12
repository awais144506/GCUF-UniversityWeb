import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
function Departments() {
    const navigate = useNavigate()
    const departmentData = [
        {
            name: "Computer Science",
            image: "/CS.png",
            description:"BS CS (4 Years)\n ADP CS (2 Years)",
        },
        {
            name: "Software Engineering",
            image: "/SE.jpg",
            description:"BS SE (4 Years)",
        },
        {
            name: "Information Technology",
            image: "/IT.jpg",
            description:"BS IT (4 Years)",
        },
        {
            name: "Food Science",
            image: "/Food.jpg",
            description:"BS FS (4 Years)",
        },
        {
            name: "Human Nutrition & Dietetics",
            image: "/HND.jpg",
            description:"BS HND (4 Years)",
        },
        {
            name: "Bachelor of Business Administration (BBA)",
            image: "/BBA.png",
            description:"BBA (4 Years)",
        },
        {
            name: "Accounting & Finance",
            image: "/Accounts.jpg",
            description:"BS AF (4 Years)",
        },
        {
            name: "Mathematics",
            image: "/Math.png",
            description:"BS Math (4 Years)",
        },
        {
            name: "Chemistry",
            image: "/Chem.jpeg",
            description:"BS Chem (4 Years)",
        },
        {
            name: "Physics",
            image: "/Physics.jpg",
            description:"BS Phy (4 Years)",
        },
    ];

    return (
        <div  className="container mx-auto mb-40 mt-40">
            <h3 className='flex items-center justify-center text-blue-500 text-lg font-semibold'>
                <FaGraduationCap className="mr-2 text-center" />
                Programs
            </h3>
            <h2 className="text-3xl font-bold mb-4 text-center">Departments</h2>
            <div className="flex flex-wrap justify-center mt-10">

                {departmentData.map((department, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(`/${department.name.replace(/\s+/g, '')}`)}
                        className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4 cursor-pointer w-[300px]"
                    >
                        <img
                            className="w-full h-40 object-cover hover:scale-110 hover:transation hover:ease-in-out duration-300"
                            src={department.image}
                            alt={department.name}
                        />
                        
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{department.name}</div>
                            <p className="text-gray-700 text-base mb-2 w-[127px] ">
                                {department.description}
                            </p>
                            <button className="text-blue-500   font-semibold  rounded">
                                Details...
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Departments;
