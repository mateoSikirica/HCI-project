import React from "react"

import NavigationHeader from '../components/navigationHeader'
import Footer from '../components/footer'

const IndexPage = () => (
  <main>
   <NavigationHeader activeTab = "Home" />
   <Footer activeTab = "Home" />
  </main>
)

export default IndexPage