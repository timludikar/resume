import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.styl';
import zigzag from './components/header/zigzag.styl';

import Header from './components/header/Header.js';
import Intro from './components/intro/Intro.js';
import Achievements from './components/achievements/Achievements.js';
import Skills from './components/skills/Skills.js';
import Education from './components/education/Education.js';
import Experience from './components/experience/Experience.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div id="wrapper">
      <Header />
      <Intro />
      <Achievements />
      <Skills />
      <Education />
      <Experience />
      </div>
    );
  }
}

export default CSSModules(App, styles);
