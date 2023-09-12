import Footer from "@/app/Components/Footer"
import NavbarDirectories from "@/app/Components/NavbarDirectories"

const calender = [
    { title: 'Acedamic Calender Fall 2023-24',pdfUrl: '/path/to/pdfA.pdf' },
    { title: 'Acedamic Calender Fall 2023-24',pdfUrl: '/path/to/pdfA.pdf' },
    { title: 'Acedamic Calender Fall 2023-24',pdfUrl: '/path/to/pdfA.pdf' },
  
    // Add more departments as needed
  ];
function Calender() {
  return (
    <div className="bg-gray-100 min-h-screen">
        <NavbarDirectories />
            <h1 className="text-center text-3xl font-bold mt-8">Acedamic Calender</h1>
        <div className="container mx-auto py-8">
            <div className="grid p-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {calender.map((session, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4">{session.title}</h2>
                    
                        <a href={session.pdfUrl} download className="block text-white p-4 bg-blue-500 font-bold mb-2">
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

export default Calender