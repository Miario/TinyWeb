import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderControls from '../Components/HeaderControls';
import MainControls from '../Components/MainControls';
import FooterControls from '../Components/FooterControls';
import { 
  navAlign, 
  addLink, 
  toggleLogo, 
  toggleHeaderImage,
  addRows,
  addColumns,
  toggleCopyright,
  addCopyright,
  alignFooter,
  addSocial,
} from '../actions';

const mapStateToProps = state => {
  return {
    headerConfig: state.headerConfig,
    footerConfig: state.footerConfig,
    mainConfig: state.mainConfig
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleAlign: (e) => dispatch(navAlign(e.target.value)),
    onAddLink: (e) => dispatch(addLink(e.target.value, e.target.name)),
    ontoggleLogo: (e) => dispatch(toggleLogo(e.target.checked)),
    ontoggleHeaderImage: (e) => dispatch(toggleHeaderImage(e.target.checked)),
    ontoggleCopyright: (e) => dispatch(toggleCopyright(e.target.checked)),
    onAddCopyright: (e) => dispatch(addCopyright(e.target.value)),
    onAlignment: (e) => dispatch(alignFooter(e.target.value, e.target.name)),
    ontoggleSocial: (e) => dispatch(addSocial(e.target.checked, e.target.name)),
    onHandleRows: (e) => dispatch(addRows(e.target.value, e.target.id)),
    onHandleColumns: (e) => dispatch(addColumns(e.target.value, e.target.id, e.target.name))
  }
}

class ControlPanel extends Component {
  render() {
    return(
      <div className="config-wrapper">
        <HeaderControls  
          {...this.props.headerConfig} 
          onHandleAlign={this.props.onHandleAlign} 
          onAddLink={this.props.onAddLink}
          ontoggleLogo={this.props.ontoggleLogo}
          ontoggleHeaderImage={this.props.ontoggleHeaderImage}
        />
        <MainControls
          {...this.props.mainConfig}
          onHandleRows={this.props.onHandleRows}
          onHandleColumns={this.props.onHandleColumns}
         />
        <FooterControls 
          {...this.props.footerConfig}
          ontoggleCopyright={this.props.ontoggleCopyright}
          onAddCopyright={this.props.onAddCopyright}
          onAlignment={this.props.onAlignment}
          ontoggleSocial={this.props.ontoggleSocial}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);