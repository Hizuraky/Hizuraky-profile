import React, { useEffect, useState } from "react"
import { MdContentCopy } from "react-icons/md"
// @ts-ignore
import profileHeader from "@/images/profileHeader.png"

export const Footer = () => {
  const [isCopied, setCopied] = useState(false)

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }, [isCopied])

  return (
    <div className="w-full h-16 relative flex justify-center items-center">
      <div className="absolute flex w-full z-20 p-2 max-w-[1080px] justify-between items-center">
        <p className="text-center w-[50%] text-[#888]">©️ 2022 Hizuraky</p>
        <div className="flex items-center">
          <div className="text-white absolute ml-[-65px] trans" />
          <p className="text-white mr-2 trans" style={isCopied ? { opacity: 1 } : { opacity: 0 }}>
            Copied!
          </p>
          <div className="neumo-blue min-w-72 w-72 h-10 flex justify-center items-center rounded-full p-1 ">
            <div className="flex justify-center items-center bg-white rounded-full w-full h-full p-1 relative">
              <p className="text-[#888] text-xs mr-1">contact: </p>
              <p className="mr-4">info.hizuraky@gmail.com</p>
              <MdContentCopy
                className="cursor-pointer"
                onClick={async () => {
                  await navigator.clipboard.writeText("info.hizuraky@gmail.com")
                  setCopied(true)
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <img src={profileHeader} alt="" className="h-16 object-cover w-full object-top z-10 transform rotate-180" />
    </div>
  )
}
;<p className="text-white absolute">Copied!</p>
