import React, { Component } from 'react';

class MainControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.toggleInput = this.toggleInput.bind(this);
  }

  toggleInput(e) {
    this.setState({...this.state, [e.target.name]: !this.state[e.target.name]});
  }

  render() {
    const { numberOfRows, onHandleRows } = this.props;

    return(
      <div>
        <h2>Main Body:</h2>
        <h3>Rows</h3>
        <div> Select # of Rows <br/>
          <select name="rows" value={numberOfRows} onChange={onHandleRows}>
            <option value="1">1 Row</option>
            <option value="2">2 Rows</option>
            <option value="3">3 Rows</option>
            <option value="4">4 Rows</option>
            <option value="5">5 Rows</option>
          </select>
        </div>
        <div> Row Settings <br/>
          <select name="rows" value={numberOfRows} onChange={onHandleRows}>
            <option value="1">1 Row</option>
            <option value="2">2 Rows</option>
            <option value="3">3 Rows</option>
            <option value="4">4 Rows</option>
            <option value="5">5 Rows</option>
          </select>
        </div>
      </div>
    )
  }
}

export default MainControls;