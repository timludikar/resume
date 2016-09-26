import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './paragraph.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let large = this.props.fontSize ? 'large' : '';
    let centered = this.props.centered ? 'center' : '';
    let justified = this.props.justified ? 'justified' : '';
    let cssClasses = `${large} ${centered} ${justified}`;
    return <p className={cssClasses}>{this.props.children}</p>;
  }
}

export default CSSModules(App, styles);
