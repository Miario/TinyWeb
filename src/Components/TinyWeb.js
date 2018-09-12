import React, { Component } from 'react';
import TinyNav from './TinyNav';

class TinyWeb extends Component {
  render() {
    return(
      <div className="mini-web-wrapper">
        <TinyNav />
        <div>Header Image</div>
        <div>Main</div>
        <div>Footer</div>
      </div>
    )
  }
}

export default TinyWeb;