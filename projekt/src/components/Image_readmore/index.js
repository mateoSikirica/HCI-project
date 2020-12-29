import React from 'react'
import styles from './style.module.css'
 
const ImageParagraph = ({image, title, text, text2}) => (
  <section className={styles.imageParagraph}>
    <div className={styles.imageHalf}>{image}</div>
    <div className={styles.articleHalf}>
        <article >
          <p className={styles.articleText}>{text}</p>
          <h3>{title}</h3>
          <p className={styles.articleText}>{text2}</p>
        </article>
    </div>
  </section>
  )
 
export default ImageParagraph