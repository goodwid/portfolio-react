import React, { PureComponent } from 'react';
import ProjectsContext from '../../contexts/projects';
import Project from '../Project';
import PropTypes from 'prop-types';

import styles from './Selector.css';

export default class Selector extends PureComponent {

  state = {
    selected: ''
  };

  static propTypes = {
    handleSelection: PropTypes.function
  };

  static contextType = ProjectsContext;

  handleClick = (project) => {
    this.setState({ selected: project._id });
    this.props.handleSelection(project);
  };

  render() {
    const { handleClick, context, state: { selected } } = this;

    return (
      <div className={styles.selector}>
        <ul>
          {context.map(el => {
            return (
              <div 
                className={el._id === selected ? 'selected' : ''}
                key={el._id} 
                onClick={() => handleClick(el)}>
                <Project project={el} />
              </div>);
          })}
        </ul>
      </div>
    );
  }
}
