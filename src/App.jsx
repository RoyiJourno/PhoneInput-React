import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneInput from './PhoneInput.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
      <PhoneInput/>
      </div>
    );
  }
}

export default App;
