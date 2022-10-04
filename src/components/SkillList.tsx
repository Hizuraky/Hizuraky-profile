import React from "react"
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

/***
 * 技術スタックのリスト
 */

type Props = { skill: string; level: number; src: string; url: string }

export const SkillList = ({ skill, level, src, url }: Props) => (
  <div
    className="flex w-full md:w-[49%] justify-around p-4 items-center my-[2%] md:my-[1%] rounded-md bg-bg-neumo dark:bg-dark-neumo shadow-basic dark:shadow-dark cursor-pointer hover:bg-[#dee1e3]"
    onClick={() => typeof window !== "undefined" && window.open(url, "_blank")}
  >
    <div className="flex w-1/2 justify-start items-center">
      <img src={src} alt="" className="w-10 h-10 object-contain mr-2" />
      <p className="font-semibold sm:text-lg text-text dark:text-white">{skill}</p>
    </div>
    <div className="flex w-1/2 justify-start items-center">
      <p className="text-base text-text-light dark:text-dark-text mr-2 mt-1 sm:mt-2">level</p>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            {level - i * 2 > 1 ? (
              <BsStarFill className="text-text dark:text-dark-text text-xl sm:text-2xl" />
            ) : level - i * 2 === 1 ? (
              <BsStarHalf className="text-text dark:text-dark-text text-xl sm:text-2xl" />
            ) : (
              <BsStar className="text-text dark:text-dark-text text-xl sm:text-2xl" />
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
)
