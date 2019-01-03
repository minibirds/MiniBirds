import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignMain from './container/Account/SignMain.jsx';
import MainService from './container/MainService/MainService';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route path='/' component={MainService} exact />
              <Route path='/account' component={SignMain} exact/>
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
