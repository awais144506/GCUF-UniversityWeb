import React from 'react';
import Footer from '@/app/Components/Footer';
import NavbarDirectories from '@/app/Components/NavbarDirectories';
import { storage } from '../../../../appwrite';

const departments = [
    { name: 'Computer Science' },
    { name: 'Software Engineering' },
    { name: 'Information Technology' },
    { name: 'Food Science' },
    { name: 'Human Nutrition & Dietetics ' },
    { name: 'Business Administration (BBA)' },
    { name: 'Accounting & Finance' },
    { name: 'Mathematics' },
    { name: 'Chemistry' },
    { name: 'Physics' },
];

const Timetable = () => {
    const handleDownload = async () => {
        try {
            const result = storage.getFileDownload('6506e1a6e39e0187b2bc', '6506fffe3bd416038fd8');
            const downloadUrl = result.href

            const link = document.createElement('a');
            link.href = downloadUrl;
            link.click();
        } catch (error) {
            console.error('Error Downloading:', error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <NavbarDirectories />
            <h1 className="text-center text-3xl font-bold mt-8">Time Tables</h1>
            <div className="container mx-auto py-8">
                <div className="grid p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {departments.map((department, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">{department.name}</h2>
                            <button
                                onClick={handleDownload}
                                className="block text-white p-4 bg-blue-500 font-bold mb-2"
                            >
                                Download PDF
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Timetable;
