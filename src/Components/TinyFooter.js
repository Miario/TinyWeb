import React, { Component } from 'react';

class TinyFooter extends Component {
    render() {
        const { addCopyright } = this.props;

        // let align;
        // if(alignment === 'right') {
        //     align = 'align-right';
        // } else if(alignment === 'left') {
        //     align = 'align-left';
        // } else {
        //     align = 'align-center';
        // }
        
        let copyright;
        if(addCopyright) {
          copyright = <div>&copy copyright</div>
        }

        return(
            <div className="">
                {copyright}
            </div>
        )
    }
}

export default TinyFooter;