import React, { Component } from 'react';
import styles from './Display.css';
import About from '../About';
import ProjectDetail from '../ProjectDetail';

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { project } = this.props;
    
    return (
      <div className={styles.display}>
        { this.props.about ? <About /> : <ProjectDetail project={project} /> }

      </div>
    );
  }
}