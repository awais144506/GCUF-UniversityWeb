import NavbarDirectories from '../Components/NavbarDirectories';
import Footer from '../Components/Footer';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

function Contact() {
    return (
        <>
            <NavbarDirectories />
        <div className="container mx-auto p-4 mt-12">

            <div className="flex flex-col md:flex-row p-4">
                <form className="flex-1 mb-8 md:mb-0">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 font-bold">Name</label>
                        <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 font-bold">Email</label>
                        <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 font-bold">Message</label>
                        <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Submit</button>
                </form>

                <div className="flex-1 mx-4">
                    <div className="w-full bg-white p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-xl font-bold mb-2">Contact Information</h3>
                        <div className="flex items-center mb-2">
                            <FaPhone />
                            <p className="ml-2">+92-300-0505105</p>
                        </div>

                        <div className="flex items-center">
                            <FaMapMarker />
                            <p className="ml-2">GCUF, Sahiwal Campus <br /> Pakpattan Road, Sahiwal</p>
                        </div>
                        <p className='mt-2 font-semibold'>For queries related to admissions</p>
                        <div className="flex items-center">
                            <FaEnvelope className="font-bold mr-2" />
                            <p>admissions@gcufswl.edu.pk</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            <Footer />
        </>
    )
}

export default Contact;
