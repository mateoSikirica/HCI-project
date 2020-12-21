import React from "react"

import NavigationHeader from '../components/navigationHeader'
import Footer from '../components/footer'
import Slideshow from '../components/slider'

const IndexPage = () => (
  <main>
   <NavigationHeader activeTab = "Home" />
   <Slideshow />
   <Footer activeTab = "Home" />
   
  </main>
)

export default IndexPage