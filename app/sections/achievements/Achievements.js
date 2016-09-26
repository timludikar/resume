import React from 'react';
import CSSModules from 'react-css-modules';

import Header from '../../components/header';
import List from '../../components/list';
import Article from '../../components/article';
import Section from '../../components/section';

import styles from './Achievements.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Section>
        <Header type="h2" caps>Achievements</Header>
        <Article>
          <Header type="h3" caps>Full stack Toronto</Header>
          <List items={["Co-founder of Toronto’s first Full Stack, non-profit, developer community.",
                      "Hosted the  rst Full Stack Conference in November 2014 in Toronto.",
                      "On track to doubling sponsorship contributions for 2015."]} />
        </Article>
      </Section>
    );
  }
}

export default CSSModules(App, styles);
