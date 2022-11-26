import React, { useEffect, useState } from "react"
import { Layout } from "@/components/layouts"
import { portfolios } from "@/data/portfolio"
import { Pagination } from "@/components/Pagination"
import { PortfolioList } from "@/components/PortfolioList"
import { Title } from "@/components/Title"

/***
 * 個人開発一覧画面
 */

const PortfolioPage = () => {
  const [page, setPage] = useState(1)
  const [time, setTime] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setTime(time + 1)
    }, 50)
    return () => clearInterval(id)
  }, [time])

  return (
    <Layout>
      <Title isAnimate={time > 1} title="Portfolio" />
      {portfolios
        .filter((portfolio, i) => (page - 1) * 5 <= i && i < page * 5 && portfolio)
        .map((portfolio, i) => (
          <PortfolioList {...portfolio} key={i} />
        ))}
      <Pagination page={page} setPage={setPage} array={portfolios} setTime={setTime} />
    </Layout>
  )
}

export default PortfolioPage
