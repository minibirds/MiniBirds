import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignPage from './Components/SignPage.js';
import Signlogo from './Components/Signlogo.js';
import Signin from './Components/Signin.js';

class App extends Component {
  render() {
    return (
      <div>
        <SignPage left={<Signlogo />} right={<Signin />} />
      </div>
    );
  }
}

export default App;
