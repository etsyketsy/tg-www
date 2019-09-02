import React, { Component } from 'react';
import './index.css';
import Header from '../../components/header';
import ReleaseGrid from './ReleaseGrid/index.js'

class App extends Component {

  render () {
    return (
      <div className="App">
        <div className="header"><Header /></div>
        <div className="ReleaseGrid"><ReleaseGrid /></div>
      </div>
    )
  }
}

export default App;
