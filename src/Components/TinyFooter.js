import React, { Component } from 'react';

class TinyFooter extends Component {
    render() {
        const { 
            includeCopyright, 
            copyrightText, 
            copyrightAlignment, 
            socialAlignment, 
            addTwitter, 
            addFacebook, 
            addGithub, 
            addEmail 
        } = this.props;

        let copyrightAlign;
        if(copyrightAlignment === 'right') {
            copyrightAlign = 'align-right';
        } else if(copyrightAlignment === 'left') {
            copyrightAlign = 'align-left';
        } else {
            copyrightAlign = 'align-center';
        }

        let copyrightFooter;
        if(includeCopyright) {
            copyrightFooter = <div className="copyright"> &copy; {copyrightText} </div>
        }

        let twitter;
        if(addTwitter) {
          twitter = <div>Twitter</div>
        }
        let facebook;
        if(addFacebook) {
          facebook = <div>Facebook</div>
        }
        let github;
        if(addGithub) {
          github = <div>GitHub</div>
        }
        let email;
        if(addEmail) {
          email = <div>Email</div>
        }

        let socialAlign;
        if(socialAlignment === 'right') {
            socialAlign = 'align-right';
        } else if(socialAlignment === 'left') {
            socialAlign = 'align-left';
        } else {
            socialAlign = 'align-center';
        }

        return(
            <footer className="">
                <div className={copyrightAlign}>{copyrightFooter}</div>
                <div className={socialAlign}>
                    {twitter}
                    {facebook}
                    {github}
                    {email}
                </div>
            </footer>
        )
    }
}

export default TinyFooter;