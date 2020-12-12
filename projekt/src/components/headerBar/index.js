import React from 'react'
import styles from './style.module.css'

const HeaderBar = () => (
  <main className={styles.container}>
    <computerShop>COMPUTER SHOP</computerShop>
    <line1></line1>
    <line2></line2>
    <home>HOME</home>
    <blog>BLOG</blog>
    <contact>CONTACT</contact>
    <components>COMPONENTS</components>
    <cart>CART</cart>
    <gaming>GAMING</gaming>
  </main>
)

export default HeaderBar