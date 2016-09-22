import React from 'react';
import CSSModules from 'react-css-modules';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let content = this.props.content;
    return <p>{content}</p>;
  }
}

export default App;
