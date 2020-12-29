import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const GamingFirst = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "lolGaming.PNG" }) {
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

export default GamingFirst