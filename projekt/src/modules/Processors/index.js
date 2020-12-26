import React from 'react'
import styles from './style.module.css'
import ImageProcessors from '../../components/ImageProcessors'
import P1 from '../../images/P1'
import P2 from '../../images/P2'
import P3 from '../../images/P3'
import P4 from '../../images/P4'

const firstText = `
Intel® Core™ i7-1160G7 Processor (12M Cache, up to 4.40 GHz)
`
const secondText = `
Intel® Celeron® Processor G5900 (2M Cache, 3.40 GHz, 2 threads,2 cores)
`
 
const thirdText = `
# of CPU Cores: 16, # of threads: 32 Max Boost Clock Up to 4.9GHz, Base Clock: 3.4GHz
`

const fourthText = `
Intel® Core™ i9-10850K Processor (20M Cache, up to 5.20 GHz)
`

  const Processors = () => (
    <section className={styles.pageContent}>
      <ImageProcessors image={<P1 />} title="Intel® Core™ i7" text={firstText} text2="261$"/>
      <ImageProcessors image={<P2 />} title="Intel® Celeron" text={secondText} text2="60$"/>
      <ImageProcessors image={<P3 />} title="AMD Ryzen™ 5950X" text={thirdText} text2="77$"/>
      <ImageProcessors image={<P4 />} title="Intel® Core™ i9" text={fourthText} text2="1050$"/>    

    </section>
    )

export default Processors  