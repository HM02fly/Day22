import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Flower from './Flower';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Flower color="red" />
      </div>
    );
  }
}

export default App;
