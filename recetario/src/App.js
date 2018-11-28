import React, { Component } from 'react';
import Router from './Router';
import './app.css';

// container del App
class App extends Component {
  render() {
    return <div className="page-container"> 
        <Router />
      </div>
  }
}

export default App;
