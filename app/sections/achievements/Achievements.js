import React from 'react';
import CSSModules from 'react-css-modules';

import { Header, Article, UnorderedList, ListItem } from 'component-library';

import Section from '../../components/section';

import styles from './Achievements.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Section>
        <Header type="h2" caps bold left zigzag>Achievements</Header>
        <Article>
          <Header type="h3" caps left>Full stack Toronto</Header>
          <UnorderedList>
            <ListItem>Co-founder of Toronto’s first Full Stack, non-profit, developer community.</ListItem>
            <ListItem>Hosted the  rst Full Stack Conference in November 2014 in Toronto.</ListItem>
            <ListItem>On track to doubling sponsorship contributions for 2015.</ListItem>
          </UnorderedList>
        </Article>
      </Section>
    );
  }
}

export default CSSModules(App, styles);
