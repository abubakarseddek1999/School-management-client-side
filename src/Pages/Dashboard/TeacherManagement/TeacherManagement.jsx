import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// console.log(image_hosting_key);
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const TeacherManagement = () => {
  const axiosPublic = useAxiosPublic();
  const [isOtherDepartment, setIsOtherDepartment] = useState(false);
  const { register, handleSubmit, reset, setValue } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [filters, setFilters] = useState({
    department: "",
    subject: "",
  });
  // Initial departments array
  const [departments, setDepartments] = useState([
    "Science",
    "Mathematics",
    "English",
    "Bangla",
    "History",
    "Geography",
    "Religious Studies",
    "Physical Education",
    "ICT",
    "Other",
  ]);

  const {
    data: teachers = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/teachers");
      return res.data;
    },
  });
  console.log(teachers);
  useEffect(() => {
    // Extract departments from teacherData
    const backendDepartments = teachers.map((teacher) => teacher.department);

    // Add new departments from backend if not already in the array
    backendDepartments.forEach((dept) => {
      if (!departments.includes(dept)) {
        setDepartments((prevDepartments) => [dept, ...prevDepartments]);
      }
    });
  }, [teachers, departments]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredTeachers = teachers.filter(
    (teacher) =>
      (!filters.department || teacher.department === filters.department) &&
      (!filters.subject || teacher.subject === filters.subject) &&
      (!filters.search ||
        teacher.name.toLowerCase().includes(filters.search.toLowerCase()))
  );

  const onSubmit = async (data) => {
    const teacherData = {
      name: data?.name,
      department: data?.department,
      subject: data?.subject,
    };

    if (data.image?.[0]) {
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      teacherData.photo = res?.data?.data?.display_url || editingTeacher?.photo;
    }
    console.log(teacherData);

    if (isEditMode) {
      // Update existing teacher
      try {
        const res = await axiosPublic.patch(
          `/teachers/${editingTeacher._id}`,
          teacherData
        );
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} has been updated successfully!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
          closeModal();
        }
      } catch (error) {
        console.error("Error updating teacher:", error);
      }
    } else {
      // Add new teacher
      try {
        const res = await axiosPublic.post("/teachers", teacherData);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} has been added successfully!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
          reset();
          closeModal();
        }
      } catch (error) {
        console.error("Error adding teacher:", error);
      }
    }
  };

  const handleDeleteUser = (teacher) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(teacher._id);
        axiosPublic.delete(`/teachers/${teacher._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "teacher has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const openModal = (teacher = null) => {
    setIsModalOpen(true);
    if (teacher) {
      setIsEditMode(true);
      setEditingTeacher(teacher);
      // Populate form fields with the teacher's data
      setValue("name", teacher.name);
      setValue("department", teacher.department);
      setValue("subject", teacher.subject);
    } else {
      setIsEditMode(false);
      reset();
    }
  };
  const closeModal = () => {
    reset();
    setIsModalOpen(false);
    setIsEditMode(false);
    setIsOtherDepartment(false);
    setEditingTeacher(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Teacher Management
      </h2>

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
            name="search"
            placeholder="Search by name"
            value={filters.search}
            onChange={handleFilterChange}
            className="block w-full mt-1 p-2 border rounded-lg"
          />
          <FaSearch className="absolute top-10 right-2" />
        </div>
        {/* Add Teacher Button */}
        <div className="flex justify-center mt-7">
          <button
            onClick={() => openModal()}
            className="bg-blue-500 text-white px-4 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
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
                <td className="pt-2">
                  {teacher?.photo ? (
                    <img
                      className="w-16 h-16 rounded-full m-2 object-cover"
                      src={teacher.photo}
                      alt={teacher?.name}
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full m-2 bg-blue-300 flex items-center justify-center text-xl font-bold text-white">
                      {teacher?.name
                        ?.split(" ")
                        .map((word) => word[0])
                        .join("")
                        .toUpperCase()}
                    </div>
                  )}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {teacher.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {teacher.department}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {teacher.subject}
                </td>
                <td className="py-2 px-4 h-full text-center">
                  <button
                    onClick={() => openModal(teacher)}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(teacher)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for add teacher */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-center">
              {isEditMode ? "Edit Teacher" : "Add New Teacher"}
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Teacher Name */}
              <div className="form-control w-full my-4">
                <label className="label">
                  <span className="label-text">Teacher Name*</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder={isEditMode ? editingTeacher?.name : "Enter name"}
                  className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black w-full"
                />
              </div>

              {/* Department */}
              <div className="form-control w-full my-4">
                <label className="label">
                  <span className="label-text">Department*</span>
                </label>
                <select
                  defaultValue={
                    editingTeacher?.department === "Other"
                      ? "Other"
                      : editingTeacher?.department || "default"
                  }
                  {...register("department", { required: true })}
                  placeholder={
                    isEditMode ? editingTeacher?.department : "Enter department"
                  }
                  className="select select-bordered w-full"
                  onChange={(e) =>
                    setIsOtherDepartment(e.target.value === "Other")
                  }
                >
                  <option disabled value="default">
                    Select a department
                  </option>
                  {departments.map((department) => (
                    <option key={department} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>

              {/* Other Department Input */}
              {isOtherDepartment && (
                <div className="form-control w-full my-4">
                  <label className="label">
                    <span className="label-text">
                      Specify Other Department*
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("department", { required: true })}
                    defaultValue={
                      editingTeacher?.department !== "Other"
                        ? ""
                        : editingTeacher?.department
                    }
                    // placeholder="Enter department name"
                    placeholder={
                      isEditMode
                        ? editingTeacher?.department
                        : "Enter department name"
                    }
                    className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black w-full"
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
                  className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black w-full"
                />
              </div>
              {/* Teacher Photo */}
              <div className="border-2 border-gray-300 rounded-lg mb-5 p-1">
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input w-full "
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="btn btn-secondary px-4 py-2 text-sm md:text-base"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2 text-sm md:text-base"
                >
                  {isEditMode ? "Update" : "Add teacher"}
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
