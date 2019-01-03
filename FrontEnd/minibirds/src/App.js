import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SigninPage from './Components/Share/SigninPage';
import MainService from './container/MainService/MainService';
import SignupPage from './Components/Share/SignupPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route path='/' component={MainService} exact />
              <Route path='/signin' component={SigninPage} exact/>
              <Route path='/signup' component={SignupPage} exact/>
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
