import React, { Component } from 'react'

class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {

    fetch('http://localhost:6767/accounts')
    .then(results => {
      return results.json();
    }).then(data => { 
      this.setState({
        users: data.accounts
      })
      console.log("state", this.state.users)
    }).catch(err => {

    });
  }

  render(){
    return <ul>
      {this.state.users.map((item,i) => <li key={i}>{item.name}</li>)}
    </ul>;
  }
}


export default Schedule