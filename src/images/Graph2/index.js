import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Graph2 = () => {
   const data = useStaticQuery(graphql`
   query {
     myImage: file(relativePath: { eq: "graph2.jpg" }) {
       childImageSharp {
         fixed(width: 1116) {
           ...GatsbyImageSharpFixed
         }
       }
     }
   }
 `)
  return <Img fixed={data.myImage.childImageSharp.fixed} />
}

export default Graph2