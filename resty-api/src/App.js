import React from 'react';
import Header from './header';
import Form from './form';
import Footer from './footer';
import './app.scss';  //base design for site



class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>
    )
  }
}


export default App;
