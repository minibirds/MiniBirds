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
    followingList: []
  }

  //현재 사용자의 아이디, 닉네임, 패스워드, 자기소개를 가져오는 함수
  getSigninData = (id, nickname, pw, intro) => {
    this.setState({
      ...this.state,
      id,
      nickname,
      pw,
      intro,
    });
  }
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route path='/' component={() => <MainService history={this.history}/>} exact />
              <Route
                path='/signin'
                component={() => <SigninPage history={this.history} signin={this.getSigninData}/>}
                exact
              />
              <Route path='/signup' component={SignupPage} exact/>
              <Route path='/mypage' component={() => <Mypage history={this.history} />} />
              <Route
                path='/edit'
                component={() =>
                    <EditInfo 
                      id={this.state.id}
                      nickname={this.state.nickname}
                      pw={this.state.pw}
                      intro={this.state.intro}
                      history={this.history}
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

