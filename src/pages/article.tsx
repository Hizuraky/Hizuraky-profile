import React, { useState, useEffect } from "react"
import { Layout } from "@/components/layouts"
import { BsTagsFill } from "react-icons/bs"
import { articles } from "@/data/article"
import { Pagination } from "@/components/Pagination"
import { Toggle } from "@/components/Toggle"
import ramble from "@/images/icons/ramble.png"
import qiita from "@/images/icons/qiita.png"
import Select from "react-select"
import { ArticleList } from "@/components/ArticleList"
import { Title } from "@/components/Title"
import clsx from "clsx"

/***
 * 投稿記事一覧画面
 */

const ArticlePage = () => {
  const [page, setPage] = useState(1)
  const [isViewQiita, setViewQiita] = useState(true)
  const [isViewRamble, setViewRamble] = useState(true)
  const [selectedTag, setTag] = useState<string | undefined>(undefined)
  const [viewArticle, setArticle] = useState(articles.article)
  const [time, setTime] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setTime(time + 1)
    }, 50)
    return () => clearInterval(id)
  }, [time])

  useEffect(() => {
    let currentArticles: { date: string; title: string; tags: string[]; site: string; url: string }[] = []

    // Qiita / Ramble トグル処理
    if (isViewQiita && isViewRamble) {
      currentArticles = articles.article
    } else if (isViewQiita) {
      currentArticles = articles.article.filter((article) => article.site === "qiita" && article)
    } else if (isViewRamble) {
      currentArticles = articles.article.filter((article) => article.site === "ramble" && article)
    }

    // Tag選択処理
    if (selectedTag) {
      setArticle([...currentArticles.filter((article) => article.tags.includes(selectedTag))])
    } else {
      setArticle([...currentArticles])
    }
    setTime(1)
  }, [page, isViewQiita, isViewRamble, selectedTag])

  return (
    <Layout>
      <div>
        <Title isAnimate={time > 0} title="Article" />
        <div className="flex items-center mt-4">
          <div className="w-60 h-10 shadow-basic-inner rounded-full bg-bg-neumo mr-4 flex justify-between items-center px-4 dark:shadow-dark-inner dark:bg-dark-neumo">
            <BsTagsFill className="text-text text-xl dark:text-dark-text" />
            <Select
              options={[{ label: "未選択", value: "" }, ...articles.tags.map((tag) => ({ label: tag, value: tag }))]}
              defaultValue={{ label: "未選択", value: "" }}
              onChange={(e) => setTag(e?.value)}
              className="my-react-select-container"
              classNamePrefix="my-react-select"
            />
          </div>
          <Toggle
            isChecked={isViewQiita}
            setChecked={setViewQiita}
            id="isViewQiita"
            buttonElement={<img src={qiita} alt="" className="full rounded-full object-contain" />}
            className="mr-2"
          />
          <Toggle
            isChecked={isViewRamble}
            setChecked={setViewRamble}
            id="isViewRamble"
            buttonElement={<img src={ramble} alt="" className="full rounded-full object-contain" />}
          />
        </div>

        <div className="md:min-h-[530px]">
          {viewArticle
            .filter((article, i) => (page - 1) * 5 <= i && i < page * 5 && article)
            .map((article, i) => (
              <div className={clsx("opacity-0", i + 1 < time && "slidIn-anim")} key={i}>
                <ArticleList {...article} key={i} />
              </div>
            ))}
        </div>
        <Pagination page={page} setPage={setPage} array={viewArticle} setTime={setTime} />
      </div>
    </Layout>
  )
}

export default ArticlePage
