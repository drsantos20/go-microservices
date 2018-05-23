import React, { Component } from 'react'

class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: ""
    };
  }


  componentDidMount() {

    fetch('http://localhost:6767/accounts/10000')
    .then(results => {
      return results.json();
    }).then(data => { 
      console.log(data.id)
      this.setState({id: data.id})
      this.setState({name: data.name})

    }).catch(err => {

    });
  }

  render() {
    return (
      <div className="container2">
        <div className="container1">
          {this.state.id}
          {this.state.name}
        </div>
      </div>
    )
  }
}
export default Schedule