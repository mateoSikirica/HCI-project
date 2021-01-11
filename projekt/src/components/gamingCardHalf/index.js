import React from 'react'
import styles from './style.module.css'

 
const GamingCardHalf = ({image}) => (
  <section className={styles.gamingContainer}>
    <div className={styles.gamingImage}>{image}</div>
  </section>
  )
 
export default GamingCardHalf