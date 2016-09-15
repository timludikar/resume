import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.styl';
import zigzag from './sections/header/zigzag.styl';

import Header from './sections/header/Header.js';
import Intro from './sections/intro/Intro.js';
import Achievements from './sections/achievements/Achievements.js';
import Skills from './sections/skills/Skills.js';
import Education from './sections/education/Education.js';
import Experience from './sections/experience/Experience.js';

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
