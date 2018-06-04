import React from 'react'
import Header from './Header'
import Main from './Main'
import Favicon from 'react-favicon';


const App = () => (
  <div>
    <Favicon url="https://www.racknersolutions.com/static/data-machine.png"/>  
    <Header />
    <Main />
  </div>
)

export default App
