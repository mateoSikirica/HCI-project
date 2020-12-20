import React from 'react'
import styles from './style.module.css'

const navTabs = ['Home', 'Blog', 'Contact', 'Components', 'Cart', 'Gaming']
 
const HeaderBar = ({activeTab}) => (
  <header className={styles.header}>
      <ul className={styles.address}>
          <li className={styles.title}>
              COMPUTER SHOP
          </li>
      </ul>
      
      <ul className={styles.navigation}>
      {navTabs.map(tab => <li className={tab === activeTab ? styles.active : ''}>
      {tab}</li>
    )}
      </ul>
  </header>
)

export default HeaderBar