import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      route: '',
    }
  }

  handleUrl = e => {
    let newPath = e.target.value;
    //console.log(e.target.value);
    this.setState({ url: newPath });
  }

  handleClickGo = e => {
    e.preventDefault();
    let newPath = this.state.url;
    console.log('URL_____', this.state.url);
    let newUrlWithPath = this.state.route;
    console.log('ROUTE_____', this.state.route);
    this.setState({ url: newPath });
    this.setState({ route: newUrlWithPath });
    //let url = this.state.url;
    //let route = this.state.route;
    //return `${newPath} ${newUrlWithPath}`
  }

  handleGet = e => {
    e.preventDefault();
    let getPath = e.target.id;
    this.setState({ route: getPath });

  }
  handlePost = e => {
    e.preventDefault();
    let postPath = e.target.id;
    this.setState({ route: postPath });
  }
  handlePut = e => {
    e.preventDefault();
    let putPath = e.target.id;
    this.setState({ route: putPath });
  }
  handleDelete = e => {
    e.preventDefault();
    let deletePath = e.target.id;
    this.setState({ route: deletePath });
  }

  render() {
    return (
      <>
        URL:<input onChange={this.handleUrl} />
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
  }
}

export default Form;

///select by button
// updates the state to the route
// button id with get post put delete
//e.target.id