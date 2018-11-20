import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.css';


export default class Footer extends PureComponent {
  static propTypes = {
    buttonHandler: PropTypes.function,
    buttonText: PropTypes.string
  };

  render() { 
    const { buttonText, buttonHandler } = this.props;

    return (
      <div className={styles.footer}>
        Theme switcher: <button onClick={buttonHandler}>{buttonText}</button>
      </div>
    );
  }
}
