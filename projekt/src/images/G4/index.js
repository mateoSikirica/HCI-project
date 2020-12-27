import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const G4 = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "g4.png" }) {
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

export default G4