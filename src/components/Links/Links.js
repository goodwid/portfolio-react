import React, { Component } from 'react';
import styles from './Links.css';

export default class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <div className={styles.links}>
        <ul>
          <li><a href="https://linkedin.com/in/goodwid">LinkedIn</a></li>
          <li><a href="mailto:goodwid@gmail.com">Email</a></li>
          <li><a href="https://github.com/goodwid">Github</a></li>
          <li><a href="#">Resume</a></li>
        </ul>
      </div>
    );
  }
}
