import React, { Component } from 'react';
import styles from './Main.css';
import About from '../About';
import Projects from '../Projects';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <div className={styles.main}>
        <p>I am Main!</p>
        <About />
        <Projects />
      </div>
    );
  }
}
