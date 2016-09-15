import React from 'react';
import CSSModules from 'react-css-modules';

import Header from '../../components/header.js';

import styles from './Skills.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <Header text="Summary of personal skills" type="h3" caps />
        <ul>
          <li>Organized,  exible, and dependable.</li>
          <li>Excellent problem solver and programmer.</li>
          <li>Works well as an individual and in a team.</li>
          <li>Self-motivated and pro-active.</li>
          <li>Great in high-pressure situations.</li>
          <li>Well spoken.</li>
          <li>Self-starter.</li>
        </ul>
      </section>
    );
  }
}

export default CSSModules(App, styles);
