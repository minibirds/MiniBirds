import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SigninPage from './Components/Share/SigninPage';
import MainService from './container/MainService/MainService';
import SignupPage from './Components/Share/SignupPage';
import Mypage from './container/Mypage/Mypage';
import EditInfo from './container/EditInfo/EditInfo';

class App extends Component {
  state = {
    id: '',
    nickname: '',
    pw: '',
    intro: '',
  }
  getUserData = (id, nickname, pw, intro) => {
    this.setState({
      id,
      nickname,
      pw,
      intro,
    });
  }
  render() {
    const { id, nickname, intro } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route path='/' render={() => (<MainService history={this.history} id={id} nickname={nickname} getUserData={this.getUserData} />) } exact />
              <Route
                path='/signin'
                component={() => <SigninPage history={this.history} signin={this.getUserData}/>}
                exact
              />
              <Route path='/signup' component={SignupPage} exact/>
              <Route path='/mypage' render={() => <Mypage id={id} nickname={nickname} intro={intro} history={this.history} getUserData={this.getUserData} />} />
              <Route
                path='/edit'
                component={() =>
                    <EditInfo 
                      id={this.state.id}
                      nickname={this.state.nickname}
                      pw={this.state.pw}
                      intro={this.state.intro}
                    />
                  }
                />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

