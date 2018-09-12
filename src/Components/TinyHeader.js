import React, { Component } from 'react';

class TinyHeader extends Component {
    render() {
        const { alignment, link1, link2, link3, link4, includeLogo, includeHeaderImage } = this.props;

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

        let headerImage;
        if(includeHeaderImage) {
            headerImage = <img src="https://via.placeholder.com/700x200" alt="placeholder"></img>
        }

        return(
            <div className="">
                {logo}
                <div className={align}>{links}</div>
                {headerImage}
            </div>
        )
    }
}

export default TinyHeader;