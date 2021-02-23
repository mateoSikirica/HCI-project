import React from 'react'
import { navs as navTabs } from '../../constants/const'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

  const NavigationBar = ({ activeTab, useThisStyle }) => (
    <nav className={styles[useThisStyle || 'navigationBar']}>
    {navTabs.map(({tab, to}) => (
              <Link to={to} >
                  <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
              </Link>)
            )}
      <FontAwesomeIcon className={styles.cartIcon} icon={faShoppingCart} color="white" />
      <FontAwesomeIcon className={styles.lockIcon} icon={faUserLock} color="white" />
    </nav>
    
  )
 
  export default NavigationBar