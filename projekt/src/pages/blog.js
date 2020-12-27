import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import BlogContent from "../modules/BlogContent"

const Blog = () => (
    <HeaderFooterLayout activeTab="Blog">
        <BlogContent/>
    </HeaderFooterLayout>
)

export default Blog