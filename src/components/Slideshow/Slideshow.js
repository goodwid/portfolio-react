import React, { PureComponent } from 'react';
import styles from './Slideshow.css';

export default class Slideshow extends PureComponent {

  render() {
    
    return (
      <div className={styles.slideshow}>
        <p>I am Slideshow!</p>
      </div>
    );
  }
}
