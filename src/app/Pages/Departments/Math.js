import React from 'react';
import NavbarDirectories from '@/app/Components/NavbarDirectories';
import Footer from '@/app/Components/Footer';
import { FaEnvelope } from 'react-icons/fa';

const schemeOfStudies = [
    {
        semester: 'Semester 1',
        subject1: "Object-Oriented Programming",
        subject2: "Object-Oriented Programming",
        subject3: "Object-Oriented Programming",
        subject4: "Object-Oriented Programming",
        subject5: "Object-Oriented Programming",
        subject6: "Object-Oriented Programming",
    },
    {
        semester: 'Semester 1',
        subject1: "Object-Oriented Programming",
        subject2: "Object-Oriented Programming",
        subject3: "Object-Oriented Programming",
        subject4: "Object-Oriented Programming",
        subject5: "Object-Oriented Programming",
        subject6: "Object-Oriented Programming",
    },
    {
        semester: 'Semester 1',
        subject1: "Object-Oriented Programming",
        subject2: "Object-Oriented Programming",
        subject3: "Object-Oriented Programming",
        subject4: "Object-Oriented Programming",
        subject5: "Object-Oriented Programming",
        subject6: "Object-Oriented Programming",
    },

];

const feeStructure = [
    {
        semester: 1,
        admissionFee: 1000,
        registrationFee: 500,
        tuitionFee: 2000,
        examinationFee: 300,
        librarySecurity: 100,
        otherDues: 200,
        totalFee: 4100,
        degreeFee: "308,160"
    },
    {
        semester: 2,
        admissionFee: 1000,
        registrationFee: 500,
        tuitionFee: 2000,
        examinationFee: 300,
        librarySecurity: 100,
        otherDues: 200,
        totalFee: 4100,
    },
    {
        semester: 2,
        admissionFee: 1000,
        registrationFee: 500,
        tuitionFee: 2000,
        examinationFee: 300,
        librarySecurity: 100,
        otherDues: 200,
        totalFee: 4100,
    },
    {
        semester: 2,
        admissionFee: 1000,
        registrationFee: 500,
        tuitionFee: 2000,
        examinationFee: 300,
        librarySecurity: 100,
        otherDues: 200,
        totalFee: 4100,
    },
    {
        semester: 2,
        admissionFee: 1000,
        registrationFee: 500,
        tuitionFee: 2000,
        examinationFee: 300,
        librarySecurity: 100,
        otherDues: 200,
        totalFee: 4100,
    },
    {
        semester: 2,
        admissionFee: 1000,
        registrationFee: 500,
        tuitionFee: 2000,
        examinationFee: 300,
        librarySecurity: 100,
        otherDues: 200,
        totalFee: 4100,
    },
    {
        semester: 2,
        admissionFee: 1000,
        registrationFee: 500,
        tuitionFee: 2000,
        examinationFee: 300,
        librarySecurity: 100,
        otherDues: 200,
        totalFee: 4100,
    },
    {
        semester: 2,
        admissionFee: 1000,
        registrationFee: 500,
        tuitionFee: 2000,
        examinationFee: 300,
        librarySecurity: 100,
        otherDues: 200,
        totalFee: 4100,
    },
];
const facultyData = [
    {
        name: "Fahad Farhan",
        qualification: "MS (Computer Science)",
        special: "Artificial Intelligence",
        mail: "fahad@gcufswl.com",
        image: "Vc.jpg"
    },
    {
        name: "Fahad Farhan",
        qualification: "MS (Computer Science)",
        special: "Artificial Intelligence",
        mail: "fahad@gcufswl.com",
        image: "Vc.jpg"
    },
    {
        name: "Fahad Farhan",
        qualification: "MS (Computer Science)",
        special: "Artificial Intelligence",
        mail: "fahad@gcufswl.com",
        image: "Vc.jpg"
    },
    {
        name: "Fahad Farhan",
        qualification: "MS (Computer Science)",
        special: "Artificial Intelligence",
        mail: "fahad@gcufswl.com",
        image: "Vc.jpg"
    },
    {
        name: "Fahad Farhan",
        qualification: "MS (Computer Science)",
        special: "Artificial Intelligence",
        mail: "fahad@gcufswl.com",
        image: "Vc.jpg"
    },

]

function Math() {
    return (
        <div>
            <NavbarDirectories />

            <div className="container mx-auto my-8 p-8 bg-gray-100 rounded-lg">
                <h1 className='text-center text-3xl font-bold mb-10'>Mathematics Department</h1>
                <div className="text-center md:text-left mb-4">
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-2">
                        <img
                            src="/Vc.jpg" // Replace with actual image path
                            alt="Head of Department"
                            className="w-80 h-80 rounded-lg mb-4 md:mr-6 md:mb-0"
                        />
                        <div className='text-left'>
                            <h2 className="text-2xl font-bold ">Aqib Javed</h2>
                            <p className='font-semibold text-xl mb-2'>Head of Department</p>
                            <p className='text-justify'>Prof. Dr. Aqib Javed Amin has a prosperous academic and research career in Physics at University of Agriculture Faisalabad and Government College University Faisalabad spanning over three decades. Prof. Amin earned his PhD from Quid-e-Azam University Islamabad and a Postdoctoral Fellowship from University of California - USA.</p>
                            <p className='mb-2'><span className='font-semibold text-left '>Qualification </span><br className="md:hidden" />Ph.D Data Science<br />University of Malaysia</p>
                            <p className='mb-2'><span className='font-semibold text-left '>Specialization </span><br className="md:hidden" />Data Mining</p>

                            <div className="flex items-center mb-2">
                                <FaEnvelope color='#4E7AC8' />
                                <p className="ml-2">aqib@gcufswl.com</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <h3 className="text-xl font-bold mb-4 mt-8">Vision</h3>
                    <p>
                        To ensure that the students take maximum advantage of the modern computer sciences to solve a wide range of complex scientific, technological and social problems.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 mt-8">Mission</h3>
                    <p>
                        To provide exemplary education and training to our students in the field of computer so that they productively contribute to academia and industry.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 mt-8">Introduction</h3>
                    <p>
                        The department provides excellent computing facilities and ensures the enhancement of practical knowledge of students by facilitating them to learning. The Computer Science Department provides a comprehensive range of facilities necessary for computer use and a library of programs and packages for solving scientific, engineering, commercial and social problems.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <h3 className="text-xl font-bold mt-8 mb-4">Scheme of Studies</h3>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-2">Semester</th>
                                <th className="border border-gray-300 p-2 text-center" colSpan="6">Subjects</th>
                            </tr>
                        </thead>
                        <tbody>
                            {schemeOfStudies.map((semester, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 p-4 text-center font-semibold" style={{ width: '150px' }}>{semester.semester}</td>
                                    <td className="border border-gray-300 p-4 text-center">{semester.subject1}</td>
                                    <td className="border border-gray-300 p-4 text-center">{semester.subject2}</td>
                                    <td className="border border-gray-300 p-4 text-center">{semester.subject3}</td>
                                    <td className="border border-gray-300 p-4 text-center">{semester.subject4}</td>
                                    <td className="border border-gray-300 p-4 text-center">{semester.subject5}</td>
                                    <td className="border border-gray-300 p-4 text-center">{semester.subject6}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="overflow-x-auto">
                    <h3 className="text-xl font-bold mt-8 mb-4">Fee Structure</h3>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-2 ">Semester No</th>
                                <th className="border border-gray-300 p-2">Admission Fee</th>
                                <th className="border border-gray-300 p-2">Registration Fee</th>
                                <th className="border border-gray-300 p-2">Tuition Fee</th>
                                <th className="border border-gray-300 p-2">Examination Fee</th>
                                <th className="border border-gray-300 p-2">Library Security</th>
                                <th className="border border-gray-300 p-2">Other Dues</th>
                                <th className="border border-gray-300 p-2">Total Fee</th>

                            </tr>
                        </thead>
                        <tbody>
                            {feeStructure.map((fee, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 p-2 text-center">{fee.semester}</td>
                                    <td className="border border-gray-300 p-2 text-center">{fee.admissionFee}</td>
                                    <td className="border border-gray-300 p-2 text-center">{fee.registrationFee}</td>
                                    <td className="border border-gray-300 p-2 text-center">{fee.tuitionFee}</td>
                                    <td className="border border-gray-300 p-2 text-center">{fee.examinationFee}</td>
                                    <td className="border border-gray-300 p-2 text-center">{fee.librarySecurity}</td>
                                    <td className="border border-gray-300 p-2 text-center">{fee.otherDues}</td>
                                    <td className="border border-gray-300 p-2 text-center">{fee.totalFee}</td>

                                </tr>

                            ))}

                            <tr>
                                <td colSpan="7"></td>
                                <td className="border border-gray-300 p-2 text-center font-semibold">Total: 308,160</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Faculy Section */}
                <div className="flex flex-wrap justify-center mt-8">
                    {facultyData.map((faculty, index) => (
                        <div
                            key={index}
                            className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4 cursor-pointer w-[300px]"
                        >
                            <img
                                className="w-full h-60 object-cover hover:scale-110 hover:transition hover:ease-in-out duration-300"
                                src={faculty.image}
                                alt={faculty.name}
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{faculty.name}</div>
                                <p className='font-semibold font-extralarge mb-2'>Lecturer</p>
                                <p className="text-gray-700 text-base mb-2 w-[200px]">
                                    <span className='font-semibold text-left'> Qualification:</span> <br /> {faculty.qualification}
                                </p>
                                <p className="text-gray-700 text-base mb-2 w-[200px]">
                                    <span className='font-semibold text-left'> Specialization:</span> <br /> {faculty.special}
                                </p>
                                <div className="flex items-center">
                                    <FaEnvelope color='#4E7AC8' />
                                    <p className="ml-2">{faculty.mail}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Math;
