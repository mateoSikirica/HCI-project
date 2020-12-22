import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from './style.module.css'

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className={styles.eachslide}>
            <div className={styles.slideOne}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className={styles.eachslide}>
            <div className={styles.slideTwo}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className={styles.eachslide}>
            <div className={styles.slideThree}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;