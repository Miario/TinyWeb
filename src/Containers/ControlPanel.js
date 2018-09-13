import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navAlign, addLink, toggleLogo, toggleHeaderImage, toggleCopyright }from '../actions';
import HeaderControls from '../Components/HeaderControls';
import MainControls from '../Components/MainControls';
import FooterControls from '../Components/FooterControls';

const mapStateToProps = state => {
  return {
    headerConfig: state.headerConfig,
    footerConfig: state.footerConfig
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleAlign: (e) => dispatch(navAlign(e.target.value)),
    onAddLink: (e) => dispatch(addLink(e.target.value, e.target.name)),
    ontoggleLogo: (e) => dispatch(toggleLogo(e.target.checked)),
    ontoggleHeaderImage: (e) => dispatch(toggleHeaderImage(e.target.checked)),
    ontoggleCopyright: (e) => dispatch(toggleCopyright(e.target.checked))
  }
}

class ControlPanel extends Component {
  render() {
    return(
      <div className="mod-wrapper">
        <HeaderControls  
          {...this.props.headerConfig} 
          onHandleAlign={this.props.onHandleAlign} 
          onAddLink={this.props.onAddLink}
          ontoggleLogo={this.props.ontoggleLogo}
          ontoggleHeaderImage={this.props.ontoggleHeaderImage}
        />
        <MainControls />
        <FooterControls 
          {...this.props.footerConfig}
          ontoggleCopyright={this.props.ontoggleCopyright}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);