import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navAlign, addLink, toggleLogo, toggleHeaderImage }from '../actions';
import HeaderControls from '../Components/HeaderControls';
import MainControls from '../Components/MainControls';
import FooterControls from '../Components/FooterControls';

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

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleAlign: (e) => dispatch(navAlign(e.target.value)),
    onAddLink: (e) => dispatch(addLink(e.target.value, e.target.name)),
    ontoggleLogo: (e) => dispatch(toggleLogo(e.target.checked)),
    ontoggleHeaderImage: (e) => dispatch(toggleHeaderImage(e.target.checked))
  }
}

class ControlPanel extends Component {
  render() {
    return(
      <div className="mod-wrapper">
        <HeaderControls  {...this.props}/>
        <MainControls />
        <FooterControls />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);