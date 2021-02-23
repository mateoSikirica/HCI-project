import React from "react"

import HeaderFooterLayout from "../layouts/headerFooter"
import Slideshow from '../components/slider'
import PageContent from "../modules/PageContent"

const IndexPage = () => (
  <HeaderFooterLayout activeTab="Home">
    {<Slideshow />}
    <PageContent />
  </HeaderFooterLayout>
)

export default IndexPage