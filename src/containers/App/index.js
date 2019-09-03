import React, { Component } from 'react';
import './index.css';


const Release = props => {

  return (
      <div className="release">
          {
              props.release
          }
      </div>
  )
}

function Header() {
  return (
    <div className="Header">
        <div id="logo">logogoeshere</div>
        <div id="links">other links</div>
    </div>
  );
}

class App extends Component {

  render () {
    return (
      <div className="App">
        <div className="header"><Header /></div>
      </div>
    )
  }
}

export default App;
