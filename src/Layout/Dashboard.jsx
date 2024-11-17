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
                    <img className="w-[30px] h-[30px] p-x-2 mt-1" src={logo} alt="" />
                    <button onClick={toggleSidebar} className="text-white">
                    {isExpanded ?<IoIosArrowDropleftCircle  className="text-2xl" />   : <IoIosArrowDroprightCircle className="text-2xl" /> }
                    </button>
                </div>
                <ul className="menu p-3 text-white font-bold text-sm">
                    <li>
                        <NavLink to="/dashboard/adminHome">
                            <FaHome /> {isExpanded && <span>Admin Home</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addItems">
                            <FaUtensils /> {isExpanded && <span>Add Student</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageItems">
                            <FaList /> {isExpanded && <span>Manage Student</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <FaAd /> {isExpanded && <span>Review</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users">
                            <FaUsers /> {isExpanded && <span>All Users</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageTeacher">
                            <FaUsers /> {isExpanded && <span>Manage Teacher</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/viewReports">
                            <FaHome /> {isExpanded && <span>View Reports</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/history">
                            <FaCalendar /> {isExpanded && <span>Payment History</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymentHistory">
                            <FaList /> {isExpanded && <span>Payment Real History</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope /> {isExpanded && <span>Contact</span>}
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
