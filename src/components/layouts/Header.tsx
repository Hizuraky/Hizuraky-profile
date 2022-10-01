import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { TavNav } from "@/components/layouts/TabNav"
import { SNSButtons } from "@/components/SNSButtons"
import profileHeader from "@/images/profileHeader.png"

export const Header = () => (
  <div className="w-full sm:h-[72px] h-16 relative flex justify-center items-center">
    <div className="absolute flex justify-between w-full z-20 p-2 max-w-[1200px]">
      <div className="sm:w-[51%] flex justify-between items-center">
        <div className="flex items-center w-full justify-between sm:pl-4 pl-1">
          <div className="flex items-center mr-4">
            <StaticImage
              src="https://ks-icons.s3.ap-northeast-1.amazonaws.com/profile.jpg"
              alt=""
              className="sm:w-10 sm:h-10 rounded-full w-8 h-8"
            />
            <h1 className="ml-1 sm:ml-2 text-white font-bold text-lg">Hizuraky</h1>
          </div>
          <div className="hidden sm:block">
            <SNSButtons />
          </div>
        </div>
      </div>
      <div className="sm:w-[46%] w-[62%] flex justify-between items-center pt-5 sm:pt-7 sm:pr-4 pr-1">
        <TavNav />
      </div>
    </div>
    <img src={profileHeader} alt="" className="h-16 sm:h-[72px] object-cover w-full z-10 object-header sm:object-top" />
  </div>
)
