import React, { Component } from 'react';
import MiniWeb from './Components/MiniWeb';
import Mods from './Components/Mods';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container flex-row">
        <Mods />
        <MiniWeb />
      </div>
    );
  }
}

export default App;
