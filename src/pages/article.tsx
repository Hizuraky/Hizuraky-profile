import React, { useState, useEffect } from "react"
import { Layout } from "@/components/layouts"
import { BsFillCalendarCheckFill, BsTagsFill } from "react-icons/bs"
import { articles } from "@/data/article"
import { Pagination } from "@/components/Pagination"
import { Toggle } from "@/components/Toggle"
import ramble from "@/images/icons/ramble.png"
import qiita from "@/images/icons/qiita.png"
import Select from "react-select"

const ArticlePage = () => {
  const [page, setPage] = useState(1)
  const [isViewQiita, setViewQiita] = useState(true)
  const [isViewRamble, setViewRamble] = useState(true)
  const [selectedTag, setTag] = useState<string | undefined>(undefined)
  const [viewArticle, setArticle] = useState(articles.article)

  useEffect(() => {
    let currentArticles: {
      date: string
      title: string
      tags: string[]
      site: string
      url: string
    }[] = []
    if (isViewQiita && isViewRamble) {
      currentArticles = articles.article
    } else if (isViewQiita) {
      currentArticles = articles.article.filter((article) => article.site === "qiita" && article)
    } else if (isViewRamble) {
      currentArticles = articles.article.filter((article) => article.site === "ramble" && article)
    }

    if (selectedTag) {
      setArticle([...currentArticles.filter((article) => article.tags.includes(selectedTag))])
    } else {
      setArticle([...currentArticles])
    }
  }, [page, isViewQiita, isViewRamble, selectedTag])

  const List = ({ date, title, tags, site, url }: { date: string; title: string; tags: string[]; site: string; url: string }) => (
    <div
      className="flex w-full items-center p-2 sm:p-4 my-4 rounded-md bg-bg-neumo dark:bg-dark-neumo shadow-basic dark:shadow-dark justify-between flex-col md:flex-row"
      onClick={() => window.open(url, "_blank")}
    >
      <h1 className="text-lg font-bold text-text dark:text-white w-full md:max-w-[50%] md:w-[50%] md:mr-4 px-3 md:px-0">{title}</h1>
      <div className="flex items-end sm:items-center md:flex-row justify-between  md:w-[47%] w-full">
        <div className="flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-start w-full pl-3 md:pl-0 mt-3 md:mt-0">
          <div className="flex items-center mb-2">
            <BsFillCalendarCheckFill className="text-text-light text-xl mr-2" />
            <p className="text-base text-text-light dark:text-dark-text">{date}</p>
          </div>
          <div className="flex items-center">
            <BsTagsFill className="text-text-light text-xl mr-2" />
            <div className="flex flex-wrap">
              {tags.map((tag, i) => (
                <p key={i} className="text-sm text-text-light dark:text-dark-text flex md:text-base">
                  {i !== 0 && <p className="mx-1">/</p>}
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
        <img src={site === "qiita" ? qiita : ramble} alt="" className="w-6 h-6 sm:w-10 sm:h-10 rounded-full" />
      </div>
    </div>
  )

  return (
    <Layout>
      <div className="">
        <h1 className="text-primary-text dark:text-dark-primary font-bold text-lg">Article</h1>
        <div className="flex items-center">
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
        {viewArticle
          .filter((article, i) => (page - 1) * 5 <= i && i < page * 5 && article)
          .map((article, i) => (
            <List {...article} key={i} />
          ))}
        <Pagination page={page} setPage={setPage} array={viewArticle} />
      </div>
    </Layout>
  )
}

export default ArticlePage
