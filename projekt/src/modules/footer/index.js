import React from 'react'
import styles from './style.module.css'

import NavigationBar from '../../components/NavigationBar'
 
  const Footer = ({activeTab}) => (
    <footer className={styles.footer}>
        <ul className={styles.logo_authors}>
            <li className={styles.title}>
                COMPUTER SHOP
            </li>
            <li>Mateo Sikirica</li>
            <li>Ivan Vilić</li>
        </ul>
        <NavigationBar />
    </footer>
  )
 
  export default Footer