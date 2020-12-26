import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const First = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "p3.jpg" }) {
       childImageSharp {
         fixed(width: 166) {
           ...GatsbyImageSharpFixed
         }
       }
     }
   }
 `)
  return <Img fixed={data.myImage.childImageSharp.fixed} />
}

export default First