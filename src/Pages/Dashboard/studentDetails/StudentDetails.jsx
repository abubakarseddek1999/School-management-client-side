import React from "react";
import { Link } from "react-router-dom";

const StudentDetails = () => {
  const student = {
    _id: "66e7e544e4d9ad0e883c9091",
    id: 4,
    fullName: "Nafisa Akter",
    dob: "2002-07-15",
    placeOfBirth: "Sylhet, Bangladesh",
    religion: "Islam",
    gender: "Female",
    nationality: "Bangladesh",
    bloodGroup: "O-",
    presentAddress: {
      village: "Zindabazar",
      postCode: "3100",
      subDistrict: "Sylhet Sadar",
      district: "Sylhet",
    },
    permanentAddress: {
      village: "Zindabazar",
      postCode: "3100",
      subDistrict: "Sylhet Sadar",
      district: "Sylhet",
    },
    educationalInfo: {
      lastSchool: "Sylhet Government School",
      mediumOfInstruction: "English",
      standard: "9",
      lastSchoolResult: "Passed",
    },
    guardianInfo: {
      name: "MD. Abdul Akter",
      occupation: "Teacher",
      email: "nafisaakter@example.com",
      phoneNumber: "+8801728323456",
    },
  };

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <div className="max-w-6xl mb-1 mx-auto bg-white p-8 rounded-lg shadow-xl space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Student Details
          </h2>
          <Link
            to="/dashboard/studentManage"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
          >
            Back to Admin Panel
          </Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-xl space-y-8">
        {/* Student Profile Card */}
        <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-md">
          <div className="w-48 h-48 mb-6 lg:mb-0">
            <img
              src="https://i.postimg.cc/8CP5t39g/compressed-4ea3ad7c94abcb2e43c376c009c61055.webp"
              alt="Student"
              className="w-full h-full object-cover rounded-full border-4 border-blue-500"
            />
          </div>
          <div className="ml-0 lg:ml-8 text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">
              {student.fullName}
            </h3>
            <p className="text-gray-600">
              {student.religion} | {student.gender}
            </p>
            <p className="text-gray-600">
              {student.nationality} | Blood Group: {student.bloodGroup}
            </p>
          </div>
        </div>

        {/* Personal Information Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="font-medium text-gray-600">Full Name:</p>
              <p className="text-gray-700">{student.fullName}</p>
            </div>
            <div>
              <p className="font-medium text-gray-600">Date of Birth:</p>
              <p className="text-gray-700">{student.dob}</p>
            </div>
            <div>
              <p className="font-medium text-gray-600">Place of Birth:</p>
              <p className="text-gray-700">{student.placeOfBirth}</p>
            </div>
            <div>
              <p className="font-medium text-gray-600">Gender:</p>
              <p className="text-gray-700">{student.gender}</p>
            </div>
          </div>
        </div>

        {/* Address Information Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Address Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="font-medium text-gray-600">Present Address:</p>
              <p className="text-gray-700">
                {student.presentAddress.village},{" "}
                {student.presentAddress.subDistrict},{" "}
                {student.presentAddress.district} -{" "}
                {student.presentAddress.postCode}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-600">Permanent Address:</p>
              <p className="text-gray-700">
                {student.permanentAddress.village},{" "}
                {student.permanentAddress.subDistrict},{" "}
                {student.permanentAddress.district} -{" "}
                {student.permanentAddress.postCode}
              </p>
            </div>
          </div>
        </div>

        {/* Educational Information Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Educational Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="font-medium text-gray-600">Last School:</p>
              <p className="text-gray-700">
                {student.educationalInfo.lastSchool}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-600">
                Medium of Instruction:
              </p>
              <p className="text-gray-700">
                {student.educationalInfo.mediumOfInstruction}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-600">Standard:</p>
              <p className="text-gray-700">
                {student.educationalInfo.standard}
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-600">Last School Result:</p>
              <p className="text-gray-700">
                {student.educationalInfo.lastSchoolResult}
              </p>
            </div>
          </div>
        </div>

        {/* Guardian Information Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Guardian Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="font-medium text-gray-600">Guardian Name:</p>
              <p className="text-gray-700">{student.guardianInfo.name}</p>
            </div>
            <div>
              <p className="font-medium text-gray-600">Occupation:</p>
              <p className="text-gray-700">{student.guardianInfo.occupation}</p>
            </div>
            <div>
              <p className="font-medium text-gray-600">Email:</p>
              <p className="text-gray-700">{student.guardianInfo.email}</p>
            </div>
            <div>
              <p className="font-medium text-gray-600">Phone Number:</p>
              <p className="text-gray-700">
                {student.guardianInfo.phoneNumber}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mt-1 mx-auto bg-white p-8 rounded-lg shadow-xl space-y-8">
        {/* Quick Features Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Quick Actions
          </h3>
          <ul className="space-y-4">
            <li>
              <Link
                to="#"
                className="text-blue-500 hover:text-blue-700 font-medium text-lg"
              >
                View Attendance
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-blue-500 hover:text-blue-700 font-medium text-lg"
              >
                Edit Details
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-blue-500 hover:text-blue-700 font-medium text-lg"
              >
                View Grades
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-blue-500 hover:text-blue-700 font-medium text-lg"
              >
                Contact Guardian
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
