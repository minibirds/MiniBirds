import React from 'react';
import editimg from '../img/edit-img.png';
import './profile.css';
import MyProfileImg from '../img/profile-img-default.png';

const Profile = ({id, name, profileImg, info, Tapba}) => {
    return (
        <div>
            <div className="detail-profile">
                <img className="my-profile-img" src={MyProfileImg} alt=''/>
                <div className="text-box">
                    <div className="nick-name">{name}히히낙낙</div>
                    <div className="user-id">{id}@dsasds</div>
                    <div className="info">{info}퉤ㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔ</div>
                    <div className="info-modify-btn">
                        <img src={editimg} alt="수정" className="edit-img" />
                        <span className="edit-letter">프로필 수정하기</span>
                    </div>
                </div>
            </div>
            <div>
                {Tapba}
            </div>
        </div>
    );
}

export default Profile;