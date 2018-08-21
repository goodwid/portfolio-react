import React, { Component } from 'react';
import avatar from '../../assets/avatar.jpg';
import styles from './Picture.css';

export default class Picture extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <div>
        <img src={avatar} />

      </div>
    );
  }
}
