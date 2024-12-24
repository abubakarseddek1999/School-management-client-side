import { useState } from "react";
import logo from "../assets/image/logo.png"
import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { RiMenuFold2Fill, RiMenuFold3Fill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { MdBugReport, MdOutlinePreview } from "react-icons/md";

const Dashboard = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleSidebar = () => setIsExpanded(!isExpanded);

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className={`w-${isExpanded ? '64' : '17'} min-h-screen bg-blue-400 `}>

                <div className="flex justify-center items-center relative cursor-pointer">
                    <NavLink to="/">
                        <img className="w-[50px] h-[50px]  mt-1" src={logo} alt="" />
                    </NavLink>
                    <button onClick={toggleSidebar} className="text-white absolute -right-7">
                        {isExpanded ? <RiMenuFold3Fill className="text-3xl text-blue-400 font-bold" /> : <RiMenuFold2Fill className="text-3xl  text-blue-400 font-bold" />}
                    </button>
                </div>

                <ul className="menu p-2 text-white font-bold text-sm">
                    <li>
                        <NavLink to="/dashboard/adminHome">
                            <FaHome className="text-3xl" /> {isExpanded && <span>Admin Home</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addStudent">
                            <PiStudentFill className="text-3xl" /> {isExpanded && <span>Add Student</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/studentManage">
                            <FaList className="text-3xl" /> {isExpanded && <span>Manage Student</span>}
                        </NavLink>
                    </li>
                   
                    <li>
                        <NavLink to="/dashboard/allUsers">
                            <FaUsers className="text-3xl" /> {isExpanded && <span>All Users</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/teacherMange">
                            <FaUsers className="text-3xl" /> {isExpanded && <span>Manage Teacher</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/viewReports">
                            <MdBugReport className="text-3xl" /> {isExpanded && <span>View Reports</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <MdOutlinePreview className="text-3xl" /> {isExpanded && <span>Review</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymentHistory">
                            <FaCalendar className="text-3xl" /> {isExpanded && <span>Payment History</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymentRealHistory">
                            <FaList className="text-3xl" /> {isExpanded && <span>Payment Real History</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <FaEnvelope className="text-3xl" /> {isExpanded && <span>Contact</span>}
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
