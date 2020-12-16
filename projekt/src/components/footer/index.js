import React from 'react'
  import styles from './style.module.css'
 
  const navTabs = ['Home', 'Blog', 'Contact', 'Components', 'Cart', 'Gaming']
 
  const Footer = () => (
    <footer className={styles.footer}>
        <ul className={styles.address}>
            <li className={styles.title}>
                COMPUTER SHOP
            </li>
            <li>Mateo Sikirica</li>
            <li>Ivan Vilić</li>
        </ul>
        
        <ul className={styles.navigation}>
            {navTabs.map(tab =>
              <li>{tab}</li>)
            }
        </ul>
    </footer>
  )
 
  export default Footer