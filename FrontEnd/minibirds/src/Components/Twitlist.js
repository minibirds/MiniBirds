import React from 'react'
import './CSS/Twitlist.css';
import mention from './Img/speech-bubble.png';
import heart from './Img/heart.png';
import like from './Img/like.png';

const Twitlist = ({profileImg, nickName, poto, mentionNum, heartNum}) => {
  return (
    <div className="back-box">
        <div className="above-box">
          <div className="content-box">
            <div className="mini-profile">
              <img src={profileImg} />
            </div>
            <div className="letter-box">
              <div className="user-name">{nickName}히히낙낙</div>
              <div className="date">11월 4일</div>
              <div className="delete-btn">X</div>
            </div>
          </div>
          <div className="letter-content-box">
            <div className="letter-content">제가 짜장면을 먹어쓴ㄴ데 맣리죠 아 짜장면먹고싶다 진짜 아 ㅂ거피 식욕아 돌아오주세요 어헝헝자살할래</div>
          </div>
        </div>
        <div className="under-box">
          <div className="img-box">
            <img src={poto} />
          </div>
            <div className="emoji-box">
              <img src={mention} className="mention-img" />
              <div className="mention-number">{mentionNum}23</div>
              <img src={heart} className="heart-img" />
              <div className="heart-number">{heartNum}231</div>
          </div>
        </div>                                                                       
    </div>
  )
}

export default Twitlist
