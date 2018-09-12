import React, { Component } from 'react';

class TinyNav extends Component {
    render() {
        const { alignment, link1, link2, link3, link4, includeLogo } = this.props;

        let align;
        if(alignment === 'right') {
            align = 'align-right';
        } else if(alignment === 'left') {
            align = 'align-left';
        } else {
            align = 'align-center';
        }
        
        let logo;
        if(includeLogo) {
            logo = <div className="logo">LOGO</div>
        }

        let links = `${link1} ${link2} ${link3} ${link4}`;



        return(
            <div className="">
                {logo}
                <div className={align}>{links}</div>
            </div>
        )
    }
}

export default TinyNav;