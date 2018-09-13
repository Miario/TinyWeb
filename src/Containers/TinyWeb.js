import React, { Component } from 'react';
import { connect } from 'react-redux';
import TinyHeader from '../Components/TinyHeader';
import TinyFooter from '../Components/TinyFooter';

const mapStateToProps = state => {
  return {
    headerConfig: state.headerConfig,
    footerConfig: state.footerConfig
  }
}

class TinyWeb extends Component {
  render() {
    return(
      <div className="mini-web-wrapper">
        <TinyHeader {...this.props.headerConfig}/>
        <div>Main</div>
        <TinyFooter {...this.props.footerConfig}/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(TinyWeb);