import React from 'react'
import styles from './style.module.css'
import BlogCard from '../../components/blogCard'
import BlogFirst from '../../images/BlogFirst'
import BlogSecond from '../../images/BlogSecond'
import BlogThird from '../../images/BlogThird'
import BlogFourth from '../../images/BlogFourth'

const firstText = `
Intel’s Rocket Lake flagship – presumably this is the top-end chip, because it’s an 8-core model – has been spotted in a leaked benchmark which shows that it’s on an equal footing with AMD’s Ryzen 5800X (which also has 8-cores).
`
const secondText = `
The GeForce RTX™ 3080 delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. It’s built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.
`
 
const thirdText = `
Great gaming experiences are created by bending the rules. The all new RDNA powered Radeon RX 5700 XT for exceptional performance and High-fidelity gaming. Take control with Radeon RX 5700 XT and experience powerful, accelerated gaming customized for you.
`

const fourthText = `
AMD just announced its new lineup of Ryzen 5000 series processors for desktops, which are also the first chips from the company set to feature its next-gen Zen 3 architecture and represent the biggest jump for AMD’s desktop chips yet.
`

  const BlogContent = () => (
    <section className={styles.pageContent}>
      <h2 className={styles.BlogTitle}>Blog</h2>
      <BlogCard image={<BlogFirst />} title="INTEL NEW 8 CORE CPU" text1={firstText} text2='AUTHOR: Ivan Vilić'/>
      <BlogCard image={<BlogSecond />} title="NVIDIA GFORCE RTX3080" text1={secondText} text2='AUTHOR: Ivan Vilić'/>
      <BlogCard image={<BlogThird />} title="AMD RADEON RX5700" text1={thirdText} text2='AUTHOR: Mateo Sikirica'/>
      <BlogCard image={<BlogFourth />} title="AMD 3 RYZEN 5000 PROCESSOR" text1={fourthText} text2='AUTHOR: Mateo Sikirica'/>
    </section>
    )

export default BlogContent 