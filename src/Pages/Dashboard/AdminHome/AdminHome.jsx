import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  const [stats, setStats] = useState({ students: 0, teachers: 0, classes: 0 });
  const [activities, setActivities] = useState([]);

  // Fetching data
  useEffect(() => {
    // Placeholder for API fetch - replace with real API calls
    setStats({ students: 120, teachers: 25, classes: 40 });
    setActivities([
      "John Doe registered",
      "Exam schedule updated",
      "New class added",
    ]);
  }, []);



  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white shadow-lg p-4 rounded-lg mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </header>
      
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(stats).map(([key, value], index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <h3 className="text-xl font-medium text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
              <p className="text-4xl font-bold text-blue-600">{value}</p>
            </div>
          ))}
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-1">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <ul>
            {activities.map((activity, index) => (
              <li key={index} className="border-b py-2 text-gray-600">
                {activity}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Actions with Modals */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          
           <Link to={"/dashboard/studentManage"}> <button
              className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600"
            >
              Manage student
            </button></Link>
            <button
              className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600"
            >
              Manage Teacher
            </button>
            <button
              className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600"
            >
              View Reports
            </button>
         
        </div>
      </main>

      {/* Calendar Integration */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
        {/* Calendar placeholder - could integrate a calendar library like FullCalendar */}
        <p className="text-gray-600">Upcoming exams and events will be displayed here.</p>
      </div>

     
    </div>
  );
};

export default AdminHome;
