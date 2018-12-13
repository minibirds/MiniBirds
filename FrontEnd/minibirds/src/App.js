import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Components/Header';
import Profile from './Components/Profile.js';
import Tapba from './Components/Tapba.js';
import Twitlist from './Components/Twitlist.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header Form={<Profile Tapba={<Tapba twitlist={<Twitlist />}/>} />}/>
      </div>
    );
  }
}

export default App;
