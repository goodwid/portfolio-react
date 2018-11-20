import React, { Component } from 'react';
import styles from './ProjectDetail.css';

export default class ProjectDetail extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { project } = this.props;
    const { name, repo, url, description } = project;
    
    return (
      <div className={styles.projectDetail}>
        <h2>{name}</h2>
        <h4>{url}</h4>
        <p>
          { description} 
        </p>
      </div>
    );
  }
}
