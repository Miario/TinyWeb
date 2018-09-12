import React, { Component } from 'react';
import TinyWeb from './Containers/TinyWeb';
import ControlPanel from './Containers/ControlPanel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container flex-row">
        <ControlPanel />
        <TinyWeb />
      </div>
    );
  }
}

export default App;
