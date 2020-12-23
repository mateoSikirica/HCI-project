import React from 'react'
import styles from './style.module.css'

import NavigationBar from '../../components/navigationBar'
 
  const Footer = ({activeTab}) => (
    <footer className={styles.footer}>
        <ul className={styles.logo_authors}>
            <li className={styles.title}>
                COMPUTER SHOP
            </li>
            <li>Mateo Sikirica</li>
            <li>Ivan Vilić</li>
        </ul>
        <ul><NavigationBar /></ul>
    </footer>
  )
 
  export default Footer