import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const GamingHalfOne = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "mercedesArena.png" }) {
       childImageSharp {
         fixed(width: 540, height: 300) {
           ...GatsbyImageSharpFixed
         }
       }
     }
   }
 `)
  return <Img fixed={data.myImage.childImageSharp.fixed} />
}

export default GamingHalfOne