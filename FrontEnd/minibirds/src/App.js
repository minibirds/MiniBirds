import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Components/Header.js';
import Main from './container/Main/Main';
import Mypage from './container/Mypage/Mypage';
import SignMain from './container/Account/SignMain';
import MainService from './container/MainService/MainService';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Header/>
            <Switch>
              <Route path='/' component={MainService} exact />
              <Route path='/mypage' component={Mypage} exact />
              <Route path='/account' component={SignMain} exact/>
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
