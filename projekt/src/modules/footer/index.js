import React from 'react'
import styles from './style.module.css'
import NavigationBar from '../../components/navigationBar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
 
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
        <div className={styles.socialMedia}>
          <a href="https://www.facebook.com" className={styles.facebook}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" className={styles.twitter}>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.youtube.com" className={styles.youtube}>
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.instagram.com" className={styles.instagram}>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
    </footer>
  )
 
  export default Footer