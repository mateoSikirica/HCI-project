import React from 'react'
import styles from './style.module.css'
import Geforce from '../../images/Geforce'
import Image_readmore from '../../components/Image_readmore'
import Image_readmore2 from '../../components/Image_readmore2'
import Graph from '../../images/Graph'
import Graph2 from '../../images/Graph2'

const title = 'Innovative design'

const firstText = 'The GeForce RTX™ 3080 delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. It’s built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience. NVIDIA Reflex delivers the ultimate competitive advantage. The lowest latency. The best responsiveness. Powered by GeForce RTX 30 Series GPUs and NVIDIA® G-SYNC® gaming monitors. Acquire targets faster, react quicker, and increase aim precision through a revolutionary suite of technologies to measure and optimise system latency for competitive games. Take your creative projects to a whole new level with GeForce RTX 30 Series GPUs. Delivering AI-acceleration in top creative apps. Backed by the NVIDIA Studio platform of dedicated drivers and exclusive tools. And built to perform in record time. Whether you’re rendering complex 3D scenes, editing 8K video, or livestreaming with the best encoding and image quality, GeForce RTX GPUs give you the performance to create your best. Steal the show with incredible graphics and smooth, stutter-free live streaming. Next-generation hardware encoding and decoding combine to show off all your best moments in exquisite detail. And the all-new NVIDIA Broadcast app takes your livestreams to the next level with powerful AI capabilities to improve audio and video quality with effects like virtual background, webcam auto frame and microphone noise removal. GeForce RTX 30 Series GPUs deliver the performance and image quality necessary to give your audience your best—every time.'

const secondText = 'New dual axial flow through thermal design delivers the highest possible thermal performance without compromising fan acoustics. The flow through thermal design reinforces the natural air flow in the chassis for a quieter and cooler gaming system.NVIDIA Reflex delivers the ultimate competitive advantage. The lowest latency. The best responsiveness. Powered by GeForce RTX 30 Series GPUs and NVIDIA® G-SYNC® gaming monitors. Acquire targets faster, react quicker, and increase aim precision through a revolutionary suite of technologies to measure and optimise system latency for competitive games.NVIDIA’s Ampere architecture delivers the highest performance and performance per watt.'

  const Blog_readmore = () => (
    <section className={styles.pageContent}>
      <h2 className={styles.BlogTitle}>Blog</h2>

      <Image_readmore image={<Geforce/>} title={title} text={firstText} text2={secondText}/>
      <Image_readmore2 image={<Graph/>}/>
      <Image_readmore2 image={<Graph2/>}/>
 
    </section>
    )

export default Blog_readmore 