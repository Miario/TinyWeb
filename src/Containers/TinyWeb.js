import React, { Component } from 'react';
import { connect } from 'react-redux';
import TinyHeader from '../Components/TinyHeader';
import TinyMain from '../Components/TinyMain';
import TinyFooter from '../Components/TinyFooter';

const mapStateToProps = state => {
  return {
    headerConfig: state.headerConfig,
    mainConfig: state.mainConfig,
    footerConfig: state.footerConfig
  }
}

class TinyWeb extends Component {
  render() {
    return(
      <div className="tiny-web-wrapper">
        <TinyHeader {...this.props.headerConfig}/>
        <TinyMain {...this.props.mainConfig}/>
        <TinyFooter {...this.props.footerConfig}/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(TinyWeb);