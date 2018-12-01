import React, { Component } from 'react';
import { ProjectsContext } from '../../contexts/projects';
import Project from '../Project';

import styles from './Selector.css';

export default class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  

  render() {
    const selector = this.props.handleSelection;
    
    return (
      <div className={styles.selector}>
        <ul>
          <ProjectsContext.Consumer>
            { value => {
              const results = value.map(el => (<div key={el._id} onClick={() => selector(el)}><Project p={el} /></div>));
              return results;
            }}
          </ProjectsContext.Consumer>
        </ul>
      </div>
    );
  }
}
