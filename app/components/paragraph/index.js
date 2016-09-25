import React from 'react';
import CSSModules from 'react-css-modules';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let content = [];
    this.props.content.map(text => {
      content.push(<p>{text}</p>)
    });
    return <div>{content}</div>;
  }
}

export default App;
