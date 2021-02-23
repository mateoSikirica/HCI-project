import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Third = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "treca.jpg" }) {
       childImageSharp {
         fixed(width: 270) {
           ...GatsbyImageSharpFixed
         }
       }
     }
   }
 `)
  return <Img fixed={data.myImage.childImageSharp.fixed} />
}

export default Third