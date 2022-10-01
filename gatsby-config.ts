import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Hizuraky",
    siteUrl: "https://www.yourdomain.tld"
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": "src"
        },
        extensions: ["js", "ts", "tsx"]
      }
    }
  ]
}

export default config
