import React from 'react';
import CSSModules from 'react-css-modules';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>{this.props.children}</p>;
  }
}

export default App;
