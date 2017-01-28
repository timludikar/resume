import React from 'react';
import CSSModules from 'react-css-modules';

import { Header, Paragraph, UnorderedList, ListItem } from 'component-library';

import Section from '../../components/section';

import styles from './Intro.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Section>
        <Header type="h2" className={["caps", "centered", "bold"]}>Technical architect</Header>
        <Paragraph fontSize="large" className={["centered"]}>Holds a unique mix of high-level systems engineering and hands-on experience managing engineering teams, for the development and delivery of  software and hardware based products.</Paragraph>
        <Paragraph justified>A forward thinking services team manager who played a key role in the development of one of Deloitte’s Canadian Tech- nology Fast 50 Company’s by using 5+ years of software engineering and project management experience. An impressive  problem solver with strong presentation skills, and a proven track record of dependable technical leadership and management.</Paragraph>
        <Header type="h3" caps centered bold>Additional competencies include:</Header>
        <UnorderedList>
          <ListItem>International project experience as a chairman of a global engineering committee.</ListItem>
          <ListItem>Excels in a fast-paced and  exible work environments.</ListItem>
          <ListItem>Ability to wear many hats in a single organization – from a problem-solving engineer to  a customer-facing marketer.</ListItem>
          <ListItem>Can manage simultaneous time-sensitive projects with numerous stakeholders.</ListItem>
        </UnorderedList>
      </Section>
    );
  }
}

export default CSSModules(App, styles);
