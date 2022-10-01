// @ts-nocheck
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { TavNav } from "@/components/layouts/TabNav"
import profileHeader from "@/images/profileHeader.png"
import ramble from "@/images/ramble.png"
import qiita from "@/images/qiita.png"
import github from "@/images/github.png"
// import zenn from "@/images/zenn.png"

const icons = [
  { src: github, url: "https://github.com/Hizuraky" },
  { src: ramble, url: "https://ramble.impl.co.jp/author/36/" },
  { src: qiita, url: "https://qiita.com/Hizuraky" }
  // { src: zenn, url: "https://zenn.dev/hizurakyy" }
]

export const Header = () => (
  <div className="w-full h-16 relative flex justify-center items-center">
    <div className="absolute flex justify-between w-full z-20 p-2 max-w-[1080px]">
      <div className="w-[51%] flex justify-between items-center">
        <div className="flex items-center w-full justify-around">
          <div className="flex items-center mr-4">
            <StaticImage src="https://ks-icons.s3.ap-northeast-1.amazonaws.com/profile.jpg" alt="" className="w-10 h-10 rounded-full" />
            <h1 className="ml-2 text-white font-bold text-lg">Hizuraky</h1>
          </div>
          <div className="flex items-center lg:mr-[10%]">
            {icons.map((icon, i) => (
              <div
                className="neumo-blue w-10 h-10 flex justify-center items-center rounded-full p-1 mr-1 lg:mr-4 cursor-pointer"
                key={i}
                onClick={() => window.open(icon.url, "_blank")}
              >
                <div className="flex justify-center items-center bg-white rounded-full w-full h-full p-1">
                  <img src={icon.src} alt="" className="full rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[46%] flex justify-between items-center pt-7">
        <TavNav />
      </div>
    </div>
    <img src={profileHeader} alt="" className="h-16 object-cover w-full object-top z-10" />
  </div>
)
