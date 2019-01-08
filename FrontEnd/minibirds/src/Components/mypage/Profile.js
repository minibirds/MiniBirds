import React, { Component } from 'react';
import editimg from '../img/edit-img.png';
import './profile.css';
import MyProfileImg from '../img/profile-img-default.png';
import axios from 'axios';
import base_url from '../../base_url';
import {Link} from 'react-router-dom';

class Profile extends Component {

    componentDidMount() {
        this.GetLoginUserInfo();
    }

    constructor() {
        super();
        this.state = {
            id: '',
            password: '',
            profileImg: MyProfileImg,
            nickName: '계정이 없습니다.',
            userID: '@NULL',
            info: '자기소개가 없습니다. 자신을 다른 사람들에게 소개해보세요.',
        }
    }

    GetLoginUserInfo = () => {
        axios.post(`${base_url}/auth/signIn`)
        .then((response) => {
            this.setState({
                userID: response.data.id,
                nickName: response.data.nickName,
                info: response.data.intro
            });
        });
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
