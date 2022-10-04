import React, { ReactNode } from "react"
import { Header } from "@/components/layouts/Header"
import { Footer } from "@/components/layouts/Footer"
import { Helmet } from "react-helmet"

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen min-w-screen flex flex-col justify-between bg-bg dark:bg-dark-bg">
    <Helmet>
      <html lang="ja" />
      <title>Hizuraky</title>
      <meta name="description" content="Hizuraky profile site" />
    </Helmet>
    <div className="flex flex-col items-center">
      <Header />
      <div className="max-w-[1200px] full p-6 dark:text-white trans">{children}</div>
    </div>
    <Footer />
  </div>
)
