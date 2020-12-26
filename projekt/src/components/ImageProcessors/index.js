import React from 'react'
import styles from './style.module.css'
 
const ImageProcessors = ({image, title, text, text2}) => (
  <section className={styles.imageParagraph}>
    <div className={styles.imageHalf}>{image}</div>
    <div className={styles.articleHalf}>
        <article >
          <h3>{title}</h3>
          <p className={styles.articleText}>{text}</p>

        </article>
        <section className={styles.titleAndButton}>
          <h3 className={styles.buttonGaming}>PRICE: {text2}</h3>
          <button className={styles.button} type="button">Add to cart</button>
        </section>
    </div>
  </section>
  )
 
export default ImageProcessors