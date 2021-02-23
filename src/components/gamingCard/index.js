import React from 'react'
import styles from './style.module.css'

 
const gamingCard = ({image, text}) => (
  <section className={styles.gamingContainer}>
    <div className={styles.articleHalf}>
        <article >
          <p className={styles.articleText}>{text}</p>
        </article>
    </div>
    <div className={styles.gamingImage}>{image}</div>
  </section>
  )
 
export default gamingCard