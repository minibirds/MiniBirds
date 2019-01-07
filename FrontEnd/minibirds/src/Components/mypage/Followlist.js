import React, { Component } from 'react'
import './followlist.css'
import ProfileImg from '../img/profile-img-default.png';
import axios from 'axios';

class Followlist extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            userNickname: '계정이 없습니다.',
            info: '자기소개가 없습니다.',
            followState: '팔로우'
        }
    }
    
    GetUserInfo = () => {
        axios.get(`http://13.59.174.126:5000/auth/signup/${this.state.id}`)
        .then((response) => {
          this.setState({
            userNickname: response.data.result.nickname,
            info: response.data.result.info
          })
        }) 
      }

    handleBtnChange = () => {
        const changeBtn = document.getElementById('follow-btn');
    
        if (changeBtn.className === 'follow-btn') {
            changeBtn.className = 'none-follow-btn';
            this.setState({
                followState: '팔로우'
            })
        } else {
            changeBtn.className = 'follow-btn';
            this.setState({
                followState: '팔로잉'
            })
        }
        
    }
    render() {
        const { followState, userNickname, info } = this.state;
        const {
            handleBtnChange
        } = this;
        return (
            <React.Fragment>
                <div className="follow-content">
                    <div className="btn-box">
                        <img src={ProfileImg} alt='' className='follow-profile-img' />
                        <div className="user-name-text">{userNickname}</div>
                    <div className="follow-btn" id="follow-btn" onClick={handleBtnChange}>{followState}</div>
                </div>
                <div className="text-content">
                    <div className="user-intro">{info}</div>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Followlist;