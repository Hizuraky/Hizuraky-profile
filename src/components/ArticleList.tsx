import React from "react"
import { BsFillCalendarCheckFill, BsTagsFill } from "react-icons/bs"
import ramble from "@/images/icons/ramble.png"
import qiita from "@/images/icons/qiita.png"

/***
 * 投稿記事のリスト
 */

type Props = { date: string; title: string; tags: string[]; site: string; url: string }

export const ArticleList = ({ date, title, tags, site, url }: Props) => (
  <div
    className="flex w-full items-center p-2 sm:p-4 my-4 rounded-md bg-bg-neumo dark:bg-dark-neumo shadow-basic dark:shadow-dark justify-between flex-col md:flex-row"
    onClick={() => typeof window !== "undefined" && window.open(url, "_blank")}
  >
    <h1 className="text-lg font-bold text-text dark:text-white w-full md:max-w-[50%] md:w-[50%] md:mr-4 px-3 md:px-0">{title}</h1>
    <div className="flex items-end sm:items-center md:flex-row justify-between  md:w-[47%] w-full">
      <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-start w-full pl-3 md:pl-0 mt-3 md:mt-0">
        <div className="flex items-center mb-2">
          <BsFillCalendarCheckFill className="text-text-light text-xl mr-2" />
          <p className="text-base text-text-light dark:text-dark-text">{date}</p>
        </div>
        <div className="flex items-center">
          <BsTagsFill className="text-text-light text-xl mr-2" />
          <div className="flex flex-wrap">
            {tags.map((tag, i) => (
              <div key={i} className="text-sm text-text-light dark:text-dark-text flex md:text-base">
                {i !== 0 && <p className="mx-1">/</p>}
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={site === "qiita" ? qiita : ramble} alt="" className="w-6 h-6 sm:w-10 sm:h-10 rounded-full" />
    </div>
  </div>
)
