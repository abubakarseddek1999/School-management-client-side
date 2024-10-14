/* eslint-disable react/prop-types */
import logo from "../../assets/image/logo.png"
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';
import Swal from "sweetalert2";
import { FormDataContext } from "../../Providers/FormDataProvider";


const PreviewPage = () => {
    const Data = useContext(FormDataContext)
    const FormData = Data?.formData;
    console.log(FormData?.firstName);
    const [loader, setLoader] = useState(false);

    // const downloadPDF = async () => {
    //     const capture = document.querySelector('.actual-receipt');
    //     setLoader(true);
    //     html2canvas(capture, {
    //         backgroundColor: null, 
    //         scale: 2, 
    //         useCORS: true, 
    //     }).then((canvas) => {
    //         const imgData = canvas.toDataURL('img/png');
    //         const doc = new jsPDF('p', 'mm', 'a4');
    //         const componentWidth = doc.internal.pageSize.getWidth();
    //         const componentHeight = doc.internal.pageSize.getHeight();
    //         doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
    //         setLoader(false);
    //         doc.save('receipt.pdf');
    //     });
    // }

    const HandleConfirm = () => {
        const capture = document.querySelector('.actual-receipt');
        Swal.fire({
            title: "Do you want to Download this?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Download PDF",
            denyButtonText: `Don't Download`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
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
                Swal.fire("Downloaded!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Document are not Download", "", "info");
            }
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
                                        : {FormData?.firstName} {FormData?.lastName}

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Date of Birth</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : {FormData?.dob}

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Place of Birth</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : {FormData?.placeOfBirth}

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
                                        : {FormData?.religion}

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start gap-5 bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Gender</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : {FormData?.gender}

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start gap-5 bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Nationality</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : {FormData?.nationality}

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start gap-5 bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Blood Group</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : {FormData?.blood}

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
                                        : {FormData?.Village}

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Post Code:</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        :
                                        {FormData?.Post_code}

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Sub District</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : {FormData?.Sub_District}

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>District</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : {FormData?.District}

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 ">
                        <div className=" ">
                            <h3 className="text-lg font-semibold bg-slate-200 p-1 rounded-md mb-1">Permanent Address</h3>

                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Village:</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        :  {FormData?.par_Village}


                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Post Code:</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : {FormData?.par_Post_code}


                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Sub District</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : {FormData?.par_Sub_District}

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>District</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : {FormData?.par_District}

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
                                        : {FormData?.lastSchool}


                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Medium of Instruction</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : {FormData?.medium}


                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Standard</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : {FormData?.standard}


                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong>Last School Result</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : {FormData?.lastSchoolResult}

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
                                        : {FormData?.guardianName}


                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong> Guardian Occupation</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p>
                                        : {FormData?.guardianOccupation}


                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong> Guardian Email</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p className="truncate">
                                        : {FormData?.guardianEmail}

                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1">
                                <div className="w-1/2">
                                    <p><strong> Guardian Phone Number</strong></p>
                                </div>
                                <div className="w-1/2">
                                    <p className="truncate">
                                        : {FormData?.guardianPhone}

                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Reason for Leaving Last School */}
                <div className="flex justify-between gap-5">
                    <div className="w-1/2">
                        <div className="mb-6 ">
                            <h3 className="text-lg font-semibold bg-slate-200 p-1 rounded-md mb-1">Reason for Leaving Last School</h3>

                            <div className="flex justify-start bg-slate-200 p-1 rounded-md mb-1 min-h-28 break-words">
                                <p className="break-all">{FormData?.reasonLeaving}</p>
                            </div>



                        </div>
                    </div>


                    <div className="w-1/2">
                        <div className="mb-6 ">
                            <h3 className="text-lg font-semibold bg-slate-200 p-1 rounded-md mb-1">Your certificates </h3>




                        </div>
                    </div>
                </div>
                {/* Todo show Certificate */}
            </div>

            {/* Download PDF Button */}
            <div className="mt-6 flex justify-end gap-4 max-w-[1000px] min-w-[600px] mx-auto">
                <Link to="" type="submit" className="group uppercase relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={HandleConfirm}>
                    Confirm Submit
                </Link>

            </div>

        </div>
    );
};

export default PreviewPage;
