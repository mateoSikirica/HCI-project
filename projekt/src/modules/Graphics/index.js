import React from 'react'
import styles from './style.module.css'
import G1 from '../../images/G1'
import G2 from '../../images/G2'
import G3 from '../../images/G3'
import G4 from '../../images/G4'
import ImageProcessorsGraphics from '../../components/ImageProcessorsGraphics'

const firstText = `
GPU brand NVIDIA GeForce GPU model GT 710

`
const secondText = `
GPU brand: NVIDIA GeForce GPU model: GTX1030
`
 
const thirdText = `
GPU brand: NVIDIA GeForce GPU model: GeForce 
`

const fourthText = `
Graphic Asus Nvidia GeForce DUAL RTX2060 SUPER EVO, 8GB 
`

  const Processors = () => (
    <section className={styles.pageContent}>
      <h1>GRAPHIC CARDS</h1>
      <ImageProcessorsGraphics image={<G1/>} title="Graphic card Asus GT710" text={firstText} text2="60$"/>
      <ImageProcessorsGraphics image={<G2/>} title="Graphic card Asus GT1030" text={secondText} text2="100$"/>
      <ImageProcessorsGraphics image={<G3/>} title="Graphic card Asus Phoenix" text={thirdText} text2="300$"/>
      <ImageProcessorsGraphics image={<G4/>} title="Graphic card Asus Nvidia " text={fourthText} text2="690$"/>    
    </section>
    )

export default Processors  