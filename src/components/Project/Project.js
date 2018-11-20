import React, { Component } from 'react';
import styles from './Project.css';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const project = this.props.p;
    const { name, repo, url, } = project
    
    return (
      <div className={styles.project}>
        <h3>{name}</h3>
      </div>
    );
  }
}
