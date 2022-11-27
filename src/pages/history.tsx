import React, { useEffect, useState } from "react"
import { Layout } from "@/components/layouts"
import { histories } from "@/data/history"
import { HistoryList } from "@/components/HistoryList"
import clsx from "clsx"
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
      <div
        className={clsx(
          "opacity-0",
          time &&
            "flex w-full p-2 pl-4 rounded-md bg-bg-neumo dark:bg-dark-neumo shadow-basic dark:shadow-dark mb-6 mt-2 flex-col opacity-100"
        )}
      >
        <span className={clsx("opacity-0", time && "relative inline-block opacity-100 gradient-anim w-[200px]")}>
          <h1 className={clsx("opacity-0", time && "gradient-anim-text text-base w-[200px] opacity-100")}>About</h1>
        </span>
        {histories.about.split("\n").map((l, i) => (
          <p key={i} className="text-base text-text dark:text-dark-text leading-7">
            {l}
          </p>
        ))}
      </div>
      <div className="relative mt-2 mb-14">
        <div className={clsx("opacity-0", 1 < time && "slidUp-anim absolute h-full w-full opacity-100")}>
          <div className="text-[40px] left-0 lg:left-[48.35%] top-[-25px] text-text-light absolute">▲</div>
          <div className="h-full w-2 bg-text-light left-3 lg:left-[49.4%] absolute" />
        </div>
        {histories.timeline.map((history, i) => (
          <div className={clsx("opacity-0", i + 1 < time / 5 && "zoomIn-anim")} key={i}>
            <HistoryList key={i} {...history} index={i} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default HistoryPage
