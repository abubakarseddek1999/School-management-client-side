import React, { useState } from "react";

const reviewsData = [
    {
        id: 1,
        user: "John Doe",
        date: "2024-12-20",
        rating: 5,
        feedback: "Great experience!",
        status: "Pending",
    },
    {
        id: 2,
        user: "Jane Smith",
        date: "2024-12-19",
        rating: 4,
        feedback: "Good service, but could improve.",
        status: "Reviewed",
    },
    {
        id: 3,
        user: "Sam Wilson",
        date: "2024-12-18",
        rating: 3,
        feedback: "Average experience.",
        status: "Pending",
    },
    {
        id: 4,
        user: "Abu bakar",
        date: "2024-10-19",
        rating: 4,
        feedback: "Good service and impressive",
        status: "Pending",
    },
    {
        id: 5,
        user: "Riaz Uddin",
        date: "2024-12-20",
        rating: 3,
        feedback: "not a good.",
        status: "Rejected",
    },
];

const AdminReviewPage = () => {
    const [reviews, setReviews] = useState(reviewsData);
    const [filter, setFilter] = useState("All");

    const handleApprove = (id) => {
        setReviews((prev) =>
            prev.map((review) =>
                review.id === id ? { ...review, status: "Reviewed" } : review
            )
        );
    };

    const handleReject = (id) => {
        setReviews((prev) =>
            prev.map((review) =>
                review.id === id ? { ...review, status: "Rejected" } : review
            )
        );
    };

    const filteredReviews =
        filter === "All"
            ? reviews
            : reviews.filter((review) => review.status === filter);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Admin Review Page</h1>

            <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
                <div className="mb-2 sm:mb-0">
                    <select
                        className="p-2 border rounded-lg bg-white"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="Pending">Pending</option>
                        <option value="Reviewed">Reviewed</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
                <div className="text-gray-600">
                    Total Reviews: {reviews.length}
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full table-auto bg-white rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-3 text-left">User</th>
                            <th className="p-3 text-left">Date</th>
                            <th className="p-3 text-left">Rating</th>
                            <th className="p-3 text-left">Feedback</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredReviews.map((review) => (
                            <tr key={review.id} className="border-b">
                                <td className="p-3 text-sm break-words">{review.user}</td>
                                <td className="p-3 text-sm whitespace-nowrap">
                                    {review.date || <span className="text-red-500">Date not provided</span>}
                                </td>
                                <td className="p-3 text-sm break-words">{review.rating} ⭐</td>
                                <td className="p-3 text-sm break-words">{review.feedback}</td>
                                <td className="p-3 text-sm break-words">
                                    <span
                                        className={
                                            review.status === "Pending"
                                                ? "text-yellow-500"
                                                : review.status === "Reviewed"
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                        }
                                    >
                                        {review.status}
                                    </span>
                                </td>
                                <td className="p-3 text-sm break-words">
                                    {review.status === "Pending" && (
                                        <>
                                            <div className="flex">
                                                <button
                                                    className="bg-green-500 text-white px-3 py-1 rounded mr-2 text-sm"
                                                    onClick={() => handleApprove(review.id)}
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                                                    onClick={() => handleReject(review.id)}
                                                >
                                                    Reject
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminReviewPage;
