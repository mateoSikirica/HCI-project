import React from 'react'
import styles from './style.module.css'
 
const ImageParagraph = ({image, title, text, text2}) => (
  <section className={styles.imageParagraph}>
    <div className={styles.imageHalf}>{image}</div>
    <div className={styles.articleHalf}>
        <article >
          <h2>{title}</h2>
          <p>{text}</p>
          <p>{text2}</p>
        </article>
    </div>
  </section>
  )
 
export default ImageParagraph