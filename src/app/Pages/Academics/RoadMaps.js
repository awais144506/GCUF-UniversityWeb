import Footer from "@/app/Components/Footer"
import NavbarDirectories from "@/app/Components/NavbarDirectories"
const departments = [
    { title: 'Road Map BS Computer Science Fall 2020',pdfUrl: '/path/to/pdfA.pdf' },
    { title: 'Road Map BS Computer Science Fall 2021',pdfUrl: '/path/to/pdfA.pdf' },
    { title: 'Road Map BS Computer Science Fall 2022',pdfUrl: '/path/to/pdfA.pdf' },
    { title: 'Road Map BS Computer Science Fall 2023',pdfUrl: '/path/to/pdfA.pdf' },
  
    // Add more departments as needed
  ];
function RoadMaps() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <NavbarDirectories />
                <h1 className="text-center text-3xl font-bold mt-8">Departments Road Maps</h1>
            <div className="container mx-auto py-8">
                <div className="grid p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {departments.map((department, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">{department.title}</h2>
                            <a href={department.pdfUrl} download className="block text-white p-4 bg-blue-500 font-bold mb-2">
                                Download PDF
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default RoadMaps