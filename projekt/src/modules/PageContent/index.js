import React from 'react'
import styles from './style.module.css'
import ImageParagraph from '../../components/ImageParagraph'
import First from '../../images/First'
import Second from '../../images/Second'
 
const firstText = `
Intel’s Rocket Lake flagship – presumably this is the top-end chip, because it’s an 8-core model.
`
 
const secondText = `
The GeForce RTX™ 3080 delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture.`
 
  const PageContent = () => (
    <section className={styles.pageContent}>
      <ImageParagraph image={<First />} title="INTEL NEW 8 CORE CPU" text={firstText}/>
      <ImageParagraph image={<Second />} title="NVIDIA GEFORCE RTX3080" text={secondText}/>
    </section>)

export default PageContent  