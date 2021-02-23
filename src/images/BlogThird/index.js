import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const BlogThird = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "treca.jpg" }) {
       childImageSharp {
         fixed(width: 450, height: 300) {
           ...GatsbyImageSharpFixed
         }
       }
     }
   }
 `)
  return <Img fixed={data.myImage.childImageSharp.fixed} />
}

export default BlogThird