import React from 'react'
import styles from './style.module.css'
import ImageParagraph from '../../components/ImageParagraph'
import ImageP from '../../components/ImageP'
import First from '../../images/First'
import Second from '../../images/Second'
import Third from '../../images/Third'
import Fourth from '../../images/Fourth'
import Brands from '../../images/Brands'

const firstText = `
Intel’s Rocket Lake flagship – this is the top-end chip because it’s an 8-core model.
`
const secondText = `
The GeForce RTX™ 3080 delivers the ultra performance that gamers crave.
`
 
const thirdText = `
The new RDNA powered Radeon RX 5700 XT for high performance and gaming.
`

const fourthText = `
AMD just announced its new lineup of Ryzen 5000 series processors for desktops.
`

  const PageContent = () => (
    <section className={styles.pageContent}>
      <ImageParagraph image={<First />} title="INTEL NEW 8 CORE CPU" text={firstText} text2='AUTHOR: Ivan Vilić'/>
      <ImageParagraph image={<Second />} title="NVIDIA GFORCE RTX3080" text={secondText} text2='AUTHOR: Ivan Vilić'/>
      <ImageParagraph image={<Third />} title="AMD RADEON RX5700" text={thirdText} text2='AUTHOR: Mateo Sikirica'/>
      <ImageParagraph image={<Fourth />} title="AMD 3 RYZEN 5000 PROCESSOR" text={fourthText} text2='AUTHOR: Mateo Sikirica'/>
      <section className={styles.blogBox}>
        <h2 className={styles.buttonBox}>Follow latest tech news on our blog</h2>
        <button className={styles.buttonBlog} type="button">Blog</button>
      </section>
      <section className={styles.componentsBox}>
        <h2 className={styles.buttonBoxC}>Choose between top tech brands</h2>
        <ImageP image={<Brands />}/>
        <button className={styles.buttonComponents} type="button">Components</button>
      </section>
    </section>
    
    )

export default PageContent  