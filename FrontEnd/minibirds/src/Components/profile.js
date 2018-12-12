import React from 'react';
import editimg from './img/edit-img.png';
import './CSS/profile.css';

const Profile = ({id, name, profileImg, edit, following, follower, twitList, info}) => {
    return (
        <div>
            <div className="main-profile">
                <div className="big-box">
                    <div className="small-box">
                        <img src={profileImg} />
                    </div>
                </div>
                <div className="text-box">
                    <div className="nick-name">{name}히히낙낙</div>
                    <div className="user-id">{id}@dsasds</div>
                    <div className="info">{info}퉤ㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔ</div>
                    <div className="edit-btn">
                        <img src={editimg} alt="수정" className="edit-img" />
                        <div className="edit-letter">프로필 수정하기</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;