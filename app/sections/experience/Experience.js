import React from 'react';
import CSSModules from 'react-css-modules';

import Header from '../../components/header';
import List from '../../components/list';
import Aside from '../../components/aside';
import Article from '../../components/article';
import Section from '../../components/section';
import Paragraph from '../../components/paragraph';

import styles from './Experience.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Section id="experience">
        <Header type="h2" caps left bold>Employment Experience</Header>
        <Article>
          <Aside>
            <Header type="h3" caps left>Nurun Inc</Header>
            <Paragraph>2014 - Present Toronto, Canada</Paragraph>
          </Aside>
          <div>
          <Header type="h4" caps>Senior Interface developer</Header>
          <List items={["Senior full stack developer on the Walmart Canada - Search and Browse project.",
                      "Architect of performance-driven front-end development.",
                      "Interface between front-end and back-end development teams."]} />
          </div>
        </Article>
      </Section>
    );
  }
}

export default CSSModules(App, styles);
