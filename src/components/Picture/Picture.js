import React, { PureComponent } from 'react';
import avatar from '../../assets/avatar.jpg';
import styles from './Picture.css';

export default class Picture extends PureComponent {
  render() {
    return (<img src={avatar} />);
  }
}
