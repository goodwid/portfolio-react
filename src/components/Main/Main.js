import React, { Component } from 'react';
import styles from './Main.css';
import Selector from '../Selector';
import Display from '../Display';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(project) {
    this.setState({ project });
  }

  render() {
    const { project } = this.state;
    
    return (
      <div className={styles.main}>
        <div className='selector'>
          <Selector handleSelection={this.handleSelection} />  
        </div>
        <div className='display'>
          <Display about={this.props.about} project={project} />
        </div>
      </div>
    );
  }
}
