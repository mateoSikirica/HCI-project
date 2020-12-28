import React from 'react'
import styles from './style.module.css'
 
const ImageParagraph = ({image, text, text2 }) => (
  <section className={styles.imageParagraph}>
    <div className={styles.articleHalf}>
        <article>
          <p>{text}</p>
          <p>{text2}</p>
        </article>
    </div>
    <div className={styles.imageHalf}>{image}</div>
  </section>
  )
 
export default ImageParagraph