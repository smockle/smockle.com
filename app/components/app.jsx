/* @flow */
import normalize from 'normalize.css';
import styles from './app.css';
import React, {Component} from 'react';
import fontloader from '../../node_modules/fontloader/fontloader';
import {Router, Route, Link} from 'react-router';

class App extends Component {
  componentDidMount() {
    document.fonts.load('1em Effra')
  	.then(function() {
      document.body.classList.add(styles['sans-loaded']);
  	});
    document.fonts.load('1em Freight Text Pro')
    .then(function() {
      document.body.classList.add(styles['serif-loaded']);
    });
    document.fonts.load('1em Source Code Pro')
    .then(function() {
      document.body.classList.add(styles['monospace-loaded']);
    });
  }

  render () {
    return (
      <div className={styles.app}>
        {this.props.children}
      </div>
    )
  }
}
export default App;
