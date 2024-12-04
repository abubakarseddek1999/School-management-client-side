import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const TeacherManagement = () => {
    const axiosPublic = useAxiosPublic();
    const [isOtherDepartment, setIsOtherDepartment] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filters, setFilters] = useState({
        department: '',
        subject: '',
    });

    const { data: teachers = [], isLoading, isError, error, refetch } = useQuery({
        queryKey: ['teachers'],
        queryFn: async () => {
            const res = await axiosPublic.get('/teachers');
            return res.data;
        },
    });
    console.log(teachers);


    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const filteredTeachers = teachers.filter(
        (teacher) =>
            (!filters.department || teacher.department === filters.department) &&
            (!filters.subject || teacher.subject === filters.subject) &&
            (!filters.search || teacher.name.toLowerCase().includes(filters.search.toLowerCase()))
    );

    const onSubmit = async (data) => {
        console.log(data);

        const teacherData = {
            name: data.name,
            photo: "",
            department: data.departmentSelect,
            subject: data.subject,
        };

        console.log(teacherData);

        // Post teacher data to the server
        const res = await axiosPublic.post('/teachers', teacherData);
        console.log(res.data);

        if (res.data.insertedId) {
            reset();
            setIsModalOpen(false); // Close modal on success
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} has been added as a teacher`,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    const handleDeleteUser = teacher => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(teacher._id);
                axiosPublic.delete(`/teachers/${teacher._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {

                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "teacher has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        reset();
        setIsModalOpen(false);
        setIsOtherDepartment(false)
    };

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
                <div className="flex-grow relative">
                    <label className="text-gray-600 font-semibold">Search</label>
                    <input
                        type="text"
                        name='search'
                        placeholder="Search by name"
                        value={filters.search}
                        onChange={handleFilterChange}
                        className="block w-full mt-1 p-2 border rounded-lg"
                    />
                    <FaSearch className='absolute top-10 right-2' />
                </div>
                {/* Add Teacher Button */}
                <div className='flex justify-center mt-7'>
                    <button
                        onClick={openModal}
                        className="bg-blue-500 text-white px-4 rounded-lg shadow-md hover:bg-blue-600 transition">
                        + Add Teacher
                    </button>
                </div>
            </div>

            {/* Teacher List */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="py-2 px-4 text-left">ID</th>
                            <th className="py-2 px-4 text-left">Photo</th>
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
                            <tr key={teacher._id}>
                                <td className="py-2 px-4">{teacher.id}</td>
                                <td className='pt-2'>
                                    <img className="w-16 h-16 rounded-full m-2 object-cover" src={teacher?.photo || "https://i.postimg.cc/c18J2RvR/passport-Abubakar.jpg"} alt={teacher?.name} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.department}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{teacher.subject}</td>
                                <td className="py-2 px-4 h-full text-center">
                                    <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                                    <button  onClick={() => handleDeleteUser(teacher)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-96 m-24 h-auto shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">Add New Teacher</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Teacher Name */}
                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Teacher Name*</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Enter teacher's name"
                                    className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:black focus:border-white transition duration-150 ease-in-out focus:shadow-[3px_3px_10px_rgba(0,0,0,1),-1px_-1px_6px_rgba(255,255,255,0.4),inset_3px_3px_10px_rgba(0,0,0,1),inset_-1px_-1px_6px_rgba(255,255,255,0.4)] w-full"
                                />
                            </div>

                            {/* Department */}
                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Department*</span>
                                </label>
                                <select
                                    defaultValue="default"
                                    {...register("departmentSelect", { required: true })}
                                    className="select select-bordered w-full"
                                    onChange={(e) => setIsOtherDepartment(e.target.value === "Other")}
                                >
                                    <option disabled value="default">
                                        Select a department
                                    </option>
                                    <option value="Science">Science</option>
                                    <option value="Mathematics">Mathematics</option>
                                    <option value="English">English</option>
                                    <option value="Bangla">Bangla</option>
                                    <option value="History">History</option>
                                    <option value="Geography">Geography</option>
                                    <option value="Religious Studies">Religious Studies</option>
                                    <option value="Physical Education">Physical Education</option>
                                    <option value="ICT">ICT</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Other Department Input (only visible if "Other" is selected) */}
                            {isOtherDepartment && (
                                <div className="form-control w-full my-4">
                                    <label className="label">
                                        <span className="label-text">Specify Other Department*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("department", { required: true })}
                                        placeholder="Enter department name"
                                        className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:black focus:border-white transition duration-150 ease-in-out focus:shadow-[3px_3px_10px_rgba(0,0,0,1),-1px_-1px_6px_rgba(255,255,255,0.4),inset_3px_3px_10px_rgba(0,0,0,1),inset_-1px_-1px_6px_rgba(255,255,255,0.4)] w-full"
                                    />
                                </div>
                            )}


                            {/* Subject */}
                            <div className="form-control w-full my-4">
                                <label className="label">
                                    <span className="label-text">Subject*</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("subject", { required: true })}
                                    placeholder="Enter subject"
                                    className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:black focus:border-white transition duration-150 ease-in-out focus:shadow-[3px_3px_10px_rgba(0,0,0,1),-1px_-1px_6px_rgba(255,255,255,0.4),inset_3px_3px_10px_rgba(0,0,0,1),inset_-1px_-1px_6px_rgba(255,255,255,0.4)] w-full"
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Add Teacher
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeacherManagement;
