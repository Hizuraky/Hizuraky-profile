import React from "react"
import { BsFillCalendarCheckFill, BsTagsFill } from "react-icons/bs"
import ramble from "@/images/icons/ramble.png"
import qiita from "@/images/icons/qiita.png"
import githubImg from "@/images/icons/github.png"

/***
 * 個人開発のリスト
 */

type Props = {
  title: string
  tags: string[]
  src: string
  site: string
  github: string
  url: string
  article: string
  release: string
  text: string
}

export const PortfolioList = ({ title, tags, src, url, site, github, article, release, text }: Props) => (
  <div className="flex w-full items-center mb-8 rounded-md bg-bg-neumo dark:bg-dark-neumo shadow-basic dark:shadow-dark justify-between flex-col md:flex-row ">
    <img src={src} alt="" className="w-full md:max-w-[320px] lg:max-w-[400px] object-cover rounded-md" />
    <div className="flex flex-col items-start full p-2 md:justify-between h-full w-[50%]">
      <h1 className="text-lg font-bold text-text dark:text-white">{title}</h1>
      <div className="flex flex-col my-0 sm:my-1 sm:flex-row items-start sm:items-center">
        <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
          <BsFillCalendarCheckFill className="text-text-light text-xl mr-2" />
          <p className="text-base text-text-light dark:text-dark-text">{release}</p>
        </div>
        <div className="flex items-center mb-2 sm:mb-0">
          <BsTagsFill className="text-text-light text-xl mr-2" />
          <div className="flex flex-wrap">
            {tags.map((tag, i) => (
              <p key={i} className="text-sm text-text-light dark:text-dark-text flex md:text-base">
                {i !== 0 && <p className="mx-1">/</p>}
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
      {text.split("\n").map((l, i) => (
        <p key={i} className="text-text dark:text-dark-text mt-[1px] text-sm lg:text-base">
          {l}
        </p>
      ))}
      <div className="flex items-center mt-2 w-full justify-end">
        <div
          className={`w-20 h-8 rounded-full p-1 shadow-basic mr-3 flex center dark:shadow-dark cursor-pointer ${
            !url && "cursor-not-allowed"
          }`}
          onClick={() => url && typeof window !== "undefined" && window.open(url, "_blank")}
        >
          <p
            className={`full rounded-full bg-white text-sm text-text flex center dark:bg-slate-600 dark:text-dark-text ${
              !url && "bg-gray-400"
            }`}
          >
            Web site
          </p>
        </div>
        <div
          className={`w-8 h-8  rounded-full p-1 shadow-basic mr-3 dark:shadow-dark cursor-pointer ${!github && "cursor-not-allowed"}`}
          onClick={() => github && typeof window !== "undefined" && window.open(github, "_blank")}
        >
          <img src={githubImg} alt="" className={`full rounded-full bg-white ${!github && "bg-gray-400"}`} />
        </div>
        <div
          className={`w-8 h-8 rounded-full p-1 shadow-basic mr-3 dark:shadow-dark cursor-pointer ${!article && "cursor-not-allowed"}`}
          onClick={() => article && typeof window !== "undefined" && window.open(article, "_blank")}
        >
          <img src={site === "qiita" ? qiita : ramble} alt="" className={`full rounded-full bg-white ${!article && "bg-gray-400"}`} />
        </div>
      </div>
    </div>
  </div>
)
