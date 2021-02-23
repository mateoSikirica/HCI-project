import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
 
const C3 = () => {
    const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "c3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
   return (
     <div style={{maxWidth: "450px", minWidth: "300px"}}> 
       <Img fluid={data.myImage.childImageSharp.fluid} />
     </div>
   )
}
 
export default C3