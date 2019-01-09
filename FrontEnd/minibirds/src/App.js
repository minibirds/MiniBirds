import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SigninPage from "./Components/Share/SigninPage";
import MainService from "./container/MainService/MainService";
import SignupPage from "./Components/Share/SignupPage";
import Mypage from "./container/Mypage/Mypage";
import EditInfo from "./container/EditInfo/EditInfo";

class App extends Component {
  state = {
    id: "",
    nickname: "",
    pw: "",
    intro: ""
  };
  getUserData = (id, nickname, pw, intro) => {
    this.setState({
      id,
      nickname,
      pw,
      intro
    });
  };
  
  render() {
    const { id, nickname, pw, intro } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route
                path="/"
                render={() => <MainService history={this.history} id={id} nickname={nickname}  />}
                exact
              />
              <Route
                path="/signin"
                component={() => (
                  <SigninPage
                    history={this.history}
                    signin={this.getUserData}
                  />
                )}
                exact
              />
              <Route path="/signup" component={SignupPage} exact />
              <Route
                path="/mypage"
                render={() => (
                  <Mypage
                    history={this.history}
                    getUserData={this.getUserData}
                    id={id}
                    nickname={nickname}
                    pw={pw}
                    intro={intro}
                  />
                )}
              />
              <Route
                path="/edit"
                component={() => (
                  <EditInfo
                    id={id}
                    nickname={nickname}
                    pw={pw}
                    intro={intro}
                    history={this.history}
                  />
                )}
              />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
