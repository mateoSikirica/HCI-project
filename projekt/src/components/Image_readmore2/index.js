import React from 'react'
import styles from './style.module.css'
 
const ImageParagraph = ({image}) => (
  <section className={styles.imageParagraph}>
    <div className={styles.imageHalf}>{image}</div>
  </section>
  )
 
export default ImageParagraph