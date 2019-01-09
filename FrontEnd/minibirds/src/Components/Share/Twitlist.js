import React, { Component } from 'react'
import './Twitlist.css';
import mention from '../img/speech-bubble.png';
import heart from '../img/heart.png';
import like from '../img/like.png';

class TwitList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: this.props.postId,
      userNickname: this.props.userNickname,
      content: this.props.content,
      img: this.props.img,
      created_At: this.props.created_At,
      userImg: this.props.userImg,
      mentionNum: 0,
      heartNum: 0
    }
  }

  //마음을 누를 시 마음이 채워지고 비워지게 하는 토글 함수
  ChangeHeartImg = () => {
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
  
  //트윗을 없앨 수 있게 하는 함수
  DeleteTwitList = () => {
    const TwitList = document.getElementById('twit-content');
  
    if (TwitList.className === 'twit-content') {
      TwitList.className = 'twit-content-del';
    }

  }

  render() {
    //자신의 트윗만 제거할 수 있게 하는 코드
    let deleteClassName = "delete-btn";
    if(this.state.id != this.state.postId)
    {
      deleteClassName += "hidden";
    }

    const { content, img, created_At, mentionNum, userNickname, userImg, heartNum } = this.state
    const {
      ChangeHeartImg,
      DeleteTwitList
    } = this;
    
    return (
      <div className="twit-content" id="twit-content">
          <div className="above-box">
            <div className="content-box">
              <img className="twit-profile-img" src={userImg} alt=''/>
              <div className="letter-box">
                <div className="user-name">{userNickname}</div>
                <span className="date">{created_At}</span>
                <span className="delete-btn" onClick={() => DeleteTwitList()}>X</span>
              </div>
            </div>
            <div className="letter-content-box">
              <span className="letter-content">{content}</span>
            </div>
          </div>
          <div className="under-box">
            <div className="twit-img">
              <img src={img} alt=''/>
            </div>
              <div className="emoji-box">
                <img src={mention} className="mention-img" alt='' />
                <div className="mention-number">{mentionNum}</div>
                <img src={heart} className="heart-img" id="heart-img" onClick={()=>ChangeHeartImg()} alt='' />
                <div className="heart-number">{heartNum}</div>
            </div>
          </div>                                                                       
      </div>
    );
  }
}

export default TwitList;