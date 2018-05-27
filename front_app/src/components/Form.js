import React from 'react'

class Form extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
    handleSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);
      console.log(data.get('Id'))
      console.log(data.get('Name'))

      for (let name of data.keys()) {
        const input = form.elements[name];
      }

      fetch('http://localhost:6767/add', {
        method: 'POST',
        body: JSON.stringify({
          Id: data.get('Id'),
          Name: data.get('Name')
        })
      });
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Id">Enter id</label>
          <input id="Id" name="Id" type="text" />
  
          <label htmlFor="Name">Enter your name</label>
          <input id="Name" name="Name" type="Name" />
  
          <button>Register</button>
        </form>
      );
    }
  }

  export default Form