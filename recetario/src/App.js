import React, { Component } from 'react';
import Router from './Router';


/*
const Navigation = (props)=> <nav>
      <ul>
      <li>
      <NavLink to='/'>Login</NavLink>
      </li>
      <li>
      <NavLink to='/favoritos'>Favoritos</NavLink>
      </li>
      </ul>
      </nav>
*/

class App extends Component {
  render() {
    return <div className="page-container">      
    <Router />
    </div>
  }
}

export default App;
