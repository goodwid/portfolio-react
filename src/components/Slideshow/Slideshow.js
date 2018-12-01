import React, { Component } from 'react';
import styles from './Slideshow.css';

export default class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <div className={styles.slideshow}>
        <p>I am Slideshow!</p>
      </div>
    );
  }
}
