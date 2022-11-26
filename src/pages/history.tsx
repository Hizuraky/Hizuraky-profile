import React, { useEffect, useState } from "react"
import { Layout } from "@/components/layouts"
import { histories } from "@/data/history"
import { HistoryList } from "@/components/HistoryList"
import { Title } from "@/components/Title"

/***
 * 経歴画面
 */

const HistoryPage = () => {
  const [time, setTime] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setTime(time + 1)
    }, 50)
    return () => clearInterval(id)
  }, [time])
  return (
    <Layout>
      <Title isAnimate={time > 1} title="History" />
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
          <HistoryList key={i} {...history} index={i} />
        ))}
      </div>
    </Layout>
  )
}

export default HistoryPage
