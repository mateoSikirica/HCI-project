import React from 'react'
import styles from './style.module.css'
import gamingCard from '../../components/gamingCard'
import gamingCardHalf from '../../components/gamingCardHalf'
import GamingFirst from '../../images/GamingFirst'
import GamingSecond from '../../images/GamingSecond'
import GamingHalfOne from '../../images/GamingHalfOne'

const firstText = `
The 2020 League of Legends World Championship was the tenth world championship for League of Legends, an esports tournament for the video game developed by Riot Games.

It was held from 25 September to 31 October in Shanghai, China. Twenty-two teams from eleven regions qualified for the tournament based on their placement in regional circuits, such as those in China, Europe, North America...

TOURNAMENT WINNER: DAMWON 
`
const secondText = `
The StarLadder Major: Berlin 2019 was the fifteenth Counter-Strike: Global Offensive Major Championship. It was held in Berlin, Germany from August 23 to September 8, 2019.

Fourteen teams qualify for this Major based on their top fourteen placements from the last Major, the Intel Extreme Masters Season XIII. The tournament featured  a US$1,000,000 prize pool.

TOURNAMENT WINNER: AVANGAR
`


const GamingUnlocked = () => (
    <section className={styles.pageContent}>
      <h2 className={styles.GamingTitle}>Gaming</h2>
      <gamingCard image={<GamingFirst />} text={firstText}/>
      <gamingCard image={<GamingSecond />} text={secondText}/>
      <div className={styles.halfCards}>
        <gamingCardHalf image={<GamingHalfOne />}/>
        <gamingCardHalf image={<GamingHalfOne />}/>
      </div>
    </section>
)

export default GamingUnlocked 