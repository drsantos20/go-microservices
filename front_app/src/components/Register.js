import React from 'react'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Register extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
    handleSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);

      for (let name of data.keys()) {
        const input = form.elements[name];
      }

      fetch('http://localhost:6767/add', {
        method: 'POST',
        body: JSON.stringify({
          Id: data.get('Id'),
          Name: data.get('Name'),
          Login: data.get('Login'),
        })
      });
    }

    render() {
      return (
        <div id="register">
          <Container>
            <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label for="Id">Id</Label>
              <Input type="Id" name="Id" id="Id" placeholder="enter your Id" />
            </FormGroup>
            <FormGroup row>
              <Label for="Name">Name</Label>
              <Input type="Name" name="Name" id="Name" placeholder="enter your Name" />
            </FormGroup>
            <FormGroup row>
              <Label for="Login">Login</Label>
              <Input type="Login" name="Login" id="Login" placeholder="enter your Login" />
            </FormGroup>
            <Button>Submit</Button>
            </Form>
          </Container>
        </div>

      );
    }
  }

  export default Register