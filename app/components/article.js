import React from 'react';
import CSSModules from 'react-css-modules';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <article>{this.props.children}</article>;
  }
}

export default App;
