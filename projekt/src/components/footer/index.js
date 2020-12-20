import React from 'react'
  import styles from './style.module.css'
 
  const navTabs = ['Home', 'Blog', 'Contact', 'Components', 'Cart', 'Gaming']
 
  const Footer = ({activeTab}) => (
    <footer className={styles.footer}>
        <ul className={styles.logo_authors}>
            <li className={styles.title}>
                COMPUTER SHOP
            </li>
            <li>Mateo Sikirica</li>
            <li>Ivan Vilić</li>
        </ul>
        
      <ul className={styles.navigation}>
      {navTabs.map(tab => <li className={tab === activeTab ? styles.active : ''}>
      {tab}</li>
      )}
      </ul>
    </footer>
  )
 
  export default Footer