import React from "react"
import { Link, navigate } from "gatsby"
import { useLocation } from "@reach/router"

const tabs = [
  { text: "History", path: "/history" },
  { text: "Skill", path: "/skill" },
  { text: "Notes", path: "/notes" },
  { text: "Projects", path: "/projects" }
]
export const TavNav = () => {
  const { pathname } = useLocation()
  return (
    <div className="w-full h-16 relative flex justify-between items-center">
      {tabs.map((tab, i) => (
        <div
          className={`${
            pathname === tab.path ? "neumo-blue-active" : "neumo-white"
          }  w-1/4 ml-2 h-9 flex justify-center items-center rounded-sm trans`}
          key={i}
          onClick={() => navigate(tab.path)}
        >
          <p className={`${pathname === tab.path && "text-white font-bold"} trans`}>{tab.text}</p>
        </div>
      ))}
    </div>
  )
}
