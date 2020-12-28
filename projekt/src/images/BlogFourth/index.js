import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const BlogFourth = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "cetvrta.jpg" }) {
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

export default BlogFourth