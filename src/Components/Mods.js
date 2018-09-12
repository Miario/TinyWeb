import React, { Component } from 'react';
import NavMod from './NavMod';

class Mods extends Component {
  render() {
    return(
      <div className="mod-wrapper">
        <NavMod />
        <div>Header Image</div>
        <div>Main</div>
        <div>Footer</div>
      </div>
    )
  }
}

export default Mods;