import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navAlign }from '../actions';


const mapStateToProps = state => {
  return {
    alignment: state.alignment
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHandleAlign: (e) => dispatch(navAlign(e.target.value))
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleInput(e) {
    this.setState({[e.target.name]: !this.state[e.target.name]});
  }

  handleChange(e) {
    this.setState(...this.state, {[e.target.name]: e.target.value});
  }

  handleSubmit(event) {
    alert(`Your inputs are:  Links:${this.state.addingLinks} Align:${this.state.alignment}`);
    event.preventDefault();
  }

  render() {
    const { addingLinks, changingAlignment } = this.state;
    const { alignment, onHandleAlign } = this.props;

    let links;
    if(addingLinks) {
      links = 
        <div>
          <input placeholder="Link 1" type="text" name="link1" value={undefined} onChange={this.handleChange} />
          <input placeholder="Link 2" type="text" name="link2" value={undefined} onChange={this.handleChange} />
          <input placeholder="Link 3" type="text" name="link3" value={undefined} onChange={this.handleChange} />
          <input placeholder="Link 4" type="text" name="link4" value={undefined} onChange={this.handleChange} />
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
          links
          <input type="checkbox" name="addingLinks" onChange={this.toggleInput} checked={addingLinks}/>
          {links}
        </label>
        <br />
        <label>
          Alignment
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