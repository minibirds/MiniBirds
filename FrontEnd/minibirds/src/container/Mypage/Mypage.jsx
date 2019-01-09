import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Profile from "../../Components/mypage/Profile";
import TabBar from "../../Components/mypage/Tapba";
import MyTwitList from "../MyTwitList/MyTwitList";
import "./Mypage.css";
import Header from "../../Components/Share/Header";
import MainFollowingList from '../followingList/MainFollowingList';
import MainFollowerList from "../followerList/MainfollowerList";
import axios from "axios";
import base_url from "../../base_url";

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
    this.handleConnect();
  }

  ListToggle = TargetClass => {
    switch (TargetClass) {
      case "table-twit":
        this.setState({
          twitList: true,
          followingList: false,
          followerList: false
        });
        break;
      case "table-follower":
        this.setState({
          twitList: false,
          followingList: false,
          followerList: true
        });
        break;
      case "table-following":
        this.setState({
          twitList: false,
          followingList: true,
          followerList: false
        });
        break;
      default:
        break;
    }
  };

  CheckToken = () => {
    const { history } = this.props;
    if (localStorage.getItem("token") === "") {
      history.push("/signin");
    }
  };

  handleConnect = () => {
    axios
      .get(`${base_url}/auth/token`, {
        headers: {
          token: `${localStorage.getItem("token")}`
        }
      })
      .then(res => {
        this.props.getUserData(
          res.data.id,
          res.data.nickname,
          res.data.password,
          res.data.intro
        );
      })
      .catch(res => {
        this.setState({
          isError: true
        });
        console.log(res);
        console.log("에러");
      });
  };

  render() {
    const { twitList, followingList, followerList } = this.state;
    const { history, nickname, id, intro } = this.props;
    return (
      <div className="mypage-container">
        <Header />
        <Profile id={id} nickname={nickname} intro={intro} />
        <TabBar history={history} ListToggle={this.ListToggle} />
        <div className="mypage-twit-list" id="mypage-selected-list">
          {twitList ? (
            <MyTwitList nickname={nickname} />
          ) : followingList ? (
            <MainFollowingList />
          ) : (
            <MainFollowerList />
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Mypage);
