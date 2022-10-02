import React from "react"
import { Layout } from "@/components/layouts"
import { skills } from "@/data/skill"
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

const SkillPage = () => {
  const List = ({ skill, level, src, url }: { skill: string; level: number; src: string; url: string }) => (
    <div
      className="flex w-full md:w-[49%] justify-around p-4 items-center my-[2%] md:my-[1%] rounded-md bg-bg-neumo dark:bg-dark-neumo shadow-basic dark:shadow-dark cursor-pointer hover:bg-[#dee1e3]"
      onClick={() => window.open(url, "_blank")}
    >
      <div className="flex w-1/2 justify-start items-center">
        <img src={src} alt="" className="w-10 h-10 object-contain mr-2" />
        <p className="font-semibold sm:text-lg text-text dark:text-white">{skill}</p>
      </div>
      <div className="flex w-1/2 justify-start items-center">
        <p className="text-base text-text-light dark:text-dark-text mr-2 mt-1 sm:mt-2">level</p>
        <div className="flex">
          {[...Array(5)].map((_, i) => {
            if (level - i * 2 > 1) {
              return <BsStarFill className="text-text dark:text-dark-text text-xl sm:text-2xl" />
            } else if (level - i * 2 === 1) {
              return <BsStarHalf className="text-text dark:text-dark-text text-xl sm:text-2xl" />
            } else return <BsStar className="text-text dark:text-dark-text text-xl sm:text-2xl" />
          })}
        </div>
      </div>
    </div>
  )

  return (
    <Layout>
      <div className="">
        <h1 className="text-primary-text dark:text-dark-primary font-bold text-lg">Skill</h1>
        <div>
          {skills.map((category, i) => (
            <div className="" key={i}>
              <p className="text-primary-text dark:text-dark-primary font-semibold">{category.subTitle}</p>
              <div className="flex flex-wrap justify-between mb-6 flex-col md:flex-row">
                {category.skills.map((skill, ii) => (
                  <List key={ii} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default SkillPage
