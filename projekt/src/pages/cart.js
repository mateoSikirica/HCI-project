import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import CartContent from "../modules/CartContent"

const Blog = () => (
    <HeaderFooterLayout activeTab="Cart">
        <CartContent/>
    </HeaderFooterLayout>
)

export default Blog