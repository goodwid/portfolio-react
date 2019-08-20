import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Display.css';
import About from '../About';
import ProjectDetail from '../ProjectDetail';

export default class Display extends Component {
  static propTypes = {
    showAbout: PropTypes.boolean,
    project: PropTypes.object,
  };
  

  render() {
    const { project, showAbout } = this.props;
    
    return (
      <div className={styles.display}>
        { showAbout ? <About /> : <ProjectDetail project={project} /> }
      </div>
    );
  }
}
