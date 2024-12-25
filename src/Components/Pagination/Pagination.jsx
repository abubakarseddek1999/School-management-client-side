import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const maxPagesToShow = 5;

  // Calculate the start and end of the visible page range
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  // Adjust startPage if fewer than maxPagesToShow pages are available at the end
  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex justify-between items-center mt-6 bg-white p-4 shadow-lg rounded-lg">
      {/* Left Side - Total Pages */}
      <div className="text-gray-600 text-sm">
        <span className="font-bold">Total Pages: </span>
        {totalPages}
      </div>

      {/* Center - Pagination Controls */}
      <div className="flex items-center">
        <button
          onClick={handlePrevPage}
          className="p-2 border rounded-lg mr-2"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`p-2 border rounded-lg mx-1 ${
              currentPage === page ? "bg-blue-500 text-white" : ""
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className="p-2 border rounded-lg ml-2"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
