import React, { useState } from 'react';
import { FaSearch, FaTrashAlt, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
    const axiosPublic = useAxiosPublic();
    const [filters, setFilters] = useState({
        role: '',

    });


    const { data: users = [], isLoading, isError, error, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data;
        },
    });
    // console.log(users);


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
    // console.log(filteredUsers);





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
                console.log(user._id);
                axiosPublic.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {

                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }
    const handleMakeAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to promote ${user.name} to an Admin?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user.name} is now an Admin!`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch(error => {
                        console.error("Error making user Admin:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Could not promote the user to Admin. Please try again.",
                            icon: "error",
                            confirmButtonText: "OK"
                        });
                    });
            }
        });
    };


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

                <div className="flex-grow relative">
                    <label className="text-gray-600 font-semibold">Search</label>
                    <input
                        type="text"
                        placeholder="Search by name"
                        className="block w-full mt-1 p-2 border rounded-lg"
                    />
                    <FaSearch className='absolute top-10 right-2' />
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
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => (
                                <tr key={user._id}>
                                    <td className="py-2 px-4">{user.id}</td>
                                    <div>
                                        <img className="w-16 h-16 rounded-full m-2 object-cover" src={user.photo || "https://i.postimg.cc/c18J2RvR/passport-Abubakar.jpg"} alt={user.name} />
                                    </div>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className="text-center">
                                        {user.role === 'admin' ? (
                                            'Admin'
                                        ) : (
                                            <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="p-2 rounded-md bg-green-500">
                                                <FaUser className="text-white text-2xl" />
                                            </button>
                                        )}
                                    </td>
                                    <td className="text-center">
                                        <button
                                            onClick={() => handleDeleteUser(user)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600 text-2xl" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="py-4 text-center text-gray-500">
                                    No users found for the selected role.
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;
