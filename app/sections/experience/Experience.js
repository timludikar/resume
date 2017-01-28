import React from 'react';
import CSSModules from 'react-css-modules';
import { Article, Aside, Header, Paragraph, UnorderedList, ListItem } from 'component-library';

import Section from '../../components/section';

import styles from './Experience.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Section id="experience">
        <Header type="h2" caps left bold zigzag>Employment Experience</Header>
        <Article>
          <Aside>
            <Header type="h3" caps left>Nurun Inc</Header>
            <Paragraph>2014 - Present Toronto, Canada</Paragraph>
          </Aside>
          <div>
          <Header type="h4" caps>Senior Interface developer</Header>
          <UnorderedList>
            <ListItem>Senior full stack developer on the Walmart Canada - Search and Browse project.</ListItem>
            <ListItem>Architect of performance-driven front-end development.</ListItem>
            <ListItem>Interface between front-end and back-end development teams.</ListItem>
          </UnorderedList>
          </div>
        </Article>
      </Section>
    );
  }
}

export default CSSModules(App, styles);
