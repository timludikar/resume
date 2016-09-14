import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Intro.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <h2>Technical architect</h2>
        <p>Holds a unique mix of high-level systems engineering and hands-on experience managing engineering teams, for the development and delivery of  software and hardware based products.</p>
        <p>A forward thinking services team manager who played a key role in the development of one of Deloitte’s Canadian Tech- nology Fast 50 Company’s by using 5+ years of software engineering and project management experience. An impressive  problem solver with strong presentation skills, and a proven track record of dependable technical leadership and
 management.</p>
        <h3>Additional competencies include:</h3>
        <ul>
          <li>International project experience as a chairman of a global engineering committee.</li>
          <li>Excels in a fast-paced and  exible work environments.</li>
          <li>Ability to wear many hats in a single organization – from a problem-solving engineer to  a customer-facing marketer.</li>
          <li>Can manage simultaneous time-sensitive projects with numerous stakeholders.</li>
        </ul>
      </section>
    );
  }
}

export default CSSModules(App, styles);
