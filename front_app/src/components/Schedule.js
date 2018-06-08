import React, { Component } from 'react'
import { Table, Container } from 'reactstrap';

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

    return (
      <div id="schedule">
      <Container>
        <Table dark>
        <thead>
          <tr>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.users.map((item,i) => <div key={i}>{item.name}</div>)}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
    </div>
    )
  }
}


export default Schedule