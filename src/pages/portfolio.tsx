import React, { useState } from "react"
import { Layout } from "@/components/layouts"
import { portfolios } from "@/data/portfolio"
import { Pagination } from "@/components/Pagination"
import { PortfolioList } from "@/components/PortfolioList"

/***
 * 個人開発一覧画面
 */

const PortfolioPage = () => {
  const [page, setPage] = useState(1)
  return (
    <Layout>
      <h1 className="text-primary-text dark:text-dark-primary font-bold text-lg">Portfolio</h1>
      {portfolios
        .filter((portfolio, i) => (page - 1) * 5 <= i && i < page * 5 && portfolio)
        .map((portfolio, i) => (
          <PortfolioList {...portfolio} key={i} />
        ))}
      <Pagination page={page} setPage={setPage} array={portfolios} />
    </Layout>
  )
}

export default PortfolioPage
