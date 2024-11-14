import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaUsers, FaUtensils, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    // TODO: get isAdmin value from the database


    return (
        <div className="flex ">

            {/* dashboard side bar */}
            <div className="div w-64 min-h-screen bg-blue-400">
                <ul className="menu p-3 text-white font-bold text-sm">
                    <li>

                        <NavLink to="/dashboard/adminHome"> <FaHome></FaHome> Admin Home</NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/addItems"> <FaUtensils></FaUtensils> Add student</NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/manageItems"> <FaList></FaList>  Manage Student</NavLink>
                    </li>

                    <li>

                        <NavLink to="/dashboard/review"> <FaAd></FaAd> review</NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/users"> <FaUsers></FaUsers>
                            All Users</NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/users"> <FaUsers></FaUsers>
                            Manage Teacher</NavLink>
                    </li>

                    <li>

                        <NavLink to="/dashboard/userHome"> <FaHome></FaHome>  View Reports</NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/history"> <FaCalendar></FaCalendar>payment History</NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/paymentHistory"> <FaList></FaList> Payment Real History</NavLink>
                    </li>
                    <li>

                        <NavLink to="/order/contact"><FaEnvelope></FaEnvelope> Contact</NavLink>
                    </li>

                </ul>

            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
            

        </div>
    );
};

export default Dashboard;