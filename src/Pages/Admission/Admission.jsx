/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";


const Admission = () => {
    const [leavingCertificate, setLeavingCertificate] = useState(null);
    const [markList, setMarkList] = useState(null);
    const [medicalCertificate, setMedicalCertificate] = useState(null);

    const handleFileUpload = (e, setFile) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
        }
    };
    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl w-full space-y-8 p-10 bg-white rounded-xl shadow-lg">
                {/* Form title */}
                <h2 className="text-center text-3xl font-extrabold text-gray-900">School Admission Form</h2>

                <form className="mt-8 space-y-6">

                    <div className="rounded-md shadow-sm ">
                        {/* first name and last name */}
                        <div className="grid md:grid-cols-2 gap-4 mb-10">
                            <div>
                                <label htmlFor="first-name" className="sr-only">Pupil's First Name</label>
                                <input id="first-name" name="first-name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md " placeholder="" />
                                <p className="text-sm m-1 text-gray-600">first Name</p>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="sr-only">Pupil's Last Name</label>
                                <input id="last-name" name="last-name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="" />
                                <p className="text-sm m-1 text-gray-600">Last Name</p>
                            </div>
                        </div>

                        {/* date of birth and place of birth */}
                        <div className="grid md:grid-cols-2 gap-4 mb-10">
                            <div>
                                <label htmlFor="dob" className="">Student's Date of Birth</label>
                                <input id="dob" name="dob" type="date" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" />
                            </div>
                            <div>
                                <label htmlFor="place-of-birth" className="">Place of Birth</label>
                                <input id="place-of-birth" name="place-of-birth" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Place of Birth" />
                            </div>
                        </div>

                        {/* religion and gender */}
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="religion" className="">Religion</label>
                                {/* todo set dropdown icon in input*/}
                                <select id="religion" name="religion" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md">
                                    <option value="">Please Select</option>
                                    <option value="hindu">Hindu</option>
                                    <option value="muslim">Muslim</option>
                                    <option value="christian">Christian</option>
                                    <option value="sikh">Sikh</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="gender" className="">Gender</label>
                                <select id="gender" name="gender" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md">
                                    <option value="">Please Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        {/* nationality */}
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="religion" className="">Nationality</label>
                                <input name="Nationality" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="" />
                            </div>
                        </div>

                        {/* Residential Address */}
                        <div className="mt-4">
                            <label htmlFor="residential-address" className="">Residential Address</label>
                            <input id="residential-address" name="residential-address" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Residential Address" />
                        </div>

                        {/* Correspondent Addres */}
                        <div className="mt-4">
                            <label htmlFor="correspondent-address" className="">Correspondent Address</label>
                            <input id="correspondent-address" name="correspondent-address" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Correspondent Address (if different)" />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="last-school" className="">Name of Last School</label>
                            <input id="last-school" name="last-school" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Name of Last School" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="medium-of-instruction" className="">Medium of Instruction</label>
                                <select id="medium-of-instruction" name="medium-of-instruction" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md">
                                    <option value="">Please Select</option>
                                    <option value="english">English</option>
                                    <option value="hindi">Hindi</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="standard" className="">Standard</label>
                                <select id="standard" name="standard" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md">
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
                                <input id="reason-for-leaving" name="reason-for-leaving" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Reason for Leaving Last School" />
                            </div>


                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="last-school-result" className="">Last School Result</label>
                                <div className="flex items-center">
                                    <input id="promoted" name="last-school-result" type="radio" value="promoted" required className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                                    <label htmlFor="promoted" className="ml-3 block text-sm leading-5 font-medium text-gray-700">Promoted (passed)</label>
                                </div>
                                <div className="flex items-center mt-2">
                                    <input id="failed" name="last-school-result" type="radio" value="failed" required className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                                    <label htmlFor="failed" className="ml-3 block text-sm leading-5 font-medium text-gray-700">Failed</label>
                                </div>
                            </div>

                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="day-scholar" className="">Admission Sought As</label>
                                <div className="flex items-center">
                                    <input id="day-scholar" name="admission-sought-as" type="radio" value="day-scholar" required className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                                    <label htmlFor="day-scholar" className="ml-3 block text-sm leading-5 font-medium text-gray-700">Day Scholar</label>
                                </div>
                                <div className="flex items-center mt-2">
                                    <input id="boarder" name="admission-sought-as" type="radio" value="boarder" required className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                                    <label htmlFor="boarder" className="ml-3 block text-sm leading-5 font-medium text-gray-700">Boarder</label>
                                </div>
                            </div>
                        </div>

                        {/* girdiun occupation and name */}
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="guardian-name" className="">Local Guardian Name</label>
                                <input id="guardian-name" name="guardian-name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Local Guardian Name" />
                            </div>
                            <div>
                                <label htmlFor="guardian-occupation" className="">Local Guardian Occupation</label>
                                <input id="guardian-occupation" name="guardian-occupation" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Local Guardian Occupation" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="guardian-email" className="">Local Guardian Email</label>
                                <input id="guardian-email" name="guardian-email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Local Guardian Email" />
                            </div>
                            <div>
                                <label htmlFor="guardian-phone" className="">Local Guardian Phone Number</label>
                                <input id="guardian-phone" name="guardian-phone" type="tel" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10sm:text-sm shadow-md" placeholder="Local Guardian Phone Number" />
                            </div>
                        </div>

                        {/* Attach Scan copy of Leaving Certificate */}
                        <div className="mt-4">
                            <label htmlFor="leaving-certificate" className="">Attach Scan copy of Leaving Certificate</label>
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
                            <label htmlFor="mark-list" className="">Attach Scan copy of Mark-list / Report Card</label>
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
                            <label htmlFor="medical-certificate" className="">Attach Scan copy of Medical Certificate</label>
                            <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col items-center w-full px-4 py-6 text-blue-500 border border-blue-500 rounded-lg shadow-lg cursor-pointer">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 13.5h-3v3h-3v-3h-3v-3h3v-3h3v3h3v3zm-4.5-11.5l6 6h-4v6h-4v-6h-4l6-6zm7.5 13.5v5h-12v-5h-5v7h22v-7h-5z" /></svg>
                                    <span className="mt-2 text-base leading-normal">{medicalCertificate ? medicalCertificate.name : "Upload a File"}</span>
                                    <input id="medical-certificate" name="medical-certificate" type="file" className="hidden" onChange={(e) => handleFileUpload(e, setMedicalCertificate)} />
                                </label>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center">
                            <input id="agree" name="agree" type="checkbox" required className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                            <label htmlFor="agree" className="ml-2 block text-sm leading-5 text-gray-900">I agree to the <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">terms & conditions</a></label>
                        </div>

                        <div className="mt-6 flex justify-end ">
                            <button type="submit" className="group uppercase relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Submit Application
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Admission;