import React, { Component } from 'react';

class NavMod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingLinks: false,
      changingAlignment: false,
    }
    this.toggleInput = this.toggleInput.bind(this);
  }

  toggleInput(e) {
    this.setState({[e.target.name]: !this.state[e.target.name]});
  }

  render() {
    const { addingLinks, changingAlignment } = this.state;
    const { alignment, link1, link2, link3, link4, includeLogo, onHandleAlign, onAddLink, ontoggleLogo } = this.props;

    let links;
    if(addingLinks) {
      links = 
        <div>
          <input placeholder="Link 1" type="text" name="link1" value={link1} onChange={onAddLink} />
          <input placeholder="Link 2" type="text" name="link2" value={link2} onChange={onAddLink} />
          <input placeholder="Link 3" type="text" name="link3" value={link3} onChange={onAddLink} />
          <input placeholder="Link 4" type="text" name="link4" value={link4} onChange={onAddLink} />
        </div>
    }

    let linkAlignment;
    if(changingAlignment) {
      linkAlignment =
        <div>Choose Alignment
          <select name="alignment" value={alignment} onChange={onHandleAlign}>
            <option value="left" >Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div> 
    }

    return(
      <form>
        <h3>Navigation:</h3>
        <label>
          Logo:
          <input type="checkbox" name="includeLogo" onChange={ontoggleLogo} checked={includeLogo}/>
        </label>
        <br />
        <label>
          Add Links:
          <input type="checkbox" name="addingLinks" onChange={this.toggleInput} checked={addingLinks}/>
          {links}
        </label>
        <br />
        <label>
          Align Links:
          <input type="checkbox" name="changingAlignment" onChange={this.toggleInput} checked={changingAlignment}/>
          {linkAlignment}
        </label>
      </form>
    )
  }
}

export default NavMod;