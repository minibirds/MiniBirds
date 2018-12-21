import React, { Component } from 'react';
import Logo from '../img/MiniBirds-Logo.png'
import './MiniProfile.css'

class MiniProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="main-profile">
        <div className="upper-profile">
          <img className="upper-img" src={Logo} alt="Profile_Photo" />
          <span className="upper-text">
            <div className="upper-name">미니버드 공식계정</div>
            <div className="upper-id">@mini_birds_twt</div>
          </span>
        </div>
        <div className="lowwer-profile">
          <span className="lowwer-tweet">
            <div className="lowwer-title">트윗</div>
            <div className="lowwer-body">2313</div>
          </span>
          <span className="lowwer-following">
            <div className="lowwer-title">팔로잉</div>
            <div className="lowwer-body">2313</div>
          </span>
          <span className="lowwer-follower">
            <div className="lowwer-title">팔로워</div>
            <div className="lowwer-body">2313</div>
          </span>
        </div>
      </div>
     );
  }
}
 
export default MiniProfile;