import React from 'react';
import CSSModules from 'react-css-modules';

import Header from '../../components/header';
import Section from '../../components/section';
import Paragraph from '../../components/paragraph'


import styles from './Education.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Section>
        <Header text="Education" type="h3" caps />
        <Paragraph content={["Bachelors Degree in Engineering Systems and Computing (BEng) 2003 - 2009 University of Guelph, Guelph, Ontario"]} />
      </Section>
    );
  }
}

export default CSSModules(App, styles);
