import React from 'react';
import CSSModules from 'react-css-modules';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <aside>{this.props.children}</aside>;
  }
}

export default App;
