import React, { Component } from 'react';
import styles from './Selector.css';

export default class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <div className={styles.selector}>
        <p>I am Selector!</p>
      </div>
    );
  }
}
