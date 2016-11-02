import React from 'react';
import CSSModules from 'react-css-modules';

import Header from '../../components/header';
import List from '../../components/list';
import Section from '../../components/section';

import styles from './Skills.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Section id="skills" col2='true'>
        <Header type="h2" caps bold zigzag>Summary of personal skills</Header>
        <List items={["Organized,  exible, and dependable.", "Excellent problem solver and programmer.",
                    "Works well as an individual and in a team.", "Self-motivated and pro-active.",
                    "Great in high-pressure situations.", "Well spoken.", "Self-starter."
                  ]} />
      </Section>
    );
  }
}

export default CSSModules(App, styles);
