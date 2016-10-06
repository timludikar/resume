import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './Header.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header role="banner">
        <h1><b>Tim</b> Ludikar</h1>
        <span className="zigzag"/>
      </header>

    );
  }
}

export default CSSModules(App, styles);
