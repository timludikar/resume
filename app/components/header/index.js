import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './header.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let caps = this.props.caps ? 'caps' : '';
    let centered = this.props.centered ? 'center' : '';
    let left = this.props.left ? 'left' : '';
    let right = this.props.right ? 'right' : '';
    let bolded = this.props.bold ? 'bold' : '';
    let cssClasses = `${caps} ${left} ${centered} ${right} ${bolded}`;

    return React.createElement(this.props.type, { className: cssClasses }, this.props.children );
  }
}

export default CSSModules(App, styles);
