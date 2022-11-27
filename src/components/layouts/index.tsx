import React, { ReactNode } from "react"
import { Header } from "@/components/layouts/Header"
import { Footer } from "@/components/layouts/Footer"
import { SEO } from "@/components/SEO"

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen min-w-screen flex flex-col justify-between bg-bg dark:bg-dark-bg">
    <SEO />
    <div className="flex flex-col items-center">
      <div className="fixed sm:relative z-50 bg-bg dark:bg-dark-bg">
        <Header />
      </div>
      <div className="max-w-[1200px] full p-6 dark:text-white trans pt-20 sm:pt-6">{children}</div>
    </div>
    <Footer />
  </div>
)
