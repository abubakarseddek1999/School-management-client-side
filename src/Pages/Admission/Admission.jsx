/* eslint-disable react/no-unescaped-entities */
import { FaPaintRoller } from "react-icons/fa";
import { useState } from "react";
import RightSidebar from "./RightSidebar";
import Modal from 'react-modal';
import { Link } from "react-router-dom";
Modal.setAppElement('#root');
const Admission = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        placeOfBirth: '',
        religion: '',
        gender: '',
        nationality: '',
        PresentAddress: '',
        permanentAddress: '',
        lastSchool: '',
        mediumOfInstruction: '',
        standard: '',
        reasonForLeaving: '',
        lastSchoolResult: '',
        admissionSoughtAs: '',
        guardianName: '',
        guardianOccupation: '',
        guardianEmail: '',
        guardianPhone: ''
    });


    const [leavingCertificate, setLeavingCertificate] = useState(null);
    const [markList, setMarkList] = useState(null);
    const [medicalCertificate, setMedicalCertificate] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [pageColor, setPageColor] = useState("#367c96");
    const [formColor, setFormColor] = useState("#ffffff");
    const [fontColor, setFontColor] = useState("#005875");
    const [inputBackground, setInputBackground] = useState("#ffffff");
    console.log(pageColor);
    // console.log(formColor);
    console.log(fontColor);
    // console.log("inputBackground", inputBackground);

    const handleFileUpload = (e, setFile) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({
                    ...formData,
                    [name]: file,
                    [`${name}Preview`]: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const Dob = form.dob.value;
        const placeOfBirth = form.placeOfBirth.value;
        const gender = form.gender.value;
        const religion = form.religion.value;
        const nationality = form.nationality.value;
        const PresentAddress = form.PresentAddress.value;
        const permanentAddress = form.permanentAddress.value;
        const lastSchool = form.lastSchool.value;
        const medium = form.medium.value;
        const reasonLeaving = form.reasonLeaving.value;
        const admissionSoughtAs = form.admissionSoughtAs.value;
        const guardianName = form.guardianName.value;
        const guardianOccupation = form.guardianOccupation.value;
        const guardianEmail = form.guardianEmail.value;
        const guardianPhone = form.guardianPhone.value;
        const blood = form.blood.value;

        console.log(
            "firstName: " + firstName,
            "lastName: " + lastName,
            "Dob: " + Dob,
            "placeOfBirth: " + placeOfBirth,
            "gender: " + gender,
            "nationality: " + nationality,
            "religion: " + religion,
            "PresentAddress: " + PresentAddress,
            "permanentAddress: " + permanentAddress,
            "guardianEmail: " + guardianEmail,
            "guardianName: " + guardianName,
            "guardianPhone: " + guardianPhone,
            "lastSchool: " + lastSchool,
            "medium: " + medium,
            "reasonLeaving: " + reasonLeaving,
            "guardianOccupation: " + guardianOccupation,
            "admissionSoughtAs: " + admissionSoughtAs,
            "blood: " + blood
        );

    };

    return (

        <div className="min-h-screen flex items-center justify-center py-28 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: inputBackground }}>

            <div className="max-w-6xl w-full space-y-8 p-10 mt-5 border rounded-xl shadow-lg" style={{ backgroundColor: formColor }}>
                {/* Form title */}
                <h2 className="text-center text-3xl font-extrabold text-gray-900">School Admission Form</h2>

                <form className="mt-10 space-y-6" onSubmit={handleSubmit}>

                    <div className="rounded-md shadow-sm ">
                        {/* first name and last name */}
                        <div className="grid md:grid-cols-2 gap-4 mb-10">
                            <div>
                                <label htmlFor="firstName" className="">student's First Name<span className="text-red-500 text-xl">*</span></label>
                                <input
                                    id="first-name"
                                    name="firstName"
                                    type="text"

                                    // value={formData.firstName}
                                    onChange={handleChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md " placeholder="" style={{ backgroundColor: inputBackground }} />
                                <p className="text-sm m-1 text-gray-600">first Name</p>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="">student's Last Name<span className="text-red-500 text-xl">*</span></label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"

                                    // value={formData.lastName}
                                    onChange={handleChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="" style={{ backgroundColor: inputBackground }} />
                                <p className="text-sm m-1 text-gray-600">Last Name</p>
                            </div>
                        </div>

                        {/* date of birth and place of birth */}
                        <div className="grid md:grid-cols-2 gap-4 mb-10">
                            <div>
                                <label htmlFor="dob" className="">Student's Date of Birth<span className="text-red-500 text-xl">*</span></label>
                                <input
                                    id="dob"
                                    name="dob"
                                    type="date"

                                    // value={formData.dob}
                                    onChange={handleChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" />
                            </div>
                            <div>
                                <label htmlFor="placeOfBirth" className="">Place of Birth<span className="text-red-500 text-xl">*</span></label>
                                <input
                                    id="placeOfBirth"
                                    name="placeOfBirth"
                                    type="text"
                                    // value={formData.placeOfBirth}
                                    onChange={handleChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Place of Birth" />
                            </div>
                        </div>

                        {/* religion and gender */}
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="religion" className="">Religion<span className="text-red-500 text-xl">*</span></label>
                                {/* todo set dropdown icon in input*/}
                                <select
                                    id="religion"
                                    name="religion"

                                    // value={formData.religion}
                                    onChange={handleChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md">
                                    <option value="">Please Select</option>
                                    <option value="hindu">Hindu</option>
                                    <option value="muslim">Muslim</option>
                                    <option value="christian">Christian</option>
                                    <option value="sikh">Sikh</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="gender" className="">Gender<span className="text-red-500 text-xl">*</span></label>
                                <select
                                    id="gender"
                                    name="gender"

                                    // value={formData.gender}
                                    onChange={handleChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md">
                                    <option value="">Please Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        {/* nationality and blood */}
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="religion" className="">Nationality<span className="text-red-500 text-xl">*</span></label>
                                <input
                                    name="nationality"
                                    type="text"

                                    // value={formData.nationality}
                                    onChange={handleChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="" />
                            </div>
                            <div>
                                <label htmlFor="religion" className="">Blood Group<span className="text-red-500 text-xl">*</span></label>
                                <input
                                    name="blood"
                                    type="text"

                                    // value={formData.blood}
                                    onChange={handleChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="" />
                            </div>
                        </div>

                        {/* Present Address */}
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <div>
                                    <label htmlFor="Present-address" className="font-bold">Present Address</label>
                                    <p>District<span className="text-red-500 text-xl">*</span></p>
                                    <input
                                        id="District"
                                        name="District"
                                        type="text"

                                        // value={formData.PresentAddress}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="District" />
                                </div>
                                <div>
                                    <label htmlFor="Present-address" className="">Sub-District<span className="text-red-500 text-xl">*</span> </label>
                                    <input
                                        id="Sub-District"
                                        name="Sub-District"
                                        type="text"

                                        // value={formData.PresentAddress}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Sub-District" />
                                </div>
                                <div>
                                    <label htmlFor="Present-address" className="">Village<span className="text-red-500 text-xl">*</span> </label>
                                    <input
                                        id="Village"
                                        name="Village"
                                        type="text"

                                        // value={formData.PresentAddress}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="village-name" />
                                </div>
                                <div>
                                    <label htmlFor="Present-address" className="">Post-code </label>
                                    <input
                                        id="Present-address"
                                        name="Post-code"
                                        type="number"

                                        // value={formData.PresentAddress}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="post-code " />
                                </div>
                            </div>
                            {/* permanent Address */}
                            <div>
                                <div>
                                    <label htmlFor="Present-address" className="font-bold">Permanent Address</label>
                                    <p>District</p>
                                    <input
                                        id="District"
                                        name="par-District"
                                        type="text"

                                        // value={formData.PresentAddress}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="District" />
                                </div>
                                <div>
                                    <label htmlFor="Present-address" className="">Sub-District </label>
                                    <input
                                        id="Sub-District"
                                        name="par-Sub-District"
                                        type="text"

                                        // value={formData.PresentAddress}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Sub-District" />
                                </div>
                                <div>
                                    <label htmlFor="Present-address" className="">Village </label>
                                    <input
                                        id="Village"
                                        name="par-Village"
                                        type="text"

                                        // value={formData.PresentAddress}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="village-name" />
                                </div>
                                <div>
                                    <label htmlFor="Present-address" className="">Post-code </label>
                                    <input
                                        id="Present-address"
                                        name="par-Post-code"
                                        type="number"

                                        // value={formData.PresentAddress}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="post-code " />
                                </div>
                            </div>
                        </div>


                        {/* last-school */}
                        <div className="mt-4">
                            <label htmlFor="last-school" className="">Name of Last School<span className="text-red-500 text-xl">*</span></label>
                            <input
                                id="last-school"
                                name="lastSchool"
                                type="text"

                                // value={formData.lastSchool}
                                onChange={handleChange}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Name of Last School" />
                        </div>

                        {/* Medium of Instruction */}
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="medium-of-instruction" className="">Medium of Instruction</label>
                                <select
                                    id="medium-of-instruction"
                                    name="medium"

                                    // value={formData.mediumOfInstruction}
                                    onChange={handleChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md">
                                    <option value="">Please Select</option>
                                    <option value="english">English</option>
                                    <option value="hindi">Hindi</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="standard" className="">Standard<span className="text-red-500 text-xl">*</span></label>
                                <select
                                    id="standard"
                                    name="standard"

                                    // value={formData.standard}
                                    onChange={handleChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md">
                                    <option value="">Please Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                        </div>

                        {/* Reason for Leaving Last School */}
                        <div className="mt-4">
                            <div>
                                <label htmlFor="reason-for-leaving" className="">Reason for Leaving Last School</label>
                                <input
                                    id="reason-for-leaving"
                                    name="reasonLeaving"
                                    type="text"
                                    // value={formData.reasonForLeaving}
                                    onChange={handleChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Reason for Leaving Last School" />
                            </div>


                        </div>
                        {/* Last School Result  */}
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="last-school-result" className="">Last School Result<span className="text-red-500 text-xl">*</span></label>
                                <div className="flex items-center">
                                    <input
                                        id="promoted"
                                        name="lastSchoolResult"
                                        type="radio"

                                        // value={formData.lastSchoolResult}
                                        onChange={handleChange}

                                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                                    <label htmlFor="promoted" className="ml-3 block text-sm leading-5 font-medium text-gray-700">Promoted (passed)</label>
                                </div>
                                <div className="flex items-center mt-2">
                                    <input
                                        id="failed"
                                        name="lastSchoolResult"
                                        type="radio"

                                        // value={formData.lastSchoolResult}
                                        onChange={handleChange}
                                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                                    <label htmlFor="failed" className="ml-3 block text-sm leading-5 font-medium text-gray-700">Failed</label>
                                </div>
                            </div>

                        </div>

                        {/* Admission Sought As F */}
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="day-scholar" className="">Admission Sought As</label>
                                <div className="flex items-center">
                                    <input
                                        id="day-scholar"
                                        name="admissionSoughtAs"
                                        type="radio"

                                        // value={formData.admissionSoughtAs}
                                        onChange={handleChange}
                                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                                    <label htmlFor="day-scholar" className="ml-3 block text-sm leading-5 font-medium text-gray-700">Day Scholar</label>
                                </div>
                                <div className="flex items-center mt-2">
                                    <input
                                        id="boarder"
                                        name="admissionSoughtAs"
                                        type="radio"

                                        value={formData.admissionSoughtAs}
                                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                                    <label htmlFor="boarder" className="ml-3 block text-sm leading-5 font-medium text-gray-700">Boarder</label>
                                </div>
                            </div>
                        </div>

                        {/* girdiun occupation and name */}
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="guardian-name" className="">Local Guardian Name</label>
                                <input
                                    id="guardian-name"
                                    name="guardianName"
                                    type="text"

                                    // value={formData.guardianName}
                                    onChange={handleChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Local Guardian Name" />
                            </div>
                            <div>
                                <label htmlFor="guardian-occupation" className="">Local Guardian Occupation</label>
                                <input
                                    id="guardian-occupation"
                                    name="guardianOccupation"
                                    type="text"

                                    // value={formData.guardianOccupation}
                                    onChange={handleChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Local Guardian Occupation" />
                            </div>
                        </div>

                        {/* Local Guardian Email and number */}
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="guardian-email" className="">Local Guardian Email</label>
                                <input
                                    id="guardian-email"
                                    name="guardianEmail"
                                    type="email"

                                    // value={formData.guardianEmail}
                                    onChange={handleChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Local Guardian Email" />
                            </div>
                            <div>
                                <label htmlFor="guardian-phone" className="">Local Guardian Phone Number</label>
                                <input
                                    id="guardian-phone"
                                    name="guardianPhone"
                                    type="tel"

                                    // value={formData.guardianPhone}
                                    onChange={handleChange}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Local Guardian Phone Number" />
                            </div>
                        </div>

                        {/* Attach Scan copy of Leaving Certificate */}
                        <div className="mt-4">
                            <label htmlFor="leaving-certificate" className="">Attach Scan copy of Leaving Certificate<span className="text-red-500 text-xl">*</span></label>
                            <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col items-center w-full px-4 py-6 text-blue-500 border border-blue-500 rounded-lg shadow-lg cursor-pointer">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 13.5h-3v3h-3v-3h-3v-3h3v-3h3v3h3v3zm-4.5-11.5l6 6h-4v6h-4v-6h-4l6-6zm7.5 13.5v5h-12v-5h-5v7h22v-7h-5z" /></svg>
                                    <span className="mt-2 text-base leading-normal">{leavingCertificate ? leavingCertificate.name : "Upload a File"}</span>
                                    <input id="leaving-certificate" name="leaving-certificate" type="file" className="hidden" onChange={(e) => handleFileUpload(e, setLeavingCertificate)} />
                                </label>
                            </div>
                        </div>
                        {/* Attach Scan copy of Mark-list / Report Card */}
                        <div className="mt-4">
                            <label htmlFor="mark-list" className="">Attach Scan copy of Mark-list / Report Card<span className="text-red-500 text-xl">*</span></label>
                            <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col items-center w-full px-4 py-6 text-blue-500 border border-blue-500 rounded-lg shadow-lg cursor-pointer">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 13.5h-3v3h-3v-3h-3v-3h3v-3h3v3h3v3zm-4.5-11.5l6 6h-4v6h-4v-6h-4l6-6zm7.5 13.5v5h-12v-5h-5v7h22v-7h-5z" /></svg>
                                    <span className="mt-2 text-base leading-normal">{markList ? markList.name : "Upload a File"}</span>
                                    <input id="mark-list" name="mark-list" type="file" className="hidden" onChange={(e) => handleFileUpload(e, setMarkList)} />
                                </label>
                            </div>
                        </div>

                        {/* Attach Scan copy of Medical Certificate */}
                        <div className="mt-4">
                            <label htmlFor="medical-certificate" className="">Attach Scan copy of Medical Certificate<span className="text-red-500 text-xl">*</span></label>
                            <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col items-center w-full px-4 py-6 text-blue-500 border border-blue-500 rounded-lg shadow-lg cursor-pointer">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 13.5h-3v3h-3v-3h-3v-3h3v-3h3v3h3v3zm-4.5-11.5l6 6h-4v6h-4v-6h-4l6-6zm7.5 13.5v5h-12v-5h-5v7h22v-7h-5z" /></svg>
                                    <span className="mt-2 text-base leading-normal">{medicalCertificate ? medicalCertificate.name : "Upload a File"}</span>
                                    <input id="medical-certificate" name="medical-certificate" type="file" className="hidden" onChange={(e) => handleFileUpload(e, setMedicalCertificate)} />
                                </label>
                            </div>
                        </div>

                        {/* upload photo and signature */}

                        <div className="flex justify-between items-center">
                            <div>
                                <div className="flex flex-col">
                                    <label className="py-2" htmlFor="studentPhoto">Upload Student Photo</label>
                                    <input
                                        type="file"
                                        id="studentPhoto"
                                        name="studentPhoto"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        required
                                    />
                                </div>

                                <div className="flex flex-col mb-5">
                                    <label className="py-2" htmlFor="signature">Upload Signature</label>
                                    <input
                                        type="file"
                                        id="signature"
                                        name="signature"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        required
                                    />
                                </div>


                            </div>
                            <div>

                                {formData.studentPhotoPreview && (
                                    <img
                                        className="object-cover mt-5"
                                        src={formData.studentPhotoPreview}
                                        alt="Student Photo Preview"
                                        style={{ width: '120px', height: '120px' }}
                                    />
                                )}
                                {formData.signaturePreview && (
                                    <img className="p-2 object-contain"
                                        src={formData.signaturePreview}
                                        alt="Signature Preview"
                                        style={{ width: '120px', height: '50px' }}
                                    />
                                )}


                            </div>
                        </div>

                        {/* terms & conditions */}
                        <div className="mt-6 flex items-center">
                            <input id="agree" name="agree" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                            <label htmlFor="agree" className="ml-2 block text-sm leading-5 text-gray-900">I agree to the <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">terms & conditions</a></label>
                        </div>

                        {/* submit button */}
                        <div className="mt-6 flex justify-end ">
                            <Link to="/PreviewPage" type="submit" className="group uppercase relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Submit Application
                            </Link>

                        </div>

                    </div>
                </form>
            </div>

            <div className="absolute top-0 right-0 p-4">
                <button
                    onClick={toggleSidebar}
                    className="text-2xl text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    <FaPaintRoller className="text-6xl mt-20 text-blue-500" />
                </button>
            </div>

            <RightSidebar
                isOpen={isSidebarOpen}
                onClose={toggleSidebar}
                setPageColor={setPageColor}
                setFormColor={setFormColor}
                setFontColor={setFontColor}
                setInputBackground={setInputBackground}
            />


        </div>
    );
};

export default Admission;