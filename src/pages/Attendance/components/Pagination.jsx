import React from "react";
import "../table.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  const noOfPages = Math.ceil(totalPosts / postsPerPage);
  // For  testing 
  // const noOfPages = 5;
  if (noOfPages > 1) {
    for (let i = 1; i <= noOfPages - 1; i++) {
      pages.push(i);
    }
  }
  if (noOfPages > 5) {
    if (currentPage == 1) {
      pages = [1, 2, 3];
    }
    if (1 < currentPage && currentPage < noOfPages - 3) {
      pages = [currentPage - 1, currentPage, currentPage + 1];
    }
    if (currentPage >= noOfPages - 3) {
      pages = [noOfPages - 4, noOfPages - 3, noOfPages - 2, noOfPages - 1];
    }
  }

  if (currentPage < 1) {
    setCurrentPage(1);
  }
  if (currentPage > noOfPages) {
    setCurrentPage(noOfPages);
  }

  return (
    <>
      {noOfPages > 1 ? (
        <div className="flex justify-between">
          {/* <<< */}
          {currentPage !== 1 ? (
            <button
              className="p-2 text-2xl font-semibold"
              onClick={() => {
                setCurrentPage(1);
              }}
            >
              &lt;&lt;&lt;
            </button>
          ) : (
            <div></div>
          )}
          {/* < */}
          {currentPage !== 1 ? (
            <button
              className="p-2 text-2xl font-semibold"
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            >
              &lt;
            </button>
          ) : (
            <div></div>
          )}
          <div className="flex gap-3">
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

            <div>
              {noOfPages > 5 ? (
                <div>
                  {/* ... */}
                  {currentPage < noOfPages - 3 ? (
                    <button className="mt-2">...</button>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
            {/* last */}
            <div>
              {noOfPages > 1 ? (
                <button
                  className={currentPage == noOfPages ? "active mt-1" : "mt-3"}
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
          {currentPage !== noOfPages ? (
            <button
              className="p-2 text-2xl font-semibold"
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            >
              &gt;
            </button>
          ) : (
            <div></div>
          )}

          {/* >>> */}

          {currentPage !== noOfPages ? (
            <button
              className="p-2 text-2xl font-semibold"
              onClick={() => {
                setCurrentPage(noOfPages);
              }}
            >
              &gt;&gt;&gt;
            </button>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Pagination;
