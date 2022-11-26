import React, { useEffect, useState } from "react"
import { Layout } from "@/components/layouts"
import { SkillList } from "@/components/SkillList"
import { skills } from "@/data/skill"
import { Title } from "@/components/Title"
import clsx from "clsx"

/***
 * 技術スタック一覧画面
 */

const SkillPage = () => {
  const [time, setTime] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setTime(time + 1)
    }, 50)
    return () => clearInterval(id)
  }, [time])

  return (
    <Layout>
      <Title isAnimate={time > 1} title="Skill" />
      {skills.map((category, i) => (
        <div key={i} className="my-2">
          <span className={clsx("opacity-0", category.count < time && "relative inline-block opacity-100 gradient-anim")}>
            <h1 className={clsx("opacity-0", category.count < time && "gradient-anim-text text-base w-[200px] opacity-100")}>
              {category.subTitle}
            </h1>
          </span>
          <div className="flex flex-wrap justify-between">
            {category.skills.map((skill, ii) => (
              <div
                className={clsx("opacity-0", category.count + ii + 1 < time && "slidIn-anim w-full md:w-[49%] my-[2%] md:my-[1%] ")}
                key={ii}
              >
                <SkillList key={ii} {...skill} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default SkillPage
