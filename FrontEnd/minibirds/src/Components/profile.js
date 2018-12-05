import React from 'react';
import editimg from './img/edit-img.png';
import './CSS/profile.css';

const Profile = ({id, name, img, edit, following, follower, twitList}) => {
    return (
        <div className="main-profile">
            <div className="big-box">
                <div className="small-box">
                    <img src={img} />
                </div>
            </div>
            <div className="text-box">
                <div className="nick-name">히히낙낙</div>
                <div className="user-id">@dsasds</div>
                <div className="info">퉤ㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔㅔ</div>
                <div className="edit-btn">
                    <img src={editimg} alt="수정" className="edit-img" />
                    <div className="edit-letter">프로필 수정하기</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;