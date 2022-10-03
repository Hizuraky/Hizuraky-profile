import React from "react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"

const tabs = [
  { text: "History", path: "/history" },
  { text: "Skill", path: "/skill" },
  { text: "Article", path: "/article" },
  { text: "Portfolio", path: "/portfolio" }
]
export const TavNav = () => {
  const { pathname } = useLocation()
  return (
    <div className="w-full h-16 relative flex justify-between items-center">
      {tabs.map((tab, i) => (
        <div
          className={`${
            pathname === tab.path
              ? "neumo-blue-active"
              : "shadow-basic dark:shadow-dark bg-bg dark:bg-dark-neumo  cursor-pointer hover:bg-[#dee1e3]"
          }  w-1/4 ml-2 h-9 flex justify-center items-center rounded-sm`}
          key={i}
          onClick={() => navigate(tab.path)}
        >
          <p className={`text-sm sm:text-base ${pathname === tab.path ? "text-white font-bold" : "dark:text-white"}`}>{tab.text}</p>
        </div>
      ))}
    </div>
  )
}
