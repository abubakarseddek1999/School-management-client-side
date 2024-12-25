import React, { useState } from "react";
import Pagination from "../../../Components/Pagination/Pagination";
import { Link } from "react-router-dom";

const StudentManagement = () => {
  const [filters, setFilters] = useState({
    class: "",
    religion: "",
    section: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 15;

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
  const handleResetFilters = () => {
    setFilters({ class: "", religion: "", section: "" });
    setSearchQuery("");
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  // Get students for the current page
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          Manage Students
        </h2>
        <p>Total student: {students.length}</p>
      </div>

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

        <button
          onClick={handleResetFilters}
          className="bg-gray-500 text-white px-4  mt-7 rounded-lg"
        >
          Reset
        </button>
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
              <th className="py-2 px-4 text-center">Actions</th>
              <th className="py-2 px-4 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.length ? (
              currentStudents.map((student) => (
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
                  <td className="py-2 px-4">
                    <Link to="/dashboard/studentDetails">
                      <button className="bg-blue-500  hover:bg-blue-600 text-white px-2 py-1 rounded mr-2">
                        View
                      </button>
                    </Link>
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
      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default StudentManagement;
