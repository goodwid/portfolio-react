import React, { PureComponent } from 'react';
import styles from './Project.css';

export default class Project extends PureComponent {

  render() {
    
    return (
      <div className={styles.project}>
        <h3>{this.props.project.name}</h3>
      </div>
    );
  }
}
