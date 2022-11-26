import React from "react"
import clsx from "clsx"

type Props = {
  isAnimate: boolean
  title: string
}

export const Title = ({ title, isAnimate }: Props) => (
  <div className="hidden sm:block">
    <span className="w-full justify-center flex">
      <h1 className="text-white bg-gradient text-center font-bold text-2xl w-2/5 min-w-[200px] py-[2px]">{title}</h1>
    </span>
    <div className={clsx("line", isAnimate && "is-animated")} />
  </div>
)
