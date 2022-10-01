import React from "react"
import { BsSunFill, BsMoonFill } from "react-icons/bs"
import profileHeader from "@/images/profileHeader.png"
import { ModeToggle } from "@/components/ModeToggle"
import { EmailLabel } from "@/components/EmailLabel"
import { SNSButtons } from "@/components/SNSButtons"

export const Footer = () => (
  <div className="w-full h-20 relative flex justify-center items-center">
    <div className="absolute flex w-full z-20 p-2 max-w-[1200px] justify-between items-center">
      <div className="w-[48%] flex justify-around mb-4">
        <div className="flex items-center justify-center">
          <BsSunFill className="text-text-light dark:text-dark-text-deep text-2xl mr-2" />
          <ModeToggle />
          <BsMoonFill className="text-text-light dark:text-dark-text-deep text-2xl ml-3" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="hidden sm:block">
          <EmailLabel />
        </div>
        <div className="sm:hidden">
          <SNSButtons />
        </div>
        <p className="text-center text-text-pale text-sm sm:pl-12">©️ 2022 Hizuraky</p>
      </div>
    </div>
    <img src={profileHeader} alt="" className="h-20 object-cover w-full object-top z-10 transform rotate-180" />
  </div>
)
