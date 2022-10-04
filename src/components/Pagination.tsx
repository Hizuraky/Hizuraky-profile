import React from "react"

/***
 * ページネーション
 */

type Props = { array: any[]; page: number; setPage: React.Dispatch<React.SetStateAction<number>> }

export const Pagination = ({ array, page, setPage }: Props) => {
  const pages = array.length % 5 ? Math.floor(array.length / 5) + 1 : Math.floor(array.length / 5)

  return (
    <div className="flex w-full center mt-8">
      <p
        className={`shadow-basic dark:shadow-dark bg-neumo rounded-full h-6 w-6 sm:w-8 sm:h-8 flex center mx-2 ${
          page === 1 ? "bg-gray-300 dark:bg-[#5a5a5a]" : "cursor-pointer hover:bg-[#dee1e3] dark:hover:bg-[#2b2b2b]"
        }`}
        onClick={() => page > 1 && setPage(1)}
      >
        {"<<"}
      </p>
      <p
        className={`shadow-basic dark:shadow-dark bg-neumo rounded-full h-6 w-6 sm:w-8 sm:h-8 flex center mx-2
            ${page === 1 ? "bg-gray-300 dark:bg-[#5a5a5a]" : "cursor-pointer hover:bg-[#dee1e3] dark:hover:bg-[#2b2b2b]"}
            `}
        onClick={() => page > 1 && setPage(page - 1)}
      >
        {"<"}
      </p>
      {[...Array(pages)].map((_, i) => {
        const minPage = page > pages - 2 ? pages - 4 : page < 3 ? 1 : page - 2
        const maxPage = page < 3 ? 5 : page > pages - 2 ? pages : page + 2
        return (
          <div
            key={i}
            className={`shadow-basic dark:shadow-dark bg-neumo rounded-full h-6 w-6 sm:w-10 sm:h-10 flex center mx-2 ${
              page === i + 1 ? "bg-primary text-white font-semibold" : "cursor-pointer hover:bg-[#dee1e3] dark:hover:bg-[#2b2b2b]"
            } ${(minPage > i + 1 || maxPage < i + 1) && "hidden"}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </div>
        )
      })}
      <p
        className={`shadow-basic dark:shadow-dark bg-neumo rounded-full h-6 w-6 sm:w-8 sm:h-8 flex center mx-2 ${
          page === pages ? "bg-gray-300 dark:bg-[#5a5a5a]" : "cursor-pointer hover:bg-[#dee1e3] dark:hover:bg-[#2b2b2b] "
        }`}
        onClick={() => page < pages && setPage(page + 1)}
      >
        {">"}
      </p>
      <p
        className={`shadow-basic dark:shadow-dark bg-neumo rounded-full h-6 w-6 sm:w-8 sm:h-8 flex center mx-2 ${
          page === pages ? "bg-gray-300 dark:bg-[#5a5a5a]" : "cursor-pointer hover:bg-[#dee1e3] dark:hover:bg-[#2b2b2b] "
        }`}
        onClick={() => page < pages && setPage(pages)}
      >
        {">>"}
      </p>
    </div>
  )
}
