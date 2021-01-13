import React from 'react';
import ReactJson from 'react-json-view';

class Results extends React.Component {
  render() {
    return (
      <div id="render">
        <ReactJson src={this.props.results} />


      </div>
    )
  }
}

export default Results;
/* <Results />
Expects the count, headers, results to be sent in as props
Renders the count
Renders the Result Headers as “pretty” JSON
Renders the Result Body as “pretty” JSON */