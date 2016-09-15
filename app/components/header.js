import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './header.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let caps = this.props.caps ? 'allCaps' : '';
    let cssClasses = `${caps}`;

    return React.createElement(this.props.type, { className: cssClasses }, this.props.text );
  }
}

export default CSSModules(App, styles);
