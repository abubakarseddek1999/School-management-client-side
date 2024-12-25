import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { MdDelete } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Rating from "react-rating-stars-component";
import Swal from "sweetalert2";
import Pagination from "../../../Components/Pagination/Pagination";

const AdminReviewPage = () => {
  const axiosPublic = useAxiosPublic();
  const [filter, setFilter] = useState("All");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [ratingFilter, setRatingFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 15; // Number of reviews per page

  const {
    data: reviews = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reviews");
      return res.data;
    },
  });

  const handleApprove = async (id) => {
    try {
      await axiosPublic.patch(`/reviews/${id}`, { status: "Approved" });
      refetch(); // Refresh the reviews data

      Swal.fire({
        icon: "success",
        title: "Review Approved!",
        text: "The review has been approved successfully.",
      });
    } catch (error) {
      console.error("Failed to approve review:", error);

      Swal.fire({
        icon: "error",
        title: "Approval Failed",
        text: "There was an error approving the review. Please try again.",
      });
    }
  };

  const handleReject = async (id) => {
    try {
      await axiosPublic.patch(`/reviews/${id}`, { status: "Rejected" });
      refetch(); // Refresh the reviews data

      Swal.fire({
        icon: "success",
        title: "Review Rejected!",
        text: "The review has been rejected successfully.",
      });
    } catch (error) {
      console.error("Failed to reject review:", error);

      Swal.fire({
        icon: "error",
        title: "Rejection Failed",
        text: "There was an error rejecting the review. Please try again.",
      });
    }
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/reviews/${_id}`).then((res) => {
          if (res.data.message === "Review deleted successfully") {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Review has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // Debounce the search term
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // 2-second delay

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  // Reset Filters
  const handleResetFilters = () => {
    setFilter("All");
    setSearchTerm("");
    setDebouncedSearchTerm("");
    setRatingFilter("All");
    setDateFilter("");
    setCurrentPage(1);
  };

  // Filter logic
  const filteredReviews = reviews.filter((review) => {
    const matchesStatus = filter === "All" || review.status === filter;
    const matchesUserName = review.user
      .toLowerCase()
      .includes(debouncedSearchTerm.toLowerCase());
    const matchesRating =
      ratingFilter === "All" || review.rating === parseInt(ratingFilter);
    const matchesDate =
      !dateFilter || new Date(review.date).toLocaleDateString() === dateFilter;

    return matchesStatus && matchesUserName && matchesRating && matchesDate;
  });
  // Pagination logic
  const indexOfLastReview = currentPage * usersPerPage;
  const indexOfFirstReview = indexOfLastReview - usersPerPage;
  const currentReviews = filteredReviews.slice(
    indexOfFirstReview,
    indexOfLastReview
  );
  const totalPages = Math.ceil(filteredReviews.length / usersPerPage);

  if (isLoading) {
    return <div>Loading reviews...</div>;
  }

  if (isError) {
    return <div>Error fetching reviews: {error.message}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-2xl font-bold text-gray-700 mb-6">
          Review Management
        </h1>
        <p> Toatal review: {reviews.length}</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md flex gap-4 mb-2">
        {/* Filter by Status */}
        <div>
          <p className="font-semibold">Status</p>
          <select
            className="py-2 border rounded-lg bg-white"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        {/* Filter by Rating */}
        <div>
          <p className="font-semibold">Rating</p>
          <select
            className="p-2 border rounded-lg bg-white"
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
          >
            <option value="All">All Ratings</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>

        {/* Filter by Date */}
        <div>
          <p className="font-semibold">Date</p>
          <input
            type="date"
            className="p-2 border rounded-lg"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />
        </div>
        {/* Search by User */}

        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search by user name"
            className="p-2 mt-6 border rounded-lg w-full flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IoSearch className="absolute right-2 top-10" />
        </div>
        {/* Reset Button */}
        <div>
          <button
            className="bg-gray-500 text-white px-4 py-2 mt-6 rounded-lg"
            onClick={handleResetFilters}
          >
            Reset Filters
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Rating</th>
              <th className="p-3 text-left">Feedback</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentReviews.map((review) => (
              <tr key={review.id} className="border-b">
                <td className="p-3  whitespace-nowrap py-5">{review.user}</td>
                <td className="p-3  whitespace-nowrap">
                  {review.date || <span className="text-red-500">No date</span>}
                </td>
                <td className="p-3  whitespace-nowrap">
                  <div
                    className="flex items-center space-x-1"
                    style={{ width: "150px" }}
                  >
                    <Rating
                      count={5} // Maximum number of stars
                      value={review.rating} // Rating value from the review
                      edit={false} // Make it read-only
                      size={25} // Size of the stars
                      activeColor="#F5BF03" // Gold color for active stars
                    />
                  </div>
                </td>

                <td className="p-3  break-words">{review.feedback}</td>
                <td className="p-3  break-words">
                  <span
                    className={
                      review.status === "Pending"
                        ? "text-yellow-500"
                        : review.status === "Approved"
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {review.status}
                  </span>
                </td>
                <td className="p-3  break-words">
                  {review.status === "Pending" ? (
                    <div className="flex">
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded mr-2 "
                        onClick={() => handleApprove(review._id)}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                        onClick={() => handleReject(review._id)}
                      >
                        Reject
                      </button>
                    </div>
                  ) : (
                    <div>
                      <MdDelete
                        onClick={() => handleDelete(review._id)}
                        className="text-2xl text-center text-red-500"
                      />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default AdminReviewPage;
