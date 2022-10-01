import React, { ReactNode } from "react"
import { Header } from "@/components/layouts/Header"
import { Footer } from "@/components/layouts/Footer"

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen min-w-screen flex flex-col justify-between bg-[#F0F1F3]">
    <div>
      <Header />
      {children}
    </div>
    <Footer />
  </div>
)
