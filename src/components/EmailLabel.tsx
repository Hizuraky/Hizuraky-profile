import React, { useEffect, useState } from "react"
import { MdContentCopy } from "react-icons/md"

export const EmailLabel = () => {
  const [isCopied, setCopied] = useState(false)
  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setCopied(false)
      }, 2000)
    }
  }, [isCopied])

  return (
    <div className="flex items-center">
      <p className={`text-white mr-2 ${isCopied ? "animate-fade-in" : "animate-fade-out"} `}>Copied!</p>
      <div className="neumo-blue min-w-72 w-72 h-10 flex justify-center items-center rounded-full p-1 ">
        <div className="flex justify-center items-center bg-white rounded-full w-full h-full p-1 relative dark:bg-dark-bg">
          <p className="text-text-light text-xs mr-1 dark:text-dark-text-deep">contact: </p>
          <p className="mr-4 dark:text-dark-text">info.hizuraky@gmail.com</p>
          <MdContentCopy
            className="cursor-pointer dark:text-dark-text"
            onClick={async () => {
              await navigator.clipboard.writeText("info.hizuraky@gmail.com")
              setCopied(true)
            }}
          />
        </div>
      </div>
    </div>
  )
}
