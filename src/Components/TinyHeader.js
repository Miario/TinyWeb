import React, { Component } from 'react';

class TinyHeader extends Component {
    render() {
        const { alignment, link1, link2, link3, link4, includeLogo, includeHeaderImage } = this.props;

        let classAlign;
        if(alignment === 'right') {
            classAlign = 'align-right';
        } else if(alignment === 'left') {
            classAlign = 'align-left';
        } else {
            classAlign = 'align-center';
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
            <header className="">
                <nav> 
                    {logo}
                    <div className={classAlign}>{links}</div>
                </nav>
                {headerImage}
            </header>
        )
    }
}

export default TinyHeader;