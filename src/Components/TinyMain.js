import React, { Component } from 'react';

class TinyMain extends Component {
    render() {
        const { numberOfRows, numberOfColumns } = this.props;

        let showRows = [];
        for(let i = 1; i <= numberOfRows; i++) {
            let showColumns = [];
            for(let j = 1; j <= numberOfColumns; j++) {
                showColumns.push(<div className="col" key={j}>Column {j}</div>);
            }
            showRows.push(<div className="row" key={i}>Row {i} {showColumns}</div>);
        }

        return(
            <main className="">
                {showRows}
            </main>
        )
    }
}

export default TinyMain;