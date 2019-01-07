import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SigninPage from './Components/Share/SigninPage';
import MainService from './container/MainService/MainService';
import SignupPage from './Components/Share/SignupPage';
import Mypage from './container/Mypage/Mypage';
import EditInfo from './container/EditInfo/EditInfo';

class App extends Component {  
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route path='/' component={() => <MainService history={this.history}/>} exact />
              <Route path='/signin' component={() => <SigninPage history={this.history}/>} exact/>
              <Route path='/signup' component={SignupPage} exact/>
              <Route path='/mypage' component={() => <Mypage CheckToken={this.CheckToken} history={this.history} />} />
              <Route path='/edit' component={EditInfo} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

