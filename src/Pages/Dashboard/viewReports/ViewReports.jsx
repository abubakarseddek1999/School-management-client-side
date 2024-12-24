import React, { useState } from "react";
import { Line, Bar, Pie, Doughnut, PolarArea } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    RadialLinearScale, // Register RadialLinearScale for polar charts
} from "chart.js";
ChartJS.register(LineElement, BarElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend, RadialLinearScale);

const ReportPage = () => {
    const [reports, setReports] = useState([
        { id: 1, name: "Monthly Attendance", type: "line" },
        { id: 2, name: "Student Performance", type: "bar" },
        { id: 3, name: "Class Distribution", type: "pie" },
        { id: 4, name: "Gender Distribution", type: "doughnut" },
        { id: 5, name: "Grade Trends", type: "gradeTrends" },
        { id: 6, name: "Staff Attendance", type: "staffAttendance" },
        { id: 7, name: "Library Usage", type: "libraryUsage" },
        { id: 8, name: "Sports Participation", type: "sportsParticipation" },
        { id: 9, name: "Extracurricular Activities", type: "extracurricularActivities" },
        { id: 10, name: "Annual Budget Allocation", type: "budgetAllocation" },
    ]);

    const [searchTerm, setSearchTerm] = useState(""); // State for search term

    const filteredReports = reports.filter((report) =>
        report.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Attendance (%)",
                data: [85, 90, 95, 88, 92, 94],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.4,
            },
        ],
    };

    const barChartData = {
        labels: ["Math", "Science", "English", "History", "Art"],
        datasets: [
            {
                label: "Average Scores",
                data: [78, 85, 90, 88, 75],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(255, 206, 86, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                    "rgba(153, 102, 255, 0.6)",
                ],
                borderColor: "rgba(0, 0, 0, 0.1)",
                borderWidth: 1,
            },
        ],
    };

    const pieChartData = {
        labels: ["Class A", "Class B", "Class C", "Class D"],
        datasets: [
            {
                label: "Student Distribution",
                data: [30, 25, 20, 25],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#66BB6A",
                ],
                hoverOffset: 4,
            },
        ],
    };

    const doughnutChartData = {
        labels: ["Male", "Female"],
        datasets: [
            {
                label: "Gender Distribution",
                data: [55, 45],
                backgroundColor: ["#42A5F5", "#AB47BC"],
                hoverOffset: 4,
            },
        ],
    };

    const gradeTrendsData = {
        labels: ["2019", "2020", "2021", "2022", "2023"],
        datasets: [
            {
                label: "Grade Trends (Avg %)",
                data: [75, 78, 80, 85, 88],
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                tension: 0.4,
            },
        ],
    };

    const staffAttendanceData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Staff Attendance (%)",
                data: [80, 85, 90, 87, 88, 91],
                borderColor: "rgba(54, 162, 235, 1)",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                tension: 0.4,
            },
        ],
    };

    const libraryUsageData = {
        labels: ["Books Borrowed", "Books Returned", "Overdue Books"],
        datasets: [
            {
                label: "Library Usage",
                data: [300, 250, 50],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverOffset: 4,
            },
        ],
    };

    const sportsParticipationData = {
        labels: ["Soccer", "Basketball", "Volleyball", "Track & Field"],
        datasets: [
            {
                label: "Sports Participation",
                data: [40, 30, 20, 10],
                backgroundColor: ["#42A5F5", "#66BB6A", "#FFCE56", "#FF6384"],
                hoverOffset: 4,
            },
        ],
    };

    const extracurricularActivitiesData = {
        labels: ["Drama Club", "Music Club", "Art Club", "Science Club"],
        datasets: [
            {
                label: "Extracurricular Activities",
                data: [25, 30, 20, 25],
                backgroundColor: ["#66BB6A", "#FF6384", "#36A2EB", "#FFCE56"],
                hoverOffset: 4,
            },
        ],
    };

    const budgetAllocationData = {
        labels: ["Salaries", "Infrastructure", "Learning Materials", "Events"],
        datasets: [
            {
                label: "Annual Budget Allocation",
                data: [50, 25, 15, 10],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#66BB6A"],
                hoverOffset: 4,
            },
        ],
    };

    const renderChart = (type) => {
        switch (type) {
            case "line":
                return <Line data={lineChartData} />;
            case "bar":
                return <Bar data={barChartData} />;
            case "pie":
                return <Pie data={pieChartData} />;
            case "doughnut":
                return <Doughnut data={doughnutChartData} />;
            case "gradeTrends":
                return <Line data={gradeTrendsData} />;
            case "staffAttendance":
                return <Line data={staffAttendanceData} />;
            case "libraryUsage":
                return <Bar data={libraryUsageData} />;
            case "sportsParticipation":
                return <Pie data={sportsParticipationData} />;
            case "extracurricularActivities":
                return <Doughnut data={extracurricularActivitiesData} />;
            case "budgetAllocation":
                return <PolarArea data={budgetAllocationData} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="bg-white shadow-lg p-6 rounded-lg mb-6 flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-800">School Reports</h1>
                <input
                    type="text"
                    placeholder="Search Reports"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded-lg"
                />
            </header>

            <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredReports.map((report) => (
                    <div
                        key={report.id}
                        className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                    >
                        <h2 className="text-lg font-medium text-gray-700 mb-4">{report.name}</h2>
                        <div className="w-full h-64">{renderChart(report.type)}</div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default ReportPage;
