import React from "react";

export default function Pagination({ page, total, setPage }) {
  return (
    <div className="flex justify-end">
      <div class="flex justify-center">
        <nav aria-label="Page navigation example">
          {total ? (
            <ul class="flex cursor-pointer gap-2 list-style-non mr-8">
              {page !== 1 ? (
                <li class="page-item">
                  <a
                    class="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray focus:shadow-none "
                    onClick={() => setPage(page - 1)}
                  >
                    Previous
                  </a>
                </li>
              ) : (
                <li class="page-item">
                  <a class="page-link text-white relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 focus:shadow-none ">
                    Previous
                  </a>
                </li>
              )}
              {Array.from(Array(Math.ceil(total / 12)).keys()).map((number) => (
                <li key={number} class="page-item">
                  <a
                    class={`page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray focus:shadow-none ${
                      page === number + 1 ? "bg-gray" : ""
                    }`}
                    onClick={() => setPage(number + 1)}
                  >
                    {number + 1}
                  </a>
                </li>
              ))}

              {page !== Math.ceil(total / 12) ? (
                <li class="page-item">
                  <a
                    class="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray focus:shadow-none"
                    onClick={() => setPage(page + 2)}
                  >
                    Next
                  </a>
                </li>
              ) : (
                <li className="page-item">
                  <a class="page-link text-white relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 focus:shadow-none">
                    Next
                  </a>
                </li>
              )}
            </ul>
          ) : (
            <></>
          )}
        </nav>
      </div>
    </div>
  );
}
