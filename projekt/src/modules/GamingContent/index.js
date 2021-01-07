import React from 'react'
import styles from './style.module.css'
import {navigate} from "gatsby"
import GamingCard from '../../components/GamingCard'
import GamingFirst from '../../images/GamingFirst'
import {useState} from 'react'

const firstText = `
The 2020 League of Legends World Championship was the tenth world championship for League of Legends, an esports tournament for the video game developed by Riot Games.

It was held from 25 September to 31 October in Shanghai, China. Twenty-two teams from eleven regions qualified for the tournament based on their placement in regional circuits, such as those in China, Europe, North America...

TOURNAMENT WINNER: DAMWON 
`

const fuk = () => {
      if(localStorage.getItem("loggedIn")) {
        return null
      }
      else {
        return <button onClick={() => navigate("../../profile")} className={styles.button} type="button">Sign up to get full access!</button>
      }
    }
  const GamingContent = () => (
    <section className={styles.pageContent}>
      <h2 className={styles.GamingTitle}>Gaming</h2>
      <GamingCard image={<GamingFirst />} text={firstText}/>
      {fuk()}
    </section>
    )

    

export default GamingContent 