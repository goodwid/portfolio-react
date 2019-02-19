import React, { Component } from 'react';
import styles from './Main.css';
import Selector from '../Selector';
import Display from '../Display';

export default class Main extends Component {

  state = {
    project: {}
  };

  handleSelection = (project) => {
    this.props.handleAboutState(false);
    this.setState({ project });
  };

  render() {
    const { project } = this.state;
    const props = this.props;
    
    return (
      <div className={styles.main}>
        <div className='selector'>
          <Selector handleSelection={this.handleSelection} />  
        </div>
        <div className='display'>
          <Display {...props} project={project} />
        </div>
      </div>
    );
  }
}
