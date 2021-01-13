import React from 'react';
import ReactJson from 'react-json-view';

class Results extends React.Component {

  render() {
    console.log('RESULTS', this.props.count);
    return (
      <div id="render">
        <ReactJson src={this.props.results} />
        <p><span data-testId="count-number">{"Count:" + this.props.count}</span></p>


        {/* <p id="count-number"> {this.props.count}</p> */}

      </div >
    )
  }
}

export default Results;
/* <Results />
Expects the count, headers, results to be sent in as props
Renders the count
Renders the Result Headers as “pretty” JSON
Renders the Result Body as “pretty” JSON */