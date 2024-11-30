import React, { useState } from 'react';

const TeacherManagement = () => {
    const [filters, setFilters] = useState({
        department: '',
        subject: '',
    });

    const [teachers, setTeachers] = useState([
        // Sample data
        { id: 1, name: 'John Doe', department: 'Science', subject: 'Physics' },
        { id: 2, name: 'Jane Smith', department: 'Mathematics', subject: 'Algebra' },
        { id: 3, name: 'Emily Brown', department: 'English', subject: 'Literature' },
    ]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const filteredTeachers = teachers.filter(
        (teacher) =>
            (!filters.department || teacher.department === filters.department) &&
            (!filters.subject || teacher.subject === filters.subject)
    );

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Teacher Management</h2>

            {/* Filter Section */}
            <div className="bg-white p-4 rounded-lg shadow-md flex gap-4 mb-6">
                <div>
                    <label htmlFor="department" className="text-gray-600 font-semibold">
                        Department
                    </label>
                    <select
                        id="department"
                        name="department"
                        value={filters.department}
                        onChange={handleFilterChange}
                        className="block w-full mt-1 p-2 border rounded-lg"
                    >
                        <option value="">All Departments</option>
                        <option value="Science">Science</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="English">English</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="subject" className="text-gray-600 font-semibold">
                        Subject
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        value={filters.subject}
                        onChange={handleFilterChange}
                        className="block w-full mt-1 p-2 border rounded-lg"
                    >
                        <option value="">All Subjects</option>
                        <option value="Physics">Physics</option>
                        <option value="Algebra">Algebra</option>
                        <option value="Literature">Literature</option>
                    </select>
                </div>
                <div className="flex-grow">
                    <label className="text-gray-600 font-semibold">Search</label>
                    <input
                        type="text"
                        placeholder="Search by name"
                        className="block w-full mt-1 p-2 border rounded-lg"
                    />
                </div>
            </div>

            {/* Teacher List */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="py-2 px-4 text-left">ID</th>
                            <th scope="col" className="py-2 px-4 text-left">
                                Name
                            </th>
                            <th scope="col" className="py-2 px-4 text-left">
                                Department
                            </th>
                            <th scope="col" className="py-2 px-4 text-left">
                                Subject
                            </th>
                            <th scope="col" className="py-2 px-4">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredTeachers.map((teacher) => (
                            <tr key={teacher.id}>
                                <td className="py-2 px-4">{teacher.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.department}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.subject}</td>
                                <td className="py-2 px-4 flex justify-center items-center">
                                    <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherManagement;
