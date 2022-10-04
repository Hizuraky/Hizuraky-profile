import React from "react"
import { Layout } from "@/components/layouts"
import { SkillList } from "@/components/SkillList"
import { skills } from "@/data/skill"

/***
 * 技術スタック一覧画面
 */

const SkillPage = () => (
  <Layout>
    <h1 className="text-primary-text dark:text-dark-primary font-bold text-lg">Skill</h1>
    {skills.map((category, i) => (
      <div className="" key={i}>
        <p className="text-primary-text dark:text-dark-primary font-semibold">{category.subTitle}</p>
        <div className="flex flex-wrap justify-between mb-6 flex-col md:flex-row">
          {category.skills.map((skill, ii) => (
            <SkillList key={ii} {...skill} />
          ))}
        </div>
      </div>
    ))}
  </Layout>
)

export default SkillPage
