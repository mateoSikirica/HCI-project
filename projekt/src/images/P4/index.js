import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const P4 = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "p4.jpg" }) {
       childImageSharp {
         fixed(width: 185) {
           ...GatsbyImageSharpFixed
         }
       }
     }
   }
 `)
  return <Img fixed={data.myImage.childImageSharp.fixed} />
}

export default P4