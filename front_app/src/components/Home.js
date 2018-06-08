import React from 'react'
import { Jumbotron } from 'reactstrap';


const Home = () => (
  <div>
    <Jumbotron>
      <img src={require('../img/apps.png')} />
      <h1 className="display-3">ReactJS app</h1>
      <p className="lead">Welcome to the go -> reactJS microservices.</p>
      <hr className="my-2" />
    </Jumbotron>
  </div>
)

export default Home
