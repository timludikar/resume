import React from 'react';
import CSSModules from 'react-css-modules';

import Header from '../../components/header.js';
import List from '../../components/list.js';
import Section from '../../components/section.js';

import styles from './Skills.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Section>
        <Header text="Summary of personal skills" type="h3" caps />
        <List items={["Organized,  exible, and dependable.", "Excellent problem solver and programmer.",
                    "Works well as an individual and in a team.", "Self-motivated and pro-active.",
                    "Great in high-pressure situations.", "Well spoken.", "Self-starter."
                  ]} />
      </Section>
    );
  }
}

export default CSSModules(App, styles);
