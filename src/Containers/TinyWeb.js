import React, { Component } from 'react';
import { connect } from 'react-redux';
import TinyHeader from '../Components/TinyHeader';

const mapStateToProps = state => {
  return {
    alignment: state.alignment,
    link1: state.link1,
    link2: state.link2,
    link3: state.link3,
    link4: state.link4,
    includeLogo: state.includeLogo,
    includeHeaderImage: state.includeHeaderImage,
  }
}

class TinyWeb extends Component {
  render() {
    return(
      <div className="mini-web-wrapper">
        <TinyHeader {...this.props}/>
        <div>Main</div>
        <div>Footer</div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(TinyWeb);