import React, { Component } from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import styles from './App.css';
import light from './light.css';
import dark from './dark.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: light,
      buttonText: 'light',
      about: true
    };
    this.buttonHandler = this.buttonHandler.bind(this);
    this.aboutToggle = this.aboutToggle.bind(this);
  }
  aboutToggle() {
    this.setState({about: !this.state.about});
  }
  buttonHandler() {
    const buttonText = this.state.buttonText === 'light' ? 'dark' : 'light';
    const theme = this.state.theme === light ? dark : light;
    this.setState({ theme, buttonText });
  }

  render() {
    const styles = this.state.theme;
    const buttonText = this.state.buttonText;
    return (
      <main className={styles.app}> 
        <Header toggle={this.aboutToggle}/>
        <Main about={this.state.about}/>
        <Footer buttonHandler={this.buttonHandler} buttonText={buttonText}/>
      </main> 

    );
  }
}