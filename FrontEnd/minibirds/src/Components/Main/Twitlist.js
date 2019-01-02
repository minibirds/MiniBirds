import React, { Component } from 'react';
import './Twitlist.css';
import mention from '../Img/speech-bubble.png';
import heart from '../Img/heart.png';
import like from '../Img/like.png';
import ProfileImg from '../Img/profile-img-default.png';

class Twitlist extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      twit : [
        { profileImg : '',
          nickName : '',
          month : '',
          photo : '',
          mentionNum : '',
          heartNum : '',
       }
      ]
     }
  }
  render() { 
    const {profileImg, nickName, poto, mentionNum, heartNum} = this.props;
    return ( 
      <div className="back-box">
        <div className="above-box">
          <div className="content-box">
            <img className="twit-profile-img" src={ProfileImg} alt=" " />
            <div className="letter-box">
              <span className="user-name">{nickName}히히낙낙</span  >
              <span className="date">11월 4일</span>
              <span className="delete-btn">X</span>
            </div>
          </div>
          <div className="letter-content-box">
            <span className="letter-content">제가 짜장면을 먹어쓴ㄴ데 맣리죠 아 짜장면먹고싶다 진짜 아 ㅂ거피 식욕아 돌아오주세요 어헝헝자살할래</span>
          </div>
        </div>
        <div className="under-box">
          <div className="img-box">
            <img src={poto} alt=""/>
          </div>
            <div className="emoji-box">
              <img src={mention} className="mention-img" alt=""/>
              <div className="mention-number">{mentionNum}23</div>
              <img src={heart} className="heart-img" alt=""/>
              <div className="heart-number">{heartNum}231</div>
          </div>
        </div>                                                                       
    </div>
     );
  }
}
 
export default Twitlist;
