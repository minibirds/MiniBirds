import React from 'react'
import './Twitlist.css';
import mention from '../img/speech-bubble.png';
import heart from '../img/heart.png';
import like from '../img/like.png';
import TwitProfileImg from '../img/profile-img-default.png';

const ChangeHeartImg = () => {
  const HeartStatus = document.getElementById("heart-img");
  if (HeartStatus.className === "heart-img") {
    HeartStatus.src = like;
    HeartStatus.className= 'like-img';
  }
  else {
    HeartStatus.src = heart;
    HeartStatus.className = 'heart-img';
  }
}

const Twitlist = ({profileImg, date, nickName, poto, content, mentionNum, heartNum}) => {
  return (
    <div className="twit-content">
        <div className="above-box">
          <div className="content-box">
            <img className="twit-profile-img" src={TwitProfileImg} alt=''/>
            <div className="letter-box">
              <div className="user-name">{nickName}히히낙낙</div>
              <span className="date">{date}11월 4일</span>
              <span className="delete-btn">X</span>
            </div>
          </div>
          <div className="letter-content-box">
            <span className="letter-content">{content}제가 짜장면을 먹어쓴ㄴ데 맣리죠 아 짜장면먹고싶다 진짜 아 ㅂ거피 식욕아 돌아오주세요 어헝헝자살할래</span>
          </div>
        </div>
        <div className="under-box">
          <div className="twit-img">
            <img src={poto} alt=''/>
          </div>
            <div className="emoji-box">
              <img src={mention} className="mention-img" alt='' />
              <div className="mention-number">{mentionNum}23</div>
              <img src={heart} className="heart-img" id="heart-img" onClick={()=>ChangeHeartImg()} alt='' />
              <div className="heart-number">{heartNum}231</div>
          </div>
        </div>                                                                       
    </div>
  )
}

export default Twitlist;