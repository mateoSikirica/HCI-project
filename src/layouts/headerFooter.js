import React from 'react'
import NavigationHeader from '../modules/navigationHeader'
import Footer from '../modules/footer'
 
const HeaderFooterLayout = ({children, activeTab}) => (
  <>
    <NavigationHeader activeTab={activeTab} />
      {children}
    <Footer />
  </>
)
 
export default HeaderFooterLayout