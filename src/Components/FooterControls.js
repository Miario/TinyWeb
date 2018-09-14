import React, { Component } from 'react';

class FooterControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addSocialMedia: false,
      toggleCopyrightAlign: false,
      toggleSocialAlign: false
    }
    this.toggleInput = this.toggleInput.bind(this);
  }

  toggleInput(e) {
    this.setState({...this.state, [e.target.name]: !this.state[e.target.name]});
  }

  render() {
    const { addSocialMedia, toggleCopyrightAlign, toggleSocialAlign } = this.state;
    const { 
      copyrightText, 
      includeCopyright, 
      copyrightAlignment, 
      addTwitter, 
      addFacebook, 
      addGithub, 
      addEmail, 
      socialAlignment,
      ontoggleCopyright, 
      onAddCopyright, 
      onAlignment, 
      ontoggleSocial
    } = this.props;

    let copyrightInput;
    if(includeCopyright) {
      copyrightInput =
        <div>
          <input placeholder="copyright" type="text" name="copyright" value={copyrightText} onChange={onAddCopyright} />
          <br />
          Align Copyright:
          <input type="checkbox" name="toggleCopyrightAlign" onChange={this.toggleInput} checked={toggleCopyrightAlign}/>
        </div> 
      
    }
    
    let copyrightAlign;
    if(toggleCopyrightAlign === true && toggleCopyrightAlign === includeCopyright) {
      copyrightAlign =
        <div>Choose Alignment: 
          <select name="copyrightAlignment" value={copyrightAlignment} onChange={onAlignment}>
            <option value="left" >Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div> 
    }

    let copyrightConfig = <div>{copyrightInput}{copyrightAlign}</div>;

    let socialLinks;
    if(addSocialMedia) {
      socialLinks = 
        <div>
          <label>Twitter
            <input type="checkbox" name="addTwitter" onChange={ontoggleSocial} checked={addTwitter}/>
          </label>
          <br />
          <label>Facebook
            <input type="checkbox" name="addFacebook" onChange={ontoggleSocial} checked={addFacebook}/>
          </label>
          <br />
          <label>GitHub
            <input type="checkbox" name="addGithub" onChange={ontoggleSocial} checked={addGithub}/>
          </label>
          <br />
          <label>Email
            <input type="checkbox" name="addEmail" onChange={ontoggleSocial} checked={addEmail}/>
            <br />
          </label>
          Align Social Media:
          <input type="checkbox" name="toggleSocialAlign" onChange={this.toggleInput} checked={toggleSocialAlign}/>
        </div>
    }

    let socialAlign;
    if(toggleSocialAlign === true && toggleSocialAlign === addSocialMedia) {
      socialAlign =
        <div>Choose Alignment: 
          <select name="socialAlignment" value={socialAlignment} onChange={onAlignment}>
            <option value="left" >Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div> 
    }

    let socialConfig = <div>{socialLinks}{socialAlign}</div>;

    return(
      <form>
        <h3>Footer:</h3>
        <label>
          Copyright:
          <input type="checkbox" name="addCopyright" onChange={ontoggleCopyright} checked={includeCopyright}/>
          {copyrightConfig}
        </label>
        <label>
          Social Media:
          <input type="checkbox" name="addSocialMedia" onChange={this.toggleInput} checked={addSocialMedia}/>
          <br />
          {socialConfig}
        </label>
        <br />
      </form>
    )
  }
}

export default FooterControls;