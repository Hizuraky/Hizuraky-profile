import profile from "@/images/portfolio/profile.png"
import shiftmaker from "@/images/portfolio/shiftmaker.png"
import kstyping from "@/images/portfolio/kstyping.png"

/***
 * 個人開発データ
 */

export const portfolios = [
  {
    title: "Hizuraky",
    tags: ["Gatsby"],
    src: profile,
    url: "https://hizuraky.tk/history/",
    release: "2022-10",
    github: "https://github.com/Hizuraky/Hizuraky-profile",
    site: "qiita",
    article: "https://qiita.com/Hizuraky/items/725f71cd195ee9b6c011",
    text: `
      自分の記事やポートフォリオをまとめた当サイト。
      Gatsbyで作られている。
      imageや表示データなども全てGithubの1つのリポジトリで完結しているため、Node環境があれば下記Githubリンクよりソースコードをcloneしてすぐにローカルで起動可能。
    `
  },
  {
    title: "Shift maker",
    tags: ["Remix", "GraphQL", "Hasura", "Firebase", "Heroku"],
    src: shiftmaker,
    url: "https://shift-maker.vercel.app/",
    release: "2022-9",
    github: "https://github.com/Hizuraky/shiftmaker",
    site: "qiita",
    article: "https://qiita.com/Hizuraky/items/57b9dceaeb2cad9a4d7a",
    text: `
      シフトの自動作成サービス。
      ReactのフレームワークであるRemixで作成し、APIサーバーにHasura,DBサーバーにHerokuを使用。
    `
  },
  {
    title: "ks typing",
    tags: ["Next.js", "Laravel", "AWS"],
    src: kstyping,
    url: "",
    release: "2022-5",
    github: "https://github.com/Hizuraky/keyboard-shortcuts-typing",
    site: "qiita",
    article: "https://qiita.com/Hizuraky/items/0b4e4e7daf595326e006",
    text: `
      各アプリのショートカットキーをゲーム感覚で学べるサービス。
      フロントエンドにNext.js、バックエンドはLaravel、インフラをAWSで構築。
      現在サイトは非公開。
    `
  }
]
