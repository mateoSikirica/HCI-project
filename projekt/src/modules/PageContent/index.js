import React from 'react'
import styles from './style.module.css'
import ImageParagraph from '../../components/ImageParagraph'
import First from '../../images/First'
import Second from '../../images/Second'
import Third from '../../images/Third'
import Fourth from '../../images/Fourth'

const firstText = `
Intel’s Rocket Lake flagship – presumably this is the top-end chip, because it’s an 8-core model.
`
 
const secondText = `
The GeForce RTX™ 3080 delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture.
`
 
const thirdText = `
The all new RDNA powered Radeon RX 5700 XT for exceptional performance and High-fidelity gaming. 
`

const fourthText = `
AMD just announced its new lineup of Ryzen 5000 series processors for desktops.
`

  const PageContent = () => (
    <section className={styles.pageContent}>
      <ImageParagraph image={<First />} title="INTEL NEW 8 CORE CPU" text={firstText}/>
      <ImageParagraph image={<Second />} title="NVIDIA GEFORCE RTX3080" text={secondText}/>
      <ImageParagraph image={<Third />} title="AMD RADEON RX5700" text={thirdText}/>
      <ImageParagraph image={<Fourth />} title="AMD 3 RYZEN 5000 PROCESSORS" text={fourthText}/>
    </section>)

export default PageContent  