import { useState } from "react";
import logo from "../assets/image/logo.png";
import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaUsers } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import { RiMenuFold2Fill, RiMenuFold3Fill } from "react-icons/ri";
import { PiStudentFill } from "react-icons/pi";
import { MdBugReport, MdOutlinePreview } from "react-icons/md";

const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const navLinks = [
    { path: "/dashboard/adminHome", icon: <FaHome className="text-3xl" />, label: "Admin Home" },
    { path: "/dashboard/addStudent", icon: <PiStudentFill className="text-3xl" />, label: "Add Student" },
    { path: "/dashboard/studentManage", icon: <FaList className="text-3xl" />, label: "Manage Student" },
    { path: "/dashboard/allUsers", icon: <FaUsers className="text-3xl" />, label: "All Users" },
    { path: "/dashboard/teacherMange", icon: <FaUsers className="text-3xl" />, label: "Manage Teacher" },
    { path: "/dashboard/viewReports", icon: <TbReportSearch className="text-3xl" />, label: "View Reports" },
    { path: "/dashboard/review", icon: <MdOutlinePreview className="text-3xl" />, label: "Review" },
    { path: "/dashboard/paymentHistory", icon: <FaCalendar className="text-3xl" />, label: "Payment History" },
    { path: "/dashboard/paymentRealHistory", icon: <FaList className="text-3xl" />, label: "Payment Real History" },
    { path: "/contact", icon: <FaEnvelope className="text-3xl" />, label: "Contact" },
  ];

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className={`w-${isExpanded ? "64" : "17"} min-h-screen bg-blue-400`}>
        <div className="flex justify-center items-center relative cursor-pointer">
          <NavLink to="/">
            <img className="w-[50px] h-[50px] mt-1" src={logo} alt="" />
          </NavLink>
          <button onClick={toggleSidebar} className="text-white absolute -right-7">
            {isExpanded ? (
              <RiMenuFold3Fill className="text-3xl text-blue-400 font-bold" />
            ) : (
              <RiMenuFold2Fill className="text-3xl text-blue-400 font-bold" />
            )}
          </button>
        </div>

        <ul className="menu p-2 text-white font-bold text-sm">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path}>
                {link.icon} {isExpanded && <span>{link.label}</span>}
              </NavLink>
            </li>
          ))}
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
