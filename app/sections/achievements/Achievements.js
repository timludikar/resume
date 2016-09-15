import React from 'react';
import CSSModules from 'react-css-modules';

import Header from '../../components/header.js';

import styles from './Achievements.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <Header text="Achievements" type="h2" caps />
        <article>
          <Header text="Full stack Toronto" type="h3" caps />
          <ul>
            <li>Co-founder of Toronto’s  rst Full Stack, non-pro t, developer community.</li>
            <li>Hosted the  rst Full Stack Conference in November 2014 in Toronto.</li>
            <li>On track to doubling sponsorship contributions for 2015.</li>
          </ul>
        </article>
      </section>
    );
  }
}

export default CSSModules(App, styles);
