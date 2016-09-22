import React from 'react';
import CSSModules from 'react-css-modules';

import Header from '../../components/header.js';
import List from '../../components/list.js';
import Aside from '../../components/aside.js';
import Article from '../../components/article.js';
import Section from '../../components/section.js';

import styles from './Experience.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Section>
        <Header text="Employment Experience" type="h3" caps />
        <Article>
          <Aside>
            <Header text="Nurun Inc" type="h4" caps />
            <p>2014 - Present Toronto, Canada</p>
          </Aside>
          <Header text="Senior Interface developer" type="h4" />
          <List items={["Senior full stack developer on the Walmart Canada - Search and Browse project.",
                      "Architect of performance-driven front-end development.",
                      "Interface between front-end and back-end development teams."]} />
        </Article>
      </Section>
    );
  }
}

export default CSSModules(App, styles);
