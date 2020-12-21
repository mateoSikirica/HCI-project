import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from './style.module.css'



const slideImages = [
  'C:/Users/ivanv/HCI-project/projekt/src/images/setup2.jpg',
  '../../images/setup3.jpg',
  '../../images/setup2.jpg'
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className={styles.eachslide}>
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className={styles.eachslide}>
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className={styles.eachslide}>
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;