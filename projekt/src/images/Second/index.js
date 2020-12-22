import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
 
const Second = () => {
    const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "druga.jpeg" }) {
        childImageSharp {
         fixed(width: 570) {
           ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.myImage.childImageSharp.fixed} />
}
 
export default Second