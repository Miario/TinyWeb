import React, { Component } from 'react';
// import { connect } from 'react-redux';
import TinyWeb from './Components/TinyWeb';
import Mods from './Components/Mods';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container flex-row">
        <Mods />
        <TinyWeb />
      </div>
    );
  }
}

export default App;
