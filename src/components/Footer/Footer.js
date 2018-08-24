import React, { Component } from 'react';
import styles from './Footer.css';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }



  render() { 
    const { buttonText, buttonHandler } = this.props;
    return (
      <div className={styles.footer}>
        <button onClick={buttonHandler}>{buttonText}</button>
      </div>
    );
  }
}
