import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Education.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <h3>EDUCATION</h3>
        <p>Bachelors Degree in Engineering Systems and Computing (BEng) 2003 - 2009 University of Guelph, Guelph, Ontario</p>
      </section>
    );
  }
}

export default CSSModules(App, styles);
