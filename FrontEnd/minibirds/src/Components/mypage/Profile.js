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
        const {id, nickname, intro} = this.props;
        return (
            <div>
                <div className="detail-profile">
                    <img className="my-profile-img" src={MyProfileImg} alt=''/>
                    <div className="text-box">
                        <div className="nick-name">{nickname}</div>
                        <div className="user-id">@{id}</div>
                        <div className="info">{intro}</div>
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
