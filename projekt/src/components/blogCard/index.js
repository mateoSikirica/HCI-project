import React from 'react'
import styles from './style.module.css'
 
const BlogCard = ({image, title, text1, text2}) => (
  <section className={styles.blogContainer}>
    <div className={styles.articleHalf}>
        <article >
          <h2 className={styles.titleBlog}>{title}</h2>
          <p className={styles.articleText}>{text1}</p>
        </article>
        <div className={styles.authorAndButton}>
          <p className={styles.articleAuthor}>{text2}</p>
          <button className={styles.button} type="button">Read More</button>
        </div>
    </div>
    <div className={styles.blogImage}>{image}</div>
  </section>
  )
 
export default BlogCard