import React, { Component } from 'react';

class TinyMain extends Component {
    render() {
        const 
        {
            numberOfRows, 
            numberOfColumns1, 
            numberOfColumns2, 
            numberOfColumns3, 
            numberOfColumns4,
            numberOfColumns5,
            rows
        } = this.props;

        let showRows = [];
        rows.map(row => {
            let columns = [];
            if(row.rowID === '100') {
                row.columns.map((column, i)=> {
                    if(numberOfColumns1 === '1' && i < 1) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    if(numberOfColumns1 === '2' && i < 2) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    else if(numberOfColumns1 === '3' && i < 3) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    else if(numberOfColumns1 === '4' && i < 4) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    return columns;
                })  
                showRows.push(<div className="row flex-row" key={row.rowID}>{columns}</div>)
            }
            else if(numberOfRows >= '2' && row.rowID === '200') {
                row.columns.map((column, i)=> {
                    if(numberOfColumns2 === '1' && i < 1) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    if(numberOfColumns2 === '2' && i < 2) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    else if(numberOfColumns2 === '3' && i < 3) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    else if(numberOfColumns2 === '4' && i < 4) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    return columns;
                })  
                showRows.push(<div className="row flex-row" key={row.rowID}>{columns}</div>)
            }
            else if(numberOfRows >= '3' && row.rowID === '300') {
                row.columns.map((column, i)=> {
                    if(numberOfColumns3 === '1' && i < 1) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    if(numberOfColumns3 === '2' && i < 2) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    else if(numberOfColumns3 === '3' && i < 3) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    else if(numberOfColumns3 === '4' && i < 4) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    return columns;
                })  
                showRows.push(<div className="row flex-row" key={row.rowID}>{columns}</div>)
            }
            else if(numberOfRows >= '4' && row.rowID === '400') {
                row.columns.map((column, i)=> {
                    if(numberOfColumns4 === '1' && i < 1) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    if(numberOfColumns4 === '2' && i < 2) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    else if(numberOfColumns4 === '3' && i < 3) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    else if(numberOfColumns4 === '4' && i < 4) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    return columns;
                })  
                showRows.push(<div className="row flex-row" key={row.rowID}>{columns}</div>)
            }
            else if(numberOfRows === '5' && row.rowID === '500') {
                row.columns.map((column, i)=> {
                    if(numberOfColumns5 === '1' && i < 1) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    if(numberOfColumns5 === '2' && i < 2) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    else if(numberOfColumns5 === '3' && i < 3) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    else if(numberOfColumns5 === '4' && i < 4) {
                        columns.push(<div key={column.columnID} className="col">Col {column.columnID}</div>)
                    }
                    return columns;
                })  
                showRows.push(<div className="row flex-row" key={row.rowID}>{columns}</div>)
            }
            return showRows;
        });
        
        return(
            <div className="">
                {showRows}
            </div>
        )
    }
}

export default TinyMain;