import React, { Component } from 'react';
import styles from './About.css';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <div className={styles.about}>
	      <p>I is a programmer.</p>
      </div>
    );
  }
}
