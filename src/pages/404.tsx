import * as React from "react"
import { HeadFC } from "gatsby"
import { Layout } from "@/components/layouts"

const NotFoundPage = () => {
  return (
    <Layout>
      <h1 className="text-primary-text dark:text-dark-primary font-bold text-lg">Page not found</h1>
      <p className="text-primary-text dark:text-dark-primary font-semibold">
        お探しのページが見つかりません。タブボタンよりお進みください。
      </p>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
