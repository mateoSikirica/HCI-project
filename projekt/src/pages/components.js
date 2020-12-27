import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import Processors from "../modules/Processors"
import Graphics from "../modules/Graphics"

const Components = () => (
    <HeaderFooterLayout activeTab="Components">
        <Processors/>
        <Graphics/>
    </HeaderFooterLayout>
)
 
export default Components