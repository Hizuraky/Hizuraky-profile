import React, { useEffect } from "react"
import { navigate } from "gatsby"

const IndexPage = () => {
  useEffect(() => {
    navigate("/history")
  }, [])
  return <></>
}

export default IndexPage
