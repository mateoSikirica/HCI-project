import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const GamingSecond = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "mercedesArena.PNG" }) {
       childImageSharp {
         fixed(width: 650, height: 300) {
           ...GatsbyImageSharpFixed
         }
       }
     }
   }
 `)
  return <Img fixed={data.myImage.childImageSharp.fixed} />
}

export default GamingSecond