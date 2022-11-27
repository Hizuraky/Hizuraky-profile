import React from "react"

/***
 * 経歴のリスト
 */

type Props = { start: string; end: string; title: string; content: string; index: number }

export const HistoryList = ({ start, end, title, content, index }: Props) => (
  <>
    <div className={`full items-center mb-[-60px] ${index % 2 === 1 && "justify-end"} hidden lg:flex`}>
      <div className="w-8 h-8 shadow-toggle-button bg-primary rounded-full p-2 absolute right-[48.8%] dark:shadow-dark-history-circle z-20">
        <div className="full bg-bg dark:bg-dark-bg rounded-full shadow-toggle-button-inner dark:shadow-dark-history-circle-inner" />
      </div>
      <div
        className={`transform ${
          index % 2 ? "rotate-3/4 right-[46%]" : "rotate-1/4 left-[46%]"
        } text-bg-neumo dark:text-dark-neumo text-[55px] absolute z-20`}
      >
        ▲
      </div>
      <div
        className={`flex w-[47.2%] p-2 items-start pl-4 rounded-md bg-bg-neumo dark:bg-dark-neumo shadow-basic dark:shadow-dark flex-col ${
          index % 2 && "right-0"
        }`}
      >
        <p className="text-base text-text-light dark:text-dark-text mr-2 mt-1 sm:mt-2">
          {start} ~ {end}
        </p>
        <h1 className="font-semibold sm:text-lg text-text dark:text-white">{title}</h1>
        {content.split("\n").map((l, i) => (
          <p key={i} className="text-base text-text dark:text-dark-text mr-2">
            {l}
          </p>
        ))}
      </div>
    </div>
    <div className={`full items-center my-4 flex lg:hidden pl-10`}>
      <div className={`transform rotate-3/4 left-3 text-bg-neumo dark:text-dark-neumo text-[40px] absolute z-50`}>▲</div>
      <div className="flex w-full p-2 items-center pl-4 rounded-md bg-bg-neumo dark:bg-dark-neumo shadow-basic dark:shadow-dark">
        <div className="w-8 h-8 shadow-toggle-button bg-primary rounded-full p-2 dark:shadow-dark-history-circle mr-4 z-20 ml-[-56px]">
          <div className="full bg-bg dark:bg-dark-bg rounded-full shadow-toggle-button-inner dark:shadow-dark-history-circle-inner" />
        </div>
        <div className="flex flex-col justify-center w-[94%]">
          <p className="text-base text-text-light dark:text-dark-text mr-2 mt-1 sm:mt-2">
            {start} ~ {end}
          </p>
          <h1 className="font-semibold sm:text-lg text-text dark:text-white">{title}</h1>
          {content.split("\n").map((l, i) => (
            <p key={i} className="text-base text-text dark:text-dark-text mr-2 mt-1">
              {l}
            </p>
          ))}
        </div>
      </div>
    </div>
  </>
)
