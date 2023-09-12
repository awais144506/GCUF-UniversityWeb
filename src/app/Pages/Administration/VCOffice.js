import Footer from "@/app/Components/Footer"
import NavbarDirectories from "@/app/Components/NavbarDirectories"
import { FaEnvelope, FaPhone } from "react-icons/fa";
const facultyData = [
    {
        name: "Breg. Pasha Kamal",
        designation:"Vice Chancellor",
        phone: "+92-311-12345678",
        mail: "vc@gcufswl.com",
        image: "Vc.jpg"
    },
]

function VCOffice() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <NavbarDirectories />
                <h1 className="text-center text-3xl font-bold mt-8">Vice Chancellor Office</h1>
                <div className="flex flex-wrap justify-center mt-8">
                    {facultyData.map((faculty, index) => (
                        <div
                            key={index}
                            className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4 cursor-pointer w-[700px]"
                        >
                            <img
                                className="w-full h-100 object-cover hover:scale-110 hover:transition hover:ease-in-out duration-300"
                                src={faculty.image}
                                alt={faculty.name}
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{faculty.name}</div>
                                <p className='font-semibold font-extralarge mb-2'>{faculty.designation}</p>
                               
                               
                                <div className="flex items-center">
                                    <FaPhone color='#4E7AC8' />
                                    <p className="ml-2">{faculty.phone}</p>
                                </div>
                                <div className="flex items-center">
                                    <FaEnvelope color='#4E7AC8' />
                                    <p className="ml-2">{faculty.mail}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            <Footer />
        </div>
    );
}

export default VCOffice