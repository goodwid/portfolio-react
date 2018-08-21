import React, { Component } from 'react';
import styles from './Projects.css';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <div className={styles.projects}>
	<p>I am Projects!</p>
      </div>
    );
  }
}
