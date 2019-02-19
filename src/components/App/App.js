import React, { PureComponent } from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import styles from './App.css';
import ProjectsContext from '../../contexts/projects';

import { getAll } from '../../services/api';

export default class App extends PureComponent {

  state = {
    theme: 'dark',
    showAbout: false,
    data: []
  };

  aboutToggle = () => {
    const showAbout = !this.state.showAbout;
    this.handleAboutState(showAbout);
  };

  handleAboutState = (showAbout) => {
    this.setState({ showAbout });
  };
  
  buttonHandler = () => {
    const theme = this.state.theme === 'light' ? 'dark' : 'light';
    this.setState({ theme });
  };

  async componentDidMount() {
    const data = await getAll();
    this.setState({ data });
  }

  render() {
    const { theme, data, showAbout }  = this.state;

    return (
      <main className={`${styles.app} ${styles[theme]}`} > 
        <Header toggle={this.aboutToggle}/>
        <ProjectsContext.Provider value={data}>
          <Main showAbout={showAbout} handleAboutState={this.handleAboutState}/>
        </ProjectsContext.Provider>
        <Footer buttonHandler={this.buttonHandler} buttonText={`Select the ${theme === 'light' ? 'dark' : 'light'} theme`}/>
      </main>
    );
  }
}