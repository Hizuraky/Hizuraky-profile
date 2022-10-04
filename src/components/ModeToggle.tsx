import * as React from "react"

/***
 * ダークモード切り替えトグル
 */

export const ModeToggle = ({ className }: { className?: string }) => (
  <button
    title="Toggle Theme"
    onClick={() => document.documentElement.classList.toggle("dark")}
    className={`${className} w-16 h-8 rounded-full p-1 bg-[#F0F1F3] relative transition-colors duration-500 ease-in focus:outline-none focus:border-transparent shadow-toggle dark:shadow-blue-active dark:bg-primary`}
  >
    <div
      id="toggle"
      className="rounded-full w-6 h-6 bg-[#F0F1F3] relative ml-0 dark:ml-8 pointer-events-none transition-all duration-300 ease-out shadow-toggle-button dark:shadow-dark-toggle-button dark:bg-[#868ea0]"
    />
  </button>
)
