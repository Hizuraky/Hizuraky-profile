import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

export const SEO = () => {
  const { site } = useStaticQuery(query)
  return (
    <Helmet>
      <html lang="ja" />
      <title>{site.siteMetadata.title}</title>
      <meta name="description" content={site.siteMetadata.description} />
    </Helmet>
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
