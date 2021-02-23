import React from 'react'

import Logo from '../../components/logo'
import Navigation from '../../components/navigation'

import styles from './style.module.css'

const NavigationHeader = ({ activeTab }) => (
  <section className={styles.navigationHeader}>
      <Logo />
      <Navigation activeTab={activeTab} />
  </section>
)
export default NavigationHeader