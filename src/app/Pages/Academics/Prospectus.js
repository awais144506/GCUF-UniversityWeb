import Footer from "@/app/Components/Footer"
import NavbarDirectories from "@/app/Components/NavbarDirectories"

const departments = [
    { title: 'GCUF Prospectus 2023', image:"/pros.png",pdfUrl: '/path/to/pdfA.pdf' },
    { title: 'GCUF Prospectus 2023', image:"/pros.png",pdfUrl: '/path/to/pdfA.pdf' },
    { title: 'GCUF Prospectus 2023', image:"/pros.png",pdfUrl: '/path/to/pdfA.pdf' },
  
    // Add more departments as needed
  ];
function Prospectus() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <NavbarDirectories />
                <h1 className="text-center text-3xl font-bold mt-8">Prospectus/Admissions</h1>
            <div className="container mx-auto py-8">
                <div className="grid p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {departments.map((department, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">{department.title}</h2>
                            <img
                            className="w-full h-40 md:h-80 object-cover cursor-pointer"
                            src={department.image}
                            alt={department.title}
                        />
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

export default Prospectus