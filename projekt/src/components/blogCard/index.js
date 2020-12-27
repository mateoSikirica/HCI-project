import React from 'react'
import styles from './style.module.css'
 
const BlogCard = ({image, title, text1, text2}) => (
  <section className={styles.imageParagraph}>
    <div className={styles.imageHalf}>{image}</div>
    <div className={styles.articleHalf}>
        <article >
          <h3>{title}</h3>
          <p className={styles.articleText}>{text1}</p>
          <p className={styles.articleAuthor}>{text2}</p>
          <button className={styles.button} type="button">Read More</button>
        </article>
    </div>
  </section>
  )
 
export default BlogCard