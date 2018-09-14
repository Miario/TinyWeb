import React, { Component } from 'react';

class TinyMain extends Component {
    render() {
        const { numberOfRows } = this.props;

        let showRows = [];
        for(let i = 1; i <= numberOfRows; i++) {
          showRows.push(<div className="row" key={i}></div>);
        }

        return(
            <main className="">
                {showRows}
            </main>
        )
    }
}

export default TinyMain;