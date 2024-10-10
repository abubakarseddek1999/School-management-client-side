import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";


const Classes = () => {
    // Sample data for classes
    const classData = [
        { id: 1, class: "6", subject: "Mathematics", section: "A", version: "English Medium", video: { title: "Introduction to Algebra", link: "#", length: "15:30" } },
        { id: 2, class: "6", subject: "Science", section: "B", version: "Bangla Medium", video: { title: "Water Cycle", link: "#", length: "12:45" } },
        { id: 3, class: "7", subject: "English", section: "A", version: "English Medium", video: { title: "Grammar Basics", link: "#", length: "10:20" } },
        { id: 4, class: "7", subject: "Geography", section: "B", version: "Bangla Medium", video: { title: "Mountains and Valleys", link: "#", length: "14:50" } },
        { id: 5, class: "8", subject: "History", section: "A", version: "English Medium", video: { title: "Ancient Civilizations", link: "#", length: "18:30" } },
        { id: 6, class: "8", subject: "Mathematics", section: "B", version: "Bangla Medium", video: { title: "Linear Equations", link: "#", length: "16:10" } },
        { id: 7, class: "9", subject: "Physics", section: "A", version: "English Medium", video: { title: "Newton's Laws", link: "#", length: "20:45" } },
        { id: 8, class: "9", subject: "Chemistry", section: "B", version: "Bangla Medium", video: { title: "Chemical Reactions", link: "#", length: "22:00" } },
        { id: 9, class: "10", subject: "Biology", section: "A", version: "English Medium", video: { title: "Cell Structure", link: "#", length: "19:30" } },
        { id: 10, class: "10", subject: "History", section: "B", version: "Bangla Medium", video: { title: "World War II", link: "#", length: "25:15" } },
        { id: 11, class: "10", subject: "History", section: "A", version: "Bangla Medium", video: { title: "news War II", link: "#", length: "23:15" } },
    ];

    // States for filtering
    const [selectedClass, setSelectedClass] = useState("");
    const [selectedSubject, setSelectedSubject] = useState("");
    const [selectedSection, setSelectedSection] = useState("");
    const [selectedVersion, setSelectedVersion] = useState("");

    // Get subjects based on selected class
    const subjectsForSelectedClass = classData
        .filter((cls) => cls.class === selectedClass)
        .map((cls) => cls.subject);

    // Remove duplicates from subjects array
    const uniqueSubjects = [...new Set(subjectsForSelectedClass)];

    // Handle filtering logic
    const filteredClasses = classData.filter((cls) => {
        return (
            (selectedClass === "" || cls.class === selectedClass) &&
            (selectedSubject === "" || cls.subject === selectedSubject) &&
            (selectedSection === "" || cls.section === selectedSection) &&
            (selectedVersion === "" || cls.version === selectedVersion)
        );
    });

    // Function to reset all filters
    const resetFilters = () => {
        setSelectedClass("");
        setSelectedSubject("");
        setSelectedSection("");
        setSelectedVersion("");
    };

    return (
        <div className="min-h-screen max-w-[1400px] mx-auto pt-24 mb-10 p-2">

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 mb-6">
                {/* Class Filter */}
                <select
                    className="px-4 py-2 bg-white rounded-lg shadow-md"
                    value={selectedClass}
                    onChange={(e) => {
                        setSelectedClass(e.target.value);
                        setSelectedSubject(""); // Reset subject on class change
                    }}
                >
                    <option value="">Select Class</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>

                {/* Subject Filter (Shown only after class is selected) */}
                <select
                    className="px-4 py-2 bg-white rounded-lg shadow-md"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    disabled={!selectedClass} // Disable if no class is selected
                >
                    <option value="">Select Subject</option>
                    {uniqueSubjects.map((subject, index) => (
                        <option key={index} value={subject}>
                            {subject}
                        </option>
                    ))}
                </select>

                {/* Version Filter */}
                <select
                    className="px-4 py-2 bg-white rounded-lg shadow-md"
                    value={selectedVersion}
                    onChange={(e) => setSelectedVersion(e.target.value)}
                >
                    <option value="">Select Version</option>
                    <option value="English Medium">English Medium</option>
                    <option value="Bangla Medium">Bangla Medium</option>
                </select>

                {/* Section Filter */}
                <select
                    className="px-4 py-2 bg-white rounded-lg shadow-md"
                    value={selectedSection}
                    onChange={(e) => setSelectedSection(e.target.value)}
                >
                    <option value="">Select Section</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                </select>

                {/* Reset Filters Button */}
                <div className="flex">
                    <div className="">
                        <div
                            className="px-4 py-2 bg-white rounded-lg shadow-md"
                            onClick={resetFilters}
                        >
                            Reset Filters
                        </div>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClasses.length > 0 ? (
                    filteredClasses.map((cls) => (
                        <div
                            key={cls.id}
                            className="bg-white  rounded-2xl shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="relative">
                                <img className="w-full rounded-t-lg" src="https://i.postimg.cc/V6s0r0d6/ezgif-1-073d75dcde.jpg" alt="" />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <FaPlayCircle className="text-5xl font-bold cursor-pointer" />
                                </div>
                            </div>

                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                                    Class: {cls.class}
                                </h2>
                                <p className="text-gray-600">Subject: {cls.subject}</p>
                                <p className="text-gray-600">Section: {cls.section}</p>
                                <p className="text-gray-600">Version: {cls.version}</p>
                                <p className="text-gray-600">
                                    Video: <a href={cls.video.link} className="text-blue-500">{cls.video.title}</a> ({cls.video.length})
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600 text-center col-span-full flex justify-center items-center">
                        <img className=" w-[700px] h-[500px]" src="https://i.postimg.cc/0N9hgHxv/images-removebg-preview.png" alt="" />
                    </p>
                )}
            </div>
        </div>
    );
};
export default Classes;