import React from 'react';
import CSSModules from 'react-css-modules';

import { Header, UnorderedList, ListItem } from 'component-library';

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
        <UnorderedList>
          <ListItem>Organized,  exible, and dependable.", "Excellent problem solver and programmer.</ListItem>
          <ListItem>Works well as an individual and in a team.</ListItem>
          <ListItem>Self-motivated and pro-active.</ListItem>
          <ListItem>Great in high-pressure situations.</ListItem>
          <ListItem>Well spoken.</ListItem>
          <ListItem>Self-starter.</ListItem>
        </UnorderedList>
      </Section>
    );
  }
}

export default CSSModules(App, styles);
