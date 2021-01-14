import React from 'react';
import Header from './header/header';
import Form from './form/form';
import Results from './results/results';
import Footer from './footer/footer';
import './app.scss';  //base design for site


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: '',
      //headers: {},
      results: [],

    };
  }
  collectHeaders = (headers) => {
    this.setState({ headers });
  }


  updateResults = (apiResults) => {
    //this.setState({ headers: apiResults.headers });
    this.setState({ results: apiResults.results });
    //this.setState({ count: apiResults.count });
  }

  render() {
    return (
      <>
        <Header
        // {...this.state.headers}
        />
        <Form
          apiResults={this.updateResults}
        //giveAppHeaders={this.collectHeaders}
        />
        <Results
          //  count={this.state.count}
          results={this.state.results}
        />
        <Footer />
      </>
    )
  }
}


export default App;

