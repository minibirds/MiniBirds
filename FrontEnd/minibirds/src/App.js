import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SigninPage from './Components/Share/SigninPage';
import MainService from './container/MainService/MainService';
import SignupPage from './Components/Share/SignupPage';
import Mypage from './container/Mypage/Mypage';

class App extends Component {
  CheckToken = (history) => {
    if(localStorage.getItem('token') === ''){
      
      return history;
    }
  }

  constructor(){
    super();
    this.CheckToken();
}
  
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route path='/' component={() => <MainService CheckToken={this.CheckToken} history={this.history}/>} exact />
              <Route path='/signin' component={SigninPage} exact/>
              <Route path='/signup' component={SignupPage} exact/>
              <Route path='/mypage' component={() => <Mypage CheckToken={this.CheckToken} history={this.history} />} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

