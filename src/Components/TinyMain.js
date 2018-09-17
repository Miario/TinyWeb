import React, { Component } from 'react';

class TinyMain extends Component {
    render() {
        const {numberOfRows, rows} = this.props;

        let showRows = [];
        rows.map(row => {
            let columns = [];
            row.columns.map(column => columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>));
            if(row.rowID === '100') {
                showRows.push(<div className="row" key={row.rowID}>Row 1 {row.rowID} {columns}</div>)
            }
            else if(numberOfRows >= '2' && row.rowID === '200') {
                showRows.push(<div className="row" key={row.rowID}>Row 2 {row.rowID} {columns}</div>)
            }
            else if(numberOfRows >= '3' && row.rowID === '300') {
                showRows.push(<div className="row" key={row.rowID}>Row 3 {row.rowID} {columns}</div>)
            }
            else if(numberOfRows >= '4' && row.rowID === '400') {
                showRows.push(<div className="row" key={row.rowID}>Row 4 {row.rowID} {columns}</div>)
            }
            else if(numberOfRows === '5' && row.rowID === '500') {
                showRows.push(<div className="row" key={row.rowID}>Row 5 {row.rowID} {columns}</div>)
            }
            return showRows;
        })
        
        return(
            <div className="">
                {showRows}
            </div>
        )
    }
}

export default TinyMain;