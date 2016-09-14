import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Experience.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <h3>EMPLOYMENT EXPERIENCE</h3>
        <article>
          <aside>
            <h4>Nurun INC</h4>
            <p>2014 - Present Toronto, Canada</p>
          </aside>
          <h4>Senior Interface developer</h4>
          <ul>
            <li>Senior full stack developer on the Walmart Canada - Search and Browse project.</li>
            <li>Architect of performance-driven front-end development.</li>
            <li>Interface between front-end and back-end development teams.</li>
          </ul>
        </article>
      </section>
    );
  }
}

export default CSSModules(App, styles);
