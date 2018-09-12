import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      alignment: state.alignment,
      link1: state.link1,
      link2: state.link2,
      link3: state.link3,
      link4: state.link4
    };
  };
class TinyNav extends Component {
    render() {
        const { alignment, link1, link2, link3, link4 } = this.props;

        let align;
        if(alignment === 'right') {
            align = 'align-right';
        } else if(alignment === 'left') {
            align = 'align-left';
        } else {
            align = 'align-center';
        }
        
        let links = `${link1} ${link2} ${link3} ${link4}`

        return(
            <div className="">
                <div className={align}>{links}</div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(TinyNav);