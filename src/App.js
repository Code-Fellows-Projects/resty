import React from 'react';
import Header from './header/header';
import Form from './form/form';
import Results from './results/results';
import Footer from './footer/footer';
import './app.scss';  //base design for site

// Lab requirements
// app.js - Container
// Holds state: Count and Results Array
// A class method that can update state
// Renders 2 Child Components

// form and results

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: '',
      results: [],
      headers: ''
    };
  }

  updateResults = (apiResults) => {
    this.setState({ headers: apiResults.headers });
    this.setState({ results: apiResults.results });
    this.setState({ count: apiResults.count });
  }

  render() {
    return (
      <>
        <Header
          {...this.state.headers}
        />
        <Form
          apiResults={this.updateResults}
        />
        <Results
          count={this.state.count}
          results={this.state.results}
        />
        <Footer />
      </>
    )
  }
}


export default App;

