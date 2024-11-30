import React, { useState } from 'react';
import { FaTrashAlt, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const [filters, setFilters] = useState({
        role: '',
      
    });

    const [users, setUsers] = useState([
        // Sample data
        { id: 1, name: 'John Doe',role:"user", department: 'Science', subject: 'Physics' },
        { id: 2, name: 'Jane Smith',role:"admin", department: 'Mathematics', subject: 'Algebra' },
        { id: 3, name: 'Emily Brown',role:"user", department: 'English', subject: 'Literature' },
    ]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        console.log(name);
        setFilters({ ...filters, [name]: value });
    };
    console.log(filters.role);
    const filteredUsers = users.filter(
      
        (user) =>
            (!filters.role || user.role === filters.role)
    );


    const handleDeleteUser = user => {
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
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
                // axiosSecure.delete(`/users/${user._id}`)
                //     .then(res => {
                //         if (res.data.deletedCount > 0) {
                //             refetch();
                //             Swal.fire({
                //                 title: "Deleted!",
                //                 text: "Your file has been deleted.",
                //                 icon: "success"
                //             });
                //         }
                //     })

            }
        });

    }
    const handleMakeAdmin = user => {
        // axiosSecure.patch(`/users/admin/${user._id}`)
        //     .then(res => {
        //         console.log(res.data);
        //         if (res.data.modifiedCount > 0) {
        //             refetch();
        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: `${user.name} is an Admin Now`,
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
        //         }
        //     })
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">User Management</h2>

            {/* Filter Section */}
            <div className="bg-white p-4 rounded-lg shadow-md flex gap-4 mb-6">
                <div>
                    <label htmlFor="department" className="text-gray-600 font-semibold">
                        Role
                    </label>
                    <select
                        id="users"
                        name="role"
                        value={filters.role}
                        onChange={handleFilterChange}
                        className="block w-full mt-1 p-2 border rounded-lg"
                    >
                        <option value="">All Users</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                       
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
                            <th className="py-2 px-4 text-left">Photo</th>
                            <th scope="col" className="py-2 px-4 text-left">
                                User Name
                            </th>
                            <th scope="col" className="py-2 px-4 text-left">
                                Email
                            </th>
                            <th scope="col" className="py-2 px-4 ">
                                Role
                            </th>
                            <th scope="col" className="py-2 px-4 ">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredUsers.map((user) => (
                            <tr key={user.id}>
                                <td className="py-2 px-4">{user.id}</td>
                                <div>
                                    <img className='w-16 h-16 rounded-full m-2 object-cover' src="https://i.postimg.cc/c18J2RvR/passport-Abubakar.jpg" alt="" />
                                </div>
                                <td>{user.name}</td>
                                <td>abubakarseddek@gmailcom</td>
                                <td className='text-center'>
                                    {user.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-lg bg-green-500"><FaUser className="text-white text-2xl"></FaUser>
                                    </button>}

                                </td>
                                <td className='text-center'>
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-600 text-3xl"></FaTrashAlt>
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
