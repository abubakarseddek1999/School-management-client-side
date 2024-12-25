import React, { useState } from "react";

const StudentManagement = () => {
  const [filters, setFilters] = useState({
    class: "",
    religion: "",
    section: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  //   const [students, setStudents] = useState([

  //     { id: 1, name: "John Doe", class: "7", religion: "Christianity", section: "A" },
  //     { id: 2, name: "Anjali Sharma", class: "7", religion: "Hinduism", section: "B" },
  //     { id: 3, name: "Fatima Begum", class: "7", religion: "Islam", section: "A" },
  //     { id: 4, name: "David Kim", class: "6", religion: "Christianity", section: "B" },
  //   ]);
  const students = [
    {
      id: 1,
      name: "John Doe",
      class: "7",
      religion: "Christianity",
      section: "A",
    },
    {
      id: 2,
      name: "Anjali Sharma",
      class: "7",
      religion: "Hinduism",
      section: "B",
    },
    {
      id: 3,
      name: "Fatima Begum",
      class: "7",
      religion: "Islam",
      section: "A",
    },
    {
      id: 4,
      name: "David Kim",
      class: "6",
      religion: "Christianity",
      section: "B",
    },
    { id: 5, name: "Liu Wei", class: "6", religion: "Buddhism", section: "A" },
    { id: 6, name: "Sara Ali", class: "8", religion: "Islam", section: "C" },
    {
      id: 7,
      name: "Emily Garcia",
      class: "8",
      religion: "Christianity",
      section: "A",
    },
    {
      id: 8,
      name: "Raj Patel",
      class: "7",
      religion: "Hinduism",
      section: "C",
    },
    {
      id: 9,
      name: "Yuki Nakamura",
      class: "6",
      religion: "Shinto",
      section: "B",
    },
    {
      id: 10,
      name: "Ahmed Hassan",
      class: "8",
      religion: "Islam",
      section: "B",
    },
    {
      id: 11,
      name: "Mia Nguyen",
      class: "6",
      religion: "Buddhism",
      section: "C",
    },
    {
      id: 12,
      name: "Sofia Martinez",
      class: "7",
      religion: "Christianity",
      section: "A",
    },
    {
      id: 13,
      name: "Krishna Yadav",
      class: "7",
      religion: "Hinduism",
      section: "B",
    },
    {
      id: 14,
      name: "Ayesha Khan",
      class: "6",
      religion: "Islam",
      section: "A",
    },
    {
      id: 15,
      name: "Mark Robinson",
      class: "8",
      religion: "Christianity",
      section: "C",
    },
    {
      id: 16,
      name: "Tanaka Hiroshi",
      class: "7",
      religion: "Shinto",
      section: "A",
    },
    {
      id: 17,
      name: "Pooja Verma",
      class: "8",
      religion: "Hinduism",
      section: "B",
    },
    {
      id: 18,
      name: "Mohammed Rahim",
      class: "6",
      religion: "Islam",
      section: "C",
    },
    {
      id: 19,
      name: "Isabella Russo",
      class: "7",
      religion: "Christianity",
      section: "C",
    },
    { id: 20, name: "Hassan Ali", class: "6", religion: "Islam", section: "B" },
  ];

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredStudents = students.filter((student) => {
    return (
      (!filters.class || student.class === filters.class) &&
      (!filters.religion || student.religion === filters.religion) &&
      (!filters.section || student.section === filters.section) &&
      (!searchQuery || student.name.toLowerCase().includes(searchQuery))
    );
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Manage Students</h2>

      {/* Filter Section */}
      <div className="bg-white p-4 rounded-lg shadow-md flex gap-4 mb-2">
        <div>
          <label className="text-gray-600 font-semibold">Class</label>
          <select
            name="class"
            value={filters.class}
            onChange={handleFilterChange}
            className="block w-full mt-1 p-2 border rounded-lg"
          >
            <option value="">All</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            {/* Add other classes as needed */}
          </select>
        </div>

        <div>
          <label className="text-gray-600 font-semibold">Religion</label>
          <select
            name="religion"
            value={filters.religion}
            onChange={handleFilterChange}
            className="block w-full mt-1 p-2 border rounded-lg"
          >
            <option value="">All</option>
            <option value="Islam">Islam</option>
            <option value="Christianity">Christianity</option>
            <option value="Hinduism">Hinduism</option>
            {/* Add other religions as needed */}
          </select>
        </div>

        <div>
          <label className="text-gray-600 font-semibold">Section</label>
          <select
            name="section"
            value={filters.section}
            onChange={handleFilterChange}
            className="block w-full mt-1 p-2 border rounded-lg"
          >
            <option value="">All</option>
            <option value="A">A</option>
            <option value="B">B</option>
            {/* Add other sections as needed */}
          </select>
        </div>
        <div className="flex-grow">
          <label className="text-gray-600 font-semibold">Search</label>
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearchChange}
            className="block w-full mt-1 p-2 border rounded-lg"
          />
        </div>
      </div>

      {/* Student List Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Class</th>
              <th className="py-2 px-4 text-left">Religion</th>
              <th className="py-2 px-4 text-left">Section</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length ? (
              filteredStudents.map((student) => (
                <tr key={student.id} className="border-b">
                  <td className="py-2 px-4">{student.id}</td>
                  <td className="py-2 px-4">{student.name}</td>
                  <td className="py-2 px-4">{student.class}</td>
                  <td className="py-2 px-4">{student.religion}</td>
                  <td className="py-2 px-4">{student.section}</td>
                  <td className="py-2 px-4 flex justify-center items-center">
                    <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentManagement;
