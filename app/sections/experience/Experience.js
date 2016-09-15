import React from 'react';
import CSSModules from 'react-css-modules';

import Header from '../../components/header.js';
import List from '../../components/list.js';

import styles from './Experience.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <Header text="Employment Experience" type="h3" caps />
        <article>
          <aside>
            <Header text="Nurun Inc" type="h4" caps />
            <h4>Nurun INC</h4>
            <p>2014 - Present Toronto, Canada</p>
          </aside>
          <Header text="Senior Interface developer" type="h4" />
          <List items={["Senior full stack developer on the Walmart Canada - Search and Browse project.",
                      "Architect of performance-driven front-end development.",
                      "Interface between front-end and back-end development teams."]} />
        </article>
      </section>
    );
  }
}

export default CSSModules(App, styles);
