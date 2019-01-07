import React, { Component } from 'react';
import ProfileImg from '../img/profile-img-default.png'
import './MiniProfile.css';
import {Link} from 'react-router-dom';
import axios from 'axios';


class MiniProfile extends Component {

  componentDidMount() {
     this.GetTwitNum();
     this.GetFollowerNum();
     this.GetFollowingNum();
     this.GetUserInfo();
   }

  constructor(props) {
    super(props);
    this.state = { 
      id: '',
      twitNum: 0,
      followerNum: 0,
      followingNum: 0,
      userID: '@NULL',
      userNickname: '계정이 없습니다.'
    }
  }

  GetUserInfo = () => {
    axios.get(`http://13.59.174.126:5000/auth/signup/${this.state.id}`)
    .then((response) => {
      this.setState({
        userID: response.data.result.id,
        userNickname: response.data.result.nickname,
      })
    }) 
  }

  GetTwitNum = () => {
    axios.get(`http://13.59.174.126:5000/auth/twit/${this.state.id}`)
    .then((response) => {
      this.setState({
        twitNum: response.data.num
      })
    })
  }

  GetFollowerNum = () => {
    axios.get(`http://13.59.174.126:5000/auth/follower/${this.state.id}`)
    .then((response) => {
      this.setState({
        followerNum: response.data.num
      });
    })
  }

  GetFollowingNum = () => {
    axios.get(`http://13.59.174.126:5000/auth/following/${this.state.id}`)
    .then((response) => {
      this.setState({
        followingNum: response.data.num
      })
    })
  }

  render() { 
    const {twitNum, followerNum, followingNum, userID, userNickname} = this.state;

    return ( 
      <div className="mini__main--profile">
        <Link to='/mypage/twitlist'>          
          <div className="upper-profile">
            <img className="upper-img" src={ProfileImg} alt="Profile_Photo" />
            <span className="upper-text">
              <div className="upper-name">{userNickname}</div>
              <div className="upper-id">{userID}</div>
            </span>
          </div>
        </Link>
        
        <div className="lowwer-profile">
          <span className="lowwer-tweet">
            <div className="lowwer-title">트윗</div>
            <div className="lowwer-body">{twitNum}</div>
          </span>
          <span className="lowwer-following">
            <div className="lowwer-title">팔로잉</div>
            <div className="lowwer-body">{followerNum}</div>
          </span>
          <span className="lowwer-follower">
            <div className="lowwer-title">팔로워</div>
            <div className="lowwer-body">{followingNum}</div>
          </span>
        </div>
      </div>
     );
  }
}
 
export default MiniProfile;