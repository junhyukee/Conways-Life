import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCanvas from './components/LifeCanvas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LifeCanvas />
      </div>
    );
  }
}

export default App;