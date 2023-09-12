import Footer from "@/app/Components/Footer"
import NavbarDirectories from "@/app/Components/NavbarDirectories"


const departments = [
    { name: 'Computer Science', pdfUrl: '/path/to/pdfA.pdf' },
    { name: 'Software Engineering', pdfUrl: '/path/to/pdfB.pdf' },
    { name: 'Information Technology', pdfUrl: '/path/to/pdfC.pdf' },
    { name: 'Food Science', pdfUrl: '/path/to/pdfC.pdf' },
    { name: 'Human Nutrition & Dietetics ', pdfUrl: '/path/to/pdfC.pdf' },
    { name: 'Business Administration (BBA)', pdfUrl: '/path/to/pdfC.pdf' },
    { name: 'Accounting & Finance', pdfUrl: '/path/to/pdfC.pdf' },
    { name: 'Mathemetics', pdfUrl: '/path/to/pdfC.pdf' },
    { name: 'Chemistry', pdfUrl: '/path/to/pdfC.pdf' },
    { name: 'Physics', pdfUrl: '/path/to/pdfC.pdf' },
    // Add more departments as needed
  ];
function Datesheet() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <NavbarDirectories />
                <h1 className="text-center text-3xl font-bold mt-8">Datesheets</h1>
            <div className="container mx-auto py-8">
                <div className="grid p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {departments.map((department, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">{department.name}</h2>
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

export default Datesheet