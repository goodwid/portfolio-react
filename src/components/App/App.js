import React, { PureComponent } from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import styles from './App.css';
import { ProjectsContext } from '../../contexts/projects';
import { getAll } from '../../services/api';

export default class App extends PureComponent {
  constructor() {
    super();
    this.aboutToggle = this.aboutToggle.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.state = {
      theme: 'dark',
      about: true,
      data: []
    };
  }

  aboutToggle() {
    const about = !this.state.about;
    this.setState({ about });
  }
  
  buttonHandler() {
    const theme = this.state.theme === 'light' ? 'dark' : 'light';
    this.setState({ theme });
  }

  componentDidMount() {
    getAll()
      .then(data => this.setState({ data }));
  }

  render() {
    const { theme, data, about }  = this.state;

    return (
      <main className={`${styles.app} ${styles[theme]}`} > 
        <Header toggle={this.aboutToggle}/>
        <ProjectsContext.Provider value={data}>
          <Main about={about}/>
        </ProjectsContext.Provider>
        <Footer buttonHandler={this.buttonHandler} buttonText={`Select the ${theme === 'light' ? 'dark' : 'light'} theme`}/>
      </main> 
    );
  }
}