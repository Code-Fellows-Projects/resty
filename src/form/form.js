import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      url: '',
      route: ''
    }
  }

  handleSubmitUrl = e => {
    e.preventDefault();
    const url = e.target.url.value;
    this.setState({ url });

    if (this.state.route) { this.setState({ display: true }) }
  }

  handleClickGo = e => {
    const route = e.target.name;
    this.setState({ route });

    if (this.state.url) { this.setState({ display: true }) }
  }

  // old code lab 26
  // handleUrl = e => {
  //   let newPath = e.target.value;
  //   //console.log(e.target.value);
  //   this.setState({ url: newPath });
  // }

  // handleClickGo = e => {
  //   e.preventDefault();
  //   let newPath = this.state.url;
  //   console.log('URL_____', this.state.url);
  //   let newUrlWithPath = this.state.route;
  //   console.log('ROUTE_____', this.state.route);
  //   this.setState({ url: newPath });
  //   this.setState({ route: newUrlWithPath });
  //   //let url = this.state.url;
  //   //let route = this.state.route;
  //   //return `${newPath} ${newUrlWithPath}`
  // }

  // handleGet = e => {
  //   e.preventDefault();
  //   let getPath = e.target.id;
  //   this.setState({ route: getPath });

  // }
  // handlePost = e => {
  //   e.preventDefault();
  //   let postPath = e.target.id;
  //   this.setState({ route: postPath });
  // }
  // handlePut = e => {
  //   e.preventDefault();
  //   let putPath = e.target.id;
  //   this.setState({ route: putPath });
  // }
  // handleDelete = e => {
  //   e.preventDefault();
  //   let deletePath = e.target.id;
  //   this.setState({ route: deletePath });
  // }

  render() {

    return (
      <div id="form">
        <form onSubmit={this.handleSubmitUrl}>
          <input name="url" placeholder="Please Enter a URL" type="text" />
          <button type="submit">Go!</button>
        </form>
        <div onClick={this.handleClickGo}>
          <button name="get">GET</button>
          <button name="put">PUT</button>
          <button name="post">POST</button>
          <button name="delete">DELETE</button>
        </div>

        {!this.state.display ? "" :
          <div>
            <h3>URL: {this.state.url}</h3>
            <h3>Route: {this.state.route}</h3>
          </div>
        }
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

}*/



///select by button
// updates the state to the route
// button id with get post put delete
//e.target.id