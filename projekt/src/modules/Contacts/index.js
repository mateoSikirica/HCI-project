import React from 'react'
import styles from './style.module.css'
import C1 from '../../images/C1'
import C2 from '../../images/C2'
import C3 from '../../images/C3'
import ImageContacts from '../../components/ImageContacts'

const firstText = `
COUNTRY: 
CITY:
ADDRESS:
ZIP CODE:
PHONE NUMBER:
E-MAIL:
`

const text1 = `
Croatia
Split
Pujanke 6
21000
021 567 999
computersplit@gmail.com
`

const text2 = `
Croatia
Zagreb
Ilica 44
21000
021 888 999
computerzagreb@gmail.com
`

const text3 = `
Croatia
Rijeka
Adamićeva 11
21000
021 765 999
computerrijeka@gmail.com
`

  const Processors = () => (
    <section className={styles.pageContent}>
      <h1>CONTACT</h1>
      <ImageContacts image={<C1/>} text={firstText} text2={text1}/>
      <ImageContacts image={<C2/>} text={firstText} text2={text2}/>
      <ImageContacts image={<C3/>} text={firstText} text2={text3}/>
    </section>
    )

export default Processors  