import React, { Component } from 'react';
import styles from './App.css';
import Header from '../Header';
import Main from '../Main';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    
  }

  render() {
  
    return (
      <main className="{styles.app}">
        <Header />
        <Main />
      </main> 
    );
  }
}