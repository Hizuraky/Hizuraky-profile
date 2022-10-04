import React from "react"
import { Layout } from "@/components/layouts"
import { histories } from "@/data/history"

const HistoryPage = () => {
  const List = ({ start, end, title, content, index }: { start: string; end: string; title: string; content: string; index: number }) => (
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
            <p key={i} className="text-base text-text dark:text-dark-text mr-2 mt-1 sm:mt-2">
              {l}
            </p>
          ))}
        </div>
      </div>
      <div className={`full items-center my-4 flex lg:hidden`}>
        <div className="flex w-full p-2 items-center pl-4 rounded-md bg-bg-neumo dark:bg-dark-neumo shadow-basic dark:shadow-dark">
          <div className="w-8 h-8 shadow-toggle-button bg-primary rounded-full p-2 dark:shadow-dark-history-circle mr-4 z-20">
            <div className="full bg-bg dark:bg-dark-bg rounded-full shadow-toggle-button-inner dark:shadow-dark-history-circle-inner" />
          </div>
          <div className="flex flex-col justify-center w-[94%]">
            <p className="text-base text-text-light dark:text-dark-text mr-2 mt-1 sm:mt-2">
              {start} ~ {end}
            </p>
            <h1 className="font-semibold sm:text-lg text-text dark:text-white">{title}</h1>
            {content.split("\n").map((l, i) => (
              <p key={i} className="text-base text-text dark:text-dark-text mr-2 mt-1 sm:mt-2">
                {l}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  )

  return (
    <Layout>
      <div className="">
        <h1 className="text-primary-text dark:text-dark-primary font-bold text-lg">History</h1>
        <div className="flex w-full p-2 pl-4 rounded-md bg-bg-neumo dark:bg-dark-neumo shadow-basic dark:shadow-dark mb-6 mt-2 flex-col">
          <p className="text-primary-text dark:text-dark-primary font-semibold mb-2">About</p>
          {histories.about.split("\n").map((l, i) => (
            <p key={i} className="text-base text-text dark:text-dark-text leading-7">
              {l}
            </p>
          ))}
        </div>

        <div className="relative mt-2 mb-14">
          <div className="text-[40px] absolute left-4 lg:left-[48.35%] top-[-25px] text-text-light">▲</div>
          <div className="h-full w-2 bg-text-light absolute left-7 lg:left-[49.4%] z-10" />
          {histories.timeline.map((history, i) => (
            <List key={i} {...history} index={i} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default HistoryPage
