import React from 'react';
import './CSS/Editimg.css';

const Editimg = ({profileImg}) => {
    return (
        <div className="profile-box">
            <div className="profile-img">
                <img src={profileImg} alt=""/>
            </div>
            <div className="img-edit">프로필 사진 변경</div>
        </div>
    );
}

export default Editimg;