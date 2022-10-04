import React from "react"
import ramble from "@/images/icons/ramble.png"
import qiita from "@/images/icons/qiita.png"
import github from "@/images/icons/github.png"
// import zenn from "@/images/zenn.png"

const icons = [
  { src: github, url: "https://github.com/Hizuraky" },
  { src: ramble, url: "https://ramble.impl.co.jp/author/36/" },
  { src: qiita, url: "https://qiita.com/Hizuraky" }
  // { src: zenn, url: "https://zenn.dev/hizurakyy" }
]

export const SNSButtons = () => (
  <div className="flex items-center sm:mr-[10%] md:w-[200px] w-full">
    {icons.map((icon, i) => (
      <div
        className="neumo-blue w-10 h-10 flex justify-center items-center rounded-full p-1 mr-2 md:mr-4 cursor-pointer"
        key={i}
        onClick={() => typeof window !== "undefined" && window.open(icon.url, "_blank")}
      >
        <div className="flex justify-center items-center bg-white rounded-full w-full h-full p-1 hover:bg-[#dee1e3]">
          <img src={icon.src} alt="" className="full rounded-full" />
        </div>
      </div>
    ))}
  </div>
)
