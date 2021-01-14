import React from 'react';
import './form.scss';


// class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       url: '',
//       route: ''
//     }
//   }
//   handleSubmitUrl = async (e) => {
//     e.preventDefault();
//     const url = e.target.url.value;
//     this.setState({ url });
//     try {
//       //if (this.state.route) { this.setState({ display: true }) }
//       var stars = await fetch(this.state.url, { method: this.state.route || 'GET', mode: 'cors' })

//     } catch (err) {
//       console.error(err);
//     }
//     try {
//       var data = await stars.json()
//       let headers = {};

//       // stars.headers.entries = ['foo, 'bar]

//       for (let pair of stars.headers.entries()) {
//         headers[pair[0]] = pair[1]
//       }

//       console.log('headers', headers);
//       this.setState({ headers });
//     } catch (err) {
//       console.error(err);
//     }
//     console.log('this.is my data', data)
//     this.props.apiResults(data);
//   }
///////////////////////////////////////////////////////////////////////////////////
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      route: ''
    }
  }
  handleSubmitUrl = async (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    this.setState({ url });
    //if (this.state.route) { this.setState({ display: true }) }
    const stars = await fetch(this.state.url, { method: this.state.route, mode: 'cors' })
    const data = await stars.json();


    // .then(response => {
    //   console.log('response here', response);
    //   return response.json();
    // })
    // .catch(err => {
    //   console.log('ERROR', err);
    // });
    console.log('DATA', data[0]);
    console.log('BODY-----------', data.body);
    this.props.apiResults(data);

  }
  ////////////////////////////////////////////////////////////////////////////
  // .then(response => {
  //   console.log('response here', response);
  //   return response.json();
  // })
  // .catch(err => {
  //   console.log('ERROR', err);
  // });

  handleClickGo = e => {
    const route = e.target.name;
    this.setState({ route });

    //if (this.state.url) { this.setState({ display: true }) }

  }
  render() {
    //console.log('THIS IS MY DATA', this.props.data)
    //console.log('---------------------', this.props.results)
    return (
      <div id="form">
        <form onSubmit={this.handleSubmitUrl}>
          <input name="url" placeholder="Please Enter a URL" type="text" />
          <button type="submit"><span data-testId="submit-count"></span>Go!</button>
          {/* //<p><span data-testId="count-number">{"Count:" + this.props.count}</span></p> */}
          <div onClick={this.handleClickGo}>
            <button name="get">GET</button>
            <button name="put">PUT</button>
            <button name="post">POST</button>
            <button name="delete">DELETE</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;


// old code lab 26
/* <>
          /* URL:<input onChange={this.handleUrl} />
          <button onClick={this.handleClickGo}>GO!</button>
          <div>
            <button id="get" onClick={this.handleGet}>GET</button>
            <button id="post" onClick={this.handlePost}>POST</button>
            <button id="put" onClick={this.handlePut}>PUT</button>
            <button id="delete" onClick={this.handleDelete}>DELETE</button>
          </div>
          <div class="enter">

            <h3>{this.state.route} {this.state.url}</h3>
          </div>
        </>
    )
         {/* <div>
          <h3>URL: {this.state.url}</h3>
          <h3>Route: {this.state.route}</h3>
        </div> */


