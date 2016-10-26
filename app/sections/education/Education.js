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
      <Section id="education" col2='true'>
        <Header type="h2" caps bold>Education</Header>
        <Paragraph>Bachelors Degree in Engineering Systems and Computing (BEng) 2003 - 2009 University of Guelph, Guelph, Ontario</Paragraph>
      </Section>
    );
  }
}

export default CSSModules(App, styles);
