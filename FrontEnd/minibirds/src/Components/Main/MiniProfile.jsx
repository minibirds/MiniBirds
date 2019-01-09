import React, { Component } from 'react';
import ProfileImg from '../img/profile-img-default.png'
import './MiniProfile.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import base_url from '../../base_url';


class MiniProfile extends Component {

  componentDidMount() {
     this.GetTwitNum();
     this.GetFollowerNum();
     this.GetFollowingNum();
   }

  constructor(props) {
    super(props);
    this.state = { 
      twitNum: 0,
      followerNum: 0,
      followingNum: 0,
      userID: this.props.id,
      userNickname: this.props.Nickname,
      ProfileImg: ProfileImg
    }
  }

  //트윗 수 가져오는 함수
  GetTwitNum = () => {
    axios.get(`${base_url}/twit`, {
      headers: {
          'token': `${localStorage.getItem('token')}`
      }
    })
    .then((response) => {
      this.setState({
        twitNum: response.data.num
      });
    })
  }

  //팔로워 수 가져오는 함수
  GetFollowerNum = () => {
    axios.get(`${base_url}/follower`, {
      headers: {
          'token': `${localStorage.getItem('token')}`
      }
    })
    .then((response) => {
      this.setState({
        followerNum: response.data.num
      });
    })
  }

  //팔로잉 수 가져오는 함수
  GetFollowingNum = () => {
    axios.get(`${base_url}/following`, {
      headers: {
          'token': `${localStorage.getItem('token')}`
      }
    })
    .then((response) => {
      this.setState({
        followingNum: response.data.num
      });
    })
  }

  render() { 
    const {twitNum, followerNum, followingNum,} = this.state;
    const { id, nickName } = this.props;
    return ( 
      <div className="mini__main--profile">
        <Link to='/mypage'>          
          <div className="upper-profile">
            <img className="upper-img" src={ProfileImg} alt="Profile_Photo" />
            <span className="upper-text">
            <div className="upper-name">{nickName}</div>
              <div className="upper-id">@{id}</div>
            </span>
          </div>
        </Link>
        
        <div className="lowwer-profile">
          <span className="lowwer-tweet">
            <div className="lowwer-title">트윗</div>
            <div className="lowwer-body">{twitNum}</div>
          </span>
          <span className="lowwer-following">
            <div className="lowwer-title">팔로워</div>
            <div className="lowwer-body">{followerNum}</div>
          </span>
          <span className="lowwer-follower">
            <div className="lowwer-title">팔로잉</div>
            <div className="lowwer-body">{followingNum}</div>
          </span>
        </div>
      </div>
     );
  }
}
 
export default MiniProfile;