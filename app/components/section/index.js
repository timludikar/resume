import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './section.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let col2 = this.props.col2 ? 'col-2' : '';
    let cssClasses = `${col2}`;
    return <section id={this.props.id} className={cssClasses}>{this.props.children}</section>;
  }
}

export default CSSModules(App, styles);
