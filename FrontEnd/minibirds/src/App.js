import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Profile from './Components/profile.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Profile />
      </div>
    );
  }
}

export default App;
