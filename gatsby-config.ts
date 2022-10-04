import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Hizuraky",
    siteUrl: "https://hizuraky.tk/",
    description: "Hizuraky profile site"
  },
  flags: {
    DEV_SSR: true
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": "src"
        },
        extensions: ["js", "ts", "tsx"]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hizuraky`,
        short_name: `Hizuraky`,
        start_url: `/history`,
        background_color: `#F2F4F5`,
        theme_color: `#3675FD`,
        display: `standalone`,
        icon: `src/images/icon.png`
      }
    }
  ]
}

export default config
