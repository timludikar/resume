import React from 'react';
import CSSModules from 'react-css-modules';

// import styles from './header.styl';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let items = [];
    this.props.items.map(item => {
      items.push(<li>{item}</li>)
    });
    return <ul>{items}</ul>;
  }
}

export default App;
// export default CSSModules(App, styles);
