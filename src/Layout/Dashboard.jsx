import { useState } from "react";
import logo from "../assets/image/logo.png"
import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => setIsExpanded(!isExpanded);

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className={`w-${isExpanded ? '64' : '16'} min-h-screen bg-blue-400 `}>
                <div className="flex justify-between items-center">
                    
                    <img className="w-[30px] h-[30px]  mt-1" src={logo} alt="" />
                    <button onClick={toggleSidebar} className="text-white">
                    {isExpanded ?<IoIosArrowDropleftCircle  className="text-2xl" />   : <IoIosArrowDroprightCircle className="text-2xl" /> }
                    </button>
                </div>
                <ul className="menu p-2 text-white font-bold text-sm">
                    <li>
                        <NavLink to="/dashboard/adminHome">
                            <FaHome className="text-2xl" /> {isExpanded && <span>Admin Home</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addItems">
                            <FaUtensils className="text-2xl"/> {isExpanded && <span>Add Student</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageItems">
                            <FaList className="text-2xl" /> {isExpanded && <span>Manage Student</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <FaAd className="text-2xl"/> {isExpanded && <span>Review</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/allUsers">
                            <FaUsers className="text-2xl"/> {isExpanded && <span>All Users</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageTeacher">
                            <FaUsers className="text-2xl"/> {isExpanded && <span>Manage Teacher</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/viewReports">
                            <FaHome className="text-2xl"/> {isExpanded && <span>View Reports</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/history">
                            <FaCalendar className="text-2xl"/> {isExpanded && <span>Payment History</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymentHistory">
                            <FaList className="text-2xl"/> {isExpanded && <span>Payment Real History</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope className="text-2xl"/> {isExpanded && <span>Contact</span>}
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
