import React, { Component } from 'react';
import Picture from '../Picture';
import Links from '../Links';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className="layout">
          <Picture />
          <div className="title">
            <h1>David Goodwin</h1>
            <h3>Software Developer</h3>
          </div>
          <Links />

        </div>
      </div>
    );
  }
}
