import React, { Component } from 'react';
import styles from './Display.css';
import About from '../About';
import Projects from '../Projects';

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <div className={styles.display}>
        { this.props.about ? <About /> : <Projects /> }

      </div>
    );
  }
}
