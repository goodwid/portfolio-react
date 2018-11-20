import React, { Component } from 'react';
import Picture from '../Picture';
import Links from '../Links';
import styles from './Header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.header}>
        <div className="layout">
          <Picture />
          <div className="title" onClick={this.props.toggle}>
            <h1>David Goodwin</h1>
            <h3>Full Stack Software Developer</h3>
          </div>
          <Links />

        </div>
      </div>
    );
  }
}
