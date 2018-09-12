import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      alignment: state.alignment
    };
  };

class TinyNav extends Component {
    render() {
        const { alignment } = this.props;

        let align;
        if(alignment === 'right') {
            align = 'align-right';
        } else if(alignment === 'left') {
            align = 'align-left';
        } else {
            align = 'align-center';
        }
        console.log(align)
        return(
            <div className="">
                <div className={align}>Nav</div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(TinyNav);