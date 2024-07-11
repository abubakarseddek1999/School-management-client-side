import { GiTeacher } from "react-icons/gi";
import { FaPhotoVideo } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

const InfoButton = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-around md:justify-center gap-5 md:gap-16 p-4">
                <button className="flex items-center justify-between bg-[#ff683e] text-white gap-5 py-4 p-8 md:w-[300px] hover:bg-red-600">
                    <span className="mr-2">Our teachers</span>
                    {/* <img src="/path/to/teacher-icon.png" alt="Our teachers icon" className="w-6 h-6" /> */}
                    <GiTeacher className="text-2xl"/>
                </button>
                <button className="flex items-center justify-between gap-5 bg-yellow-500 text-white py-4 p-8 md:w-[300px] hover:bg-yellow-600">
                    <span className="mr-2">All classes</span>
                    {/* <img src="/path/to/classes-icon.png" alt="All classes icon" className="w-6 h-6" /> */}
                    <FaPhotoVideo className="text-2xl"/>
                </button>
                <button className="flex items-center justify-between gap-5 py-4 bg-[#2A7CC7] text-white md:w-[300px] p-8  hover:bg-[#0c5498e3] border border-gray-300">
                    <span className="mr-2">Contact us</span>
                    {/* <img src="/path/to/contact-icon.png" alt="Contact us icon" className="w-6 h-6" /> */}
                    <MdContacts className="text-2xl"/>
                </button>
            </div>

        </div>
    );
};

export default InfoButton;