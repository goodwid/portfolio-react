import React, { PureComponent } from 'react';
import avatar from '../../assets/avatar.jpg';
import './Picture.css';

export default class Picture extends PureComponent {
  render() {
    return (<img src={avatar} />);
  }
}
