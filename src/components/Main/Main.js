import React, { Component } from 'react';
import styles from './Main.css';
import Selector from '../Selector';
import Display from '../Display';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    
    return (
      <div className={styles.main}>
        <div className='selector'>
          <Selector />  
        </div>
        <div className='display'>
          <Display about={this.props.about}/>
        </div>
      </div>
    );
  }
}
