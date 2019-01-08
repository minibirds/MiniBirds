import React, { Component } from 'react';
import editimg from '../img/edit-img.png';
import './profile.css';
import MyProfileImg from '../img/profile-img-default.png';
import {Link} from 'react-router-dom';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
            profileImg: MyProfileImg,
            nickName: this.props.nickname,
            userID: this.props.id,
            info: this.props.intro,
        }
    }

    render() {
        const { profileImg, nickName, userID, info } = this.state
        return (
            <div>
                <div className="detail-profile">
                    <img className="my-profile-img" src={profileImg} alt=''/>
                    <div className="text-box">
                        <div className="nick-name">{nickName}</div>
                        <div className="user-id">{userID}</div>
                        <div className="info">{info}</div>
                        <Link to='/edit' className="info-modify-btn">
                            <img src={editimg} alt="수정" className="edit-img" />
                            <span className="edit-letter">프로필 수정하기</span>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
