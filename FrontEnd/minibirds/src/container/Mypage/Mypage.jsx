import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Profile from "../../Components/mypage/Profile";
import TabBar from "../../Components/mypage/Tapba";
import MyTwitList from "../MyTwitList/MyTwitList";
import FollowList from "../../Components/mypage/Followlist";
import "./Mypage.css";
import Header from "../../Components/Share/Header";
import TwitList from "../../Components/Share/Twitlist";

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
    const { twitList, followingList, followerList } = this.state;
    const { history, location } = this.props;
    return (
      <div className="mypage-container">
        <Header />
        <Profile />
        <TabBar history={history} />
        <div className="mypage-twit-list" id="mypage-selected-list">
          {twitList ? (
            <MyTwitList />
          ) : followingList ? (
            <FollowList />
          ) : (
            <FollowList />
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Mypage);
