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
    const { numberOfRows, numberOfColumns, onHandleRows, onHandleColumns } = this.props;
    
    let rowSettings = [];
    for(let i = 1; i <= numberOfRows; i++) {
      rowSettings.push(
        <div key={i}>
          <div>Row {i} Settings:</div>
          <div># of Columns:</div>
          <select id={100 + i}  name={`numberOfColumns${i}`} value={numberOfColumns} onChange={onHandleColumns}>
            <option value="1">1 Column</option>
            <option value="2">2 Columns</option>
            <option value="3">3 Columns</option>
            <option value="4">4 Columns</option>
          </select>
        </div>
      );
    }

    return(
      <div>
        <h2>Main Body:</h2>
        <h3>Rows</h3>
        <div> Select # of Rows </div>
        <div>
          <select name="rows" value={numberOfRows} onChange={onHandleRows}>
            <option value="1">1 Row</option>
            <option value="2">2 Rows</option>
            <option value="3">3 Rows</option>
            <option value="4">4 Rows</option>
            <option value="5">5 Rows</option>
          </select>
          <br />
          <br />
        </div>
        {rowSettings}
      </div>
    )
  }
}

export default MainControls;