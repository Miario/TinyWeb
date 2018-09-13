import React, { Component } from 'react';

class FooterControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addSocialMedia: false,
    }
    this.toggleInput = this.toggleInput.bind(this);
  }

  toggleInput(e) {
    this.setState({[e.target.name]: !this.state[e.target.name]});
  }

  render() {
    const { addSocialMedia } = this.state;
    const { addCopyright, ontoggleCopyright } = this.props;

    let socialLinks;
    if(addSocialMedia) {
      socialLinks = 
        <div>
          <label>Twitter</label>
          <input type="checkbox" name="Twitter" />
          <label>Facebook</label>
          <input type="checkbox" name="Facebook" />
          <label>GitHub</label>
          <input type="checkbox" name="GitHub" />
          <label>Email</label>
          <input type="checkbox" name="Email" />
        </div>
    }

    return(
      <form>
        <h3>Footer:</h3>
        <br />
        <label>
          Copyright:
          <input type="checkbox" name="addCopyright" onChange={ontoggleCopyright} checked={addCopyright}/>
        </label>
        <br />
        <label>
          Social Media:
          <input type="checkbox" name="addSocialMedia" onChange={this.toggleInput} checked={addSocialMedia}/>
          <br />
          {socialLinks}
        </label>
        <br />
      </form>
    )
  }
}

export default FooterControls;