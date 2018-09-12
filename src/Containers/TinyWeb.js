import React, { Component } from 'react';
import { connect } from 'react-redux';
import TinyNav from '../Components/TinyNav';

const mapStateToProps = state => {
  return {
    alignment: state.alignment,
    link1: state.link1,
    link2: state.link2,
    link3: state.link3,
    link4: state.link4,
    includeLogo: state.includeLogo,
  }
}

class TinyWeb extends Component {
  render() {
    return(
      <div className="mini-web-wrapper">
        <TinyNav {...this.props}/>
        <div>Header Image</div>
        <div>Main</div>
        <div>Footer</div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(TinyWeb);