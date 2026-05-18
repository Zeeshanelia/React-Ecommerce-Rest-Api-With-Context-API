const getPages = (current, total) => {
  const pages = [];

  // Small Pages
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Always first page
  pages.push(1);

  if (current <= 3) {
    pages.push(2, 3, 4, "...", total);
  } else if (current >= total - 2) {
    pages.push(
      "...",
      total - 3,
      total - 2,
      total - 1,
      total
    );
  }
   else {
    pages.push(
      "...",
      current - 1,
      current,
      current + 1,
      "...",
      total
    );
  }

  return pages;
};

const Pagination = ({ handlePage, page, dynamicPage }) => {
  return (
    <section className="w-full flex justify-center mt-10 px-4">

      <div
        className=" flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-2xl shadow-lg border border-gray-100">

        {/* Previous Button */}
        <button
          disabled={page === 1}
          onClick={() => handlePage(page - 1)}
          className={` px-4 sm:px-5 py-2.5 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 min-w-[90px]

            ${
              page === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-red-500 to-pink-500 text-white hover:scale-105 hover:shadow-lg active:scale-95"
            }
          `}
        >
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex flex-wrap items-center justify-center gap-2">

          {getPages(page, dynamicPage).map((item, index) => (
            <button
              key={index}
              disabled={item === "..."}
              onClick={() =>
                typeof item === "number" && handlePage(item)
              }
              className={` w-10 h-10 sm:w-11 sm:h-11 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300

                ${
                  item === page
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md scale-105"
                    : item === "..."
                    ? "cursor-default text-gray-400"
                    : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          disabled={page === dynamicPage}
          onClick={() => handlePage(page + 1)}
          className={`
            px-4 sm:px-5 py-2.5
            rounded-xl text-sm sm:text-base
            font-semibold transition-all duration-300 min-w-[90px]

            ${
              page === dynamicPage
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:scale-105 hover:shadow-lg active:scale-95"
            }
          `}
        >
          Next
        </button>

      </div>
    </section>
  );
};

export default Pagination;