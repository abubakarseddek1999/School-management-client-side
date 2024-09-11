/* eslint-disable react/prop-types */
import logo from "../../assets/image/logo.png"
import { Link } from "react-router-dom";
import { useState } from 'react';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';



const PreviewPage = ({ formData }) => {
    const [loader, setLoader] = useState(false);

    const downloadPDF = async () => {
        const capture = document.querySelector('.actual-receipt');
        setLoader(true);
        html2canvas(capture, {
            backgroundColor: null, // Prevent background from being captured
            scale: 2, // Increase resolution if needed
            useCORS: true, // Enable CORS for loading images
        }).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save('receipt.pdf');
        });
    }


    return (
        <div className=" py-24 px-4 sm:px-24 lg:px-8 bg-white overflow-x-auto">
            <h2 className="text-2xl font-bold text-center p-1 rounded-md mb-1"> Admissions form Preview</h2>
            <div className="max-w-[1000px] min-w-[600px] mx-auto space-y-8 bg-white  p-6 sm:p-10 lg:px-16 mt-5 px-16 border rounded-xl shadow-lg actual-receipt">

                <div className="flex justify-between bg-slate-200 p- rounded-md mb-1">
                    <div className="flex justify-center items-center">
                        <div>
                            <img className="w-24 h-24" src={logo} alt="" />

                        </div>
                        <div>
                            <p className="text-xl font-bold">Daffodil international school</p>
                            <p className="">Phone:+8801728306504</p>
                            <p>Code No: 20901</p>

                        </div>
                    </div>
                    <div>
                        <img className="w-[120px] h-[100px]" src="https://i.postimg.cc/Jncnqv60/abubakar.png" alt="" />
                    </div>
                </div>

                <div className="flex justify-between gap-5">
                    <div className="w-1/2">
                        <div className="mb-6">
                            <h3 className=" md:text-lg font-semibold bg-slate-200 p-1 rounded-md mb-1">Basic Information</h3>

                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Full Name</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : Abu bakar
                                        {formData?.firstName}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Date of Birth</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : 18-11-1999{formData?.dob}

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Place of Birth</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : Brahmanbaria, Bangladesh
                                        {formData?.placeOfBirth}

                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="w-1/2">
                        <div className="mb-6">
                            <h3 className="md:text-lg font-semibold bg-slate-200 p-1 rounded-md mb-1">Additional Information</h3>
                            <div className="flex justify-start gap-5 bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Religion</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : Islam
                                        {formData?.religion}

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start gap-5 bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Gender</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : Male
                                        {formData?.gender}

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start gap-5 bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Nationality</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : Bangladesh
                                        {formData?.nationality}

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start gap-5 bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Blood Group</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : O+
                                        {formData?.blood}

                                    </p>
                                </div>
                            </div>




                        </div>


                    </div>
                </div>

                {/* Present Address */}
                <div className="flex justify-between gap-5">
                    <div className="w-1/2">
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold bg-slate-200 p-1 rounded-md mb-1">Present Address</h3>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Village:</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        :  Madla

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Post Code:</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        :  3500

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Sub District</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : kasba

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>District</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : Brahmanbaria

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className=" ">
                            <h3 className="text-lg font-semibold bg-slate-200 p-1 rounded-md mb-1">Permanent Address</h3>

                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Village:</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        :  Madla

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Post Code:</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        :  3500

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Sub District</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : kasba

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>District</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : Brahmanbaria

                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Educational Information and Guardian Information*/}
                <div className="flex justify-between gap-5">
                    <div className="w-1/2">
                        <div className="mb-6 ">
                            <h3 className="text-lg font-semibold bg-slate-200 p-1 rounded-md mb-1">Educational Information</h3>

                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Last School</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : Shere Bangla High School


                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Medium of Instruction</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : Night


                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Standard</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : 10


                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Last School Result</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : Passed

                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="w-1/2">
                        <div className="mb-6 ">
                            <h3 className="text-lg font-semibold bg-slate-200 p-1 rounded-md mb-1">Guardian Information</h3>

                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong> Guardian Name</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : MD.Haronor Rashid


                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong> Guardian Occupation</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : Farmer


                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong> Guardian Email</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p className="truncate">
                                        : abubakarseddek1999@gamil.com

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong> Guardian Phone Number</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p className="truncate">
                                        : +8801728306504
                                        {formData?.lastSchool}

                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <div className="flex justify-between">
                    <div className="w-1/2">
                        <div className="mb-6 ">
                            <h3 className="text-lg font-semibold mb-5">Reason for Leaving Last School</h3>

                            <div className="flex justify-start">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, unde aut. Molestias commodi voluptatibus alias dicta incidunt autem dolor quo!</p>
                            </div>


                        </div>
                    </div>
                </div> */}

                {/* Todo show Certificate */}


            </div>
            {/* Download PDF Button */}
            <div className="mt-6 flex justify-end gap-4 max-w-[1000px] min-w-[600px] mx-auto">
                <Link to="" type="submit" className="group uppercase relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Confirm Submit
                </Link>

                <button className="group uppercase relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" onClick={downloadPDF}
                    disabled={!(loader === false)}
                >
                    {loader ? (
                        <span>Downloading</span>
                    ) : (
                        <span>Download PDF</span>
                    )}
                </button>
            </div>

        </div>
    );
};

export default PreviewPage;
