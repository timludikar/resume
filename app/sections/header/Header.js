import React from 'react';
import CSSModules from 'react-css-modules';

import { Header } from 'component-library';

import styles from './Header.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header role="banner">
        <Header type="h1" className={["zigzag"]}><b>Tim</b> Ludikar</Header>
      </header>

    );
  }
}

export default CSSModules(App, styles);
