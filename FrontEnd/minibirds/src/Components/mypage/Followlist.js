import React, { Component } from "react";
import "./followlist.css";
import ProfileImg from "../img/profile-img-default.png";
import axios from "axios";
import base_url from "../../base_url";

class Followlist extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      userNickname: "계정이 없습니다.",
      intro: "자기소개가 없습니다.",
      followState: "팔로우",
      Profile: ProfileImg
    };
  }

  componentDidMount() {
    this.GetUserInfo();
  }

  GetUserInfo = () => {
    axios
      .get(`${base_url}/follower`, {
        headers: {
          token: `${localStorage.getItem("token")}`
        }
      })
      .then(response => {
        this.setState({
          intro: response.data.intro
        });
      });
  };

  handleBtnChange = () => {
    const changeBtn = document.getElementById("follow-btn");
    let followNum;

    if (changeBtn.className === "follow-btn") {
      changeBtn.className = "none-follow-btn";
      this.setState({
        followState: "팔로우"
      });
      axios
        .get(`${base_url}/following`, {
          headers: {
            token: `${localStorage.getItem("token")}`
          }
        })
        .then(response => {
          followNum = response.data.num;
          followNum -= 1;
        })
        .then(() => {
          axios({
            method: "post",
            url: `${base_url}/following`,
            data: {
              num: followNum
            },
            headers: {
              token: `${localStorage.getItem("token")}`
            }
          });
        });
    } else {
      changeBtn.className = "follow-btn";
      this.setState({
        followState: "팔로잉"
      });
    }
  };
  render() {
    const { followState, userNickname, intro, Profile } = this.state;
    const { handleBtnChange } = this;

    return (
      <div className="follow-box-background">
        <div className="follow-content">
          <div className="btn-box">
            <img src={Profile} alt="" className="follow-profile-img" />
            <div className="user-name-text">{userNickname}</div>
            <div
              className="follow-btn"
              id="follow-btn"
              onClick={handleBtnChange}
            >
              {followState}
            </div>
          </div>
          <div className="text-content">
            <div className="user-intro">{intro}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Followlist;
