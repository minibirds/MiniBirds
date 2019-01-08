import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Profile from "../../Components/mypage/Profile";
import TabBar from "../../Components/mypage/Tapba";
import MyTwitList from "../MyTwitList/MyTwitList";
import "./Mypage.css";
import Header from "../../Components/Share/Header";
import MainFollowerList from "../followerList/MainfollowerList";

class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twitList: true,
      followingList: false,
      followerList: false
    };
  }

  componentDidMount() {
    this.CheckToken();
  }

  CheckToken = () => {
    const { history } = this.props;
    if (localStorage.getItem("token") === "") {
      history.push("/signin");
    }
  };

  render() {
    const { twitList, followingList } = this.state;
    const { history, nickname, id, intro } = this.props;
    return (
      <div className="mypage-container">
        <Header />
        <Profile id={id} nickname={nickname} intro={intro} />
        <TabBar history={history} />
        <div className="mypage-twit-list" id="mypage-selected-list">
          {twitList ? (
            <MyTwitList nickname={nickname} />
          ) : followingList ? (
            <MainFollowerList />
          ) : (
            <MainFollowerList />
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Mypage);
