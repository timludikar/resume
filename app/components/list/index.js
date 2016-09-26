import React from 'react';
import CSSModules from 'react-css-modules';

class ListItem extends React.Component {
  render() {
    return <li>{this.props.text}</li>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <ul>
        {
          this.props.items.map((item, index) => {
            return <ListItem key={index} text={item}/>
          })
        }
      </ul>
    );
  }
}

export default App;
// export default CSSModules(App, styles);
