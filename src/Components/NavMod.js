import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navAlign, addLink }from '../actions';


const mapStateToProps = state => {
  return {
    alignment: state.alignment,
    link1: state.link1,
    link2: state.link2,
    link3: state.link3,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleAlign: (e) => dispatch(navAlign(e.target.value)),
    onAddLink: (e) => dispatch(addLink(e.target.value, e.target.name))
  }
}

class NavMod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingLinks: false,
      changingAlignment: false,
    }
    this.toggleInput = this.toggleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleInput(e) {
    this.setState({[e.target.name]: !this.state[e.target.name]});
  }

  handleSubmit(event) {
    alert(`Your inputs are:  Links:${this.state.addingLinks} Align:${this.props.alignment}`);
    event.preventDefault();
  }

  render() {
    const { addingLinks, changingAlignment } = this.state;
    const { alignment, link1, link2, link3, onHandleAlign, onAddLink } = this.props;

    let links;
    if(addingLinks) {
      links = 
        <div>
          <input id={1} placeholder="Link 1" type="text" name="link1" value={link1} onChange={onAddLink} />
          <input placeholder="Link 2" type="text" name="link2" value={link2} onChange={onAddLink} />
          <input placeholder="Link 3" type="text" name="link3" value={link3} onChange={onAddLink} />
          <input placeholder="Link 4" type="text" name="link4" value={undefined} onChange={onAddLink} />
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
      <form onSubmit={this.handleSubmit}>
        <h3>Navigation:</h3>
        <label>
          Logo
          <input type="checkbox" />
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
        <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMod);