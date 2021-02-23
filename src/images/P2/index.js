import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const P2 = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "p2.png" }) {
       childImageSharp {
         fixed(width: 170) {
           ...GatsbyImageSharpFixed
         }
       }
     }
   }
 `)
  return <Img fixed={data.myImage.childImageSharp.fixed} />
}

export default P2