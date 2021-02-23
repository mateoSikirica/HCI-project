import React from 'react'
import styles from './style.module.css'


  const BlogContent = () => (
    <section className={styles.pageContent}>
      <h2 className={styles.CartTitle}>Cart</h2>
      <p className={styles.CartSubTitle}>Your order</p>
      <p className={styles.CartItemsNumber}>You have 2 items in your cart</p>

    </section>
    )

export default BlogContent 