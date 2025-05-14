import React from "react";
import "./table.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  const noOfPages = Math.ceil(totalPosts / postsPerPage);
  if (noOfPages > 1) {
    for (let i = 2; i <= noOfPages - 1; i++) {
      pages.push(i);
    }
  }
  if (currentPage >= 4 && currentPage <= noOfPages - 3) {
    pages = [currentPage - 1, currentPage, currentPage + 1];
  }
  if (currentPage < 4) {
    pages = [2, 3, 4];
  }
  if (currentPage > noOfPages - 3) {
    pages = [noOfPages - 3, noOfPages - 2, noOfPages - 1];
  }

  if (currentPage < 1) {
    setCurrentPage(1);
  }
  if (currentPage > noOfPages) {
    setCurrentPage(noOfPages);
  }

  return (
    <div className="flex justify-between">
      {/* <<< */}
      <button
        className="p-2 text-2xl font-semibold"
        onClick={() => {
          setCurrentPage(1);
        }}
      >
        &lt;&lt;&lt;
      </button>

      {/* < */}
      <button
        className="p-2 text-2xl font-semibold"
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        &lt;
      </button>

      <div className="flex gap-6">
        {/* 1 */}
        <button
          className=""
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          1
        </button>

        {/* ... */}
        {currentPage > 3 ? <button>...</button> : ""}

        {/* pages */}
        <div className="flex gap-6">
          {pages.map((page, index) => {
            return (
              <button
                key={index}
                onClick={() => setCurrentPage(page)}
                className={page == currentPage ? "active" : ""}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* ... */}
        {currentPage <= noOfPages - 3 ? <button>...</button> : ""}

        {/* last */}
        <div>
          {noOfPages > 1 ? (
            <button
              className="p-3"
              onClick={() => {
                setCurrentPage(noOfPages);
              }}
            >
              {noOfPages}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* > */}
      <button
        className="p-2 text-2xl font-semibold"
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        &gt;
      </button>

      {/* >>> */}
      <button
        className="p-2 text-2xl font-semibold"
        onClick={() => {
          setCurrentPage(noOfPages);
        }}
      >
        &gt;&gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
